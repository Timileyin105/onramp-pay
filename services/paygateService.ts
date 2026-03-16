import { CryptoPaymentRequest, CryptoPaymentResponse } from '../types';

const CRYPTO_API_BASE = 'https://api.onramp-pay.com/crypto';

const getCryptoPath = (cryptoCurrency: string): string => {
      return cryptoCurrency
            .split('/')
            .map((segment) => encodeURIComponent(segment.trim()))
            .join('/');
};

const encodeBase64 = (value: string): string => {
      if (typeof window === 'undefined' || typeof window.btoa !== 'function') {
            throw new Error('Base64 encoding is unavailable in this environment.');
      }
      return window.btoa(value);
};

const assertClient = () => {
      if (typeof window === 'undefined') {
            throw new Error('Crypto payments must be created in the browser.');
      }
};

export const paygateService = {
      createCryptoPayment: async (request: CryptoPaymentRequest): Promise<CryptoPaymentResponse> => {
            assertClient();

            try {
                  const cryptoPath = getCryptoPath(request.cryptoCurrency);
                  const convertUrl = `${CRYPTO_API_BASE}/${cryptoPath}/convert.php?from=${encodeURIComponent(request.fiatCurrency)}&value=${encodeURIComponent(String(request.amount))}`;
                  const convertResponse = await fetch(convertUrl);

                  if (!convertResponse.ok) {
                        throw new Error(`Convert API error: ${convertResponse.status}`);
                  }

                  const convertData = await convertResponse.json();
                  if (convertData.status !== 'success' || !convertData.value_coin) {
                        throw new Error(convertData.message || 'Failed to convert fiat amount to crypto amount.');
                  }

                  const customId = `${Date.now()}_${Math.floor(Math.random() * 10000000)}`;
                  const callbackUrl = `https://onramp-pay.com/payment-link/invoice.php?payment=${customId}`;
                  const walletUrl = `${CRYPTO_API_BASE}/${cryptoPath}/wallet.php?address=${encodeURIComponent(request.payoutAddress)}&callback=${encodeURIComponent(callbackUrl)}`;
                  const walletResponse = await fetch(walletUrl);

                  if (!walletResponse.ok) {
                        throw new Error(`Wallet API error: ${walletResponse.status}`);
                  }

                  const walletData = await walletResponse.json();
                  if (!walletData.address_in) {
                        throw new Error(walletData.message || 'Failed to create unique wallet address.');
                  }

                  const payload = {
                        id: walletData.address_in,
                        addressIn: walletData.address_in,
                        coinAmount: String(convertData.value_coin),
                        fiatAmount: request.amount,
                        fiatCurrency: request.fiatCurrency,
                        cryptoCurrency: request.cryptoCurrency,
                  };

                  const encodedPayload = encodeBase64(JSON.stringify(payload));
                  const paymentUrl = `${window.location.origin}${window.location.pathname}?cryptoPayment=${encodeURIComponent(encodedPayload)}`;

                  return {
                        id: walletData.address_in,
                        fiatAmount: request.amount,
                        fiatCurrency: request.fiatCurrency,
                        cryptoCurrency: request.cryptoCurrency,
                        coinAmount: String(convertData.value_coin),
                        exchangeRate: String(convertData.exchange_rate || ''),
                        addressIn: walletData.address_in,
                        callbackUrl: walletData.callback_url || callbackUrl,
                        paymentUrl,
                        createdAt: new Date().toISOString(),
                  };
            } catch (error) {
                  console.error('Crypto payment creation failed:', error);
                  throw error;
            }
      },

      getCryptoQrCode: async (cryptoCurrency: string, addressIn: string): Promise<string> => {
            try {
                  const cryptoPath = getCryptoPath(cryptoCurrency);
                  const qrUrl = `${CRYPTO_API_BASE}/${cryptoPath}/qrcode.php?address=${encodeURIComponent(addressIn)}`;
                  const qrResponse = await fetch(qrUrl);

                  if (!qrResponse.ok) {
                        throw new Error(`QR API error: ${qrResponse.status}`);
                  }

                  const qrData = await qrResponse.json();
                  if (qrData.status !== 'success' || !qrData.qr_code) {
                        throw new Error(qrData.message || 'Failed to generate QR code.');
                  }

                  return String(qrData.qr_code);
            } catch (error) {
                  console.error('QR generation failed:', error);
                  throw error;
            }
      },
};

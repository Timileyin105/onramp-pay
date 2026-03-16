import React from 'react';

const prohibitedCountries = [
      'Afghanistan',
      'Albania',
      'Belarus',
      'Bosnia',
      'Bosnia and Herzegovina',
      'Burma',
      'Myanmar',
      'Central African Republic',
      'Croatia',
      'Democratic Republic of Congo',
      'Cuba',
      'Ethiopia',
      'Iran',
      'Islamic Republic of Iran',
      'Iraq',
      'North Korea',
      'Democratic Peoples Republic of Korea',
      'Lebanon',
      'Libya',
      'Mali',
      'Nicaragua',
      'Palestine',
      'Russia',
      'Russian Federation',
      'Saudi Arabia',
      'Serbia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syrian Arab Republic',
      'Syria',
      'Turkey',
      'Ukraine',
      'Venezuela',
      'Yemen',
      'Zimbabwe',
];

const VirtualCardPoliciesPage: React.FC = () => {
      return (
            <div className="min-h-screen py-12 px-6 bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-50">
                  <div className="max-w-5xl mx-auto">
                        <div className="bg-white/90 backdrop-blur rounded-3xl border border-slate-200/80 shadow-xl p-8 md:p-12">
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 text-center">
                                    Virtual Card Policies
                              </h1>
                              <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto">
                                    Virtual Credit Cards Information
                                    <br />
                                    Know the rules before funding and redeeming your no-KYC virtual card. This page covers activation, usage, VPN policy, 3DS support, and availability timing.
                              </p>

                              <section className="mb-10">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Information</h2>
                                    <ul className="space-y-3 text-slate-700 list-disc list-inside">
                                          <li>All cards are available for purchase and activation without KYC. No ID check required for any card usage.</li>
                                          <li>Activation may require a valid name, email, phone number, and address.</li>
                                          <li>Attempting to redeem or activate a card from a Restricted Country will void any right to refund.</li>
                                          <li>VPN usage is not accepted by the card provider and may result in cancellation without refund.</li>
                                          <li>Cards do not support 3D Secure (3DS) authentication; some merchants may refuse these cards.</li>
                                    </ul>
                              </section>

                              <section className="mb-10">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Availability & Timing</h2>
                                    <p className="text-slate-700 leading-relaxed">
                                          Cards are usually available to redeem a few minutes after payment confirmation. During short supply or high demand, availability may take up to 48 hours.
                                    </p>
                              </section>

                              <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Prohibited Country List</h2>
                                    <p className="text-slate-600 mb-5">
                                          Orders, activation, or usage routed through the countries below are not supported and may be canceled without refund.
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                          {prohibitedCountries.map((country) => (
                                                <div key={country} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800">
                                                      {country}
                                                </div>
                                          ))}
                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
      );
};

export default VirtualCardPoliciesPage;

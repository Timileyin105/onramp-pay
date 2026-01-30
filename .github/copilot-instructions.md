# Copilot Instructions for AI Agents

## Project overview (React + TypeScript, Next.js)

- Multi-page crypto payment link generator: home (landing), create payment links, track payments, view minimum amounts info.
- UI components in `components/`, external API logic in `services/`, shared types in [types.ts](../types.ts).
- Styling uses Tailwind CSS via npm build in [app/globals.css](../app/globals.css) with PostCSS.
- Next.js App Router handles navigation: `/` (home), `/payment-generator` (create), `/track-payment` (track), `/minimum-amounts` (info), `/error-page` (error boundary).
- Root layout in [app/layout.tsx](../app/layout.tsx); page files in `app/*/page.tsx`.
- **Unused dependencies**: mongoose, bcryptjs, flutterwave, resend, jsonwebtoken (likely from template; don't remove without checking).

## Architecture & data flow

- **Page layout**: [HomePage.tsx](../components/HomePage.tsx) is a full-page marketing site with hero, features, pricing, FAQs. [PaymentGeneratorPage.tsx](../components/PaymentGeneratorPage.tsx), [TrackPaymentPage.tsx](../components/TrackPaymentPage.tsx), and [MinimumAmountsPage.tsx](../components/MinimumAmountsPage.tsx) are wrapper pages that mount form components; [app/layout.tsx](../app/layout.tsx) handles routing, error display, and shared layout (header, footer).
- **Create flow**: [PaymentForm.tsx](../components/PaymentForm.tsx) renders form with uncontrolled inputs (useState) → on submit calls `onramppayService.createPayment` → passes `PaymentResponse` to parent via `onSuccess` callback → parent displays shareable link (typically in [PaymentGeneratorPage.tsx](../components/PaymentGeneratorPage.tsx)).
- **Payment URL construction**: `onramppayService.createPayment` fetches wallet callback address from `wallet.php`, then builds checkout URL based on `provider` choice (hosted → `pay.php`, others → `process-payment.php`). See [services/onramppayService.ts](../services/onramppayService.ts).
- **Track flow**: [PaymentTracker.tsx](../components/PaymentTracker.tsx) takes payment ID input → opens external URL `https://api.onramp-pay.com/control/track.php?address={id}` in new tab; does NOT use service layer.
- **Error handling**: Errors from `onError` callback navigate to `/error-page` route with query param. [app/error-page/page.tsx](../app/error-page/page.tsx) reads searchParams and displays [ErrorPage.tsx](../components/ErrorPage.tsx) with message.
- **Optional AI**: [geminiService.ts](../services/geminiService.ts) wraps @google/genai for description suggestions; UI hookup is currently commented out (`handleSuggestDescription` in [PaymentForm.tsx](../components/PaymentForm.tsx)).

## Developer workflows

- **Install**: `npm install`
- **Dev server**: `npm run dev` (runs on port 3000)
- **Build**: `npm run build`
- **Start**: `npm start` (production mode)
- **Environment**: Create `.env.local` with `GEMINI_API_KEY` (Next.js automatically reads `.env.local`). Example: `GEMINI_API_KEY=sk-xxxxx`

## Project-specific conventions

- **Service layer pattern**: All API calls MUST live in `services/` modules that export objects with methods (e.g., `onramppayService.createPayment`). Components never fetch directly.
- **Type safety**: Every API request/response uses types from [types.ts](../types.ts): `PaymentRequest`, `PaymentResponse`, `PaymentDetails`, `PaymentStatus` enum.
- **Provider/currency sync**: When adding providers, update BOTH the `providers` array in [PaymentForm.tsx](../components/PaymentForm.tsx) AND the `PaymentProvider` union type in [types.ts](../types.ts). Same for `Currency` type.
- **Form patterns**: [PaymentForm.tsx](../components/PaymentForm.tsx) uses uncontrolled inputs with `useState`. Installed dependencies include `react-hook-form` and `zod` but are currently unused; if refactoring to controlled forms, integrate those libraries for robust validation.
- **Styling conventions**: Use exact class patterns from existing components:
  - Input fields: `"w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500..."`
  - Labels: `"text-sm font-semibold text-slate-700 block mb-1.5"`
  - Buttons: `"bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all"`
- **Error surfacing**: Errors from API calls surface via navigation to `/error` route (not `alert()`) and are logged to `console.error` in services.
- **State management**: [app/layout.tsx](../app/layout.tsx) holds shared layout; page components manage local form state. No global state library.
- **Responsive design**: [HomePage.tsx](../components/HomePage.tsx) demonstrates responsive grid/flex patterns (e.g., `lg:grid-cols-2`, `md:text-5xl`); use for consistency.

## Integration points

- **Onramp Pay API**: Base URL `https://onramp-pay.com/api` (unused) and `https://api.onramp-pay.com/control/` (active). Endpoints:
  - `wallet.php?address={}&callback={}` - Returns `address_in` for transaction tracking
  - Checkout URLs: `https://checkout.onramp-pay.com/pay.php` (hosted) or `/process-payment.php` (direct provider)
  - Track URL: `https://api.onramp-pay.com/control/track.php?address={id}` (opens in new tab)
- **Payment flow**: Custom ID format `${Date.now()}_${Math.floor(Math.random() * 10000000)}` used for callbacks to `invoice.php`.
- **Provider-specific minimums**: Hardcoded table in [components/MinimumAmountsPage.tsx](../components/MinimumAmountsPage.tsx) shows minimum order amounts per provider (e.g., Wert.io $1, MoonPay $20, Simplex $50).

## Examples & patterns

- **Adding a provider**:
  1. Add to `PaymentProvider` union in [types.ts](../types.ts): `| 'newprovider'`
  2. Add to `providers` array in [PaymentForm.tsx](../components/PaymentForm.tsx): `{ value: 'newprovider', label: 'New Provider' }`
  3. Update minimum amounts table in [components/MinimumAmountsPage.tsx](../components/MinimumAmountsPage.tsx) if needed
- **Adding a new service**: Create `services/newService.ts` exporting object with methods (e.g., `{ fetchData: async () => {...} }`), import in component, call via `newService.fetchData()`.
- **Page wrapper pattern**: Pages like [PaymentGeneratorPage.tsx](../components/PaymentGeneratorPage.tsx) mount form components centered on the page; pass `onSuccess`/`onError` callbacks from page component down through props.
- **Key file references**:
  - Routing & layout: [app/layout.tsx](../app/layout.tsx)
  - Type definitions: [types.ts](../types.ts)
  - API integration: [services/onramppayService.ts](../services/onramppayService.ts)
  - Home page & marketing: [components/HomePage.tsx](../components/HomePage.tsx)

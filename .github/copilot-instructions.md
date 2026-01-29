# Copilot Instructions for AI Agents

## Project overview (React + TypeScript, Vite)

- App is a single-page UI with two tabs: create payment links and track payments (see [App.tsx](../App.tsx)).
- UI lives in `components/`; external API logic lives in `services/`; shared types live in [types.ts](../types.ts).
- Styling uses Tailwind via CDN script in [index.html](../index.html); no local CSS pipeline.

## Architecture & data flow

- Create flow: [components/PaymentForm.tsx](../components/PaymentForm.tsx) builds a `PaymentRequest` and calls `onramppayService.createPayment`, then bubbles `PaymentResponse` back to `App` via `onSuccess`.
- `onramppayService.createPayment` fetches a wallet callback address and composes a checkout URL based on `provider` (see [services/onramppayService.ts](../services/onramppayService.ts)).
- Track flow: [components/PaymentTracker.tsx](../components/PaymentTracker.tsx) opens the Onramp track URL in a new tab; it does not call the service currently.
- Optional AI: [services/geminiService.ts](../services/geminiService.ts) wraps @google/genai, but the UI hookup is commented out in `PaymentForm`.

## Developer workflows

- Install: `npm install`
- Dev server: `npm run dev`
- Gemini key: README expects `.env.local` with `GEMINI_API_KEY`, but the service reads `process.env.API_KEY`; reconcile if enabling AI.

## Project-specific conventions

- Keep all API calls in `services/` and type everything with `PaymentRequest`, `PaymentResponse`, `PaymentDetails` (see [types.ts](../types.ts)).
- Provider and currency options are hardcoded for UI consistency; update both `PaymentForm` and `types.ts` when adding providers.
- Errors from API calls are surfaced via `alert()` in `PaymentForm` and `console.error` in services.

## Integration points

- Onramp Pay endpoints are encapsulated in [services/onramppayService.ts](../services/onramppayService.ts) (`wallet.php`, `checkout`, `status`).
- Tracking is a direct URL: `https://api.onramp-pay.com/control/track.php?address=...` (see [components/PaymentTracker.tsx](../components/PaymentTracker.tsx)).

## Examples

- To add a new provider, update the `providers` array in [components/PaymentForm.tsx](../components/PaymentForm.tsx) and the `PaymentProvider` union in [types.ts](../types.ts).
- To add a new external API, create a service module in `services/` and call it from a component, mirroring `onramppayService` usage.

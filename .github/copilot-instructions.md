# Copilot Instructions for AI Agents

## Project Overview

- **Purpose:** This is a React + TypeScript app for generating and tracking payment links using the Paygate API and (optionally) Gemini AI for description suggestions.
- **Major Components:**
  - `components/PaymentForm.tsx`: UI for creating payment links, integrates with `paygateService` and (optionally) `geminiService`.
  - `components/PaymentTracker.tsx`: (if present) likely for tracking payment status.
  - `components/Header.tsx`: App branding and navigation.
  - `services/paygateService.ts`: Handles Paygate API integration for payment creation and status tracking.
  - `services/geminiService.ts`: (if present) for AI-powered description suggestions.
  - `types.ts`: Centralizes TypeScript types for payments, providers, etc.

## Architecture & Data Flow

- **Form → Service → API:** User fills out the payment form, which calls `paygateService.createPayment`. The response is mapped to local types and passed to the UI.
- **Status Tracking:** Payment status is fetched via `paygateService.trackPayment`.
- **AI Integration:** (Optional) `geminiService` can suggest/refine payment descriptions.
- **Styling:** Uses Tailwind CSS (see `index.html` for CDN import).

## Developer Workflows

- **Install dependencies:** `npm install`
- **Run locally:** `npm run dev`
- **API Keys:** Set `GEMINI_API_KEY` in `.env.local` for Gemini features.
- **No custom test/build scripts** beyond Vite defaults.

## Project Conventions

- **Type Safety:** All API/service interactions use types from `types.ts`.
- **Error Handling:** API errors are caught and surfaced to the user via alerts or console logs.
- **Providers/Currencies:** Supported values are hardcoded in `PaymentForm.tsx` for clarity and UI consistency.
- **Component Structure:** Each UI feature is a separate component in `components/`.
- **Service Abstraction:** All external API logic is in `services/`.

## Integration Points

- **Paygate API:** See `paygateService.ts` for endpoint usage and response mapping.
- **Gemini AI:** (Optional) Used for description suggestions; see commented code in `PaymentForm.tsx`.

## Examples

- To add a new payment provider, update the `providers` array in `PaymentForm.tsx` and ensure `types.ts` is updated.
- To add a new API integration, create a new service in `services/` and use types from `types.ts`.

## References

- [README.md](../README.md): Basic setup and run instructions.
- [services/paygateService.ts](../services/paygateService.ts): Paygate API integration details.
- [components/PaymentForm.tsx](../components/PaymentForm.tsx): Main form logic and conventions.

---

**For AI agents:**

- Follow the established service/component/type separation.
- Use types from `types.ts` for all data models.
- Keep UI logic in `components/`, API logic in `services/`.
- Reference this file and the README for workflow and conventions.

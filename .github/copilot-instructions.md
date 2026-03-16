# Project Guidelines

## Code Style

- Keep the app in React + TypeScript with Next.js App Router.
- Prefer functional components with local state hooks.
- Keep API and third-party calls inside `services/`; UI components should not perform raw fetch calls directly.
- Reuse shared contracts from `types.ts` for request/response typing.
- Follow existing Tailwind class patterns in form-heavy UI, especially in `components/PaymentForm.tsx`.

## Architecture

- App Router pages live in `app/*/page.tsx` and primarily mount wrapper components from `components/`.
- `components/PaymentGeneratorPage.tsx` owns page-level success/error state and passes callbacks to `components/PaymentForm.tsx`.
- `services/onramppayService.ts` is the primary payment-link creation integration.
- `services/` modules export plain objects with async methods (for example, `onramppayService.createPayment`).
- Server-side purchase/webhook logic is in `app/api/purchase/route.ts` and `app/api/webhooks/route.ts`; DB and email helpers are in `lib/`.

## Build and Test

- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Production start: `npm start`
- Lint: `npm run lint`
- There is no configured automated test suite yet; do not claim tests were run unless you add and run them.

## Conventions

- Provider/currency changes must stay in sync:
- Update `PaymentProvider` and `Currency` in `types.ts`.
- Update provider/currency options in `components/PaymentForm.tsx`.
- Keep minimum-amount content aligned in `components/MinimumAmountsPage.tsx` when adding or changing providers.
- Keep the page-wrapper callback pattern: form components receive `onSuccess` and `onError` props, and wrappers decide UI/navigation behavior.
- Use `console.error` for service-level diagnostics and surface user-facing failures through the app error page flow instead of `alert()`.

## Pitfalls

- `services/geminiService.ts` reads `process.env.API_KEY`, while docs and examples often reference `GEMINI_API_KEY`; align env names before enabling AI-assisted description UX.
- `components/PaymentGeneratorPage.tsx` currently routes errors to `/error`, while the implemented page route is `/error-page`; preserve or fix intentionally.
- TypeScript is strict (`strict`, `noUnusedLocals`, `noUnusedParameters`), so unused imports/params can break checks.
- `lib/db.ts` requires `MONGODB_URI` when purchase APIs are used; local UI work may not need DB setup.

## Key Files

- `types.ts` for shared contracts and provider/currency unions.
- `components/PaymentForm.tsx` for form styling, state, and provider options.
- `components/PaymentGeneratorPage.tsx` for result handling, toasts, and error routing pattern.
- `services/onramppayService.ts` for checkout URL construction and external API behavior.
- `app/layout.tsx` and `components/Header.tsx` for global layout/navigation patterns.

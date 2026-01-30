# Onramp Pay - Crypto Payment Link Generator

Accept crypto payments with Next.js. Premium payment plugin for card-to-crypto checkout with 20+ providers.

## Run Locally

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set environment variables in `.env.local`:

   ```bash
   NEXT_PUBLIC_API_URL=https://api.onramp-pay.com
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `services/` - External API integration (onramppayService, geminiService)
- `types.ts` - Shared TypeScript type definitions
- `public/` - Static assets

## Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks
- **API Calls**: Fetch API (no proxy needed)

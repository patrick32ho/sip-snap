# SipSnap

SipSnap is a mobile-first Base Mini App game that lets players log a glass of water in one tap. It is a fast, friendly, Duolingo-like flow with a TikTok-style single-action round: tap once, move to the result screen, repeat.

## Why signature is required

SipSnap requires a one-time session signature before play to reduce spam and ensure each session is tied to a real user intent. If the signature is rejected, gameplay is blocked until the user signs.

## Session signature flow

- Uses the OnchainKit `<Signature />` component to sign:
  `"I am playing a random game on Base"`
- Signature is stored in session memory (`sessionStorage`) only.
- No signature is saved to `localStorage`.

## What is stored in localStorage

Local progress is saved client-side only under the `sipsnap:` namespace:

- `dailyGoal`
- `totalGlasses`
- `bestDay`
- `plays`
- `sipsnap:day:YYYY-MM-DD` for today's count

If `localStorage` is unavailable, SipSnap falls back to in-memory counters and shows a “Limited mode” banner.

## Run locally

```bash
npm install
npm run dev
```

Create `.env.local` from the template:

```bash
cp .env.example .env.local
```

Then set values like:

```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=YOUR_CLIENT_API_KEY
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=SipSnap
NEXT_PUBLIC_ICON_URL=https://your-domain.com/icon.png
NEXT_PUBLIC_URL=http://localhost:3000
```

## Deploy to Vercel

1. Push to GitHub and deploy the repo in Vercel.
2. Add the same environment variables in Vercel Settings → Environment Variables.
3. Ensure the public URL is accessible without auth.
4. Verify the manifest endpoint at:
   `/.well-known/farcaster.json`

## Base Mini App publish steps

1. Deploy to Vercel (production URL must be public).
2. Generate account association data:
   - Use Base Build “Account association tool”
   - Paste your domain, verify, then copy `accountAssociation`
3. Update `minikit.config.ts`:
   - Paste the `accountAssociation` fields
4. Redeploy to Vercel.
5. Validate with `base.dev/preview`.
6. Publish by posting the app URL in Base App.

## Security notes

- Never commit `.env` or `.env.local`.
- `.env.example` contains placeholders only.
- `.gitignore` includes `.env*` and `.vercel`.

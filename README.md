# AdIntelivo — marketing site + product demo

React + Vite frontend. The public demo uses illustrative sample data and does not
make live Google Ads API calls.

## Why this version exists

The Google Ads API Compliance team said the previous company website did not
contain content related to the API application. This version makes the intended
Google Ads API use case visible from the homepage, navigation, product demo,
company description, and data-usage policy.

The central distinction is explicit throughout the site:

- **Google Ads API:** first-party reporting for accounts an authenticated agency
  user is already authorized to access.
- **Competitive intelligence:** public search observations, public landing pages,
  and separately licensed market data. It is not sourced from competitors'
  private Google Ads accounts.

The Google Ads integration is described as **reporting/read-only product use**.
The site does not claim that the OAuth scope itself is read-only; it states that
AdIntelivo restricts its application behavior to reporting/read operations and
no mutate operations.

## Important routes for an API reviewer

| Route | Purpose |
|---|---|
| `/` | Homepage that immediately explains both first-party Google Ads reporting and competitive intelligence |
| `/google-ads` | Dedicated Google Ads API use-case page with connection flow, reporting mock-up, API boundary and prohibited operations |
| `/demo` | Interactive sample product, opening on an authorized Google Ads reporting view |
| `/features` | Product capabilities including Google Ads reporting |
| `/how-it-works` | Explicit Google OAuth / authorized-account step |
| `/about` | Business model and data-source separation |
| `/data-usage` | Detailed Google Ads API purpose, fields, authorization, isolation, retention and deletion |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Vercel → Add New → Project → import this repository.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy and verify these URLs manually:
   - `/`
   - `/google-ads`
   - `/demo`
   - `/data-usage`
   - `/privacy`
   - `/terms`

`vercel.json` contains the SPA rewrite for deep links.

## Before asking Google to re-review

1. Deploy this updated version to the exact company URL supplied in the Google Ads
   API application.
2. Make sure the site is publicly reachable without login.
3. Verify the navigation link **Google Ads integration** works.
4. Verify the `/google-ads`, `/demo`, `/data-usage`, and `/privacy` pages work on a
   fresh browser session.
5. Make sure `api@adintelivo.com` (or another monitored role-based address) is real
   before publishing it.
6. Make sure the description in your Google Ads API application matches the site:
   **reporting/read-only access to authorized client Google Ads accounts**.
7. If you previously described competitor intelligence as being supplied by the
   Google Ads API, correct that. Competitor data must be described as a separate
   public/licensed data source.
8. Do not claim the product creates or edits campaigns unless you actually apply
   for and implement the relevant permissible use and functionality.

The policy text should match the real production implementation before launch.
If your actual storage, deletion, security, or account-connection behavior differs,
edit those statements so the public policy remains accurate.

## Static pre-rendering for public review pages

Production builds pre-render every public marketing/compliance route into real HTML before deployment. This keeps the existing React/Vite SPA behavior in the browser while ensuring reviewers, search crawlers, and tools that do not execute JavaScript can still read the page content.

The production build now runs:

```bash
npm run build
```

which performs the normal Vite client build, creates a temporary server-render bundle, and writes pre-rendered HTML for:

- `/`
- `/features`
- `/google-ads`
- `/how-it-works`
- `/demo`
- `/pricing`
- `/about`
- `/contact`
- `/privacy`
- `/data-usage`
- `/terms`

After deployment, verify with **View Page Source** (Ctrl+U), not only DevTools/Inspect. The source for `/google-ads`, `/data-usage`, and `/privacy` should contain the visible page text inside `<div id="root">...</div>` before any JavaScript executes.

# Usage

## First Deploy

The first deploy will fail because the Turso database is not yet connected. This is expected.

1. Go to **Site configuration** in the Netlify dashboard
2. In the sidebar, select **Turso**
3. Click **Connect** to link your Turso account
4. Select an existing database or create a new one in the [Turso dashboard](https://turso.tech/app)
5. Click **Save** — this sets `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` automatically
6. Go to **Deploys**, find the failed deploy, and click **Retry deploy**

## Environment Variables

Set these in **Site configuration > Environment variables**:

- `FAIRE_AUTH_SECRET` — generate with `npx @faire-auth/cli secret`
- `FAIRE_AUTH_URL` — your Netlify site URL (e.g. `https://your-site.netlify.app`)

## Optional: OAuth Providers

To enable GitHub or Google OAuth, add these environment variables:

- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`

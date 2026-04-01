# Usage

## First Deploy

The first deploy will fail because the Turso database is not yet connected. This is expected. Do all of the following before retrying so you only redeploy once:

1. **Change the site name** — go to **Site configuration > Site name** and set it to match the `FAIRE_AUTH_URL` you entered (e.g. if you set `https://my-auth.netlify.app`, change the site name to `my-auth`)
2. **Connect Turso** — in the sidebar, select **Turso**, click **Connect** to link your Turso account, select an existing database or create a new one in the [Turso dashboard](https://turso.tech/app), then click **Save** — this sets `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` automatically
3. **Retry the deploy** — go to **Deploys**, find the failed deploy, and click **Retry deploy**

## Environment Variables

These are set during the initial deploy flow:

- `FAIRE_AUTH_SECRET` — generate with `npx @faire-auth/cli secret`
- `FAIRE_AUTH_URL` — your Netlify site URL (e.g. `https://your-site.netlify.app`)

## Optional: OAuth Providers

To enable GitHub or Google OAuth, add these environment variables in **Site configuration > Environment variables**:

- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`

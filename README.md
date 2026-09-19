# DOT Employee / Driver Portal

Domain: https://employee-dot.screenings4u.com

Portal code: `employee_dot`

This is a view-only DOT Employee / Driver portal. Access is inherited from the employee's DOT Employer account and its active Employer subscription.

Wired live backend:
- `workforce-session-context` exact portal authorization
- `workforce-employee-portal` workspace, testing, results, documents, credentials, training, policy records and notifications
- `workforce-support` Employee / Driver support routed to Employer administrators
- public system status tables

Branding:
- Direct Employer Enterprise white label is inherited by Employee / Driver users.
- C/TPA Enterprise white label is inherited when the employee belongs to a C/TPA customer Employer.
- Otherwise platform branding is used.

The portal is intentionally view-only. Company-management, service ordering, credential submission and policy-signing controls are not exposed here.

## Cloudflare Turnstile

The Employee DOT login uses the existing Cloudflare Turnstile widget site key `0x4AAAAAAE4-F43E-viFsKat`.
The login and magic-link flows pass the generated token to Supabase Auth via `captchaToken`, so server-side verification is performed by the Auth service when Turnstile protection is enabled there.

Production widget hostname must include `employee-dot.screenings4u.com`. Do not put the Turnstile secret in frontend files.

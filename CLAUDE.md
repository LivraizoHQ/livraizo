# CLAUDE.md

Guidance for Claude Code and other AI agents working in this repository.

## Project overview

Livraizo is a delivery platform monorepo built with Turborepo. It contains four Next.js applications — a customer-facing app, a delivery-person app, a staff/admin dashboard, and a marketing landing page — plus a shared UI package and shared ESLint/TypeScript configs. All apps are written in TypeScript and use Axazara's Raiton design system with Tailwind CSS.

## Tech stack

- TypeScript 5.2 (all apps and packages)
- Next.js 13.5 (`customers`, `landing`) / Next.js 14 (`delivers`, `staffs`)
- React 18
- Tailwind CSS 3.3 + Emotion (for Raiton SSR)
- Axazara Raiton design system (`raiton-atoms`, `raiton-molecules`, `raiton-styles`, `raiton-utils`, `raiton-icons`)
- @tanstack/react-query 5, SWR 2 (customers app)
- next-intl 2 (i18n, customers app)
- pnpm 8.9 workspace + Turbo pipeline

## Getting started

```bash
pnpm install

# copy env files for each app that needs one
cp apps/customers/.env.example apps/customers/.env.local  # if present
```

## Common commands

| Task | Command |
|---|---|
| Dev (all apps) | `pnpm dev` |
| Dev (single app) | `pnpm --filter customers dev` |
| Build (all) | `pnpm build` |
| Lint (check format) | `pnpm lint` |
| Format (write) | `pnpm format` |

App-specific dev ports: `customers` → 3000 (default), `delivers` → 3001, `staffs` → 3002.

## Architecture

```
apps/
  customers/   # Customer-facing Next.js app (App Router, i18n, auth)
  delivers/    # Delivery-person Next.js app (App Router)
  staffs/      # Staff/admin Next.js app (App Router, statistics, user management)
  landing/     # Marketing landing page (Next.js)
packages/
  ui/          # Shared React component stubs (card, code)
  eslint-config/      # Shared ESLint presets (next.js, react-library, library)
  typescript-config/  # Shared tsconfig bases
```

- All apps consume `@repo/ui`, `@repo/eslint-config`, and `@repo/typescript-config` via workspace references.
- `customers` and `staffs` use Next.js App Router with route groups: `(public)` for unauthenticated routes, `(private)` for authenticated ones.
- Raiton design system components are imported directly from `@axazara/raiton-*` packages rather than through `@repo/ui`.
- Turbo pipeline: `build` depends on `^build` (packages before apps); `dev` is persistent with no cache.

## Conventions

- Formatting is enforced with Prettier (`prettier --write "**/*.{ts,tsx,md}"`); `lint` scripts run Prettier in check mode, not ESLint.
- ESLint config extends `@repo/eslint-config` (which includes `eslint-config-next` and `eslint-config-prettier`).
- All apps use the Next.js App Router (no `pages/` directory).
- Shared components live in `packages/ui`; app-specific components live under each app's `src/components/` or colocated in `app/`.
- No test framework is configured — there are no test scripts in any package.json.

## Git Conventions

### 1. Branch names

Enforced regex (`branch_name_pattern`):
```
^(feature|fix|hotfix|chore|docs|refactor|test|ci|perf|build|style)/[a-z0-9._-]+$
```

- Lowercase only, kebab-case after the prefix, **max 50 characters** total.
- Use the full word `feature/` — **never** `feat/` (the short `feat` form is only for commit message types).
- Include the ticket id when relevant: `feature/AXA-123-add-stripe` (the ticket id is lowercased to satisfy the pattern — e.g. `feature/axa-123-add-stripe`).
- **Never** use a `claude/` prefix or any prefix outside the allowed set.
- `main`, `release`, `staging` are permanent protected branches — never push to them directly.
- If a branch is misnamed, rename it before pushing: `git branch -m <old> <new>`.

### 2. Commit messages
Enforced regex (`commit_message_pattern`), applied to **every** commit:
```
^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([^)]+\))?!?: .+
```
- Lowercase type, optional scope in parens, optional `!` for breaking changes, subject after `: `.
- Subject starts with a lowercase letter and has no trailing period.
- Examples: `feat(checkout): add Apple Pay support`, `fix(api): handle expired tokens`, `chore(deps): bump axios from 1.7.2 to 1.15.2`, `refactor!: drop Node 18 support`.
- Do not rewrite Dependabot commits — `chore(deps): bump X from a to b` is already enforced via `.github/dependabot.yml`.

### 3. Files that are always rejected
Never stage or commit:
- `.env`, `.env.*` (only `.env.example` and `.env.sample` are allowed), `**/.env`, `**/.env.*`
- Private keys: `**/id_rsa{,.pub}`, `**/id_dsa`, `**/id_ecdsa`, `**/id_ed25519`, `**/.ssh/id_*`
- Credentials: `**/.aws/credentials`, `**/credentials.json`, `**/service-account.json`, `**/firebase-adminsdk-*.json`, `**/secrets.{yml,yaml}`
- Extensions: `*.pem`, `*.key`, `*.p12`, `*.pfx`, `*.jks`, `*.keystore`, `*.ppk`, `*.asc`, `*.gpg`
- Any file larger than 100 MB (use git LFS)
If a secret is needed, use `.env.example` for env vars and an external secret manager for credentials.

### Pull requests targeting `main`, `release`, `staging`
All three are protected — a PR is required (direct push blocked):
- 1 approval, all conversations resolved, **squash or rebase merge only** (linear history enforced — no merge commits).
- Commits must be GPG- or SSH-signed. Signing is required for `main` (`required-signatures-main` ruleset).
- The PR **title** becomes the squash commit message and must match the commit-message regex above (enforced on all three branches).

**Required workflows run on PRs whose base is `main` only** (not `release`/`staging`): `Branch naming convention`, `PR title — Conventional Commits`, and `PR size labeler`.
If a check shows `Waiting for workflow to run` for over a minute, the third-party action is likely missing from the enterprise allowlist.

When the branch-naming or PR-title check fails, the baseline bot auto-posts rename/title suggestions, following the enforced regex patterns.
If the bot's suggestions are incorrect, edit the PR title or branch name to match the required format.

### Pre-push checklist
Before running `git push`:
1. Branch name matches the regex.
2. Every commit in `origin/main..HEAD` matches the commit pattern (`git log --format=%s origin/main..HEAD`).
3. No staged file is in the blocked paths/extensions list.
4. Commits are signed if the target is `main`.

If any check fails, fix it locally rather than letting the server reject the push.

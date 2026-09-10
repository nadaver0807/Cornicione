# AGENTS.md

Persistent memory for AI agents working on this project.
**Source of truth: the "סטנדרטים לפיתוח" document. These rules are mandatory, not suggestions.**

---

## Project Identity

- **Name**: Cornicione
- **Owner**: טבע
- **Purpose**: Marketing + ordering website for a Neapolitan pizza business
- **Architecture**: npm-workspaces monorepo — `client`, `server` and `shared` are three
  independent packages. `client` and `server` run as **separate services**.
- **Client**: Next.js 16 (App Router), React 19, TypeScript, MUI v7, Emotion (RTL cache),
  TanStack Query, react-hook-form — port **5173**
- **Server**: Express 5, TypeORM, Zod, http-status-codes — port **3000**
- **Shared**: Zod schemas, types, enums, consts — consumed as `@shared/*` **from source**
- **Language**: Hebrew-first, RTL (`lang="he" dir="rtl"`)

---

## Design Language

The entire site speaks one visual language, tied to the black Cornicione logo:

- Very dark, black/white, minimal, professional. `palette.mode = 'dark'`, background `#0A0A0A`.
- Slim UI: thin type weights (300/400), wide letter-spacing on overlines, square corners
  (`shape.borderRadius = 2`, buttons `borderRadius: 0`), hairline dividers.
- Generous whitespace. Long-form text must never feel like a wall — split into blocks with
  images, eyebrows and strong headings.
- Colors and fonts come from the theme only — never ad-hoc values.

---

## The Four Areas

The site is built from four clearly separated areas. The user must always know where they are.

| # | Area | Route | Priority |
|---|------|-------|----------|
| 1 | טייקאווי ומשלוחים | `/menu` | Functional — see the window, browse, order fast |
| 2 | מה זה Cornicione | `/about` | Brand depth — personal layer + product layer |
| 3 | Cornicione × עסקים | `/business` | Growth — show, then explain, then contact |
| 4 | אירועים פרטיים | `/private-events` | Present but least dominant |

Rules per area:

- **Menu** — images only, no video. Every item: image, name, description, price, optional
  toppings, add-to-order. Items that ran out are marked `isSoldOut`, never deleted.
  Order flow: items → toppings → takeaway/delivery → details → confirm.
- **About** — the only content-heavy page. Two layers: the person behind Cornicione, then
  the product (dough, hydration, fermentation, the cornicione, ingredients, process).
  Unrelated to Nono, business or events.
- **Business** — video is allowed here (Nono evenings). Show first, explain second,
  CTA last ("רוצים לעבוד עם Cornicione?" + form / WhatsApp).
- **Private events** — images and text only. No event types, packages, menus or prices.
  Every event is built personally after the lead comes in.

---

## Monorepo Layout

```
Cornicione/
├─ package.json                     # npm workspaces + orchestration scripts
├─ tsconfig.base.json
│
├─ shared/                          # source-only, no build step
│  ├─ consts/*.const.ts
│  ├─ enums/*.enum.ts
│  ├─ types/*.type.ts
│  ├─ util/*.util.ts
│  └─ validations/*.validation.ts
│
├─ server/                          # @cornicione/server — Express, port 3000
│  ├─ migrations/
│  └─ src/
│     ├─ <entity>/                  # Entity.entity.ts, entity.service.ts, entity.route.ts
│     ├─ middlewares/*.middleware.ts
│     ├─ config/
│     ├─ seeds/
│     ├─ app.ts
│     ├─ server.const.ts
│     └─ index.ts
│
└─ client/                          # @cornicione/client — Next.js, port 5173
   └─ src/
      ├─ app/                       # routing layer only — no logic, no API routes
      ├─ components/<feature>/<kebab-case>/
      ├─ hooks/api/                 # one hook per server request
      └─ theme/
```

### Layer rules

- `shared` → imported by both; imports from neither client nor server.
- `server` → may import `@shared/*`, **never** client code.
- `client` → may import `@shared/*`, **never** server code.
- The client talks to the server **only over HTTP** through `src/hooks/api/`.
  There are no Next.js API routes.
- `client/src/app/` is routing only: a `page.tsx` renders a component from `@components`.

### Import aliases

- Client: `@/*`, `@components/*`, `@hooks/*`, `@theme/*`, `@shared/*`
- Server: `@/*`, `@config/*`, `@middlewares/*`, `@shared/*`
- Relative traversal (`../`) across folders is forbidden (enforced by ESLint).

---

## Server layer

- One folder per standalone entity. The **service** holds all logic and data access.
  The **route** declares explicit request/response types and stays thin.
- Status codes come from `StatusCodes` (`http-status-codes`) — never hardcoded numbers.
- Bodies are validated with `validateZodSchema(schema)` using a schema from `@shared`.

## Database & Migrations

The schema is owned **exclusively** by the migrations in `server/migrations/`.
`synchronize` is `false` and must stay that way.

- **Never edit a migration that has already run** — TypeORM will not re-run it.
- **To change the schema, always add a new migration.**
- Changing an entity without a matching migration causes `column X does not exist` at runtime.
- Write `up` **and** `down`; `down` must actually reverse `up`.
- Use `IF NOT EXISTS` / `IF EXISTS` in corrective migrations.
- Schema is always qualified with `"${DB_SCHEMA}"`, read from the environment.

---

## Components

- Name in `PascalCase`, extension `.tsx`. **One folder per component**, folder in `kebab-case`.
- Props type declared **above** the component, named `ComponentNameProps`.
- Signature: `const ComponentName: FC<ComponentNameProps> = ({ ...props }) => ...` — `FC` mandatory.
- Export with `export default ComponentName`. **Max 150 lines** (enforced by ESLint).
- Extract hook-based logic into `useComponentName.ts` inside the component folder.
- Prefer `useMemo`/`useCallback`; minimize `useState`/`useEffect`.
- Use `AppLink` (client boundary wrapper around `next/link`) so server pages can link
  without becoming client components.

## Styling

- **MUI**, always. MUI components get `sx`; plain HTML tags get `style`.
- **Every component has a matching `ComponentName.style.ts`.** No styling on the tag — ever.
  This includes MUI shorthand props like `mt` / `mb` — they belong in the style object.
- Type every object: `SxProps<Theme>` for `sx`, `CSSProperties` for `style`.
- Export as one object: `const Styles = { a, b }; export default Styles;`

## Forms & Validation

- Zod schemas live in `shared/validations/` and are used by **both** `zodResolver` and the server.
- Shared field patterns come from `common.validation.ts` — never re-declare them per form.
- `react-hook-form` + `zodResolver` + `defaultValues`; wrap fields in `Controller`.
- **Never `watch`** — use `useWatch` (enforced by ESLint).
- **Never pass `useForm` methods as props** — use `useFormContext`.

## API

- Every client→server request lives in a dedicated hook in `client/src/hooks/api/`.
- All requests go through the `Api` axios instance in `api.util.ts`
  (`NEXT_PUBLIC_API_BASE_URL`, default `http://localhost:3000/api`).
- **Read** — `useGetEntity.ts`: exported `USE_GET_ENTITY_KEY`, a fetch function, and a `useQuery` hook.
- **Write** — `useSaveEntity.ts`: a request function and a `useMutation` hook that
  `invalidateQueries` for every affected key on success.

---

## Code Style

- Blank line before and after every block and before every `return`. Never two consecutive
  blank lines. No blank lines between JSX tags.
- Max line length: **100 characters**. Single quotes, semicolons, trailing commas.
- No unused files and no exports without an import elsewhere.

## Common Mistakes to Avoid

- Styling on the tag (including `mt`/`mb`) instead of in `ComponentName.style.ts`
- A component without its own folder, or a folder not in `kebab-case`
- Missing `FC` typing; named export instead of `export default`
- `watch` instead of `useWatch`; passing form methods as props
- **Editing a migration that already ran instead of adding a new one**
- **Changing an entity without a matching migration**
- Hardcoded colors/fonts instead of theme tokens
- Adding `'use client'` to a page just to make a child interactive — wrap the child instead
- Passing `next/link` into a server-rendered MUI `Box` — use `AppLink`
- Forgetting RTL — this is a Hebrew-primary application

# Cornicione

אתר תדמית והזמנות ל־Cornicione — פיצה נפוליטנית בעבודת יד.

## מבנה

מונורepo של npm workspaces עם שלוש חבילות עצמאיות:

- `shared` — טיפוסים, enums, consts וסכמות Zod. נצרך משתי החבילות האחרות דרך `@shared/*`.
- `server` — Express 5 + TypeORM, פורט **3000**.
- `client` — Next.js 16 (App Router) + MUI, RTL, פורט **5173**.

## ארבעת אזורי האתר

| # | אזור | נתיב | מטרה |
|---|------|------|------|
| 1 | טייקאווי ומשלוחים | `/menu` | פונקציונלי — תפריט והזמנה |
| 2 | מה זה Cornicione | `/about` | הרובד העמוק של המותג |
| 3 | Cornicione & More | `/business` | פופ־אפים ושיתופי פעולה |
| 4 | אירועים פרטיים | `/private-events` | אפשרות נוספת, לא דומיננטית |

## הרצה

```bash
npm install
cp server/.env.example server/.env
cp client/.env.example client/.env.local
npm run db:setup -w @cornicione/server   # מיגרציות + זריעת תפריט
npm run dev                              # שרת + קליינט במקביל
```

## סקריפטים

| פקודה | תיאור |
|-------|-------|
| `npm run dev` | שרת (3000) + קליינט (5173) |
| `npm run build` | בילד production לשתי החבילות |
| `npm run typecheck` | `tsc --noEmit` בכל החבילות |
| `npm run lint` | ESLint בכל החבילות |

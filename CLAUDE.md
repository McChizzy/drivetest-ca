# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint (next lint)
npm run start     # run production build locally
```

No test runner is configured. TypeScript and ESLint errors are currently suppressed in `next.config.mjs` (`ignoreBuildErrors: true`, `ignoreDuringBuilds: true`) — builds will succeed even with type or lint errors.

## Architecture

**Next.js 14 App Router, fully client-side data.** There is no backend, database, or API. All question data is static TypeScript in `lib/questions.ts` and all user progress is stored in `localStorage` under the key `drivingTestProgress`.

**Data flow:**
- `lib/data.ts` — province list (`Province[]`) and coverage metadata
- `lib/questions.ts` — all question banks; `getQuestionsByProvince(slug)` is the single entry point, switches on slug to province-specific getter functions or falls back to `getGenericProvinceQuestions(provinceName)`
- `lib/progress.ts` — `localStorage` read/write for `QuizProgressSession` records; used by the `/progress` and `/review` pages

**Routing:**
- `/` — province selection grid
- `/province/[slug]` — province test page; resolves province from slug, loads questions, manages `hasStarted` state to toggle between `<TestStart>` and `<Quiz>`
- `/progress` — history of past quiz sessions from localStorage
- `/review?session=<id>` — missed-question review for a specific session

**Quiz flow inside `/province/[slug]`:** Questions are shuffled via Fisher-Yates in a `useMemo` keyed on `[questions, hasStarted]`. `handleStartTest(mode)` slices to 10 for "quick" mode or uses the full shuffled set for "full". Time limits are hardcoded: 30 min for AB/SK, 20 min for everything else.

**Province coverage tiers** (affects UI banners and home page badges):
- `handbook-backed` — ON, AB, SK (dedicated getter functions with sourced questions)
- `handbook-aligned` — BC (follows ICBC handbook topics)
- `general-practice` — all other provinces (shared `getGenericProvinceQuestions` with province name interpolated)

**Components:** Province-specific pre-test info panels (`alberta-test-info.tsx`, `ontario-test-info.tsx`, etc.) are selected by slug in the province page. `components/ui/` is shadcn/ui — don't manually edit those files; regenerate with the shadcn CLI if needed.

**Theme:** `contexts/theme-context.tsx` wraps the app; dark mode toggles a `dark` class on `<html>`. Tailwind's `darkMode: 'class'` strategy is assumed.

## Adding a new province

1. Add the province entry to `lib/data.ts` with a `coverageLevel`
2. Add a getter function in `lib/questions.ts` and wire it into the `switch` in `getQuestionsByProvince`
3. Optionally add a province-specific info component in `components/` and register it by slug in `app/province/[slug]/page.tsx`
4. Add a province landscape image to `public/`

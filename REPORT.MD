# Part 4 Report

## 4.1 User goal(s)
- Student signs in to the portal, submits a self-report (wellbeing and academic progress), and reviews past reports with averages.
- Student books a meeting with their personal supervisor and later views upcoming/past meetings.
- Student signs out after completing tasks.

## 4.2 Implementation overview
- Built as a single-page interface in `web-app/index.html`, `styles.css`, and `script.js` using semantic HTML, CSS Grid/Flexbox, and vanilla ES6 JavaScript (no build step; open `index.html` directly or serve statically).
- State is held in-memory from seed data (reports/meetings) with helper renderers for each page, toast notifications, and modal confirmations.
- Colour-coded rating buttons, badge statuses, and responsive card grids deliver visual feedback and contrast-aware styling.
- Repository: https://github.com/GeorgeSpurrier/test3 (created via GitHub Classroom).

## 4.3 Implementation results (UI/UX)
- Navigation sidebar with active-state highlighting and hover affordances.
- Dashboard cards showing totals/averages and supervisor contact; colour chips and badges communicate status and metrics.
- Report submission page uses 1–5 colour-coded rating buttons with validation, confirmation state, and toasts.
- Meeting booking form validates required fields and shows confirmation; meeting list groups by status with hoverable action buttons.
- Global styling uses consistent spacing, rounded cards, focus/hover states, and readable contrast on text and backgrounds; scrolling preserves fixed sidebar for orientation.

## 4.4 Screenshot storyboard (goal flow)
1) **Login** — user enters University email and password to access the portal.  
   ![Login](https://github.com/user-attachments/assets/58b0d1bc-dbc6-4e88-bcf4-1a1bef8442db)
2) **Dashboard** — landing view with supervisor card, stats, and quick actions to submit reports or manage meetings.  
   ![Dashboard](https://github.com/user-attachments/assets/206e4fde-0f90-4f16-b218-08faec2399e5)
3) **Submit Report** — select wellbeing/progress ratings, optionally add comments, and submit; confirmation toast/card is shown. *(capture via app during demo)*  
4) **View Reports** — scrollable list of past submissions with wellbeing/progress badges and averages. *(capture via app during demo)*  
5) **Book & View Meetings** — create a meeting (date/time/agenda) then see it listed under “My Meetings” with status styling. *(capture via app during demo)*

## 4.5 Video walkthrough
- Record a 5-minute cross-platform video (e.g., MP4/WebM) demonstrating: login → dashboard overview → submit report → view reports → book meeting → view meetings at two window sizes (desktop and narrow). Narrate relevant code hooks (e.g., `renderStudentSubmitReport` rating buttons, in-memory `saveReports`/`saveMeetings`) and highlight hover/contrast behaviour. *(Please add the recorded file to the submission bundle or link it in the PR once captured.)*

## 4.6 Brief reflection (≤4 pages incl. screenshots)
- The vanilla JS SPA structure kept the flow lightweight and fast without dependencies, but it means no built-in persistence; reports/meetings reset on refresh, matching the seed-data brief.
- Colour-coded ratings and badge styles closely follow the hi-fi prototype; sliders were avoided in favour of discrete buttons to reduce accidental values and improve accessibility.
- Hover/focus affordances and ample spacing improve clarity on desktop; a responsive card grid supports narrower widths, though further optimisation for mobile could be added.
- Trade-off: without backend storage, cross-session continuity is not present; adding localStorage or an API would be the next step if persistence becomes a priority.

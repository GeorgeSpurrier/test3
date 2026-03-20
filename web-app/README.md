# Personal Supervisor System — Web Application

A standalone, desktop-focused web application built with vanilla HTML, CSS, and JavaScript, based on the [Figma Hi-Fi Prototype](https://www.figma.com/design/XkyTZIPb3u3HI2ZxCRvGWg/Personal-Supervisor-System---Hifi-Prototype).

## Quick Start

Open `web-app/index.html` directly in any modern desktop browser — no server or build step required.

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Student | george.spurrier@uni.ac.uk | pass123 |
| Student | tom.brown@uni.ac.uk | pass123 |
| Student | emma.wilson@uni.ac.uk | pass123 |
| Student | priya.sharma@uni.ac.uk | pass123 |
| Student | liam.obrien@uni.ac.uk | pass123 |
| Personal Supervisor | xinhui.ma@uni.ac.uk | pass123 |
| Personal Supervisor | emily.smith@uni.ac.uk | pass123 |
| Senior Tutor | john.whelan@uni.ac.uk | pass123 |

You can also click any demo credential row on the login page to auto-fill it.

## Features

### Student Role
- **Dashboard** — Welcome banner, stats (reports, avg wellbeing/progress, upcoming meetings), supervisor info card, quick action navigation
- **Submit Self-Report** — Rate wellbeing (1–5) and academic progress (1–5) with optional comments; colour-coded rating buttons with confirmation screen
- **View My Reports** — Full history with wellbeing/progress badges, average stats
- **Book Meeting** — Schedule a meeting with your Personal Supervisor (date, time, agenda); success confirmation
- **My Meetings** — View upcoming and past meetings grouped by status

### Personal Supervisor Role
- **Dashboard** — Stats (students, at-risk count, upcoming/total meetings), at-risk badge on navigation card
- **My Students** — Data table with per-student report counts, average wellbeing/progress, meeting counts, and status badges; prominent LOW WELLBEING ALERTS section with direct "Book Meeting" action
- **Student Details** — Dropdown to select any assigned student; shows summary stats, full report history (newest-first with colour-coded badges), meeting history, and at-risk alert banner
- **Book Meeting** — Schedule meeting with a selected student; pre-selects student when navigated from an at-risk alert
- **Manage Meetings** — View all meetings grouped as Scheduled / Past; mark as Completed or Cancel with confirmation modal

### Senior Tutor Role
- **Dashboard** — Department-wide stats (total students, at-risk, no-reports, total PS count)
- **All Students Overview** — Full department table with supervisor names, avg wellbeing/progress, meeting counts, and status badges (LOW WELLBEING, LOW PROGRESS, NO REPORTS, OK)
- **PS Interaction Summary** — Per-supervisor card showing student count, meeting stats, and at-risk student response tracking (whether a meeting was booked after a low-wellbeing report, and how many days it took)

### Shared Features
- **Toast notifications** — Success/error/info pop-ups for all key actions
- **Modal confirmations** — For destructive actions (cancel meeting, sign out)
- **LocalStorage persistence** — All new reports and meetings survive page refresh; seed data auto-populated on first visit
- **Session persistence** — Login session restored on page reload
- **Sidebar navigation** — Role-specific nav with active-page highlighting
- **Form validation** — All required fields validated before submission

## File Structure

```
web-app/
├── index.html   — Single-page HTML with all page templates
├── styles.css   — Desktop-optimised CSS (CSS variables, flexbox/grid layout)
├── script.js    — Vanilla ES6+ JavaScript (data, routing, rendering, forms)
└── README.md    — This file
```

## Technology Stack

- **HTML5** — Semantic structure, single-page layout with show/hide sections
- **CSS3** — CSS custom properties, Flexbox, CSS Grid, transitions, animations
- **JavaScript (ES6+)** — Modules pattern, LocalStorage API, DOM manipulation, event delegation
- No frameworks, no build tools, no dependencies

## Data

All seed data is taken directly from `Personal Supervisor System - Hifi Prototype/src/app/components/hifi/data.ts`:
- 8 users (5 students, 2 personal supervisors, 1 senior tutor)
- 17 self-reports with wellbeing/progress ratings and comments
- 10 meetings with statuses (Scheduled, Completed, Cancelled)

New data created during the session (reports, meetings) is saved to `localStorage` and persists across refreshes. To reset to seed data, clear `localStorage` keys: `pss_reports`, `pss_meetings`, `pss_session`.

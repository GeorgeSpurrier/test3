# Student Support Portal — Web Application

A standalone, desktop-focused web application built with vanilla HTML, CSS, and JavaScript, based on the [Figma Hi-Fi Prototype](https://www.figma.com/design/XkyTZIPb3u3HI2ZxCRvGWg/Personal-Supervisor-System---Hifi-Prototype).

## Quick Start

Open `web-app/index.html` directly in any modern desktop browser — no server or build step required. Sign in with valid student credentials provided for your environment.

## Features

### Student Role
- **Dashboard** — Welcome banner, stats (reports, avg wellbeing/progress, upcoming meetings), quick action navigation
- **Submit Self-Report** — Rate wellbeing (1–5) and academic progress (1–5) with optional comments; colour-coded rating buttons with confirmation screen
- **View My Reports** — Full history with wellbeing/progress badges, average stats
- **Book Meeting** — Schedule a meeting (date, time, agenda) with confirmation
- **My Meetings** — View upcoming and past meetings grouped by status

### Shared Features
- **Toast notifications** — Success/error/info pop-ups for all key actions
- **Modal confirmations** — For destructive actions (cancel meeting, sign out)
- **Sidebar navigation** — Nav with active-page highlighting
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
- **JavaScript (ES6+)** — Modules pattern, DOM manipulation, event delegation
- No frameworks, no build tools, no dependencies

## Data

All seed data is taken directly from the original prototype data file:
- 5 student users
- 17 self-reports with wellbeing/progress ratings and comments
- 0 initial meetings (students can add their own)

New data created during a session (reports, meetings) is held in-memory only and will reset to the seed data on page refresh.

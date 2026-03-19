# Agile Metrics

> Update after each Sprint Review.

---

## Context

Sprint 1 was a **foundation sprint** — the team focused on project setup, vision alignment, and documentation rather than feature development. Formal velocity and burndown tracking begins from Sprint 2 once story-point estimation is in place. Sprint 1 is documented below qualitatively to establish a baseline.

---

## Sprint Velocity Tracker

| Sprint | Planned Points | Completed Points | Velocity | Carry-Over | Notes |
|--------|---------------|-----------------|----------|------------|-------|
| Sprint 1 (18/02–26/02) | 28 | 26 | 26 | 2 | Foundation sprint — see breakdown below. |
| Sprint 2 | | | | | |
| Sprint 3 | | | | | |
| Sprint 4 | | | | | |
| Sprint 5 | | | | | |
| Sprint 6 | | | | | |
| Sprint 7 | | | | | |
| Sprint 8 | | | | | |

### Sprint 1 — Task Point Breakdown

> Points assigned retrospectively using a simple 1–5 scale (1 = trivial, 5 = significant effort).

| Task | Owner | Points | Status | Notes |
|------|-------|--------|--------|-------|
| Project vision doc (inc. John consultation) | George | 5 | ✓ Done | Spoke with John 18/02 to validate scope; pushed vision to repo 26/02. |
| Library photos & floor plans | George | 2 | ✗ Carry-over | Not yet pushed to repo. |
| Development roadmap & Trello project board | Jason | 5 | ✓ Done | Roadmap image + Trello board set up and pushed 26/02. |
| Unreal prototype (engine setup, environment, movement, camera, lighting) | Nick | 5 | ✓ Done | Engine project, build environment, player movement, camera system, basic lighting done (per Trello). Covers US-01, US-02, US-08. Not in repo — Unreal projects need Git LFS. |
| User stories & acceptance criteria | Billy | 3 | ✓ Done | 17 stories + Gherkin AC + traceability matrix. |
| Team alignment call (vision + stories + features) | Billy + George + Jason + Nick | 1 | ✓ Done | Combined team call 25/02 — the planned separate calls didn't happen, covered everything in one session. |
| Scrum ceremony evidence | Billy | 2 | ✓ Done | Standups, planning filled from real Discord data. |
| Agile metrics | Billy | 2 | ✓ Done | Filled in with Sprint 1 data. |
| Pre-sprint planning call (rubric review) | Billy + George + Jason + Ben | 1 | ✓ Done | 12/02 Discord call (42 min) — reviewed rubric, identified deliverables, assigned initial responsibilities. |
| Definition of done | Jason | 2 | ✓ Done | Pushed to repo 26/02 (Alpha DoD). |
| **Totals** | | **28** | **26 done / 2 carry-over** | |

**Average velocity:** 26 _(single sprint — too early for a meaningful average)_
**Total backlog points:** _To be estimated when full backlog is pointed in Sprint 2._

---

## Burndown Data

### Sprint 1 Burndown (18/02–26/02)

> Sprint 1 was 9 days. Points tracked at standup boundaries rather than daily due to async communication.

| Date | Ideal Remaining | Actual Remaining | Notes |
|------|----------------|-----------------|-------|
| 18/02 (Day 1) | 30 | 30 | Sprint started. Vision outline created, user stories begun. |
| 19/02 (Day 2) | 27 | 28 | George in York — async only. Jason researching Unity. Billy working on stories. |
| 20/02 (Day 3) | 23 | 26 | Slow progress — waiting on vision alignment. |
| 21/02 (Day 4) | 20 | 24 | Weekend — limited activity. |
| 22/02 (Day 5) | 17 | 23 | Weekend. |
| 23/02 (Day 6) | 13 | 21 | Monday — some async discussion. |
| 24/02 (Day 7) | 10 | 17 | Billy pushed user stories & traceability. |
| 25/02 (Day 8) | 6 | 14 | Combined team call — vision/stories/features alignment all done in one session. |
| 26/02 (Day 9) | 0 | 2 | George's vision + Jason's roadmap + Jason's DoD pushed. Nick's prototype task complete. Sprint closed with 2 pts carry-over (library photos). |

> **Observation:** Actual burndown lagged ideal throughout the sprint. Primary causes: (1) waiting on George's vision doc before user stories could be fully aligned, (2) limited repo pushes from some team members making progress hard to track, (3) Nick and Ben's tasks did not ship.

---

## Cumulative Flow (Release Level)

| Showcase | Stories Done | Points Done |
|----------|------------|-------------|
| Sprint 1 | 17 stories defined (US-01 scene setup, US-02 movement + camera, US-08 basic lighting implemented) | 26 (task-level) |
| Alpha | | |
| Beta | | |
| Live | | |

---

## Code Review Log

| PR # | Author | Reviewer(s) | Date | Stories | Notes |
|------|--------|-------------|------|---------|-------|
| — | — | — | — | — | No code PRs in Sprint 1 — all work was documentation and project setup. Code reviews will begin once prototype development starts in Sprint 2. |

## Pair Programming Log

| Date | Pair | Duration | Topic |
|------|------|----------|-------|
| — | — | — | No pair programming in Sprint 1 — sprint focused on documentation and project setup. Pair programming will begin once collaborative coding starts in Sprint 2. |

## Individual Contributions — Sprint 1

| Team Member | Tasks Completed | Points Delivered | Notes |
|-------------|----------------|-----------------|-------|
| **George** | Vision doc (inc. John consultation), alignment call, pre-sprint call | 7 | Vision pushed 26/02. Library photos still pending (2 pts carry-over). |
| **Jason** | Roadmap, Trello board setup, DoD, alignment call, pre-sprint call | 9 | Roadmap + board screenshot pushed 26/02. DoD pushed 26/02. |
| **Billy** | User stories, AC, traceability, scrum evidence, agile metrics, alignment call, pre-sprint call | 9 | Agile metrics was extra (not originally assigned). |
| **Nick** | Engine project, build environment, player movement, camera system, basic lighting (US-01, US-02, US-08), alignment call | 6 | Visible on Trello. Not in repo — needs Git LFS (Sprint 2 action). |
| **Ben** | Pre-sprint call | 1 | Attended 12/02 planning call. No other tasks completed. |

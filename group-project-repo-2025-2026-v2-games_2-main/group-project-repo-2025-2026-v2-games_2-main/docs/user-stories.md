# User Stories — Uni Night Shift

## Context

**Project:** Uni Night Shift — a light horror-comedy onboarding game set in the University of Hull library.

**Core user frustrations addressed:**

| ID | Frustration |
|----|-------------|
| F-1 | Students don't know how to navigate the library (floors, zones, key facilities). |
| F-2 | Some students are anxious or scared to ask what they're supposed to do. |
| F-3 | Current onboarding is a static "Welcome to the library" document — not engaging enough to be remembered. |

**Why a game?** A playable experience lets students learn-by-doing in a low-pressure, humorous setting. Mistakes have no real consequences, and the tone stays inclusive throughout.

---

## Personas

| Persona | Description |
|---------|-------------|
| **New Student** | First-year undergraduate arriving at Hull; has never been inside the library. |
| **Anxious Student** | Finds it stressful to ask staff for help; prefers self-guided discovery. |
| **Returning Student** | Second- or third-year who broadly knows the building but hasn't used every service. |
| **International Student** | May face language or cultural barriers; benefits from clear visual cues and simple instructions. |
| **Staff Member** | Library staff who want students to feel welcome and find resources independently. |

---

## Stories

### US-01 — First-time library arrival
**As a** new student,
**I want** to see a short, atmospheric intro scene that sets the "night shift" premise,
**so that** I understand the game's context before I start exploring.

- **Priority:** Must
- **Note:** The intro uses the "locked out due to opening hours" concept as a harmless narrative hook — the player simply clicks **Start Shift** to begin. No real waiting or punishment.

---

### US-02 — Basic movement & camera
**As a** new student,
**I want** to move my character around the 3D library environment with intuitive controls,
**so that** I can explore freely without struggling with the interface.

- **Priority:** Must
- **Note:** WASD + mouse-look (or controller). Accessibility note: sensitivity slider in settings.

---

### US-03 — Floor & zone signage
**As a** new student,
**I want** to see clear in-game signage indicating floors, zones, and key areas (silent study, group study, PCs, help desk),
**so that** I learn the real library layout while playing.

- **Priority:** Must
- **Note:** Signs should mirror actual University of Hull library labelling where possible.

---

### US-04 — Objective / task list UI
**As an** anxious student,
**I want** a visible on-screen task list telling me what to do next,
**so that** I never feel lost or unsure of my goal.

- **Priority:** Must
- **Note:** Tasks appear one-at-a-time or as a short checklist; completing one reveals the next.

---

### US-05 — Contextual hint system
**As an** anxious student,
**I want** optional on-screen hints that appear if I'm idle or seem stuck,
**so that** I can get help without having to ask anyone.

- **Priority:** Must
- **Note:** Hints should be non-intrusive (e.g., a gentle prompt after 30 seconds of inactivity). Player can dismiss or disable them.

---

### US-06 — Interactive self-service terminals
**As a** new student,
**I want** to interact with in-game self-service machines (e.g., book check-out kiosk, print station),
**so that** I learn how these facilities work before I encounter them in real life.

- **Priority:** Should
- **Note:** Simple interaction: walk up → press interact key → short animation/UI overlay showing steps.

---

### US-07 — Help desk discovery
**As an** anxious student,
**I want** to locate and interact with the help desk NPC in the game,
**so that** I realise the real help desk exists and feel less intimidated about approaching it.

- **Priority:** Should
- **Note:** NPC dialogue should be warm, brief, and humorous to reduce anxiety.

---

### US-08 — Flashlight mechanic (atmosphere)
**As a** new student,
**I want** a flashlight I can toggle on/off in the darkened library,
**so that** the experience feels atmospheric and engaging (light horror-comedy tone).

- **Priority:** Should
- **Note:** The flashlight is a mood/engagement tool, not a survival mechanic. Players are never truly in danger.

---

### US-09 — Collectible library facts
**As a** returning student,
**I want** to find optional collectible notes scattered around the library,
**so that** I learn tips and facts I might not already know (e.g., inter-library loans, silent-floor etiquette).

- **Priority:** Could
- **Note:** Each collectible is a short text popup. Completionists can find them all; casual players can ignore them.

---

### US-11 — Accessible text & language cues
**As an** international student,
**I want** all in-game text to use plain English with icons/visual cues alongside labels,
**so that** I can understand objectives and signage regardless of my English proficiency.

- **Priority:** Must
- **Note:** Icons accompany every objective and sign label. Font size ≥ 18 pt equivalent on-screen.

---

### US-12 — Completion summary screen
**As a** new student,
**I want** to see a summary at the end of my shift showing which areas I visited and tasks I completed,
**so that** I know what I've learned and what I might still explore.

- **Priority:** Must
- **Note:** Summary also serves as evidence that the game teaches real library knowledge.

---

### US-13 — Sound cues for key interactions
**As an** anxious student,
**I want** subtle audio feedback (e.g., a chime or click) when I interact with objects,
**so that** I know my action was registered without needing to read extra UI.

- **Priority:** Should
- **Note:** Keep sounds gentle and in-theme (library ambience). Provide a volume/mute option.

---

### US-14 — NPC encounters (comedy)
**As a** new student,
**I want** to encounter friendly NPCs (e.g., a dramatic librarian, a lost first-year) with short humorous dialogue,
**so that** the experience is entertaining and memorable rather than dry.

- **Priority:** Should
- **Note:** NPCs reinforce real information (e.g., "The group study pods are on Level 2 — try not to wake anyone!").

---

### US-15 — Pause & resume
**As a** returning student,
**I want** to pause the game and resume later from where I left off,
**so that** I'm not forced to complete the whole experience in one sitting.

- **Priority:** Could
- **Note:** Simple save-state; doesn't need cloud sync for the prototype.

---

### US-16 — Staff observation dashboard concept
**As a** staff member,
**I want** a concept or mock-up showing aggregated completion data (which areas students visit, common stuck points),
**so that** I can see how the game could inform library service improvements.

- **Priority:** Could
- **Note:** Prototype scope: a static mock-up or slide, not a live back-end. Demonstrates the value proposition to stakeholders.

---

### US-17 — Onboarding skip for returning players
**As a** returning student,
**I want** the option to skip the intro sequence on subsequent plays,
**so that** I can jump straight into exploring without re-watching the opening.

- **Priority:** Could
- **Note:** A "Skip Intro" button after the first completion flag is set.

---

### US-18 — Comfort settings (horror tone control)
**As an** anxious student,
**I want** a settings toggle that reduces or removes darker atmospheric effects (e.g., brighter lighting, no sudden sounds),
**so that** I can still enjoy the game without triggering discomfort.

- **Priority:** Should
- **Note:** Ensures inclusivity. Default mode is already light-horror; this toggle makes it "no-horror."

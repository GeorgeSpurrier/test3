# Traceability Matrix — Uni Night Shift

This document traces every user story back to a core user frustration, forward to concrete prototype/feature evidence, and links the relevant acceptance criteria. The **MVP** column marks the smallest vertical slice that proves the concept.

---

## Frustration Key

| ID | Frustration |
|----|-------------|
| F-1 | Students don't know how to navigate the library (floors, zones, key facilities). |
| F-2 | Some students are anxious or scared to ask what they're supposed to do. |
| F-3 | Current onboarding is a static "Welcome to the library" document — not engaging enough to be remembered. |

---

## Traceability Table

> **Prototype Evidence column:** paste a build tag, screenshot path, video link, or commit SHA once the feature is demonstrable. This makes the "stories shown through prototypes" claim verifiable by a marker.

| Frustration | User Story ID | Feature / Prototype Evidence | Prototype Proof (build tag / screenshot / video) | Acceptance Criteria Refs | MVP? |
|-------------|---------------|------------------------------|--------------------------------------------------|--------------------------|------|
| F-3 | US-01 | **"Start Shift" intro scene** — narrative hook (night shift premise) with Start Shift / Go Home buttons; cinematic or text-card sequence in Unity. | `[link / path / tag]` | AC-01.1, AC-01.2, AC-01.3 | **Y** |
| F-1 | US-02 | **First-person movement system** — WASD + mouse-look controller in Unity; sensitivity slider in settings panel. | `[link / path / tag]` | AC-02.1, AC-02.2, AC-02.3 | **Y** |
| F-1 | US-03 | **In-game signage assets** — wall/pillar signs per zone (Silent Study, Group Study, Help Desk, PCs) matching real Hull library labels; placed on each floor of the 3D environment. | `[link / path / tag]` | AC-03.1, AC-03.2 | **Y** |
| F-2 | US-04 | **Objective / task list UI panel** — upper-left HUD element showing current objective text with tick/strike-through on completion; triggers "Shift Complete" event. | `[link / path / tag]` | AC-04.1, AC-04.2, AC-04.3 | **Y** |
| F-2 | US-05 | **Contextual hint system** — idle-timer tooltip (30 s) suggesting next action; dismiss on input; disable toggle in Settings. | `[link / path / tag]` | AC-05.1, AC-05.2, AC-05.3 | **Y** |
| F-1 | US-06 | **Interactive self-service terminals** — proximity "Interact [E]" prompt; UI overlay demonstrating kiosk steps (scan card → place book → confirm). | `[link / path / tag]` | AC-06.1, AC-06.2, AC-06.3 | N |
| F-2 | US-07 | **Help desk NPC interaction** — NPC behind desk with speech-bubble indicator; 2–4 line friendly dialogue; objective auto-completes on conversation end. | `[link / path / tag]` | AC-07.1, AC-07.2, AC-07.3 | **Y** |
| F-3 | US-08 | **Flashlight toggle mechanic** — press F to toggle cone light; purely atmospheric, no survival penalty. | `[link / path / tag]` | AC-08.1, AC-08.2 | N |
| F-1, F-3 | US-09 | **Collectible library-fact notes** — interactable pickups; popup with fact text; counter in UI (X/N found); fully optional. | `[link / path / tag]` | AC-09.1, AC-09.2, AC-09.3 | N |
| F-1 | US-10 | **Mini-map / floor plan overlay** — press M to toggle; semi-transparent floor plan with real-time player marker. | `[link / path / tag]` | AC-10.1, AC-10.2 | N |
| F-2 | US-11 | **Accessible text & icons** — icon beside every objective; ≥ 18 pt font at 1080p; ≥ 4.5:1 contrast ratio; plain English throughout. | `[link / path / tag]` | AC-11.1, AC-11.2, AC-11.3 | **Y** |
| F-3 | US-12 | **Completion summary screen** — end-of-shift screen listing objective statuses (✓/✗), zones visited, collectibles found. | `[link / path / tag]` | AC-12.1, AC-12.2, AC-12.3 | **Y** |
| F-2 | US-13 | **Audio interaction cues** — chime/click on object interaction; SFX volume slider and mute toggle in Settings. | `[link / path / tag]` | AC-13.1, AC-13.2 | N |
| F-3 | US-14 | **NPC comedy encounters** — ≥ 2 unique NPCs in different zones; humorous dialogue embedding real library information. | `[link / path / tag]` | AC-14.1, AC-14.2, AC-14.3 | N |
| F-3 | US-15 | **Pause & resume system** — Escape to pause; save state on quit; Continue from main menu restores position/progress. | `[link / path / tag]` | AC-15.1, AC-15.2 | N |
| F-1 | US-16 | **Staff dashboard mock-up** — static concept screen showing aggregated data (zone visit frequency, stuck points, completion times). No live back-end. | `[link / path / tag]` | AC-16.1, AC-16.2 | N |
| F-3 | US-17 | **Skip-intro for returning players** — "Skip Intro" button shown after first completion flag; jumps to library interior. | `[link / path / tag]` | AC-17.1, AC-17.2 | N |
| F-2 | US-18 | **Comfort mode toggle** — Settings toggle increasing lighting, removing sudden sounds, disabling flickering. Default mode already light-hearted. | `[link / path / tag]` | AC-18.1, AC-18.2 | N |

---

## MVP Summary

The MVP vertical slice includes **8 stories** that together prove the core concept — a playable, guided walkthrough of the library:

| MVP Story | What it proves |
|-----------|---------------|
| US-01 | The game has a compelling entry point (narrative hook, no punishment). |
| US-02 | The player can move through a 3D library environment. |
| US-03 | Real library signage is learned through exploration. |
| US-04 | Players always know what to do next (task list). |
| US-05 | Anxious players get automatic, gentle help. |
| US-07 | The help desk is discovered in-game, reducing real-life anxiety. |
| US-11 | All text is accessible and icon-supported. |
| US-12 | The player sees a summary of what they learned. |

Everything else enriches the experience but is not required to demonstrate that a game-based onboarding approach works.

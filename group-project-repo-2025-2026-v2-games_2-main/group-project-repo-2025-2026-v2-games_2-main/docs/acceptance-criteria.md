# Acceptance Criteria — Uni Night Shift

All criteria use **Gherkin** format (Given / When / Then) and are designed to be demonstrable in a Unity prototype.

---

## US-01 — First-time library arrival

### AC-01.1 — Intro scene loads on first launch
**Given** the player launches the game for the first time,
**When** the main menu "New Game" option is selected,
**Then** a short cinematic/text intro plays establishing the "night shift" premise (≤ 60 seconds).

### AC-01.2 — Start Shift button ends intro
**Given** the intro scene is displaying,
**When** the player clicks the **Start Shift** button,
**Then** the game transitions to the library interior and the player gains movement control within 3 seconds.

### AC-01.3 — No real-time waiting
**Given** the intro references "locked out due to opening hours,"
**When** the narrative moment is reached,
**Then** no real timer or wait mechanic is imposed — the player can proceed immediately via the **Start Shift** / **Go Home** buttons.

---

## US-02 — Basic movement & camera

### AC-02.1 — WASD movement
**Given** the player is in the library environment,
**When** the player presses W, A, S, or D,
**Then** the character moves forward, left, backward, or right respectively at a consistent walk speed.

### AC-02.2 — Mouse-look camera
**Given** the player is in the library environment,
**When** the player moves the mouse,
**Then** the camera rotates to follow the mouse direction smoothly without visible jitter.

### AC-02.3 — Sensitivity setting
**Given** the player opens the Settings menu,
**When** the player adjusts the mouse sensitivity slider,
**Then** camera rotation speed updates in real-time to match the new value.

---

## US-03 — Floor & zone signage

### AC-03.1 — Signs visible on each floor
**Given** the player is on any library floor,
**When** the player looks at wall/pillar signage,
**Then** at least one sign per zone is legible from ≥ 3 metres (in-game distance) and displays the zone name (e.g., "Silent Study," "Group Study," "Help Desk").

### AC-03.2 — Signs match real library labelling
**Given** the game contains signage assets,
**When** compared to University of Hull library signage,
**Then** zone names and floor numbers correspond to actual library layout (verified by reference photos in the design doc).

---

## US-04 — Objective / task list UI

### AC-04.1 — Task list appears on screen
**Given** the player has started a shift,
**When** the first objective is triggered,
**Then** a task list panel appears in the upper-left corner showing the current objective text.

### AC-04.2 — Task completion updates list
**Given** the task list is visible with an active objective,
**When** the player completes that objective,
**Then** the objective is struck through or ticked, and the next objective (if any) is highlighted within 1 second.

### AC-04.3 — All objectives completable
**Given** the full set of objectives for the shift,
**When** the player completes every objective,
**Then** a "Shift Complete" message is displayed and the game transitions to the summary screen (US-12).

---

## US-05 — Contextual hint system

### AC-05.1 — Idle hint trigger
**Given** the player has an active objective,
**When** the player remains idle (no input) for 30 seconds,
**Then** a hint tooltip appears on-screen suggesting the next action (e.g., "Try heading to Level 1 — look for the Help Desk sign.").

### AC-05.2 — Hint dismissal
**Given** a hint tooltip is visible,
**When** the player presses any movement key or clicks "Dismiss,"
**Then** the tooltip fades out within 0.5 seconds.

### AC-05.3 — Hints can be disabled
**Given** the player opens the Settings menu,
**When** the player toggles "Hints" to Off,
**Then** no idle-based hint tooltips appear during gameplay.

---

## US-06 — Interactive self-service terminals

### AC-06.1 — Interact prompt appears
**Given** the player is within 2 metres of a self-service terminal (e.g., book kiosk),
**When** the player faces the terminal,
**Then** an "Interact [E]" prompt appears on-screen.

### AC-06.2 — Interaction UI overlay
**Given** the interact prompt is visible,
**When** the player presses E,
**Then** a UI overlay or short animation demonstrates the terminal's usage (e.g., "Scan your card → Place book → Confirm").

### AC-06.3 — Objective marked on interaction
**Given** interacting with the terminal is an active objective,
**When** the player completes the interaction sequence,
**Then** the related objective in the task list is marked as complete.

---

## US-07 — Help desk discovery

### AC-07.1 — Help desk NPC visible
**Given** the player is on the floor containing the help desk,
**When** the help desk area is in the player's line of sight,
**Then** an NPC character is visible behind the desk with an interaction indicator (e.g., speech-bubble icon).

### AC-07.2 — NPC dialogue plays
**Given** the player is within 2 metres of the help desk NPC,
**When** the player presses Interact [E],
**Then** a dialogue box appears with 2–4 lines of friendly, humorous text (e.g., "Need a hand? That's literally my whole job.").

### AC-07.3 — Objective completion via dialogue
**Given** "Find the help desk" is an active objective,
**When** the player completes the NPC dialogue,
**Then** that objective is marked complete in the task list.

---

## US-08 — Flashlight mechanic

### AC-08.1 — Flashlight toggle
**Given** the player is in the library environment,
**When** the player presses F,
**Then** the flashlight toggles on (cone of light visible) or off.

### AC-08.2 — No survival penalty
**Given** the flashlight is off,
**When** the player continues to explore in the dark,
**Then** no damage, timer, or negative consequence is applied — movement and interactions remain fully functional.

---

## US-09 — Collectible library facts

### AC-09.1 — Collectible pickup
**Given** the player walks over or interacts with a collectible note,
**When** the interaction is triggered,
**Then** a popup displays the fact text (e.g., "Did you know? You can request books from other universities via inter-library loan.").

### AC-09.2 — Collectible counter
**Given** the player has collected one or more notes,
**When** the player checks the task list or pause menu,
**Then** a counter shows "X / N collectibles found."

### AC-09.3 — Collectibles are optional
**Given** the player ignores all collectibles,
**When** the player completes all main objectives,
**Then** the shift still ends successfully and the summary screen is shown.

---

## US-11 — Accessible text & language cues

### AC-11.1 — Icon accompanies every objective
**Given** a new objective appears in the task list,
**When** the player reads the task list entry,
**Then** an icon (e.g., magnifying glass, book, map pin) is displayed alongside the text.

### AC-11.2 — Minimum font size
**Given** any in-game UI text (objectives, hints, signage labels, dialog),
**When** displayed at default resolution (1920 × 1080),
**Then** the font renders at ≥ 18 pt equivalent and passes a contrast ratio of ≥ 4.5:1 against its background.

### AC-11.3 — Plain English
**Given** any in-game text string,
**When** reviewed against readability guidelines,
**Then** text uses plain English (no jargon without explanation) suitable for non-native speakers.

---

## US-12 — Completion summary screen

### AC-12.1 — Summary screen displays on shift end
**Given** the player has completed all main objectives,
**When** the "Shift Complete" event fires,
**Then** a summary screen appears listing each objective and its completion status (✓ / ✗).

### AC-12.2 — Areas visited
**Given** the summary screen is visible,
**When** the player reviews it,
**Then** a section lists which library zones/floors the player entered during the session.

### AC-12.3 — Collectibles summary
**Given** the summary screen is visible,
**When** collectibles were available,
**Then** the count of found vs. total collectibles is displayed (e.g., "5 / 10 facts found").

---

## US-13 — Sound cues for key interactions

### AC-13.1 — Audio on interaction
**Given** the player interacts with any interactable object (terminal, NPC, collectible),
**When** the interaction triggers,
**Then** a short audio cue (chime, click, or page-turn) plays at the current SFX volume level.

### AC-13.2 — Volume / mute control
**Given** the player opens Settings,
**When** the player adjusts the SFX volume slider or selects "Mute SFX,"
**Then** all interaction audio cues respect the new volume setting immediately.

---

## US-14 — NPC encounters (comedy)

### AC-14.1 — At least two unique NPCs
**Given** the player explores the library,
**When** the player visits different zones,
**Then** at least two distinct NPCs are encountered, each with unique dialogue.

### AC-14.2 — NPCs convey real information
**Given** the player reads NPC dialogue,
**When** dialogue is complete,
**Then** at least one factual piece of library information is communicated (e.g., location of group study pods, printing services).

### AC-14.3 — Humorous tone
**Given** NPC dialogue text,
**When** reviewed,
**Then** each NPC's dialogue contains at least one line written in a light-hearted or comedic tone consistent with the "horror-comedy" theme.

---

## US-15 — Pause & resume

### AC-15.1 — Pause menu
**Given** the player is in-game,
**When** the player presses Escape,
**Then** the game pauses (time stops, input is blocked behind the menu), and a pause menu appears with Resume / Settings / Quit options.

### AC-15.2 — Resume from save
**Given** the player has previously quit mid-session,
**When** the player selects "Continue" from the main menu,
**Then** the game loads the last saved state (player position, completed objectives, collected items).

---

## US-16 — Staff observation dashboard concept

### AC-16.1 — Mock-up exists
**Given** the project deliverables,
**When** the dashboard concept is reviewed,
**Then** a static mock-up (image, slide, or in-engine screen) shows example aggregated data: zones visited frequency, average completion time, common stuck points.

### AC-16.2 — No live back-end required
**Given** the prototype scope,
**When** the dashboard mock-up is evaluated,
**Then** it is presented as a concept only — no server, database, or real-time data pipeline is implemented.

---

## US-17 — Onboarding skip for returning players

### AC-17.1 — Skip intro available after first completion
**Given** the player has completed the game at least once (completion flag set),
**When** the player starts a new game,
**Then** a "Skip Intro" button is visible during the intro sequence.

### AC-17.2 — Skip transitions to gameplay
**Given** the "Skip Intro" button is visible,
**When** the player clicks it,
**Then** the game skips directly to the library interior with movement control enabled.

---

## US-18 — Comfort settings (horror tone control)

### AC-18.1 — Comfort toggle in settings
**Given** the player opens the Settings menu,
**When** the player toggles "Comfort Mode" to On,
**Then** ambient lighting increases, sudden/startling audio cues are removed, and any flickering effects are disabled.

### AC-18.2 — Default mode is safe
**Given** Comfort Mode is Off (default),
**When** the player plays normally,
**Then** the horror elements remain light-hearted (no jump scares, graphic content, or genuinely threatening scenarios).

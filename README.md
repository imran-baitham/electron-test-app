## ClawPilot onboarding – React/Electron test

This repository is a small demonstration project built for an **“Expert front‑end developer – React/Electron”** test.

It uses:
- **React (Next.js App Router)** for the UI
- **Electron (via Nextron)** so the same screen can run as a desktop app
- **TailwindCSS utility classes** for fast, consistent styling

The main screen is a **pixel‑perfect implementation of the Figma design** for the ClawPilot “Kick things off with ClawPilot skills” onboarding step.  
The focus is on:
- Tight typography and spacing
- Clean layout structure
- Simple micro‑interactions on hover/focus

---

## Getting started

### 1. Install dependencies

From the project root:

```bash
npm install
```

Node 20+ is recommended.

### 2. Run the web version (Next.js)

```bash
npm run next:dev
```

Then open `http://localhost:3000` in your browser.  
You should see the ClawPilot onboarding screen matching the Figma file.

### 3. Run the desktop version (Electron)

```bash
npm run electron:dev
```

This will start the same UI inside an Electron shell.

---

## Implementation notes

- The Figma screen is implemented in `renderer/app/page.tsx`.
- Global layout, fonts, and theme setup live in `renderer/app/layout.tsx` and `renderer/styles/globals.css`.
- The right‑hand illustration uses a static image at `renderer/public/images/onboarding-mock.png` (not included here for licensing reasons).

The code is intentionally straightforward and focused on **front‑end quality**, not on complex app logic.

---

## Scripts

- `npm run next:dev` – Next.js dev server (web)
- `npm run electron:dev` – Electron dev app
- `npm run next:build` – Build static Next.js export
- `npm run electron:build-current` – Package the Electron app for the current OS

---

## Notes

This repository is a small, one-off test project for showcasing UI and Electron skills and is not intended to be published as an open-source library.
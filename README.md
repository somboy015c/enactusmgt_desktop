# Enactus NG – Desktop app (Windows + macOS)

Wraps the Enactus admin dashboard in a native desktop window (Tauri) with an animated splash screen
(the same spinner as the website), a 3-slide onboarding on first launch, and an offline/retry screen.
Everything is built by GitHub Actions – you never run a command.

## Set up (once, in the browser only)
1. Create a **private** GitHub repository and upload the *contents* of this folder (unzip first; make sure the `.github` folder is included).
2. Open `app.config.json` on GitHub → ✏️ edit → check that `"adminUrl"` is `https://admin.enactus.org.ng` → Commit only if you change it.
3. Open the **Actions** tab. The build starts automatically on every commit (or press *Run workflow*). It takes about 10–15 minutes.
4. When it finishes, open **Releases** (right side of the repo page): **EnactusNG.exe** (Windows) and **EnactusNG.dmg** (macOS) are attached.

## Customising
- Splash background: replace `src/img/splash-bg.jpg` with any picture (same file name).
- Onboarding text: `src/index.html` (search for `<h2>`).
- Colours / buttons: `src/style.css`.
- New dashboard address: edit `app.config.json` and commit – a new release is built.

## Notes
- The dashboard is a live PHP site, so the app needs an internet connection and shows a "Try again" screen when offline.
- The apps are not code-signed: Windows may show SmartScreen (*More info → Run anyway*); on macOS right-click → *Open* the first time.

## What's new (v56 refresh)
- Works with the v56 dashboard: bulk ID-card PDFs and "download all staff cards" download normally; "View website" / "Download the app" links stay hidden inside the app.
- Each build gets a higher version number, so the new installer updates the old app.
- Upload the v56 website files first, then push this folder to GitHub to build.
- The Nationals check-in desk camera scan depends on the computer's browser engine; if it does not work, search by name/ID or use the phone app.

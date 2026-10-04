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

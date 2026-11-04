// Prevents an extra console window on Windows in release.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Script that hides the "View website" link on every dashboard page.
const INJECT: &str = include_str!("../../inject.js");

// The dashboard recognises the app by this word in the user-agent and hides website/download links.
#[cfg(target_os = "windows")]
const UA: &str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 EnactusNGApp";
#[cfg(target_os = "macos")]
const UA: &str = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15 EnactusNGApp";
#[cfg(all(not(target_os = "windows"), not(target_os = "macos")))]
const UA: &str = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 EnactusNGApp";

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let cfg = app
                .config()
                .app
                .windows
                .first()
                .cloned()
                .expect("missing window config");
            tauri::WebviewWindowBuilder::from_config(app.handle(), &cfg)?
                .initialization_script(INJECT)
                .user_agent(UA)
                .build()?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Enactus NG");
}

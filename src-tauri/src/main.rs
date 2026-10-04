// Prevents an extra console window on Windows in release.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Script that hides the "View website" link on every dashboard page.
const INJECT: &str = include_str!("../../inject.js");

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
                .build()?;
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running Enactus NG");
}

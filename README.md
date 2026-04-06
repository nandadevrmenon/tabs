# Tab Group New Tab

A minimal Chrome/Edge extension that opens a new tab **inside the current tab group** using `Alt+T`. Without this, pressing Ctrl+T opens a tab outside your group — this fixes that.

## Install (Chrome or Edge)

1. Download or clone this repo (or just grab the folder if someone sent it to you)
2. Open your browser and go to:
   - **Chrome:** `chrome://extensions`
   - **Edge:** `edge://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the folder containing `manifest.json` (this folder)
6. Done — the extension is now active

## Usage

- Press `Alt+T` while on any tab to open a new tab in the same group
- If the current tab isn't in a group, it still opens a new tab (right next to the current one)
- To change the shortcut: go to `chrome://extensions/shortcuts` (or `edge://extensions/shortcuts`)

---

## Build your own version with Claude

If you want to customize this or build something similar from scratch, paste this prompt into Claude:

```
Build a Chrome/Edge browser extension (Manifest V3) that opens a new tab inside the current tab group when I press a keyboard shortcut.

Requirements:
- Uses Manifest V3 with a background service worker
- Registers a keyboard command (e.g. Alt+T) via the `commands` manifest key
- On trigger: queries the active tab, creates a new tab right after it, and if the active tab is in a group (groupId !== TAB_GROUP_ID_NONE), adds the new tab to that same group
- Needs "tabs" and "tabGroups" permissions
- Include a manifest.json, background.js, and placeholder icon paths
- Keep it minimal — no popup, no options page, no UI

Output all files so I can drop them into a folder and load it as an unpacked extension.
```

Claude will generate all the files. Then follow the install steps above to load it.

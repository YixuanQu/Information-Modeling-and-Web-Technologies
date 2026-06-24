# LMML — Rome Cinema Walk (HTML / CSS / JS version)

Plain **HTML + CSS + JavaScript** version of the project. No React, no Tailwind,
no build step. Open it in any browser, edit it in any text editor (VS Code, etc.).

> 📖 For the full technical write-up — data model, how each feature works, how to
> add locations and themes — see **[DOCUMENTATION.md](DOCUMENTATION.md)**.

## Features

- Cover page + interactive tour of **15 Roman film locations**
- Leaflet map with numbered markers (click to jump)
- Previous / Next buttons **and arrow-key (← →) navigation**
- Two content switchers: **Level of Detail** (brief/mid/long) and **Audience Tone** (young/adult/scholar)
- **4 visual themes:** Modern Screen · XIX Century Print · Cinema Noir · Golden Age

## Files

| File | What it is |
|------|-----------|
| `index.html` | Cover page (title + "Begin Tour" button) |
| `tour.html`  | Main interface: map + location content |
| `css/style.css` | All styling, including the **modern** and **vintage** themes |
| `js/data.js` | The 15 locations (text, timeline, images) — **edit content here** |
| `js/tour.js` | Logic: map, prev/next, arrow keys, switchers, theme |
| `img/` | Photos, organized by film |
| `DOCUMENTATION.md` | Full technical documentation |

## How to open it

Because the map and the data file load via JavaScript, open it through a tiny
local server (double-clicking `index.html` also works for everything except, in
some browsers, the map tiles):

**Easiest — VS Code:**
1. Install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.

**Or — Python (already on most machines):**
```
cd LMML-website
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## How to edit the content

- **Change the texts / locations:** edit `js/data.js`.
- **Change colors, fonts, layout:** edit `css/style.css`.
- **Change behavior (navigation, map):** edit `js/tour.js`.

## Images

- All photos live in the **`img/`** folder, organized by movie
  (`la_dolce_vita/`, `roman_holiday/`, `to_rome_with_love/`, etc.).
- Each location points to its photo via the `imageUrl` field in `js/data.js`,
  e.g. `"img/roman_holiday/colosseo.JPG"`. To swap a photo, drop a new file in
  `img/` and update that one line.
- The cover background is set in `css/style.css` (`.cover__bg`).

## Notes

- The only thing loaded from the internet is the **map** (Leaflet + OpenStreetMap
  tiles). Everything else — pages, styles, images — is local and works offline.

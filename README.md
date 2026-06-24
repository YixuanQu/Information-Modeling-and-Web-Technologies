# LMML — Rome Cinema Walk (HTML / CSS / JS version)

Plain **HTML + CSS + JavaScript** version of the project. No React, no Tailwind,
no build step. Open it in any browser, edit it in any text editor (VS Code, etc.).

## Files

| File | What it is |
|------|-----------|
| `index.html` | Cover page (title + "Begin Tour" button) |
| `tour.html`  | Main interface: map + location content |
| `css/style.css` | All styling, including the **modern** and **vintage** themes |
| `js/data.js` | The 15 locations (text, timeline, images) — **edit content here** |
| `js/tour.js` | Logic: map, prev/next, arrow keys, switchers, theme |

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

## Notes

- The map uses the **Leaflet** library, loaded from a CDN (needs internet).
- Location images use **Unsplash** URLs (also need internet). To use your own
  images, drop them in an `img/` folder and change the `imageUrl` values in `data.js`.

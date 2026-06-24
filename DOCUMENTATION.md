# LMML — Rome Cinema Walk · Technical Documentation

A digital companion that maps **15 iconic film locations in Rome** onto an
interactive map, with descriptions that adapt to the reader's chosen detail
level and audience tone, presented in one of **four visual themes**.

Built as a project for *Information Modeling and Web Technologies* using plain
**HTML, CSS, and JavaScript** — no frameworks, no build step.

---

## 1. Concept

The application demonstrates a core *information-modeling* idea: **one structured
dataset, many presentations.** Every location is described once, as data, and the
interface lets the user re-render that same data in different ways:

- **Level of Detail** — `brief` / `mid` / `long`
- **Audience Tone** — `young` / `adult` / `scholar`
- **Visual Theme** — `modern` / `vintage` / `noir` / `technicolor`

Nothing about the text is hard-coded into the page; it all flows from the data
model described in section 4.

---

## 2. Technology stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Structure | HTML5 | `index.html`, `tour.html` |
| Styling | CSS3 | Single stylesheet, CSS custom properties, theme overrides |
| Behavior | JavaScript (ES5/ES6, vanilla) | No framework |
| Map | [Leaflet 1.9.4](https://leafletjs.com/) | Loaded from CDN |
| Map tiles | OpenStreetMap | Loaded from the network |
| Images | Local JPG/PNG files in `img/` | Bundled, work offline |

The only runtime dependency is Leaflet (and its OpenStreetMap tiles), used purely
for the map. Everything else is self-contained.

---

## 3. File & folder structure

```
LMML-website/
├─ index.html          Cover page
├─ tour.html           Main interface (map + content)
├─ README.md           Quick-start
├─ DOCUMENTATION.md    This file
│
├─ css/
│   └─ style.css       All styling + the 4 themes
│
├─ js/
│   ├─ data.js         The 15 locations (the data model)
│   └─ tour.js         Tour logic: map, navigation, switchers, theme
│
└─ img/                Photos, organized by film
    ├─ la_dolce_vita/
    ├─ roman_holiday/
    ├─ to_rome_with_love/
    ├─ la_grande_bellezza/
    ├─ the_talented_mr_ripley/
    ├─ the_god_father_3/
    ├─ l'eclisse/
    └─ c'è_ancora_domani/
```

---

## 4. The data model

All content lives in `js/data.js` as a single array called `locations`. Each
entry is one object with this shape:

```js
{
  id: 1,                         // unique number, 1..15, also the map marker label
  name: "Trevi Fountain",        // location title
  coordinates: [41.9009, 12.4833], // [latitude, longitude] for the map
  movie: "La Dolce Vita",        // associated film
  year: 1960,                    // film year
  director: "Federico Fellini",
  scene: "Anita Ekberg's iconic fountain scene", // caption shown over the photo
  imageUrl: "img/la_dolce_vita/fontana_di_trevi.png", // path to the photo

  content: {                     // the "Description" — varies by Level of Detail
    brief: "...",
    mid:   "...",
    long:  "..."
  },

  tone: {                        // the "Interpretation" — varies by Audience Tone
    young:   "...",
    adult:   "...",
    scholar: "..."
  },

  historicalTimeline: [          // rendered as the vertical timeline
    { year: "19 BC", event: "Aqua Virgo aqueduct constructed by Agrippa" },
    ...
  ],

  metadata: {                    // shown in the info table + significance section
    filmingDate: "March-April 1959",
    sceneType:   "Night Exterior",
    duration:    "4 minutes 20 seconds",
    significance: "Iconic scene defining Italian cinema"
  }
}
```

**Which field shows where**, given the user's selections:

- The *Description* paragraph = `content[detailLevel]`
- The *Interpretation* paragraph = `tone[audienceTone]`
- The info table = `director`, `year`, `metadata.filmingDate`, `metadata.sceneType`
- The timeline = `historicalTimeline[]`
- *Cinematic Significance* = `metadata.significance`

---

## 5. How the pages work

### `index.html` — Cover page
A static, full-screen hero: background photo, dark gradient, title block, and a
**Begin Tour** button that links to `tour.html?loc=1`. The fade-in is pure CSS
(`@keyframes fadeUp`). No JavaScript.

### `tour.html` — Main interface
Two-pane layout:
- **Left (≈38.2%, the golden ratio):** the Leaflet map + Previous/Next controls.
- **Right:** the scrollable content for the current location.

The active location is read from the URL query string (`?loc=N`). All rendering
is done by `js/tour.js`.

---

## 6. Features in detail

### Interactive map
`tour.js` creates a Leaflet map centered on Rome, adds one numbered circular
marker per location, and:
- Clicking a marker selects that location.
- The active marker is filled (black), the others are outlined (white).
- On every change the map `flyTo()`s the new location.

### Navigation
- **Previous / Next** buttons cycle through locations (wrapping around at the ends).
- **Arrow keys ← / →** do the same (a global `keydown` listener).
- The current location is reflected in the URL (`?loc=N`) via `history.replaceState`,
  so the page can be linked/refreshed at any location.

### Content switchers
Two segmented controls (*Level of Detail*, *Audience Tone*) update the state and
re-render the content pane instantly. They do **not** reload the page.

### Themes
A third segmented control sets `data-theme` on the root `.tour` element. CSS does
the rest (see section 7).

---

## 7. The four themes

Themes are implemented entirely in CSS by overriding styles based on the
`data-theme` attribute of the `.tour` container. The JavaScript only sets that
attribute — it contains no per-theme logic.

| Value | Label | Look |
|-------|-------|------|
| `modern` | Modern Screen | White background, sans-serif, black accents (default) |
| `vintage` | XIX Century Print | Cream paper `#f5f5e8`, serif type, italic interpretation |
| `noir` | Cinema Noir | Near-black background, light text, high contrast |
| `technicolor` | Golden Age | Warm sepia background, amber/gold accents |

The default styles (no attribute / `modern`) define the base look. Each other
theme is a block of selectors like:

```css
.tour[data-theme="noir"] { background: #0d0d0d; color: #e8e8e8; }
.tour[data-theme="noir"] .header { background: #141414; border-bottom-color: #333; }
/* ...etc... */
```

---

## 8. How to edit content

### Change text or a photo for a location
Open `js/data.js`, find the location by its `name` or `id`, and edit the fields.
To change a photo, set `imageUrl` to another file path, e.g.
`"img/roman_holiday/pantheon.JPG"`.

> File names containing an apostrophe must encode it as `%27` in the path,
> e.g. `"img/roman_holiday/ponte_sant%27angelo.JPG"`.

### Add a new location
Append a new object to the `locations` array following the shape in section 4.
Give it the next `id`. The map marker, navigation counter, and content pane all
update automatically — no other file needs to change.

### Change colors, spacing, fonts
Edit `css/style.css`. Shared values (neutral grays, fonts) are CSS variables at
the top under `:root`.

---

## 9. How to add a new theme

1. **Add a button** in `tour.html`, inside `<div class="segmented segmented--theme">`:
   ```html
   <button type="button" data-value="myTheme">
     <svg ...your icon...></svg>
     <span>My Theme</span>
   </button>
   ```
2. **Add the styles** in `css/style.css`, copying an existing theme block and
   changing `data-theme="myTheme"` and the colors.

That is all — `tour.js` already applies any `data-value` you add.

---

## 10. Running locally

The page loads its data and map via JavaScript, so serve it over a small local
server rather than opening the file directly.

**VS Code (Live Server):**
Install the *Live Server* extension → right-click `index.html` → *Open with Live Server*.

**Python:**
```bash
cd LMML-website
python -m http.server 8000
```
Then open <http://localhost:8000>.

---

## 11. Deploying to GitHub / GitHub Pages

1. Upload the **contents** of `LMML-website/` to the repository (see README for
   the exact click-by-click steps).
2. To publish it live for free: repo **Settings → Pages →** set *Source* to your
   branch (`main`) and root (`/`). GitHub gives you a public URL where
   `index.html` is the home page.

---

## 12. Browser support & dependencies

- Works in any modern browser (Chrome, Edge, Firefox, Safari).
- Needs an internet connection **only** for the map (Leaflet + OpenStreetMap).
  Text, layout, themes, and photos all work offline.

---

## 13. Credits

- Map: [Leaflet](https://leafletjs.com/) · tiles © OpenStreetMap contributors.
- Location photos: project's own `img/` set, organized by film.
- Content: academic research project, 2026.

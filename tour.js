/* ============================================================
   LMML — Rome Cinema Walk
   Tour page logic: map, navigation, switchers, theme.
   Requires: data.js (the `locations` array) and Leaflet.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- State ---------- */
  const state = {
    currentId: getStartId(),   // which location (1..15)
    theme: "modern",           // "modern" | "vintage"
    detailLevel: "mid",        // "brief" | "mid" | "long"
    audienceTone: "adult",     // "young" | "adult" | "scholar"
  };

  /* Read ?loc=N from the URL (defaults to 1) */
  function getStartId() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("loc") || "1", 10);
    return isNaN(id) || id < 1 || id > locations.length ? 1 : id;
  }

  /* ---------- Elements ---------- */
  const tourEl    = document.getElementById("tour");
  const contentEl = document.getElementById("content");
  const navCurrent = document.getElementById("navCurrent");
  const navTotal   = document.getElementById("navTotal");

  /* ---------- Leaflet map ---------- */
  let map = null;
  const markers = {};   // id -> L.Marker

  function markerIcon(id, isActive) {
    const html =
      '<div style="' +
        'width:32px;height:32px;' +
        'background:' + (isActive ? "#000" : "#fff") + ';' +
        'color:' + (isActive ? "#fff" : "#000") + ';' +
        'border:2px solid ' + (isActive ? "#fff" : "#000") + ';' +
        'border-radius:50%;display:flex;align-items:center;justify-content:center;' +
        'font-size:13px;font-weight:600;cursor:pointer;' +
        'box-shadow:0 2px 8px rgba(0,0,0,0.3);">' +
        id +
      "</div>";
    return L.divIcon({
      html: html,
      className: "custom-marker",
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  }

  function initMap() {
    map = L.map("map", {
      center: [41.9028, 12.4964],
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    locations.forEach(function (loc) {
      const marker = L.marker(loc.coordinates, {
        icon: markerIcon(loc.id, loc.id === state.currentId),
      }).addTo(map);
      marker.on("click", function () { selectLocation(loc.id); });
      markers[loc.id] = marker;
    });
  }

  /* Refresh marker styles + fly to the active one */
  function updateMap() {
    locations.forEach(function (loc) {
      const marker = markers[loc.id];
      if (marker) marker.setIcon(markerIcon(loc.id, loc.id === state.currentId));
    });
    const current = locations.find(function (l) { return l.id === state.currentId; });
    if (current && map) {
      map.flyTo(current.coordinates, 15, { duration: 1.5 });
    }
  }

  /* ---------- Render the content pane ---------- */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderContent() {
    const loc = locations.find(function (l) { return l.id === state.currentId; });
    if (!loc) { contentEl.innerHTML = "<p>Location not found</p>"; return; }

    const timelineHtml = loc.historicalTimeline.map(function (item) {
      return (
        '<div class="timeline__item">' +
          '<div class="timeline__year">' + escapeHtml(item.year) + "</div>" +
          '<div class="timeline__body">' +
            '<div class="timeline__dot"></div>' +
            '<div class="timeline__line"></div>' +
            '<p class="content__text">' + escapeHtml(item.event) + "</p>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    contentEl.innerHTML =
      '<div class="content__head">' +
        "<div>" +
          '<div class="content__number-row">' +
            '<span class="content__number">' + loc.id + "</span>" +
            '<div class="content__number-line"></div>' +
          "</div>" +
          '<h1 class="content__title">' + escapeHtml(loc.name) + "</h1>" +
          '<p class="content__movie">' + escapeHtml(loc.movie) + " (" + loc.year + ")</p>" +
        "</div>" +

        '<div class="content__still">' +
          '<img src="' + loc.imageUrl + '" alt="' + escapeHtml(loc.name) + '" />' +
          '<div class="content__still-caption">' + escapeHtml(loc.scene) + "</div>" +
        "</div>" +

        '<div class="content__meta"><table><tbody>' +
          metaRow("Director", loc.director) +
          metaRow("Year", loc.year) +
          metaRow("Filming Date", loc.metadata.filmingDate) +
          metaRow("Scene Type", loc.metadata.sceneType) +
        "</tbody></table></div>" +
      "</div>" +

      '<div class="content__sections">' +
        section("Description", '<p class="content__text">' + escapeHtml(loc.content[state.detailLevel]) + "</p>") +
        section("Interpretation", '<p class="content__text content__interpretation">' + escapeHtml(loc.tone[state.audienceTone]) + "</p>") +
        section("Historical Timeline", '<div class="timeline">' + timelineHtml + "</div>") +
        section("Cinematic Significance", '<p class="content__text">' + escapeHtml(loc.metadata.significance) + "</p>") +
      "</div>";

    // keep the content scrolled to top when switching location
    contentEl.parentElement.scrollTop = 0;
  }

  function metaRow(label, value) {
    return (
      "<tr>" +
        '<td class="content__meta-label"><div>' + escapeHtml(label) + "</div></td>" +
        "<td>" + escapeHtml(value) + "</td>" +
      "</tr>"
    );
  }

  function section(title, bodyHtml) {
    return (
      "<div>" +
        '<h2 class="content__section-title">' + escapeHtml(title) + "</h2>" +
        bodyHtml +
      "</div>"
    );
  }

  /* ---------- Navigation ---------- */
  function selectLocation(id) {
    state.currentId = id;
    // update URL without reloading the page
    const url = new URL(window.location.href);
    url.searchParams.set("loc", id);
    window.history.replaceState({}, "", url);

    navCurrent.textContent = id;
    renderContent();
    updateMap();
  }

  function goPrevious() {
    const id = state.currentId > 1 ? state.currentId - 1 : locations.length;
    selectLocation(id);
  }
  function goNext() {
    const id = state.currentId < locations.length ? state.currentId + 1 : 1;
    selectLocation(id);
  }

  /* ---------- Segmented controls (detail / tone / theme) ---------- */
  function setupSegmented(group, currentValue, onChange) {
    const container = document.querySelector('.segmented[data-group="' + group + '"]');
    if (!container) return;
    const buttons = container.querySelectorAll("button");

    function highlight(value) {
      buttons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.dataset.value === value);
      });
    }
    highlight(currentValue);

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        highlight(btn.dataset.value);
        onChange(btn.dataset.value);
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    navTotal.textContent = locations.length;
    navCurrent.textContent = state.currentId;

    initMap();
    renderContent();
    updateMap();

    // Switchers
    setupSegmented("detail", state.detailLevel, function (v) {
      state.detailLevel = v; renderContent();
    });
    setupSegmented("tone", state.audienceTone, function (v) {
      state.audienceTone = v; renderContent();
    });
    setupSegmented("theme", state.theme, function (v) {
      state.theme = v;
      tourEl.setAttribute("data-theme", v);
    });

    // Nav buttons
    document.getElementById("prevBtn").addEventListener("click", goPrevious);
    document.getElementById("nextBtn").addEventListener("click", goNext);

    // Keyboard navigation
    window.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") goPrevious();
      else if (e.key === "ArrowRight") goNext();
    });
  }

  init();
})();

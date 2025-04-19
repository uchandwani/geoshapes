// header.js

// js/header.js

const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

window.updatePageTitle = function () {
  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = ""; // clear subtitle
  if (subBtnEl) subBtnEl.textContent = "";     // clear sub-button label
};

window.setPageSubtitle = function (subtitleLabel = "") {
  const subtitleEl = document.getElementById("page-subtitle");
  if (subtitleEl) subtitleEl.textContent = subtitleLabel ? `→ ${subtitleLabel}` : "";
};

window.setActiveSubButtonLabel = function (btnLabel = "") {
  const subBtnEl = document.getElementById("active-sub-button");
  if (subBtnEl) subBtnEl.textContent = btnLabel ? `→ ${btnLabel}` : "";
};

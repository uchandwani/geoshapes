// ✅ js/header.js

const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

// ✅ Make globally available for any module/script
window.updatePageTitle = function () {
  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = "";
  if (subBtnEl) subBtnEl.textContent = "";
};

window.setPageSubtitle = function (label) {
  const el = document.getElementById("page-subtitle");
  if (el) el.textContent = label || "";
};

window.setActiveSubButtonLabel = function (label) {
  const el = document.getElementById("active-sub-button");
  if (el) el.textContent = label || "";
};

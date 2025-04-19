// js/header.js

const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

export function updatePageTitle() {
  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = ""; // clear subtitle
  if (subBtnEl) subBtnEl.textContent = "";     // clear sub-button label
}

export function setPageSubtitle(label) {
  const subtitleEl = document.getElementById("page-subtitle");
  if (subtitleEl) {
    subtitleEl.textContent = label || "";
  }
}

export function setActiveSubButtonLabel(label) {
  const btnLabelEl = document.getElementById("active-sub-button");
  if (btnLabelEl) {
    btnLabelEl.textContent = label || "";
  }
}

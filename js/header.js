// header.js

// 🔹 Page-specific main titles
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

/**
 * ✅ Sets the page title on load
 */
export function updatePageTitle() {
  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subButtonEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = "";
  if (subButtonEl) subButtonEl.textContent = "";
}

/**
 * ✅ Dynamically sets subtitle and sub-button label
 */
export function setPageSubtitle(subtitleLabel = "", subButtonLabel = "") {
  const subtitleEl = document.getElementById("page-subtitle");
  const subButtonEl = document.getElementById("active-sub-button");

  if (subtitleEl) subtitleEl.textContent = subtitleLabel;
  if (subButtonEl) subButtonEl.textContent = subButtonLabel;
}

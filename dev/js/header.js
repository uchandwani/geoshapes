
// header.js

// ✅ Declare only once
console.log("Before PageTitles declaration line");
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
   "PLT.html": "Referenct Theorems"
};
console.log("PageTitle is now declared");
function updatePageTitle() {
  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";
  const el = document.getElementById("page-title");

  if (el) el.textContent = title;
  else console.warn("⚠️ Could not find element with id 'page-title'");
}


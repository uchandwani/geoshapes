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
  if (subtitleEl) subtitleEl.textContent = "";
  if (subBtnEl) subBtnEl.textContent = "";

  // Clear old dividers
  document.querySelectorAll(".dynamic-divider").forEach(div => div.remove());
}


export function setPageSubtitle(label) {
  const subtitleEl = document.getElementById("page-subtitle");
  const titleEl = document.getElementById("page-title");

  // Clear previous content
  subtitleEl.textContent = "";

  if (label && subtitleEl && titleEl) {
    insertDivider(titleEl, subtitleEl);
    subtitleEl.textContent = label;
  }
}

export function setActiveSubButtonLabel(label) {
  const subBtnEl = document.getElementById("active-sub-button");
  const subtitleEl = document.getElementById("page-subtitle");

  // Clear previous content
  subBtnEl.textContent = "";

  if (label && subBtnEl && subtitleEl) {
    insertDivider(subtitleEl, subBtnEl);
    subBtnEl.textContent = label;
  }
}

// 🔹 Dynamically insert divider between two elements
function insertDivider(leftEl, rightEl) {
  const divider = document.createElement("span");
  divider.textContent = "|";
  divider.className = "dynamic-divider";
  divider.style.margin = "0 10px";
  divider.style.color = "white";
  leftEl.parentNode.insertBefore(divider, rightEl);
}

export function attachNavBarListeners() {
  const navMap = {
    sineTheta: "sin",
    cosineTheta: "cos",
    trigonoIdentities: "tan",
    trigonoRatios: "tan"
  };

  Object.entries(navMap).forEach(([id, subtype]) => {
    const button = document.getElementById(`${id}-button`);
    if (button) {
      button.addEventListener("click", () => {
        const { switchFunctionality } = window; // Or import if needed
        if (typeof switchFunctionality === "function") {
          switchFunctionality(id, subtype);
        } else {
          console.warn("❌ switchFunctionality not available for", id);
        }
      });
    }
  });
}

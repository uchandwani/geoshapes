// header.js

export function attachNavBarListeners() {
  const page = location.pathname.split("/").pop();

  // Parallel Lines only for now
  if (page === "parallel_lines_04.html") {
    const navMap = {
      "verticallyOpposite-button": "verticallyOpposite",
      "parallelProperties-button": "parallelProperties",
      "exteriorAngles-button": "exteriorAngles",
      "angleSum-button": "angleSumProperties"
    };

    Object.entries(navMap).forEach(([id, functionalityKey]) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener("click", () => {
          console.log("🔘 Header/Nav button clicked:", id, functionalityKey);
          if (typeof window.switchFunctionality === "function") {
            window.switchFunctionality(functionalityKey);
          }
        });
      } else {
        console.warn(`❌ Button with ID '${id}' not found in DOM.`);
      }
    });
  }
}

export function updatePageTitle() {
  const pageTitles = {
    "index.html": "Home",
    "parallel_lines_04.html": "Parallel Lines",
    "triangle_theorem_07.html": "Triangle Theorems",
    "trig_properties_09.html": "Trigonometric Properties",
    "circle_theorems_02.html": "Circle Theorems"
  };

  const page = location.pathname.split("/").pop();
  const title = pageTitles[page] || "Math App";

  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = "";
  if (subBtnEl) subBtnEl.textContent = "";

  document.querySelectorAll(".dynamic-divider").forEach(div => div.remove());
}

export function updateHeaderLabels({ title, subtitle, subButton }) {
  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title || "";
  if (subtitleEl) subtitleEl.textContent = subtitle || "";
  if (subBtnEl) subBtnEl.textContent = subButton || "";
}

function insertDivider(leftEl, rightEl) {
  const divider = document.createElement("span");
  divider.textContent = "";
  divider.className = "dynamic-divider";
  divider.style.margin = "0 10px";
  divider.style.color = "white";
  leftEl.parentNode.insertBefore(divider, rightEl);
}

export function loadSubHeaderIcons() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);

  const pageIconsMap = {
    "parallel_lines_04.html": [
      { id: "verticallyOpposite-button", title: "Vertically Opposite Angles", svg: `...` },
      { id: "parallelProperties-button", title: "Parallel Lines - Properties", svg: `...` },
      { id: "exteriorAngles-button", title: "Exterior Angles", svg: `...` },
      { id: "angleSum-button", title: "Angle Sum Properties", svg: `...` }
    ]
  };

  const iconConfigs = pageIconsMap[filename];
  const container = document.getElementById("sub-header-icons");
  if (!container || !iconConfigs) return;

  container.innerHTML = "";

  iconConfigs.forEach(({ id, title, svg }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "tooltip-container";

    const temp = document.createElement("div");
    temp.innerHTML = svg.trim();
    const svgEl = temp.firstChild;
    svgEl.id = id;
    svgEl.title = title;

    wrapper.appendChild(svgEl);

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.textContent = title;
    wrapper.appendChild(tooltip);

    container.appendChild(wrapper);
  });
}

// 👇 Call only if inside parallel_lines_04.html
if (location.pathname.endsWith("parallel_lines_04.html")) {
  loadSubHeaderIcons();
}

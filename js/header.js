// js/header.js


// header.js
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


export function updateHeaderLabels({ title, subtitle, subButton }) {
  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

  if (titleEl) titleEl.textContent = title || "";
  if (subtitleEl) subtitleEl.textContent = subtitle || "";
  if (subBtnEl) subBtnEl.textContent = subButton || "";
}



// 🔹 Dynamically insert divider between two elements
function insertDivider(leftEl, rightEl) {
  const divider = document.createElement("span");
  divider.textContent = "";
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

const pageIconsMap = {
  "parallel_lines_04.html": [
    {
      id: "sineTheta-button",
      title: "Vertically Opposite Angles",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="90" x2="90" y2="10" />
              <line x1="10" y1="10" x2="90" y2="90" />
              <path d="M50 50 A15 15 0 0 1 65 35" stroke-width="2"/>
              <path d="M50 50 A15 15 0 0 1 35 65" stroke-width="2"/>
            </svg>`
    },
    {
      id: "cosineTheta-button",
      title: "Alternate Angles",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>`
    }
  ],
  "triangle_theorem_07.html": [
    {
      id: "exteriorAngle-button",
      title: "Exterior Angle",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="20" y1="80" x2="50" y2="30" />
              <line x1="50" y1="30" x2="80" y2="80" />
              <line x1="20" y1="80" x2="80" y2="80" />
              <line x1="80" y1="80" x2="95" y2="80" stroke-dasharray="4 2" />
              <path d="M80 80 A12 12 0 0 1 92 72" stroke-width="2"/>
              <path d="M20 80 A10 10 0 0 1 28 70" stroke-width="2"/>
              <path d="M50 30 A10 10 0 0 1 60 38" stroke-width="2"/>
            </svg>`
    },
    {
      id: "angleSum-button",
      title: "Triangle Angle Sum",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="50,20 20,80 80,80" />
              <path d="M23 76 A6 6 0 0 1 30 70" stroke-width="2"/>
              <path d="M77 76 A6 6 0 0 0 70 70" stroke-width="2"/>
              <path d="M47 23 A6 6 0 0 1 53 23" stroke-width="2"/>
              <line x1="35" y1="50" x2="37" y2="55" stroke-width="2"/>
              <line x1="65" y1="50" x2="63" y2="55" stroke-width="2"/>
              <line x1="50" y1="80" x2="50" y2="75" stroke-width="2"/>
            </svg>`
    }
  ],
  "trig_properties_09.html": [
    {
      id: "trigIdentity-button",
      title: "Trig Identity",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <line x1="50" y1="10" x2="50" y2="90" />
              <line x1="10" y1="50" x2="90" y2="50" />
            </svg>`
    },
    {
      id: "trigRatios-button",
      title: "Trig Ratios",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="20,80 80,80 80,20" />
              <line x1="80" y1="80" x2="80" y2="20" />
              <path d="M80 80 A10 10 0 0 1 70 70" stroke-width="2"/>
            </svg>`
    }
  ],
  "circle_theorems_02.html": [
    {
      id: "sineTheta-button",
      title: "Radius Tangent Theorem",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <line x1="50" y1="50" x2="90" y2="50" />
              <line x1="50" y1="50" x2="50" y2="10" />
            </svg>`
    },
    {
      id: "cosineTheta-button",
      title: "Two Tangent",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <polygon points="30,30 70,30 70,70 30,70" />
            </svg>`
    },
    {
      id: "subtendedAngles-button",
      title: "Subtended Angles",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <line x1="50" y1="50" x2="90" y2="50" />
              <line x1="50" y1="50" x2="50" y2="10" />
            </svg>`
    },
    {
      id: "alternateSegments-button",
      title: "Alternate Segment",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <polygon points="30,30 70,30 70,70 30,70" />
            </svg>`
    },
    {
      id: "quadrilaterals-button",
      title: "Cyclic Quadrilateral",
      svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="50" cy="50" r="40" />
              <polygon points="30,30 70,30 70,70 30,70" />
            </svg>`
    }
  ]
};

export function loadSubHeaderIcons() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);
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

loadSubHeaderIcons();


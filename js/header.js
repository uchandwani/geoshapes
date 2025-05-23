// header.js
import { functionalityConfig } from './commonConfig.js';
// header.js

export async function loadHeader() {
  try {
    const res = await fetch("header.html");
    const html = await res.text();

    // Inject header into the placeholder
    const container = document.getElementById("header-placeholder") || document.getElementById("main-header-container");
    if (!container) {
      console.error("❌ No header container found.");
      return;
    }

    container.innerHTML = html;
    console.log("✅ Header loaded");

    // ⏬ Dynamically load auth.js
    const authModule = await import('./auth.js');

    // ✅ Wire up login/logout buttons (now safely after injection)
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        console.log("🔐 Login button clicked");
        authModule.loginWithGoogle();
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        console.log("🔓 Logout button clicked");
        authModule.logout();
      });
    }

  } catch (err) {
    console.error("❌ Failed to load header or auth module:", err);
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
 // const title = pageTitles[page] || "Math App";

//  const titleEl = document.getElementById("page-title");
  const subtitleEl = document.getElementById("page-subtitle");
  const subBtnEl = document.getElementById("active-sub-button");

//  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = "";
  if (subBtnEl) subBtnEl.textContent = "";

  document.querySelectorAll(".dynamic-divider").forEach(div => div.remove());
}

// ... your loadSubHeaderIcons() and attachNavBarListeners() remain unchanged ...

// 📌 Load header and icons
loadHeader();
loadSubHeaderIcons();




export function attachNavBarListeners() {
  const navMap = {
    "verticallyOpposite-button": "verticallyOpposite",
    "parallelProperties-button": "parallelProperties",
    "exteriorAngles-button": "exteriorAngles",
    "angleSumProperties-button": "angleSumProperties",
  
    "radiusTangent-button": "radiusTangent",
    "twoTangents-button": "twoTangents",
    "subtendedAngles-button": "subtendedAngles",
    "alternateSegments-button": "alternateSegments",
    "quadrilaterals-button": "quadrilaterals",
  
    "midSegmentTheorem-button": "midSegmentTheorem",
    "basicProportionalityTheorem-button": "basicProportionalityTheorem",
    "angleBisectorTheorem-button": "angleBisectorTheorem",
    "propertiesOfTriangles-button": "propertiesOfTriangles",
  
    "sineTheta-button": "sineTheta",
    "cosineTheta-button": "cosineTheta",
    "trigonoRatios-button": "trigonoRatios",
    "trigonoIdentities-button": "trigonoIdentities",
  };
  

  Object.entries(navMap).forEach(([id, functionalityKey]) => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener("click", () => {
      const subtype = functionalityConfig[functionalityKey]?.defaultButtonType ?? 'sin';  // ✅ dynamically fetch

      const event = new CustomEvent("nav-select", {
        detail: {
          functionalityKey,
          subtype
        }
      });

      window.dispatchEvent(event);
    });
  }
});
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

// 📌 Ensure there's a container element with this ID in each HTML

export function activateSubButton(buttonId) {
  const allButtons = document.querySelectorAll('#sub-header-icons .sub-button-svg');
  allButtons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = document.getElementById(buttonId);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

export function loadSubHeaderIcons() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);

  const pageIconsMap = {
    "parallel_lines_04.html": [
      { id: "verticallyOpposite-button", title: "Vertically Opposite Angles", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="90" x2="90" y2="10" />
              <line x1="10" y1="10" x2="90" y2="90" />
              <path d="M50 50 A15 15 0 0 1 65 35" stroke-width="2"/>
              <path d="M50 50 A15 15 0 0 1 35 65" stroke-width="2"/>
            </svg>` },
      { id: "parallelProperties-button", title: "Parallel Lines - Properties", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "exteriorAngles-button", title: "Exterior Angles", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "angleSumProperties-button", title: "Angle Sum Properties", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
    ],
    "triangle_theorem_07.html": [
      { id: "midSegmentTheorem-button", title: "Mid Segment Theoream", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="90" x2="90" y2="10" />
              <line x1="10" y1="10" x2="90" y2="90" />
              <path d="M50 50 A15 15 0 0 1 65 35" stroke-width="2"/>
              <path d="M50 50 A15 15 0 0 1 35 65" stroke-width="2"/>
            </svg>` },
      { id: "basicProportionalityTheorem-button", title: "Basic Proportionality Theorem", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "angleBisectorTheorem-button", title: "Angle Bisector Theorem", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "propertiesOfTriangles-button", title: "Propeties of Traingles", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` }
    ],"trig_properties_09.html": [
      { id: "sineTheta-button", title: "Sine Theta Angle", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="90" x2="90" y2="10" />
              <line x1="10" y1="10" x2="90" y2="90" />
              <path d="M50 50 A15 15 0 0 1 65 35" stroke-width="2"/>
              <path d="M50 50 A15 15 0 0 1 35 65" stroke-width="2"/>
            </svg>` },
      { id: "cosineTheta-button", title: "Cosine Theta Angle", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "trigonoRatios-button", title: "Trigonometric Ratios", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "trigonoIdentities-button", title: "Verify Trignometric Identities", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` }
    ],"circle_theorems_02.html": [
      { id: "radiusTangent-button", title: "Radius Tangent Theorem", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <polyline points="20,30 80,30 70,85 25,85 20,30"
                    stroke="#1E88E5" stroke-width="2" fill="none"/>
        </svg>` },
      { id: "twoTangents-button", title: "Two Tangent Theorem", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "subtendedAngles-button", title: "Subtended Angles Theorems", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "alternateSegments-button", title: "Alternate Segment Theorem", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" fill="none" stroke="#1E88E5"
                 stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="10" y1="30" x2="90" y2="30" />
              <line x1="10" y1="70" x2="90" y2="70" />
              <line x1="30" y1="10" x2="70" y2="90" />
              <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
              <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
            </svg>` },
      { id: "quadrilaterals-button", title: "Cyclic Quadrilateral", svg: `<svg class="sub-header-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
        <polyline points="20,30 80,30 70,85 25,85 20,30"
                  stroke="#1E88E5" stroke-width="2" fill="none"/>
      </svg>` }
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
loadHeader();
loadSubHeaderIcons();

// Make sure auth.js is already loaded before this



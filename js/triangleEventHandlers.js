import { functionalityConfig } from './commonConfig.js';
import { CanvasManager, canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { updateHeaderLabels } from './header.js';
import { resolveFormStructure,getApplicableFields,handleSubmit,handleSave } from './formUtils.js';
import { loadProgress, saveProgress, getProgressStatus, loadSavedProgress } from './progress.js';

// 🌐 Page identification
const page = location.pathname.split("/").pop();
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

// 🔁 Main functionality handler
export async function switchFunctionality(functionalityKey, buttonType = null) {
  console.log("🔁 switchFunctionality called with:", functionalityKey, buttonType);

  const config = functionalityConfig[functionalityKey];
  if (!config) {
    console.warn(`⚠️ Unknown functionalityKey: ${functionalityKey}`);
    return;
  }

  // Fallback logic to pick first subtype if buttonType is null
  if (!buttonType && config.buttonSet && config.buttonSet.length > 0) {
    buttonType = config.buttonSet[0];
    console.log(`🔁 No buttonType provided. Falling back to default subtype: ${buttonType.type}`);
  }

  const effectiveType = buttonType?.type || config.defaultButtonType || null;
  console.log("🎯 Using subtype:", effectiveType);

  const page = location.pathname.split("/").pop();
  const mainTitle = pageTitles[page] || "Triangle Theorems";
  const activeSubBtnLabel = buttonType?.label || (config.buttonSet?.find(btn => btn.type === effectiveType)?.label || "");

  updateHeaderLabels({
    title: mainTitle,
    subtitle: `| ${functionalityKey}`,
    subButton: activeSubBtnLabel ? `| ${activeSubBtnLabel}` : ""
  });

  // 🔄 Clear & draw
  canvasManager.clearAllShapes();
  drawShapes(config.canvasConfig, effectiveType);
  updateUI(config, functionalityKey, buttonType);
  updateLeftSidebar(functionalityKey, effectiveType);
 // updateRightSidebar(functionalityKey, effectiveType);
  canvasManager.render();

  const uid = localStorage.getItem("uid");

  // ✅ Load saved/submitted progress
  
  if (uid) {
    const topicId = functionalityKey;
    const subtype = effectiveType;
    await loadProgress(uid, topicId, subtype); // 🔄 Handles all three cases: submitted, saved, new
  }
  
}
  

// 🎨 Unified shape renderer
function drawShapes(canvasConfig, buttonType = null) {
  if (canvasConfig.points) drawPoints(canvasConfig, buttonType);
  if (canvasConfig.circle) drawCircle(canvasConfig);
  if (canvasConfig.triangles) drawTriangles(canvasConfig, buttonType);
  if (canvasConfig.lines) drawLines(canvasConfig);
}

function drawPoints(canvasConfig, buttonType = null) {
  canvasConfig.points.forEach(({ x, y, label, color = "black", radius = 5, type, enableDrag = false }) => {
    if (!type || type === buttonType) {
      const point = new Point(x, y, label, color, radius);
      point.setEnableDrag(enableDrag);
      canvasManager.addShape(point);
    }
  });
}

function drawLines(canvasConfig) {
  canvasConfig.lines?.forEach(({ endA, endB, color = "black", enableDrag = false }) => {
    const line = new Line(endA, endB, color);
    line.setEnableDrag(enableDrag);
    canvasManager.addShape(line);
  });
}

function drawCircle(canvasConfig) {
  const [center, radius] = canvasConfig.circle;
  const circle = new Circle(center, radius);
  circle.setEnableDrag(false);
  canvasManager.addShape(circle);
}

function drawTriangles(canvasConfig, buttonType = null) {
  const triangles = buttonType
    ? canvasConfig.triangles.filter(tri => tri.type === buttonType)
    : canvasConfig.triangles;

  triangles.forEach((triangleData) => {
    const {
      vertices,
      vertexA,
      vertexB,
      vertexC,
      labels,
      midpointLabels,
      showMidPoints = true,
      showMeasurements = false,
      enableDrag = false
    } = triangleData;

    const [A, B, C] = vertices?.length === 3 ? vertices : [vertexA, vertexB, vertexC];

    const triangle = new Triangle(A, B, C);
    triangle.setVertexLabels(labels);
    triangle.setMidpointLabels(midpointLabels); // ✅ Now this works
    triangle.setEnableDrag(enableDrag);
    triangle.setShowMidpoints(showMidPoints); // ✅ match case to config
    triangle.setShowMeasurements(showMeasurements);
    triangle.setShowLabels(true);

    canvasManager.addShape(triangle);
  });
}


// 🧠 Sub-button and definition UI updater
function updateUI(config, functionalityKey, buttonType = null) {
  const dynamicButtons = document.getElementById("dynamic-buttons");
  dynamicButtons.innerHTML = "";

  if (Array.isArray(config.buttonSet)) {
    config.buttonSet.forEach(({ label, type, svg }) => {
      const wrapper = document.createElement("div");
      wrapper.className = "tooltip-container";

      if (svg) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = svg.trim();
        const svgEl = tempDiv.firstChild;
        svgEl.classList.add("sub-button-svg");
        wrapper.appendChild(svgEl);
      } else {
        const fallbackBtn = document.createElement("button");
        fallbackBtn.classList.add("triangle-button");
        fallbackBtn.textContent = label;
        wrapper.appendChild(fallbackBtn);
      }

      const tooltip = document.createElement("span");
      tooltip.className = "tooltip-text";
      tooltip.textContent = label;
      wrapper.appendChild(tooltip);

      wrapper.addEventListener("click", () => {
        console.log("📥 Subtype button clicked:", functionalityKey, { label, type, svg });
        switchFunctionality(functionalityKey, { label, type, svg });
      });

      dynamicButtons.appendChild(wrapper);
    });

    dynamicButtons.style.display = "block";
  } else {
    dynamicButtons.style.display = "none";
  }

  updateTheoremText(config, buttonType?.type || config.defaultButtonType);
}

// 📘 Theorem definition handler
export function updateTheoremText(config, subtype = null) {
  console.log("Inside updateTheoremText", config, subtype);

  let definitionText = "";

  if (config.theoremDefinitions && typeof config.theoremDefinitions === 'object') {
    if (subtype && config.theoremDefinitions[subtype]) {
      definitionText = config.theoremDefinitions[subtype];
    } else {
      const values = Object.values(config.theoremDefinitions);
      if (values.length > 0) {
        definitionText = values[0];
      }
    }
  }

  if (!definitionText && typeof config.theoremDefinition === 'string') {
    definitionText = config.theoremDefinition;
  }

  if (!definitionText) {
    definitionText = "Definition not available.";
  }

  document.getElementById("theorem-text").innerHTML = definitionText;
}

// 📊 Sidebars
export function updateLeftSidebar(functionalityKey, subtype = null) {
  const config = functionalityConfig[functionalityKey];
  if (!config) return;

  const sidebar = document.querySelector(".sidebar.left");
  const allContent = config.leftSidebarContent;

  let content = "<p>Content not available.</p>";
  if (typeof allContent === "string") {
    content = allContent;
  } else if (typeof allContent === "object") {
    content = allContent?.[subtype] || allContent?.[config.defaultButtonType] || content;
  }

  sidebar.innerHTML = content;
}

function updateRightSidebar(topicId, subtype) {
  const config = functionalityConfig[topicId];
  const html = config?.rightSidebarContent?.[subtype];

  const container = document.getElementById("right-sidebar");
  if (container) {
    container.innerHTML = html || "";

    // ✅ Always append summaryBlock so it exists
    const summaryDiv = document.createElement("div");
    summaryDiv.id = "summaryBlock";
    container.appendChild(summaryDiv);
  }
}


export function updateRightSidebarAfterSubmit({ topicId, subtype, responses }) {
  const formStructure = resolveFormStructure(topicId, subtype);
  const fields = getApplicableFields(formStructure, subtype);

  if (!formStructure || !Array.isArray(fields)) {
    console.warn("⚠️ Invalid or missing formStructure for", topicId, subtype);
    return;
  }

  const validKeys = ['length1', 'length2', 'angle1', 'angle2', 'result', 'int1', 'int2', 'ext', 'sum'];

  fields.forEach((field, index) => {
    validKeys.forEach((key) => {
      const fieldName = field[key];
      if (!fieldName) return;

      const value = responses[fieldName];
      if (value === undefined) {
        console.warn(`⚠️ Missing response value for field: ${fieldName}`);
        return;
      }

      const input = document.querySelector(`[name="${fieldName}"], [id="${fieldName}"]`);
      if (!input) {
        console.warn(`⚠️ Missing DOM element for: ${fieldName}`);
        return;
      }

      if (input.tagName === 'SPAN' || key === 'result') {
        input.innerText = value;
      } else {
        input.value = value;
      }
    });
  });

  const conclusionField = document.querySelector(`[name="${formStructure.conclusion}"], [id="${formStructure.conclusion}"]`);
  if (conclusionField && responses[formStructure.conclusion] !== undefined) {
    conclusionField.value = responses[formStructure.conclusion];
  }

  console.log("✅ Right sidebar inputs updated from saved responses.");
}





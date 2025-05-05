import { functionalityConfig } from './functionalityConfig.js';
import { CanvasManager, canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { updateHeaderLabels } from './header.js';

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
export function switchFunctionality(functionalityKey, buttonType = null) {
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
  
    // 🧠 Header update
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
    updateRightSidebar(functionalityKey, effectiveType);
    canvasManager.render();
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

  triangles.forEach(({ vertices, vertexA, vertexB, vertexC, labels, showMidpoints = true, showMeasurements = false, enableDrag = false }) => {
    if (vertices?.length === 3) [vertexA, vertexB, vertexC] = vertices;
    const triangle = new Triangle(vertexA, vertexB, vertexC);
    triangle.setVertexLabels(labels);
    triangle.setEnableDrag(enableDrag);
    triangle.setShowMidpoints(showMidpoints);
    triangle.setShowMeasurements(showMeasurements);
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

export function updateRightSidebar(functionalityKey, subtype = null) {
  const config = functionalityConfig[functionalityKey];
  if (!config) return;

  const sidebar = document.querySelector(".sidebar.right");
  const allContent = config.rightSidebarContent;

  let content = "<p>Content not available.</p>";
  if (typeof allContent === "string") {
    content = allContent;
  } else if (typeof allContent === "object") {
    content = allContent?.[subtype] || allContent?.[config.defaultButtonType] || content;
  }

  sidebar.innerHTML = content;
}

/**
 * Program: Parallel Lines Canvas Tool (Merged Final Version)
 * Description: Handles dynamic drawing and UI updates for Parallel Lines Theorem with sub-button support.
 */

import { functionalityConfig } from './commonConfig.js';
import { CanvasManager, canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { Arc } from '../shapes/Arc.js';  // ✅ Import at the top
import { updatePageTitle } from './header.js';
import { updateHeaderLabels } from './header.js';
import { loadProgress, saveProgress, getProgressStatus, loadSavedProgress } from './progress.js';
import { handleSubmit,handleSave, resolveFormStructure } from './formUtils.js';
let currentSubtype = null;  // define at top of your JS file

import { db } from './firebase-init.js';
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const page = location.pathname.split("/").pop();
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};

function getApplicableFields(formStructure, subtype) {
  if (!formStructure?.fields) return [];
  return formStructure.fields.filter(f => !f.subtype || f.subtype === subtype);
}

/* 
function renderRightSidebarFromConfig(topicId, subtype) {
    const config = functionalityConfig[topicId];
    const formStructure = config?.formStructure?.[subtype];
  
    if (!formStructure || !Array.isArray(formStructure.fields)) {
      console.warn("⚠️ No form structure for", topicId, subtype);
      return;
    }
  
    const rightSidebar = document.getElementById("right-sidebar");
    rightSidebar.innerHTML = ''; // Clear previous content
  
    formStructure.fields.forEach(({ angle1, angle2, result }) => {
      rightSidebar.innerHTML += `
        <div class="form-row">
          <label>∠${angle1}: <input type="text" name="${angle1}" /></label><br>
          <label>∠${angle2}: <input type="text" name="${angle2}" /></label><br>
          <label>Equal? <span name="${result}"></span></label><hr>
        </div>
      `;
    });
  
    if (formStructure.conclusion) {
      rightSidebar.innerHTML += `
        <div class="form-row">
          <label>Conclusion: <textarea name="${formStructure.conclusion}"></textarea></label>
        </div>
      `;
    }
  }
    */

  function drawArcs(canvasConfig) {
  if (!canvasConfig.arcs) return;

  canvasConfig.arcs.forEach(({ vertex, pointA, pointB, scale = 0.2, color = '#0077cc' }) => {
    if (!vertex || !pointA || !pointB) {
      console.warn("⚠️ Arc config missing vertex or arc endpoints.");
      return;
    }

    const dx = pointA.x - vertex.x;
    const dy = pointA.y - vertex.y;
    const radius = Math.sqrt(dx * dx + dy * dy) * scale;
    
    console.log("The radius is ", radius);
    const angle1 = Math.atan2(pointA.y - vertex.y, pointA.x - vertex.x);
    const angle2 = Math.atan2(pointB.y - vertex.y, pointB.x - vertex.x);

    let startAngle = angle1;
    let endAngle = angle2;
    let anticlockwise = false;

    if (angle2 < angle1) {
      [startAngle, endAngle] = [angle2, angle1];
      anticlockwise = true;
    }

    const arc = new Arc(vertex.x, vertex.y, radius, startAngle, endAngle, anticlockwise, color);
    arc.strokeStyle = color;

    canvasManager.addShape(arc);
  });
}

/*
  function renderSubmissionTable(topicId, subtype, responses) {
    const container = document.getElementById("right-sidebar");
    console.log("The renderSubmissionTable function initiated", topicId, subtype, responses, container)
    if (!container) return;
  
    container.innerHTML = `<h3>📝 Your Submission Summary</h3>`;
    console.log("level 1")
    const makeTable = (tableData, tableLabel) => {
      const table = document.createElement("table");
      table.className = "table";
      table.style.marginBottom = "12px";
      table.innerHTML = `
        <tr><th colspan="3" style="text-align:left; background:#d9e1f2;">${tableLabel}</th></tr>
        <tr style="background:#f0f0f0;">
          <th>Angle 1</th><th>Angle 2</th><th>Result</th>
        </tr>`;
  
      tableData.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.angle1 || "-"}</td>
          <td>${row.angle2 || "-"}</td>
          <td>${row.result || "-"}</td>`;
        table.appendChild(tr);
      });
      console.log("level 2")
      return table;
    };
  
    container.appendChild(makeTable(responses.table1 || [], "Table 1"));
    container.appendChild(makeTable(responses.table2 || [], "Table 2"));
    container.appendChild(makeTable(responses.table3 || [], "Table 3"));
  
    const conclusion = document.createElement("p");
    conclusion.innerHTML = `<strong>Student's Conclusion:</strong><br>${responses.studentConclusion || "-"}`;
    conclusion.style.marginTop = "10px";
    container.appendChild(conclusion);
  }
  
  */

function updateSidebarStatus(subtype, status) {
  const el = document.getElementById(`status-${subtype}`);
  if (el) {
    el.textContent = status;
    el.style.color =
      status === "completed" ? "green" :
      status === "in_progress" ? "orange" : "gray";
  }
}




/**
 * 🔄 Switches functionality, redraws shapes, and updates UI.
 */
export async function switchFunctionality(functionalityKey, buttonType = null) {
  console.log("🔁 switchFunctionality called with:", functionalityKey, buttonType);
  console.log("🚨 DEBUG switchFunctionality called with:", arguments);
  window.currentFunctionalityKey = functionalityKey;
  window.currentSubtype = buttonType; // 🟢 make sure this is set


  const fnConfig = functionalityConfig[functionalityKey];
  if (!fnConfig) {
    console.error("❌ Invalid functionalityKey:", functionalityKey);
    return;
  }

  const effectiveType = buttonType !== null && buttonType !== undefined
    ? buttonType
    : (fnConfig.defaultButtonType || null);

  const topicId = functionalityKey;
  const subtype = effectiveType || null;

  console.log("The values of topicId and subtype are", { topicId, subtype });

  window.currentFunctionalityKey = functionalityKey;
  window.currentSubtype = subtype;

  // Header updates
  const page = location.pathname.split("/").pop();
  const pageTitles = {
    "index.html": "Home",
    "parallel_lines_04.html": "Parallel Lines",
    "triangle_theorem_07.html": "Triangle Theorems",
    "trig_properties_09.html": "Trigonometric Properties",
    "circle_theorems_02.html": "Circle Theorems"
  };
  const mainTitle = pageTitles[page] || "Math App";
  const subtitleLabel = fnConfig.theoremTitle || "";
  const activeSubBtnLabel = fnConfig.buttonSet?.find(btn => btn.type === effectiveType)?.label || "";

  updateHeaderLabels({
    title: mainTitle,
    subtitle: subtitleLabel ? `| ${subtitleLabel}` : "",
    subButton: activeSubBtnLabel ? `| ${activeSubBtnLabel}` : ""
  });

  // Redraw canvas and UI
  canvasManager.clearAllShapes();
  drawShapes(fnConfig.canvasConfig, subtype);
  updateUI(fnConfig, functionalityKey, subtype);
  updateLeftSidebar(functionalityKey, subtype);
  canvasManager.render();

  // Progress load logic
  const uid = localStorage.getItem("uid");
  if (uid) {
    const docId = `${uid}_${topicId}_${subtype}`;
    const status = await getProgressStatus(uid, topicId, subtype);
    console.log("The topic is",topicId);
    if (status === "submitted") {
      const savedData = await loadSavedProgress(uid, topicId, subtype);
      updateRightSidebar(topicId, subtype); // render form structure
      updateRightSidebarAfterSubmit(topicId, subtype, savedData); // fill values
     
    } else if (status === "saved") {
      console.log("💾 Found saved progress. Rendering form and applying saved values...");
      
      const savedData = await loadSavedProgress(uid, topicId, subtype);

      updateRightSidebar(topicId, subtype);
      console.log("🧪 Inputs currently in DOM:", Array.from(document.querySelectorAll("#right-sidebar input")).map(el => el.name));

      updateRightSidebarAfterSubmit(
        topicId,
        subtype,
        savedData
      );

    } else {
      console.log("📝 No submission yet. Initializing empty form...");
      updateRightSidebar(topicId, subtype);
      await saveProgress(uid, topicId, subtype, "in-progress", {});
    }
  }
}



export function updateRightSidebar(functionalityKey, subtype = null) {
  console.log("➡️ updateRightSidebar called with:", functionalityKey, subtype);
  const fnConfig = functionalityConfig[functionalityKey];

  let content = "";
  if (typeof fnConfig.rightSidebarContent === "string") {
    // ✅ Single shared content across all subtypes
    content = fnConfig.rightSidebarContent;
  } else if (fnConfig.rightSidebarContent?.[subtype]) {
    // ✅ Subtype-specific sidebar content
    content = fnConfig.rightSidebarContent[subtype];
  }

  if (!content) {
    console.warn("⚠️ No sidebar content found for", functionalityKey, subtype);
    return;
  }

  document.getElementById("right-sidebar").innerHTML = content;
  console.log("✅ Sidebar content inserted.");
}



export function updateRightSidebarAfterSubmit(topicId, subtype, savedData) {
  console.log("The topic is", topicId);
  const config = functionalityConfig[topicId];
  console.log("The config structure is ", config);

  const formStructure = config?.formStructure;
  console.log("The form structure is ", formStructure);

  if (!formStructure || !formStructure.fields) {
    console.warn("⚠️ No form structure found for topic:", topicId);
    return;
  }

  // ✅ Collect all matching field blocks
  const fieldBlocks = formStructure.fields.filter(f => {
      return !("subtype" in f) || f.subtype === subtype;
    });

  if (fieldBlocks.length === 0) {
    console.warn(`⚠️ No form field block found for subtype: ${subtype}`);
    return;
  }

  const idsToRestore = [];

  // ✅ Collect all expected IDs from all matching field blocks
  fieldBlocks.forEach(field => {
    field.angles?.forEach(({ id }) => idsToRestore.push(id));
    field.lengths?.forEach(({ id }) => idsToRestore.push(id));
    field.results?.forEach(({ id }) => idsToRestore.push(id));
  });

  // 📌 Add conclusion field
  if (formStructure.conclusion) {
    idsToRestore.push(formStructure.conclusion);
  }

  // 🧠 Loop and restore values
  idsToRestore.forEach(id => {
    const el = document.getElementById(id);
    const savedValue = savedData[id];
    if (!el || savedValue === undefined) {
      console.warn("⚠️ Skipping missing response for:", id);
      return;
    }

    if (el.tagName === "SPAN") {
      el.innerText = savedValue;
    } else {
      el.value = savedValue;
    }
  });

  if (formStructure.conclusion) {
    const el = document.getElementById(formStructure.conclusion);
    const savedValue = savedData[formStructure.conclusion];
    if (el && savedValue !== undefined) {
      el.value = savedValue;
    }
  }

  console.log("✅ Right sidebar inputs updated from saved responses.");
}



/**
 * 🖌️ Draws points, lines, triangles, circles depending on config and buttonType
 */
function drawShapes(canvasConfig, buttonType = null) {
  if (canvasConfig.points) drawPoints(canvasConfig, buttonType);
  if (canvasConfig.circle) drawCircle(canvasConfig);

  const hasTraditionalTangents = canvasConfig.externalPoints && canvasConfig.externalPoints[buttonType];
  const hasMidpointTangents = Array.isArray(canvasConfig.tangentLines) &&
                               canvasConfig.tangentLines.some(t => t.subtype === buttonType);

  if (hasTraditionalTangents || hasMidpointTangents) {
      drawTangents(canvasConfig, buttonType);
  }

  if (canvasConfig.triangles) drawTriangles(canvasConfig, buttonType);
  if (canvasConfig.lines) drawLines(canvasConfig, buttonType);
  if (canvasConfig.arcs) drawArcs(canvasConfig, buttonType);

}

export function drawPoints(canvasConfig, buttonType = null) {
  let points = canvasConfig.points || [];

  // ✅ Also consider external points for current subtype
  if (canvasConfig.externalPoints) {
    const externalPoint = canvasConfig.externalPoints[buttonType];
    if (externalPoint) {
      points.push(externalPoint);
    }
  }

  // ✅ Filter by subtype (e.g., sin/cos/tan)
  points = points.filter(p => !p.subtype || p.subtype === buttonType);

  if (!points.length) {
    console.warn(`⚠️ No points found for subtype "${buttonType}"`);
    return;
  }

  points.forEach(({ x, y, label, color = "black", radius = 5 }) => {
    if (x === undefined || y === undefined) {
      console.warn("⚠️ Skipping invalid point:", { x, y, label });
      return;
    }

    const point = new Point(x, y, label || "", color, radius);
    point.setEnableDrag(false);
    point.setShowLabel(true); // ✅ Ensure label is visible
    canvasManager.addShape(point);

    console.log(`🟢 Point added: ${label} (${x}, ${y})`);
  });

  
}




function drawLines(canvasConfig, subtype = null) {
  if (!canvasConfig.lines) return;

  canvasConfig.lines
      .filter(line =>
          !line.subtype || line.subtype === subtype  // ✅ relaxed filter
      )
      .forEach(({ endA, endB, color = "black", enableDrag = false }) => {
          if (endA && endB) {
              const line = new Line(endA, endB, color);
              line.setEnableDrag(false);
              canvasManager.addShape(line);
          }
      });
}


function drawCircle(canvasConfig) {
    if (!canvasConfig.circle) return;
    const [center, radius] = canvasConfig.circle;
    const circle = new Circle(center, radius);
    const enableDrag = canvasConfig.enableDrag ?? false;
    circle.setEnableDrag?.(enableDrag);
    circle.setEnableStretch?.(false);

    canvasManager.addShape(circle);
}



function drawTriangles(canvasConfig, buttonType = null) {
  const triangles = buttonType
    ? canvasConfig.triangles.filter(tri => tri.type === buttonType)
    : canvasConfig.triangles;

  triangles.forEach((triangleData) => {
    let {
      vertices,
      vertexA,
      vertexB,
      vertexC,
      labels,
      midpointLabels,
      showMidpoints = true,
      showMeasurements = true,    
      enableDrag = false
    } = triangleData;

    // Support both vertices array and individual points
    if (vertices?.length === 3) [vertexA, vertexB, vertexC] = vertices;

    if (!vertexA || !vertexB || !vertexC) {
      console.warn("⚠️ Incomplete triangle vertices:", triangleData);
      return;
    }

    const triangle = new Triangle(vertexA, vertexB, vertexC);

    triangle.setVertexLabels(labels);
    triangle.setMidpointLabels(midpointLabels);      // ✅ fix for midpoint label issue
    triangle.setEnableDrag(enableDrag);
    triangle.setShowMidpoints(showMidpoints);
    triangle.setShowMeasurements(showMeasurements);
    triangle.setShowLabels(true);                    // ✅ show A/B/C labels

    canvasManager.addShape(triangle);
  });
}


function drawAngleArc(canvasConfig) {
  if (!canvasConfig) return;

  const vertex = canvasConfig.vertex;
  const pointA = canvasConfig.pointA;
  const pointB = canvasConfig.pointB;

  if (!vertex || !pointA || !pointB) {
    console.warn("⚠️ canvasConfig missing vertex or points");
    return;
  }

  const label = canvasConfig.label || '';
  const color = canvasConfig.color || 'orange';
  const scale = canvasConfig.scale ?? 0.3; // Default scale

  // Auto radius from vertex to pointA
  const dx = pointA.x - vertex.x;
  const dy = pointA.y - vertex.y;
  const radius = Math.sqrt(dx * dx + dy * dy) * scale;

  const angle1 = Math.atan2(pointA.y - vertex.y, pointA.x - vertex.x);
  const angle2 = Math.atan2(pointB.y - vertex.y, pointB.x - vertex.x);

  let startAngle = angle1;
  let endAngle = angle2;
  let anticlockwise = false;

  if (angle2 < angle1) {
    [startAngle, endAngle] = [angle2, angle1];
    anticlockwise = true;
  }

  ctx.beginPath();
  ctx.arc(vertex.x, vertex.y, radius, startAngle, endAngle, anticlockwise);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();

  if (label) {
    const midAngle = (startAngle + endAngle) / 2;
    const labelX = vertex.x + (radius + 10) * Math.cos(midAngle);
    const labelY = vertex.y + (radius + 10) * Math.sin(midAngle);
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(label, labelX, labelY);
  }
}



function drawTangents(config, subtype) {
  console.log(`🎯 Processing Tangents for ${subtype}`);

  console.log(`🎯 drawTangents() called for subtype: ${subtype}`);

  const { circle, points = [], externalPoints = {}, tangentLines = [] } = config;

  const tangentPoints = points.filter(p => p.type === "tangent" && p.subtype === subtype);
  const hasTangentLines = Array.isArray(tangentLines) && tangentLines.some(t => t.subtype === subtype);
  
  if (tangentPoints.length !== 2 && !hasTangentLines) {
      console.warn(`⚠️ No valid tangent points or tangent lines found for subtype "${subtype}". Skipping drawTangents.`);
      return;
  }
  
  if (!circle || !points) {
      console.warn("⚠️ Invalid tangent configuration.");
      return;
  }

  const [center, radius] = circle;

  /*** 📌 Step 1: Handle Standard Two-Point Tangents ***/
  
  if (tangentPoints.length === 2) {
      console.log(`✅ Found two tangent points for ${subtype}:`, tangentPoints);

      const [point1, point2] = tangentPoints;

      // Compute external intersection dynamically
      const computedExternal = findTangentIntersection(center, radius, point1, point2);
      if (!computedExternal) {
          console.warn("❌ Could not compute external tangent intersection.");
          return;
      }

      // Assign metadata from config.externalPoints
      const externalPointConfig = externalPoints[subtype] || {};
      const externalPoint = {
          ...computedExternal,
          label: externalPointConfig.label || subtype.toUpperCase(),
          color: externalPointConfig.color || "blue",
          radius: externalPointConfig.radius || 5
      };

      console.log(`✅ Using tangent points for ${subtype}:`, point1, point2, "and external point:", externalPoint);

      // Draw traditional tangents
      drawLines({
          lines: [
              { endA: point1, endB: externalPoint, color: "red" },
              { endA: point2, endB: externalPoint, color: "red" }
          ]
      });

      // Draw external point
      console.log("🖊 Drawing external point:", externalPoint);
      externalPoint.enableDrag = false;
      drawPoints({ points: [externalPoint] });


      console.log(`🎯 Tangents drawn for ${subtype} with external point ${externalPoint.label}`);
  } else if (tangentPoints.length > 2) {
      console.warn(`⚠️ Expected 2 tangent points for ${subtype}, but found more.`);
  }

  /*** 📌 Step 2: Handle Midpoint-Based Tangents ***/
  console.log("The tangentLines are", tangentLines);
  if (tangentLines) {
      const midTangents = tangentLines.filter(t => t.subtype === subtype);
      console.log("The mid Tangents are ", midTangents);
      midTangents.forEach(({ midpoint, length, color = "black" }) => {
          if (!midpoint || !length) {
              console.warn("⚠️ Skipping invalid midpoint tangent (missing parameters):", { midpoint, length });
              return;
          }

          // Compute perpendicular direction to the radius
          let dx = midpoint.x - center.x;
          let dy = midpoint.y - center.y;

          // Compute perpendicular (rotate 90 degrees)
          let perpX = -dy;
          let perpY = dx;

          // Normalize
          let magnitude = Math.sqrt(perpX * perpX + perpY * perpY);
          perpX /= magnitude;
          perpY /= magnitude;

          // Compute endpoints
          let halfLength = length / 2;
          let endA = { x: midpoint.x + halfLength * perpX, y: midpoint.y + halfLength * perpY };
          let endB = { x: midpoint.x - halfLength * perpX, y: midpoint.y - halfLength * perpY };

          console.log(`📏 Drawing midpoint tangent from (${endA.x}, ${endA.y}) to (${endB.x}, ${endB.y})`);

          // Draw the midpoint tangent
          drawLines({ lines: [{ endA, endB, color }] });

          // Draw the midpoint itself
          midpoint.enableDrag = false;
          drawPoints({ points: [midpoint] });

      });
  }

  console.log(`🎯 Tangents processing complete for ${subtype}`);
}

function findTangentIntersection(center, radius, point1, point2) {
  const { x: h, y: k } = center;
  const r = radius;
  
  // Compute slope of the line joining two tangent points
  const slope = (point2.y - point1.y) / (point2.x - point1.x);

  // Compute the perpendicular slope
  const perpSlope = -1 / slope;

  // Midpoint of tangent points
  const midX = (point1.x + point2.x) / 2;
  const midY = (point1.y + point2.y) / 2;

  // External point should be positioned further along the perpendicular line
  const distance = Math.sqrt(r * r - ((midX - h) ** 2 + (midY - k) ** 2));

  return {
      x: midX + distance * Math.cos(Math.atan(perpSlope)),
      y: midY + distance * Math.sin(Math.atan(perpSlope))
  };
}


/**
 * 🧠 Updates UI elements like theorem text and sub-buttons.
 */
function updateUI(config, functionalityKey, buttonType = null) {
  console.log("The config received is", config, functionalityKey, buttonType);
  const theoremText = config.theoremDefinitions?.[buttonType] || config.theoremDefinition;

  updateTheoremText(config, buttonType);

  const dynamicButtons = document.getElementById("dynamic-buttons");
  dynamicButtons.innerHTML = "";

  if (Array.isArray(config.buttonSet)) {
  config.buttonSet.forEach(({ label, type, svg }) => {
    const wrapper = document.createElement("div");
    wrapper.className = "tooltip-container";
    wrapper.dataset.type = type;

    // ⬇️ SVG parsing
    const svgWrapper = document.createElement("div");
    svgWrapper.innerHTML = svg;
    const icon = svgWrapper.firstElementChild;

    if (!icon || !icon.classList) {
      console.warn("⚠️ Invalid SVG element:", icon);
      return;
    }

    icon.classList.add("sub-button-svg");
    wrapper.appendChild(icon);

    // Tooltip
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.textContent = label;
    wrapper.appendChild(tooltip);

    // 🔁 Click handler
    wrapper.addEventListener("click", () => {
      document.querySelectorAll("#dynamic-buttons .tooltip-container").forEach(el => {
        el.classList.remove("active");
      });
      wrapper.classList.add("active");
      console.log("🔘 Active subtype set:", type);
      switchFunctionality(functionalityKey, type);
    });

    dynamicButtons.appendChild(wrapper);

    // ✅ Initial active state
    if (window.currentSubtype === type) {
      wrapper.classList.add("active");
    }
  });
  } else {
  console.warn("⚠️ No buttonSet defined for:", functionalityKey);
  }
  dynamicButtons.style.display = "flex";
}



export function updateLeftSidebar(functionalityKey, subtype = null) {
    const config = functionalityConfig[functionalityKey];
    if (!config) return;

    const sidebar = document.querySelector(".sidebar.left");
    const allContent = config.leftSidebarContent;

    let content = "<p>Content not available.</p>";

    if (typeof allContent === "string") {
        content = allContent;
    } else if (typeof allContent === "object") {
        // ✅ Try in this order: specific subtype > defaultButtonType > fallback message
        content = allContent?.[subtype] || allContent?.[config.defaultButtonType] || content;
    }

    sidebar.innerHTML = content;
}


function loadFormData(formData) {
  if (!formData) return;

  Object.entries(formData).forEach(([key, value]) => {
    const field = document.querySelector(`[name="${key}"]`);

    if (!field) {
      // Also support result spans or divs for comparison outputs
      const displayEl = document.querySelector(`span[name="${key}"], div[name="${key}"]`);
      if (displayEl) {
        displayEl.innerText = value;
      }
      return;
    }

    const tag = field.tagName.toLowerCase();
    const type = field.type?.toLowerCase();

    if (tag === "input") {
      if (type === "checkbox" || type === "radio") {
        field.checked = !!value;
      } else {
        field.value = value;
      }
    } else if (tag === "textarea") {
      field.value = value;
    } else if (tag === "select") {
      field.value = value;
    }

    // Trigger validation and rendering
    field.dispatchEvent(new Event("input", { bubbles: true }));
  });
}




export function updateTheoremText(config, subtype = null) {
    console.log("Inside updateTheoremText", config, subtype);

    let definitionText = "";

    // ✅ Try subtype-specific definition first
    if (config.theoremDefinitions && typeof config.theoremDefinitions === 'object') {
        if (subtype && config.theoremDefinitions[subtype]) {
            definitionText = config.theoremDefinitions[subtype];
        } else {
            // ✅ Use any available definition as fallback
            const values = Object.values(config.theoremDefinitions);
            if (values.length > 0) {
                definitionText = values[0];  // take the first available
            }
        }
    }

    // ✅ Fallback to single-string definition (optional)
    if (!definitionText && typeof config.theoremDefinition === 'string') {
        definitionText = config.theoremDefinition;
    }

    // ✅ Final fallback
    if (!definitionText) {
        definitionText = "Definition not available.";
    }

    document.getElementById("theorem-text").innerHTML = definitionText;
}


export function activateButton(containerSelector, button) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.querySelectorAll(".triangle-button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

export function updateActiveButton(buttonElement) {
    const current = document.querySelector(".navigation-buttons button.active, .triangle-button.active");
    if (current !== buttonElement) {
        document.querySelectorAll(".navigation-buttons button, .triangle-button").forEach(btn => btn.classList.remove("active"));
        buttonElement?.classList.add("active");
    }
}

export function addSpecificPoints(points, ctx) {
    points.forEach(({ x, y, label, color, radius }) => {
        const pt = new Point(x, y, label, color, radius);
        canvasManager.addSpecificPoint(pt);
        pt.draw(ctx, true, false);
    });
    canvasManager.render();
}

export async function saveProgressToFirestore(payload) {
    // Ensure Firebase is initialized and db is defined
    if (typeof db === "undefined") {
      console.error("❌ Firestore DB is not initialized.");
      return;
    }
  
    try {

    if (!payload?.id) {
        console.warn("⛔ payload.id is undefined when accessing student_progress");
        return;
      }
     
    const docRef = doc(db, "student_progress", payload.id);
    await setDoc(docRef, payload);
    console.log(`✅ Data successfully saved to Firestore for ID: ${payload.id}`);
  } catch (error) {
    console.error("❌ Error saving to Firestore:", error);
  }
  }
  

  /**
 * ✅ Collects responses from the right sidebar form for a given topic and subtype
 * Used by both Save and Submit operations.
 */
  
  
  
  
  /*


  export function generateSummaryBlock(progressData) {
    const { topicId, subtype, responses = {} } = progressData;
    const formStructure = resolveFormStructure(topicId, subtype);
    const fields = getApplicableFields(formStructure, subtype);
  
    if (!formStructure || !Array.isArray(fields)) {
      console.warn("⚠️ No valid formStructure for:", topicId, subtype);
      return;
    }
  
    const summaryContainer = document.getElementById("right-sidebar");
    summaryContainer.innerHTML = "";
  
    const heading = document.createElement("h3");
    heading.textContent = "Submitted Summary";
    summaryContainer.appendChild(heading);
  
    const table = document.createElement("table");
    table.className = "summary-table";
    table.style.width = "100%";
  
    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Angle Measure</th>
        <th>Alternate Interior Angle</th>
        <th>Equality Check</th>
      </tr>`;
    table.appendChild(thead);
  
    const tbody = document.createElement("tbody");
    fields.forEach(({ angle1, angle2, result, label1, label2 }) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${label1 || angle1}:</strong> ${responses[angle1] || "-"}</td>
        <td><strong>${label2 || angle2}:</strong> ${responses[angle2] || "-"}</td>
        <td>= ${responses[result] || "-"}</td>`;
      tbody.appendChild(tr);
    });
  
    table.appendChild(tbody);
    summaryContainer.appendChild(table);
  
    if (formStructure.conclusion && responses[formStructure.conclusion]) {
      const conclusion = document.createElement("p");
      conclusion.innerHTML = `<strong>Conclusion:</strong> ${responses[formStructure.conclusion]}`;
      summaryContainer.appendChild(conclusion);
    }
  }

  function resolveFormStructure(topicId, subtype) {
    const raw = functionalityConfig[topicId]?.formStructure;
  
    console.log("📦 resolveFormStructure:", { topicId, subtype, raw });
  
    if (raw?.fields) return raw;
    if (Array.isArray(raw)) return { fields: raw };
    console.warn("⚠️ resolveFormStructure failed for topic:", topicId, "→ raw =", raw);
    return null;
  } */
  
 export function animateMidsegmentTheorem() {
    canvasManager.clear(); // Step 0: Clear canvas
    const ctx = canvasManager.ctx; // Optional direct access
    // Step 1: Draw triangle vertices
    const A = new Point(300, 200, "A", "red", 5);
    const B = new Point(200, 400, "B", "red", 5);
    const C = new Point(400, 400, "C", "red", 5);

    setTimeout(() => {
        drawPoints({ points: [A, B, C] });
    }, 300);

    // Step 2: Draw triangle sides
    setTimeout(() => {
        drawLines({ lines: [
            { endA: A, endB: B, color: "black" },
            { endA: B, endB: C, color: "black" },
            { endA: C, endB: A, color: "black" }
        ]});
    }, 800);

    // Step 3: Compute & draw midpoints D and E
    const D = new Point((A.x + B.x) / 2, (A.y + B.y) / 2, "D", "blue", 5);
    const E = new Point((A.x + C.x) / 2, (A.y + C.y) / 2, "E", "blue", 5);

    setTimeout(() => {
        drawPoints({ points: [D, E] });
    }, 1500);

    // Step 4: Draw midsegment DE
    setTimeout(() => {
        drawLines({ lines: [
            { endA: D, endB: E, color: "green", dashed: true }
        ]});
    }, 2200);

    // Step 5: Optional Text or Highlight
    setTimeout(() => {
        canvasManager.showText?.("DE ∥ BC and DE = ½ × BC", 240, 160, "darkgreen");
    }, 2800);
}

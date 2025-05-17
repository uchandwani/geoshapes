/**
 * Program: Parallel Lines Canvas Tool (Merged Final Version)
 * Description: Handles dynamic drawing and UI updates for Parallel Lines Theorem with sub-button support.
 */

import { functionalityConfig } from './parallelLinesConfig.js';
import { CanvasManager, canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { updatePageTitle } from './header.js';
import { updateHeaderLabels } from './header.js';
import { loadProgress, saveProgress, getProgressStatus, loadSavedProgress } from './progress.js';

let currentSubtype = null;  // define at top of your JS file

import { db } from './firebase-init.js';
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


// ✅ Collect form values and save to Firestore, then update the right sidebar
export async function handleSubmit(topicId = currentFunctionalityKey, subtype = currentSubtype) {
  const formStructure = functionalityConfig[topicId]?.formStructure?.[subtype];
  if (!formStructure) {
    console.warn("⚠️ No formStructure defined for", topicId, subtype);
    return;
  }

  const responses = {};

  // Gather field values from the form
  formStructure.fields.forEach(({ angle1, angle2, result }) => {
    responses[angle1] = document.querySelector(`[name="${angle1}"]`)?.value || '';
    responses[angle2] = document.querySelector(`[name="${angle2}"]`)?.value || '';
    responses[result] = document.querySelector(`[name="${result}"], [id="${result}"]`)?.innerText || '';
  });

  // Student's conclusion
  const conclusionField = document.querySelector(`[name="${formStructure.conclusion}"], [id="${formStructure.conclusion}"]`);
  responses[formStructure.conclusion] = conclusionField?.value || '';

  // Save submission to Firestore
  const uid = localStorage.getItem("uid") || "anonymous";
  const docId = `${uid}_${topicId}_${subtype}`;

  if (!docId) {
    console.warn("⛔ docId is undefined in parallelLinesEventHandlers.js");
    return;
  }
  
  const docRef = doc(db, "progress", docId);

  await setDoc(docRef, {
    uid,
    topicId,
    subtype,
    responses,
    status: "submitted",  // ✅ Mark as submitted
    timestamp: serverTimestamp()
  });

  console.log("✅ Data successfully saved to Firestore");

  // 🔄 Refresh view based on saved submission
  loadProgress(uid, topicId, subtype);
}

  // After your function definition in parallelLinesEventHandlers.js
window.handleSubmit = handleSubmit;

  
  // ✅ Update sidebar display after submission
 
 
  async function handleSave(topicId = currentFunctionalityKey, subtype = currentSubtype) {
    const formStructure = functionalityConfig[topicId]?.formStructure?.[subtype];
    if (!formStructure) {
      console.warn("⚠️ No formStructure defined for", topicId, subtype);
      return;
    }
  
    const responses = {};
    console.log("🧪 formStructure in handleSave:", formStructure);
  
    // ✅ Corrected field loop
    (formStructure.fields || []).forEach(({ angle1, angle2, result }) => {
      const el1 = document.querySelector(`[name="${angle1}"]`);
      const el2 = document.querySelector(`[name="${angle2}"]`);
      const resultEl = document.querySelector(`[name="${result}"], [id="${result}"]`);
    
      console.log(`🔍 angle1 (${angle1}):`, el1?.value);
      console.log(`🔍 angle2 (${angle2}):`, el2?.value);
      console.log(`🔍 result (${result}):`, resultEl?.innerText);
    
      responses[angle1] = el1?.value || '';
      responses[angle2] = el2?.value || '';
      responses[result] = resultEl?.innerText || '';
    });
    
  
    // Conclusion field
    const conclusionField = document.querySelector(`[name="${formStructure.conclusion}"], [id="${formStructure.conclusion}"]`);
    responses[formStructure.conclusion] = conclusionField?.value || '';
    console.log("🧪 responses in handleSave:", responses);
  
    const uid = localStorage.getItem("uid") || "anonymous";
    const docId = `${uid}_${topicId}_${subtype}`;
    if (!docId) {
      console.warn("⛔ docId is undefined in parallelLinesEventHandlers.js");
      return;
    }
    
    const docRef = doc(db, "progress", docId);
  
    try {
      await setDoc(docRef, {
        uid,
        topicId,
        subtype,
        responses,
        status: "saved",
        timestamp: serverTimestamp(),
      });
      console.log(`📝 Progress saved to Firestore with status: saved`);
  
      // Reload progress to confirm what’s saved
      loadProgress(uid, topicId, subtype);
    } catch (error) {
      console.error("❌ Error saving progress:", error);
    }
  }
  

  window.handleSave = handleSave;

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
  
  

function updateSidebarStatus(subtype, status) {
  const el = document.getElementById(`status-${subtype}`);
  if (el) {
    el.textContent = status;
    el.style.color =
      status === "completed" ? "green" :
      status === "in_progress" ? "orange" : "gray";
  }
}


const page = location.pathname.split("/").pop();
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};


/**
 * 🔄 Switches functionality, redraws shapes, and updates UI.
 */
export async function switchFunctionality(functionalityKey, buttonType = null) {
    console.log("🔁 switchFunctionality called with:", functionalityKey, buttonType);
  
    const fnConfig = functionalityConfig[functionalityKey];
    if (!fnConfig) {
      console.error("❌ Invalid functionalityKey:", functionalityKey);
      return;
    }
  
    const effectiveType = buttonType || fnConfig.defaultButtonType || null;
    console.log("🎯 Using subtype:", effectiveType);
    currentSubtype = effectiveType;
  
    // ✅ Store state globally
    window.currentFunctionalityKey = functionalityKey;
    window.currentSubtype = effectiveType;
    let topicId = functionalityKey;
    let subtype = effectiveType;
    // 🔹 Header Titles
    const page = location.pathname.split("/").pop();
    const pageTitles = {
      "index.html": "Home",
      "parallel_lines_04.html": "Parallel Lines",
      "triangle_theorem_07.html": "Triangle Theorems",
      "trig_properties_09.html": "Trigonometric Properties",
      "circle_theorems_02.html": "Circle Theorems"
    };
    const mainTitle = pageTitles[page] || "Math App";
  
    const subtitleMap = {
      verticallyOpposite: "Vertically Opposite",
      parallelProperties: "Parallel Line Properties",
      exteriorAngles: "Exterior Angles",
      angleSumProperties: "Angle Sum"
    };
    const subtitleLabel = subtitleMap[functionalityKey] || "";
  
    let activeSubBtnLabel = "";
    if (fnConfig.buttonSet && effectiveType) {
      const match = fnConfig.buttonSet.find(btn => btn.type === effectiveType);
      activeSubBtnLabel = match?.label || "";
    }
  
    console.log("🧠 Header Composition Check");
    console.log("   Main Title:", mainTitle);
    console.log("   Subtitle (from icon title):", subtitleLabel);
    console.log("   Sub-button label (from config):", activeSubBtnLabel);
  
    updateHeaderLabels({
      title: mainTitle,
      subtitle: subtitleLabel ? `| ${subtitleLabel}` : "",
      subButton: activeSubBtnLabel ? `| ${activeSubBtnLabel}` : ""
    });
  
    // 🧹 Canvas and UI
    canvasManager.clearAllShapes();
    drawShapes(fnConfig.canvasConfig, effectiveType);
    updateUI(fnConfig, functionalityKey, effectiveType);
    updateLeftSidebar(functionalityKey, effectiveType);
    canvasManager.render();
    
    // 🔁 Submission-aware behavior
    const uid = localStorage.getItem("uid");
    if (uid) {
      const docId = `${uid}_${topicId}_${subtype}`;
      const docRef = doc(db, "progress", docId);
      const status = await getProgressStatus(uid, topicId, subtype);

  if (status === "submitted") {
    console.log("📥 Already submitted. Loading summary...");
    await loadProgress(uid, topicId, subtype, "submitted");

  } else if (status === "saved") {
    console.log("💾 Found saved progress. Rendering form and applying saved values...");
    
    const savedData = await loadSavedProgress(uid, topicId, subtype);
    updateRightSidebar(topicId, subtype);  // Step 1: Draw the form
    updateRightSidebarAfterSubmit({
      topicId,
      subtype,
      responses: savedData.responses   // Step 2: Fill values
    });

  } else {
    console.log("📝 No submission yet, loading fresh form...");
    updateRightSidebar(topicId, subtype);
    await saveProgress( uid,topicId,subtype,"in-progress");
  }
}

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



  export function updateRightSidebarAfterSubmit({ topicId, subtype, responses }) {
    console.log("📌 updateRightSidebarAfterSubmit triggered", { topicId, subtype, responses });
   
    try {
      const config = functionalityConfig[topicId];
      const formStructure = config?.formStructure?.[subtype];
      debugger;
      if (!formStructure || !Array.isArray(formStructure.fields)) {
        console.warn("⚠️ Invalid or missing formStructure for", topicId, subtype);
        return;
      }
  
      formStructure.fields.forEach(({ angle1, angle2, result }) => {
        const input1 = document.querySelector(`[name="${angle1}"]`);
        const input2 = document.querySelector(`[name="${angle2}"]`);
        const resultSpan = document.querySelector(`[name="${result}"], [id="${result}"]`);
  
        if (input1) input1.value = responses[angle1] || '';
        if (input2) input2.value = responses[angle2] || '';
        if (resultSpan) resultSpan.innerText = responses[result] || '';
      });
  
      const conclusionField = document.querySelector(`[name="${formStructure.conclusion}"], [id="${formStructure.conclusion}"]`);
      if (conclusionField) {
        conclusionField.value = responses[formStructure.conclusion] || '';
      }
  
      console.log("✅ Right sidebar inputs updated from saved responses.");
    } catch (err) {
      console.error("❌ Error in updateRightSidebarAfterSubmit:", err);
    }
  }
  
  
  

/**
 * 🖌️ Draws points, lines, triangles, circles depending on config and buttonType
 */
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
            point.setEnableDrag(false); // ✅ Control dragging based on config
            canvasManager.addShape(point);
          
        }
    });
}


function drawLines(canvasConfig) {
    if (!canvasConfig.lines) return;
    canvasConfig.lines.forEach(({ endA, endB, color = "black", enableDrag = false }) => {
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
    canvasManager.addShape(circle);
}



function drawTriangles(canvasConfig, buttonType = null) {
    const triangles = buttonType
        ? canvasConfig.triangles.filter(tri => tri.type === buttonType)
        : canvasConfig.triangles;

    triangles.forEach(({ vertices, vertexA, vertexB, vertexC, labels, showMidpoints = true, showMeasurements = true, enableDrag = false }) => {
        if (vertices?.length === 3) [vertexA, vertexB, vertexC] = vertices;
        const triangle = new Triangle(vertexA, vertexB, vertexC);
        triangle.setVertexLabels(labels);
        triangle.setEnableDrag(enableDrag);
        triangle.setShowMidpoints(showMidpoints);
        triangle.setShowMeasurements(showMeasurements);
        triangle.setShowLabels(true); // ✅ Enable vertex labels
        canvasManager.addShape(triangle);
    });
}


/**
 * 🧠 Updates UI elements like theorem text and sub-buttons.
 */
function updateUI(config, functionalityKey, buttonType = null) {
  const theoremText = config.theoremDefinitions?.[buttonType] || config.theoremDefinition;

  updateTheoremText(config, buttonType);

  const dynamicButtons = document.getElementById("dynamic-buttons");
if (Array.isArray(config.buttonSet)) {
  dynamicButtons.innerHTML = "";

  config.buttonSet.forEach(({ label, type, svg }) => {
    // ✅ Use required tooltip container class
    const wrapper = document.createElement("div");
    wrapper.className = "tooltip-container";  // 👈 KEY FIX

    // 🔹 Inject SVG or fallback to label
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

    // 🔹 Tooltip span (now styled correctly)
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.textContent = label;
    wrapper.appendChild(tooltip);

    // 🔹 Click handler
    wrapper.addEventListener("click", () => switchFunctionality(functionalityKey, type));

    dynamicButtons.appendChild(wrapper);
  });

  dynamicButtons.style.display = "block";
} else {
  dynamicButtons.style.display = "none";
}

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
export function collectFormResponses(topicId, subtype) {
  console.log("📥 Collecting form responses for", topicId, subtype);

  const config = functionalityConfig[topicId];
  const formStructure = config?.formStructure?.[subtype];

  if (!formStructure) {
    console.warn("⚠️ No formStructure found for", topicId, subtype);
    return {};
  }

  const responses = {};

  formStructure.fields.forEach(({ angle1, angle2, result }) => {
    // Input values (angle1 and angle2)
    const val1 = document.querySelector(`[name="${angle1}"]`)?.value || "";
    const val2 = document.querySelector(`[name="${angle2}"]`)?.value || "";

    // Output/result field (innerText or value depending on element)
    const resElement = document.querySelector(`[name="${result}"], [id="${result}"]`);
    const res = resElement?.innerText || resElement?.value || "";

    responses[angle1] = val1;
    responses[angle2] = val2;
    responses[result] = res;
  });

  // Capture conclusion field value
  const conclusion = document.querySelector(`[name="${formStructure.conclusion}"], [id="${formStructure.conclusion}"]`)?.value || "";
  responses[formStructure.conclusion] = conclusion;

  console.log("✅ Form responses collected:", responses);
  return responses;
}


export function generateSummaryBlock(progressData) {
  const { topicId, subtype, responses = {} } = progressData;
  const config = functionalityConfig[topicId];
  const formStructure = config?.formStructure?.[subtype];

  if (!formStructure || !Array.isArray(formStructure.fields)) {
    console.warn("⚠️ No valid formStructure found for:", topicId, subtype);
    return;
  }

  const summaryContainer = document.getElementById("right-sidebar");
  summaryContainer.innerHTML = ""; // Clear previous content

  // Header
  const heading = document.createElement("h3");
  heading.textContent = "Submitted Summary";
  summaryContainer.appendChild(heading);

  // Table
  const table = document.createElement("table");
  table.className = "summary-table";
  table.style.width = "100%";
  table.style.fontSize = "14px";
  table.style.borderCollapse = "collapse";

  // Table Header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Angle Measure</th>
      <th>Alternate<br>Interior Angle</th>
      <th>Equality<br>Check</th>
    </tr>
  `;
  table.appendChild(thead);

  // Table Body
  const tbody = document.createElement("tbody");
  formStructure.fields.forEach(({ angle1, angle2, result, label1, label2 }) => {
    const tr = document.createElement("tr");
    const angle1Val = responses[angle1] || "-";
    const angle2Val = responses[angle2] || "-";
    const resultVal = responses[result] || "-";

    tr.innerHTML = `
      <td><strong>${label1 || angle1.toUpperCase()}:</strong> ${angle1Val}</td>
      <td><strong>${label2 || angle2.toUpperCase()}:</strong> ${angle2Val}</td>
      <td>= ${resultVal}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  summaryContainer.appendChild(table);

  // Conclusion
  const conclusionKey = formStructure.conclusion;
  if (conclusionKey && responses[conclusionKey]) {
    const conclusion = document.createElement("p");
    conclusion.innerHTML = `<strong>Conclusion:</strong> ${responses[conclusionKey]}`;
    summaryContainer.appendChild(conclusion);
  }
}

  
  
  

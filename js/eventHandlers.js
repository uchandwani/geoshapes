import { functionalityConfig } from './commonConfig.js';
import { CanvasManager, canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import {Point} from '../shapes/Points.js';
import { Circle } from '../shapes/Circle.js';
import { updatePageTitle } from './header.js';
import { updateHeaderLabels } from './header.js';
// Function to handle navigation and update the screen
let setShowMidpoints =true;

const page = location.pathname.split("/").pop();
const pageTitles = {
  "index.html": "Home",
  "parallel_lines_04.html": "Parallel Lines",
  "triangle_theorem_07.html": "Triangle Theorems",
  "trig_properties_09.html": "Trigonometric Properties",
  "circle_theorems_02.html": "Circle Theorems"
};


export function generateButtons(buttonSet = [], defaultType = 'right') {
    const buttonContainer = document.getElementById("dynamic-buttons");

    // Clear previous buttons
    buttonContainer.innerHTML = ""; 
    console.log("Buttons cleared.");

    if (buttonSet.length === 0) {
        console.warn("No buttons defined for this functionality.");
        return;
    }

    // Generate buttons based on the buttonSet
    console.log("The button set is ", buttonSet);
    buttonSet.forEach((button, index) => {
        const btn = document.createElement("button");
        btn.textContent = button.label;
        btn.className = "triangle-button";
        btn.dataset.type = button.type;
        console.log("The default type value is", defaultType);
        if (button.type === defaultType) {
            btn.classList.add("active");
        }
        console.log("The btn.classList active is", btn.classList);
        // Add an event listener to handle button clicks
        btn.addEventListener("click", () => {
            console.log(`Button ${index + 1} clicked: ${button.label} (${button.type})`);
            
            // Remove active class from all buttons
            const allButtons = buttonContainer.querySelectorAll("button");
            allButtons.forEach((b) => b.classList.remove("active"));

            // Add active class to the clicked button
            btn.classList.add("active");

          
            // Update the right sidebar
            const functionalityKey = document.querySelector('.icon-btn.active').id.replace('-button', '');
            console.log("The functionality key in generate buttons is", functionalityKey,button.type);
            handleTriangleType(functionalityKey,button.type);
            updateRightSidebar(functionalityKey, button.type);

        });

        buttonContainer.appendChild(btn);
        console.log(`Button ${index + 1} generated: ${button.label} (${button.type})`);
    });

    console.log("Button container updated:", buttonContainer.innerHTML);
}



export function handleTriangleType(fkey,type) {
    let vertices;
    let vertexLabels = { A: 'C', B: 'F', C: 'A' };
    let midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
   
    console.log("Inside handleTriangleType :The functionality key and triangle types are", fkey,type);
    

    switch (type) {
        case 'right':
            vertices = [
                { x: 300, y: 500 },
                { x: 700, y: 500 },
                { x: 300, y: 200 },
            ];
            vertexLabels = { A: 'C', B: 'F', C: 'A' };
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };

           if (fkey === "basicProportionalityTheorem") {
           setShowMidpoints = false; 
        // Define specific points
            const pointsToDraw = [
                { x: 300, y: 300, label: "B", color: "red", radius: 5 },
                { x: 434, y: 300, label: "D", color: "red", radius: 5 },
              
            ];
       
      
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            console.log("The value in basicProportionalityTheorem", pointsToDraw, ctx);
            canvasManager.clearSpecificPoints();

                // Draw new specific points
            addSpecificPoints(pointsToDraw, ctx);
      
            } 
            
            break;
        case 'acute':
            vertices = [
                { x: 300, y: 500 },
                { x: 700, y: 500 },
                { x: 500, y: 200 },
            ];
             vertexLabels = { A: 'C', B: 'F', C: 'A' };
             if (fkey === "basicProportionalityTheorem") {
             setShowMidpoints = false; 
        // Define specific points
            const pointsToDraw = [
                { x: 434, y: 300, label: "B", color: "red", radius: 5 },
                { x: 564, y: 300, label: "D", color: "red", radius: 5 },
              
            ];
       
      
           const canvas = document.getElementById("canvas");
           const ctx = canvas.getContext("2d");
           console.log("The value in basicProportionalityTheorem", pointsToDraw, ctx);
           canvasManager.clearSpecificPoints();

                // Draw new specific points
                addSpecificPoints(pointsToDraw, ctx);
        }
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
            break;

        case 'obtuse':
            vertices = [
                { x: 300, y: 500 },
                { x: 700, y: 500 },
                { x: 200, y: 200 },
            ];
            vertexLabels = { A: 'C', B: 'F', C: 'A' };
            if (fkey === "basicProportionalityTheorem") {
            setShowMidpoints = false; 
        // Define specific points
            const pointsToDraw = [
                { x: 236, y: 300, label: "B", color: "red", radius: 5 },
                { x: 362, y: 300, label: "D", color: "red", radius: 5 },
              
            ];
       
      
           const canvas = document.getElementById("canvas");
           const ctx = canvas.getContext("2d");
           console.log("The value in basicProportionalityTheorem", pointsToDraw, ctx);
           canvasManager.clearSpecificPoints();
                // Draw new specific points
            addSpecificPoints(pointsToDraw, ctx);
        }
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
            break;
        case 'equilateral':
            vertices = [
                { x: 200, y: 500 },
                { x: 600, y: 500 },
                { x: 400, y: 153.58 },
            ];
            vertexLabels = { A: 'C', B: 'F', C: 'A' };
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
            break;
        case 'isosceles':
            vertices = [
                { x: 200, y: 500 },
                { x: 600, y: 500 },
                { x: 400, y: 300 },
            ];
            vertexLabels = { A: 'C', B: 'F', C: 'A' };
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
            break;
        case 'scalene':
            vertices = [
                { x: 300, y: 500 },
                { x: 700, y: 500 },
                { x: 450, y: 250 },
            ];
            vertexLabels = { A: 'C', B: 'F', C: 'A' };
            midpointLabels = { M1: 'E', M2: 'D', M3: 'B' };
            break;
        default:
            console.error('Invalid triangle type');
            return;
    }

    // Clear the existing canvas
    canvasManager.clearTrianglesOnly();


    // Create and add the new triangle
    const triangle = new Triangle(
        vertices[0],
        vertices[1],
        vertices[2]
    );

    // Set custom labels
    triangle.setVertexLabels(vertexLabels);
    triangle.setShowMeasurements(false);
    console.log("The midpointLabels status is", midpointLabels);
    triangle.setMidpointLabels(midpointLabels);
    triangle.setShowLabels(true);
    console.log("setShowMidpoints is", setShowMidpoints);
    triangle.setShowMidpoints(setShowMidpoints) ;
    canvasManager.addShape(triangle);

    canvasManager.render();
    setShowMidpoints = true; 

    console.log(`${type} triangle drawn with vertexLabels:`, vertexLabels, "and midpointLabels:", midpointLabels);
}


export function addSpecificPoints(points, ctx) {
    if (!points || !Array.isArray(points)) {
        console.error("Invalid points array provided.");
        return;
    }

    points.forEach(({ x, y, label, color, radius }) => {
        const point = new Point(x, y, label, color, radius);
        canvasManager.addSpecificPoint(point); // Add to CanvasManager
        point.draw(ctx, true, false); // Show label, no coordinates
    });

    canvasManager.render();
}

/* export function switchFunctionality(functionalityKey, buttonType=null) {

    console.log(`Switching to functionality: ${functionalityKey}`, buttonType);
    canvasManager.clearSpecificPoints();
    // Get the selected functionality configuration
    const config = functionalityConfig[functionalityKey];
    console.log("The functionality key in configuration is", functionalityKey, functionalityConfig[functionalityKey]);

    if (!config) {
        console.error(`Functionality ${functionalityKey} not found in configuration.`);
        return;
    }

    const theoremText = document.getElementById('theorem-text');
    if (theoremText) {
        console.log(`Updating theorem definition to: ${config.theoremDefinition}`);
        theoremText.textContent = config.theoremDefinition || 'No definition available for this theorem.';
    }


    // Update the left sidebar content
    const leftSidebar = document.querySelector('.sidebar.left');
    if (leftSidebar) {
        leftSidebar.innerHTML = config.leftSidebarContent;
    }

   // Update right sidebar for the default sub-classification
    let defaultType = config.buttonSet[0].type; // Default to the first button type
    

    defaultType = "right"; // Default to "Right Angle Triangle"
    if (functionalityKey === "basicProportionalityTheorem" || functionalityKey === "angleBisectorTheorem") {
        defaultType = "acute"; // Default to "Acute Triangle" for these functionalities
    }

    
    if (functionalityKey === "propertiesOfTriangles") {
        defaultType = "equilateral"; // Default to "Acute Triangle" for these functionalities
    }

     if (functionalityKey === "basicProportionalityTheorem" || functionalityKey === "propertiesOfTriangles") {
        setShowMidpoints = false;
    }
    
    
*/

window.switchFunctionality = switchFunctionality;

/**
 * Main function to update functionality and render new shapes + UI.
 * 
 * @param {string} functionalityKey - The key for the selected functionality
 * @param {string|null} subtype - Optional subtype (e.g. 'right', 'sin'); fallback applied if not provided
 */
export function switchFunctionality(functionalityKey, subtype = null) {
  console.log("🔁 switchFunctionality called with:", functionalityKey, subtype);

  const config = functionalityConfig[functionalityKey];
  if (!config) {
    console.warn(`⚠️ Unknown functionalityKey: ${functionalityKey}`);
    return;
  }

  // 🧠 Determine fallback subtype if not explicitly provided
  const effectiveSubtype = subtype || (Array.isArray(config.buttonSet) && config.buttonSet.length > 0
    ? config.buttonSet[0]
    : null);

  console.log("🎯 Using subtype:", effectiveSubtype);

  // ✅ Clear canvas
  canvasManager.clearAllShapes();

  // ✅ Update content areas
  updateTheoremText(config, effectiveSubtype);
  updateLeftSidebar(config, effectiveSubtype);
  updateRightSidebar(config, effectiveSubtype);

  // ✅ Update visuals on canvas
  drawShapes(config.canvasConfig, effectiveSubtype);

  // ✅ Update active icon styles
 // updateActiveSubHeaderButton(functionalityKey);

  // ✅ Update dynamic sub-buttons if needed
 // showSubButtons(config.buttonSet || [], functionalityKey);

  canvasManager.render();
 
  } 

// Attach event listeners to navigation buttons


function drawShapes(canvasConfig, buttonType = null) {
  
    if (canvasConfig.points) drawPoints(canvasConfig, buttonType);
    if (canvasConfig.circle) drawCircle(canvasConfig);
    if (canvasConfig.triangles) drawTriangles(canvasConfig, buttonType);
    if (canvasConfig.lines) drawLines(canvasConfig);
}

function drawPoints(canvasConfig, buttonType = null) {
    canvasConfig.points.forEach(({ x, y, label, color = "black", radius = 5, type }) => {
        if (!type || type === buttonType) {
            const point = new Point(x, y, label, color, radius);
            canvasManager.addShape(point);
        }
    });
}

function drawLines(canvasConfig) {
    canvasConfig.lines.forEach(({ endA, endB, color = "black" }) => {
        if (endA && endB) {
            const line = new Line(endA, endB, color);
            line.setEnableDrag(canvasConfig.enableDrag ?? true);
            canvasManager.addShape(line);
        }
    });
}

function drawCircle(canvasConfig) {
    const [center, radius] = canvasConfig.circle;
    const circle = new Circle(center, radius);
    circle.setEnableDrag(canvasConfig.enableDrag ?? true);
    canvasManager.addShape(circle);
}

function drawTriangles(canvasConfig, buttonType = null) {
    const triangles = buttonType
        ? canvasConfig.triangles.filter(tri => tri.type === buttonType)
        : canvasConfig.triangles;

    
    triangles.forEach(({ vertices, vertexA, vertexB, vertexC, labels, showMidPoints, showMeasurements }) => {
        if (vertices?.length === 3) [vertexA, vertexB, vertexC] = vertices;
        const triangle = new Triangle(vertexA, vertexB, vertexC);
        triangle.setVertexLabels(labels);
        triangle.setEnableDrag(canvasConfig.enableDrag ?? true);
        triangle.setShowMidpoints(showMidPoints);
        triangle.setShowMeasurements(showMeasurements);
        canvasManager.addShape(triangle);
    });
}


export function updateActiveSubHeaderButton(buttonElement) {
    const current = document.querySelector(".navigation-buttons button.active, .triangle-button.active");
    if (current !== buttonElement) {
        document.querySelectorAll(".navigation-buttons button, .triangle-button").forEach(btn => btn.classList.remove("active"));
        buttonElement?.classList.add("active");
    }
}

/**
 * updateUI - Renders theorem definition and subtype buttons dynamically based on configuration
 *
 * @param {Object} config - Configuration object for the selected functionality
 * @param {string} functionalityKey - The main functionality key (e.g., "midSegmentTheorem")
 * @param {Object|null} buttonType - Subtype object (e.g., { label, type, svg }) or null
 */
function updateUI(config, functionalityKey, buttonType = null) {
    // 🧠 Step 1: Choose correct theorem definition for selected subtype (if available)
    const theoremText = config.theoremDefinitions?.[buttonType] || config.theoremDefinition;
  
    // 🧠 Step 2: Update the theorem text, canvas, and sidebar areas
    updateTheoremText(config, buttonType);
  
    // 🧠 Step 3: Handle dynamic button rendering for subtypes (right sidebar)
    const dynamicButtons = document.getElementById("dynamic-buttons");
  
    if (Array.isArray(config.buttonSet)) {
      // Clear previous buttons
      dynamicButtons.innerHTML = "";
  
      // Loop through each subtype button definition
      config.buttonSet.forEach(({ label, type, svg }) => {
        // 🔹 Create a tooltip-enabled container for each button
        const wrapper = document.createElement("div");
        wrapper.className = "tooltip-container";
  
        // 🔹 Add SVG icon if provided, otherwise fallback to plain button
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
  
        // 🔹 Add tooltip label
        const tooltip = document.createElement("span");
        tooltip.className = "tooltip-text";
        tooltip.textContent = label;
        wrapper.appendChild(tooltip);
  
        // ✅ Attach click handler to switch subtype
        wrapper.addEventListener("click", () => {
          console.log("📥 Subtype button clicked:", functionalityKey, { label, type, svg });
          switchFunctionality(functionalityKey, { label, type, svg });
        });
  
        // Add to right sidebar container
        dynamicButtons.appendChild(wrapper);
      });
  
      // Ensure dynamic buttons are visible
      dynamicButtons.style.display = "block";
    } else {
      // If no buttons defined, hide the container
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


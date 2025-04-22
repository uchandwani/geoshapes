import { functionalityConfig } from './functionalityConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import {Point} from '../shapes/Points.js';
import { updatePageTitle } from './header.js';
import { updateHeaderLabels } from './header.js';
// Function to handle navigation and update the screen
let setShowMidpoints =true;


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

export function updateRightSidebar(functionalityKey, subClassification) {
    console.log('Functionality Key:', functionalityKey);
    console.log('Subclassification:', subClassification);
     console.log('Functionality Configuration:', functionalityConfig);

    const config = functionalityConfig[functionalityKey];
    if (!config) {
        console.error(`No configuration found for functionality key: ${functionalityKey}`);
        return;
    }

    const rightSidebarContent = config.rightSidebarContent;
    if (!rightSidebarContent) {
        console.error(`No rightSidebarContent defined for functionality key: ${functionalityKey}`);
        return;
    }

    const content = rightSidebarContent[subClassification];
    if (!content) {
        console.error(`No content found for subClassification: ${subClassification}`);
        document.querySelector('.sidebar.right').innerHTML = `<p>Content not available.</p>`;
        return;
    }

    // Update the sidebar
    document.querySelector('.sidebar.right').innerHTML = content;
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

  export function switchFunctionality(functionalityKey, buttonType = null) {
  console.log("🔁 switchFunctionality called with:", functionalityKey, buttonType);

  const config = functionalityConfig[functionalityKey];
  if (!config) {
    console.error("❌ Invalid functionalityKey:", functionalityKey);
    return;
  }

  const effectiveType = buttonType || config.defaultButtonType || null;
  console.log("🎯 Using subtype:", effectiveType);

  // 🔹 Title and subtitle updates
  const page = location.pathname.split("/").pop();
  const pageTitles = {
    "index.html": "Home",
    "parallel_lines_04.html": "Parallel Lines",
    "triangle_theorem_07.html": "Triangle Theorems",
    "trig_properties_09.html": "Trigonometric Properties",
    "circle_theorems_02.html": "Circle Theorems"
  };
  const mainTitle = pageTitles[page] || "Math App";

  const icon = document.getElementById(`${functionalityKey}-button`);
  const subtitleLabel = icon?.getAttribute("title") || "";

  let activeSubBtnLabel = "";
  if (config.buttonSet && effectiveType) {
    const match = config.buttonSet.find(btn => btn.type === effectiveType);
    activeSubBtnLabel = match?.label || "";
  }

  // ✅ Compose header with dividers only if parts are present
  updateHeaderLabels({
    title: mainTitle,
    subtitle: subtitleLabel ? `| ${subtitleLabel}` : "",
    subButton: activeSubBtnLabel ? `| ${activeSubBtnLabel}` : ""
  });

  // 🧹 Canvas and UI
  canvasManager.clearAllShapes();
  drawShapes(config.canvasConfig, effectiveType);
  updateUI(config, functionalityKey, effectiveType);
  updateLeftSidebar(functionalityKey, effectiveType);
  updateRightSidebar(functionalityKey, effectiveType);
  canvasManager.render();



    updateRightSidebar(functionalityKey, defaultType);

    if (config.buttonSet) {
        console.log("Generating buttons for functionality:", functionalityKey);
        generateButtons(config.buttonSet, defaultType);
    } else {
        console.warn(`No buttonSet defined for functionality: ${functionalityKey}`);
        generateButtons(); // Clear existing buttons
    }


    // Update the canvas
   
 // Update the canvas with the default triangle using defaultType
    if (defaultType) {
        console.log("The functionalitykey and type", functionalityKey,defaultType);
        handleTriangleType(functionalityKey,defaultType); // Dynamically create and render the default triangle
    }

    canvasManager.render();

  } 

// Attach event listeners to navigation buttons


export function attachNavBarListeners() {
    
    const navButtons = {
       
        midSegmentTheorem: document.getElementById('midSegmentTheorem-button'),
        basicProportionalityTheorem: document.getElementById('basicProportionalityTheorem-button'),
        angleBisectorTheorem: document.getElementById('angleBisectorTheorem-button'),
        propertiesOfTriangles: document.getElementById('propertiesOfTriangles-button'),};
      

    // Add event listeners to each button
    Object.entries(navButtons).forEach(([key, button]) => {
        if (button) {
            button.addEventListener('click', () => {
                // Switch to the corresponding functionality
                switchFunctionality(key);

                // Remove the active class from all buttons
                Object.values(navButtons).forEach((btn) => {
                    btn.classList.remove('active');
                });

                // Add the active class to the clicked button
                button.classList.add('active');
            });

            console.log(`Listener attached to button: ${key}`);
        } else {
            console.warn(`Button for ${key} not found.`);
        }
    });

    // Highlight the default button initially
    const defaultKey = 'midSegmentTheorem'; // Change if a different default is desired
    if (navButtons[defaultKey]) {
        navButtons[defaultKey].classList.add('active');
    }
}


// Initialize event handlers
document.addEventListener('DOMContentLoaded', () => {
    attachNavBarListeners();

    // Auto-load the first functionality (e.g., Triangle Theorem) on page load
    switchFunctionality('midSegmentTheorem');
});

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


import { functionalityConfig } from './functionalityConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import {Point} from '../shapes/Points.js';

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

export function switchFunctionality(functionalityKey, buttontype = null) {

    console.log(`Switching to functionality: ${functionalityKey}`);
    console.log("switchFunctionality called with:", functionalityKey, buttontype);  

    canvasManager.clearSpecificPoints();
    // Get the selected functionality configuration

    if (!functionalityConfig || !functionalityConfig[functionalityKey]) {
    console.error("❌ Config or functionality key not found", functionalityKey, functionalityConfig);
    return;
}

    const config = functionalityConfig[functionalityKey];
    console.log("The functionality key in configuration is", functionalityKey, functionalityConfig[functionalityKey]);

    if (!config) {
        console.error(`Functionality ${functionalityKey} not found in configuration.`);
        return;
    }

   
    updateTheoremText(config, buttontype);
    /* const theoremText = document.getElementById('theorem-text');
    if (theoremText) {
        console.log(`Updating theorem definition to: ${config.theoremDefinition}`);
        theoremText.textContent = config.theoremDefinition || 'No definition available for this theorem.';
    }*/


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

function logDynamicButtons() {
    const buttonContainer = document.getElementById('dynamic-buttons');
    const buttons = buttonContainer.querySelectorAll('button');
    buttons.forEach((button, index) => {
        console.log(`Button ${index + 1}:`, button.textContent, button.dataset.type);
    });
}
    
function updateTheoremText(config, subtype = null) {
    console.log("Inside updateTheoremText", config);

    let definition = config.theoremDefinition;
    if (typeof definition === 'object' && subtype && definition[subtype]) {
        definition = definition[subtype];
    }

    if (typeof definition !== 'string') {
        definition = "Definition not available.";
    }

    const theoremTextElement = document.getElementById("theorem-text");
    if (!theoremTextElement) {
        console.warn("⚠️ Theorem text element not found in DOM.");
        return;
    }

    theoremTextElement.innerHTML = definition;
}


export function updateLeftSidebar(functionalityKey, subClassification) {
    console.log('%cFunction ULS : Functionality Key, Subclassification:', 'color: green;', functionalityKey, subClassification);

    const config = functionalityConfig[functionalityKey];
    if (!config) {
        console.error(`No configuration found for functionality key: ${functionalityKey}`);
        return;
    }

    const leftSidebarContent = config.leftSidebarContent;

    let content;
    if (functionalityKey === "sineTheta" || functionalityKey === "cosineTheta") {
        content = leftSidebarContent;
    } else {
        content = typeof leftSidebarContent === 'object'
            ? leftSidebarContent[subClassification]
            : leftSidebarContent;
    }

    if (!content) {
        console.error(`No valid content found for subClassification: ${subClassification}`);
        document.querySelector('.sidebar.left').innerHTML = `<p>Instructions not available.</p>`;
        return;
    }

    const leftSidebar = document.querySelector('.sidebar.left');
    if (!leftSidebar) {
        console.warn("⚠️ Sidebar element not found");
        return;
    }

    // ✅ Safe to update now
    leftSidebar.innerHTML = content;

    // ✅ This will now always work
    if (config.theoremDefinition && document.getElementById("theorem-text")) {
        updateTheoremText(config, subClassification);
    } else {
        console.log("ℹ️ Skipping updateTheoremText — placeholder not found or no definition.");
    }
}

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

import { functionalityConfig } from './functionalityConfig.js';
import { canvasManager } from './CanvasManager.js';
import { Triangle } from './Triangle.js';

// Function to handle navigation and update the screen
function switchFunctionality(functionalityKey) {
    console.log(`Switching to functionality: ${functionalityKey}`);

    // Get the selected functionality configuration
    const config = functionalityConfig[functionalityKey];

    if (!config) {
        console.error(`Functionality ${functionalityKey} not found in configuration.`);
        return;
    }

    // Update the left sidebar content
    const leftSidebar = document.querySelector('.sidebar.left');
    if (leftSidebar) {
        leftSidebar.innerHTML = config.leftSidebarContent;
    }

    // Update the right sidebar content
    const rightSidebar = document.querySelector('.sidebar.right');
    if (rightSidebar) {
        rightSidebar.innerHTML = config.rightSidebarContent;
    }

    // Update the canvas
    canvasManager.clear(); // Clear existing shapes on the canvas
    if (config.canvasConfig && config.canvasConfig.autoloadShape === 'triangle') {
        const vertices = config.canvasConfig.triangleVertices;

        // Create and add a triangle to the canvas
        const triangle = new Triangle(vertices[0], vertices[1], vertices[2]);
        triangle.showMeasurements = true;
        triangle.showLabels = true;

        canvasManager.addShape(triangle);
    }

    // Render the updated canvas
    canvasManager.render();
}

// Attach event listeners to navigation buttons
function attachNavBarListeners() {
    const navButtons = {
        triangleTheorem: document.getElementById('triangle-theorem-button'),
        midSegmentTheorem: document.getElementById('mid-segment-theorem-button'),
        basicProportionalityTheorem: document.getElementById('basic-proportionality-button'),
        angleBisectorTheorem: document.getElementById('angle-bisector-theorem-button'),
        propertiesOfTriangles: document.getElementById('properties-of-triangles-button'),
    };

    Object.entries(navButtons).forEach(([key, button]) => {
        if (button) {
            button.addEventListener('click', () => switchFunctionality(key));
            console.log(`Listener attached to button: ${key}`);
        } else {
            console.warn(`Button for ${key} not found.`);
        }
    });
}

// Initialize event handlers
document.addEventListener('DOMContentLoaded', () => {
    attachNavBarListeners();

    // Auto-load the first functionality (e.g., Triangle Theorem) on page load
    switchFunctionality('triangleTheorem');
});

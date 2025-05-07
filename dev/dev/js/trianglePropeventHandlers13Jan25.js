import { functionalityConfig } from './trianglePropConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';

// Function to handle navigation and update the screen
export function switchFunctionality(functionalityKey) {
    console.log(`Switching to functionality: ${functionalityKey}`);

    canvasManager.clearAllShapes(); // Clear existing shapes
    const config = functionalityConfig[functionalityKey];
    console.log("The functionality key in configuration is", functionalityKey, functionalityConfig[functionalityKey]);

    if (!config) {
        console.error(`Functionality ${functionalityKey} not found in configuration.`);
        return;
    }

    // Update theorem text
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

    // Update the right sidebar content
    const rightSidebar = document.querySelector('.sidebar.right');
    if (rightSidebar) {
        rightSidebar.innerHTML = config.rightSidebarContent;
    }

    if (config.canvasConfig) {
        // Clear canvas before drawing
        canvasManager.clearAllShapes();

        // Draw circles if defined
        if (config.canvasConfig.circle && config.canvasConfig.circle.length === 2) {
            const [center, radius] = config.canvasConfig.circle;
            const { x, y } = center; // Extract x and y coordinates
            console.log("The circle drawn at center", { x, y });
            const circle = new Circle({ x, y }, radius);
            canvasManager.addShape(circle);
        } else {
            console.warn("Circle configuration is missing or invalid.");
        }

        // Draw triangles using the updated config
    if (config.canvasConfig.triangles && Array.isArray(config.canvasConfig.triangles)) {
    console.log("Triangle configurations found:", config.canvasConfig.triangles);

   if (config.canvasConfig.triangles && Array.isArray(config.canvasConfig.triangles)) {
    console.log("Triangle configurations found:", config.canvasConfig.triangles);

    config.canvasConfig.triangles.forEach((triangleConfig, index) => {
        try {
            const { vertexA, angles, labels, showMidpoints } = triangleConfig;

            // Use the circle's radius as the hypotenuse
            const radius = config.canvasConfig.circle[1]; // Extract radius directly from the circle configuration
            console.log("The key parameters are", vertexA, angles, angles.length, radius);

            if (!vertexA || !angles || angles.length !== 2 || !radius) {
                throw new Error("Invalid triangle configuration: vertexA, angles, or radius missing or incorrect.");
            }

            const angle1 = (angles[0] * Math.PI) / 180; // Convert first angle to radians

            // Vertex A (Circle center)
            const { x: xA, y: yA } = vertexA;

            // Vertex B (Hypotenuse intersection)
           
            const vertexB = {
                x: xA + radius * Math.cos(angle1),
                y: yA - radius * Math.sin(angle1)
            };

                      // Vertex C (Perpendicular intersection)
            const vertexC = {
                x: vertexB.x,
                y: yA // Projection of B onto the reference line
            };

            console.log("Vertices for Triangle:", { vertexA, vertexB, vertexC });

            // Create and add the triangle
            const triangle = new Triangle(vertexA, vertexB, vertexC);
            triangle.setShowLabels(true);
            triangle.setShowMidpoints(showMidpoints || false);
            triangle.setVertexLabels(labels || { A: `A${index + 1}`, B: `B${index + 1}`, C: `C${index + 1}` });
            canvasManager.addShape(triangle);

        } catch (error) {
            console.error(`Error creating triangle ${index + 1}:`, error.message);
        }
    });

    // Render the canvas
    canvasManager.render();
}


    }
    }
}

// Attach event listeners to navigation buttons
export function attachNavBarListeners() {
    const navButtons = {
        sineTheta: document.getElementById('sine-theta-button'),
        cosineTheta: document.getElementById('cosine-theta-button'),
        trigonoRatios: document.getElementById('trig-ratios-button'),
        trigonoIdentities: document.getElementById('trig-identities-button'),
    };

    Object.entries(navButtons).forEach(([key, button]) => {
        if (button) {
            // Remove any existing event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            // Add the event listener to the new button
            newButton.addEventListener('click', () => {
                switchFunctionality(key);
            });

            console.log(`Listener attached to button: ${key}`);
        } else {
            console.warn(`Button for ${key} not found.`);
        }
    });
}

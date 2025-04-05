/**
 * Program: Triangle Properties Canvas Tool
 * Description: This program provides functionalities to dynamically draw geometric shapes 
 *              (triangles, circles, lines) and update UI components like navigation buttons, 
 *              sidebars, and theorem texts based on user interaction.
 * 
 * List of Functions (Alphabetical Order):
 * ------------------------------------------------------------------------------
 * Function Name         | Acronym | Parameters                         | Description
 * ----------------------|---------|------------------------------------|-----------------------------------------------------
 * activateButton        | AB      | containerSelector, button          | Activates a button in the specified container.
 * addSpecificPoints     | ASP     | points, ctx                        | Adds specific points to the canvas and renders them.
 * attachNavBarListeners | NBL     | None                               | Attaches event listeners to navigation buttons.
 * drawCircle            | DWC     | canvasConfig                       | Draws a circle based on the given configuration.
 * drawLines             | DWL     | canvasConfig, type                 | Draws lines filtered by the specified type.
 * drawShapes            | DWS     | fkey, canvasConfig, buttonType     | Draws shapes (circle, triangles, or lines) on the canvas.
 * drawTriangles         | DWT     | canvasConfig, buttonType           | Draws triangles according to configuration and type.
 * drawTrigonoRatiosTriangles | DTRT | canvasConfig                     | Draws triangles specific to trigonometric ratios.
 * generateButtons       | GB      | buttonSet, functionalityKey        | Dynamically generates buttons for a functionality.
 * handleNavButtons      | HNB     | functionalityKey                   | Updates navigation buttons to activate the corresponding button.
 * handleTriangleType    | HTT     | fkey, type                         | Handles drawing triangles based on the specified type.
 * switchFunctionality   | SWF     | functionalityKey, buttonType       | Switches the active functionality, updates the UI and canvas.
 * updateActiveButton    | UAB     | buttonElement                      | Activates a button and deactivates others in the navigation.
 * updateRightSidebar    | URS     | functionalityKey, subClassification| Updates the content of the right sidebar.
 * updateSidebars        | USB     | config                             | Updates both left and right sidebars with the provided config.
 * updateTheoremText     | UTT     | config                             | Updates the theorem text in the UI.
 * updateUI              | UUI     | config, functionalityKey           | Updates UI elements like sidebars and dynamic buttons.
 */

import { functionalityConfig } from './trianglePropConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';

// Functions ordered alphabetically

/**
 * Activates a button in the specified container.
 */
function activateButton(containerSelector, button) {
    console.log('%c' + "Function AB - activateButton", 'color: green;', button);

    const container = document.querySelector(containerSelector);
    if (container) {
        const buttons = container.querySelectorAll("button");
        buttons.forEach((btn) => btn.classList.remove("active"));
    }

    button.classList.add("active");
    console.log("The active button is:", button);
}

/**
 * Adds specific points to the canvas and renders them.
 */
export function addSpecificPoints(points, ctx) {
    if (!points || !Array.isArray(points)) {
        console.error("Invalid points array provided.");
        return;
    }

    points.forEach(({ x, y, label, color, radius }) => {
        const point = new Point(x, y, label, color, radius);
        canvasManager.addSpecificPoint(point);
        point.draw(ctx, true, false);
    });

    canvasManager.render();
}

/**
 * Attaches event listeners to navigation buttons.
 */
export function attachNavBarListeners() {
    const navButtons = {
        sineTheta: document.getElementById("sineTheta-button"),
        cosineTheta: document.getElementById("cosineTheta-button"),
        trigonoRatios: document.getElementById("trigonoRatios-button"),
        trigonoIdentities: document.getElementById("trigonoIdentities-button"),
    };

    Object.entries(navButtons).forEach(([key, button]) => {
        console.log("Function NBL - navbarListeneres, key button is ", key, button);
        if (button) {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            newButton.addEventListener("click", () => {
                console.log("The clicked button is ", key, button);
                if (key === "trigonoRatios") {
                    switchFunctionality(key);
                } else {
                    switchFunctionality(key, "sin");
                }
            });

            console.log(`Listener attached to button: ${key}`);
        } else {
            console.warn(`Button for ${key} not found.`);
        }
    });

    const defaultKey = 'sinTheta';
    if (navButtons[defaultKey]) {
        navButtons[defaultKey].classList.add('active');
    }
}

/**
 * Draws a circle based on the given configuration.
 */
function drawCircle(canvasConfig) {
    console.log('%c' + "Function DWC - canvasConfig", 'color: green;', canvasConfig);
    const { circle } = canvasConfig;
    if (!circle || circle.length !== 2) {
        console.warn("Invalid or missing circle configuration:", circle);
        return;
    }

    const [center, radius] = circle;

    if (
        typeof center !== "object" ||
        typeof center.x !== "number" ||
        typeof center.y !== "number" ||
        typeof radius !== "number"
    ) {
        console.warn("Invalid circle parameters. Center:", center, "Radius:", radius);
        return;
    }

    console.log("Drawing circle with center:", center, "and radius:", radius);

    canvasManager.clearAllShapes();
    const circleShape = new Circle(center, radius);
    canvasManager.addShape(circleShape);
    canvasManager.render();

    console.log("Circle successfully drawn:", canvasManager.shapes);
}

/**
 * Draws lines filtered by the specified type.
 */
function drawLines(canvasConfig, type) {
    if (canvasConfig.lines && Array.isArray(canvasConfig.lines)) {
        const filteredLines = canvasConfig.lines.filter(line => line.type === type);
        filteredLines.forEach(lineConfig => {
            const { endA, endB } = lineConfig;
            if (endA && endB) {
                const line = new Line(endA, endB, 'red');
                canvasManager.addShape(line);
                console.log("Line drawn at:", canvasManager.shapes);
            }
        });
        console.log(`Lines of type '${type}' drawn.`);
        canvasManager.render();
    } else {
        console.warn("Invalid or missing lines configuration.");
    }
}

/**
 * Draws shapes (circle, triangles, or lines) on the canvas.
 */
function drawShapes(fkey, canvasConfig, buttonType) {
    console.log('%c' + "Function DWS - canvasConfig, buttonType", 'color: green;', buttonType);
    if (canvasConfig.circle) {
        drawCircle(canvasConfig);
    }

    if (canvasConfig.triangles) {
        drawTriangles(canvasConfig, buttonType);
    }

    if (fkey === "sineTheta" || fkey === "cosineTheta") {
        if (buttonType === 'cos') {
            drawLines(canvasConfig, buttonType);
        }
    }
}

/**
 * Draws triangles according to configuration and type.
 */
function drawTriangles(canvasConfig, buttonType) {
    console.log('%c' + "Function DWT - canvasConfig, buttonType", 'color: green;', canvasConfig, buttonType);
    const { triangles } = canvasConfig;
    if (!triangles || !Array.isArray(triangles)) {
        console.warn("Invalid or missing triangles configuration:", triangles);
        return;
    }

    const filteredTriangles = buttonType
        ? triangles.filter(triangle => triangle.type === buttonType)
        : triangles;

    if (filteredTriangles.length === 0) {
        console.warn(`No triangles found for type: ${buttonType}`);
        return;
    }

    console.log(`Drawing ${filteredTriangles.length} triangles for type: ${buttonType || "all"}`);

    filteredTriangles.forEach(triangleConfig => {
        const { vertexA, angles, radius, labels } = triangleConfig;
        const angle1 = (angles[0] * Math.PI) / 180;

        const vertexB = {
            x: vertexA.x + radius * Math.cos(angle1),
            y: vertexA.y - radius * Math.sin(angle1),
        };
        const vertexC = {
            x: vertexB.x,
            y: vertexA.y,
        };

        const triangle = new Triangle(vertexA, vertexB, vertexC);
        triangle.setVertexLabels(labels);
        canvasManager.addShape(triangle);
    });

    canvasManager.render();
    console.log("Triangles successfully drawn.");
}

function handleNavButtons(functionalityKey) {
    const navButtonsContainer = ".navigation-buttons";
    const activeNavButton = document.querySelector(`${navButtonsContainer} .active`);
    if (activeNavButton) activeNavButton.classList.remove("active");

    const newNavButton = document.getElementById(`${functionalityKey}-button`);
    if (newNavButton) {
        activateButton(navButtonsContainer, newNavButton);
    }
}

export function handleTriangleType(fkey, type) {

    console.log('%c'+ "Function HTT fkey, type", 'color : green ;', fkey, type);
    const config = functionalityConfig[fkey];
    if (!config || !config.canvasConfig) {
        console.error("Invalid configuration for functionality key:", fkey);
        return;
    }

    const { canvasConfig } = config;

    // Clear canvas
    canvasManager.clearAllShapes();

    // Draw circle
    drawCircle(canvasConfig);

    // Draw triangles
    drawTriangles(canvasConfig, type);

    if(fkey === "sinrTheta" || fkey === "cosineTheta" ) {
        if (type === 'cos') // Draw lines
            drawLines(canvasConfig, type);
    }    
    // Render canvas
    canvasManager.render();
    console.log(`${type} shapes redrawn for functionality key: ${fkey}`);
}


export function switchFunctionality(functionalityKey, buttonType) {
    console.log(`Switching functionality: ${functionalityKey}, buttonType: ${buttonType}`);

    // Activate the main functionality button
    handleNavButtons(functionalityKey);

    // Update the UI
    const config = functionalityConfig[functionalityKey];
    if (config) {

    const dynamicButtonsContainer = document.getElementById("dynamic-buttons");
    const activeSubButton = dynamicButtonsContainer?.querySelector(".triangle-button.active");

        // Use the active sub-button if available, otherwise default
        const effectiveButtonType = activeSubButton?.dataset.type || config.defaultButtonType;


        drawShapes(functionalityKey,config.canvasConfig, buttonType);
        updateUI(config, functionalityKey);
        updateRightSidebar(functionalityKey, buttonType);

        // If buttonType is specified, activate it
        if (buttonType) {
            
            const buttonToActivate = dynamicButtonsContainer.querySelector(
                `button[data-type="${buttonType}"]`
            );
            if (buttonToActivate) {
                activateButton("#dynamic-buttons", buttonToActivate);
            }
        }
    } else {
        console.error("Invalid functionality key:", functionalityKey);
    }
}
// Other functions (remaining code) should also be reordered alphabetically in a similar fashion.
function updateActiveButton(buttonElement) {
    const currentActive = document.querySelector(".navigation-buttons button.active, .triangle-button.active");

    // Only update if the button is different
    if (currentActive !== buttonElement) {
        const allButtons = document.querySelectorAll(".navigation-buttons button, .triangle-button");
        allButtons.forEach(btn => btn.classList.remove("active"));

        if (buttonElement) {
            buttonElement.classList.add("active");
            console.log("Active button updated to:", buttonElement);
        }
    } else {
        console.log("No change to active button required.");
    }
}

function updateUI(config, functionalityKey) {
    console.log("Function UUI - Updating UI for:", functionalityKey, config);


    const leftSidebar = document.getElementById("left-sidebar");
    if (leftSidebar) {
        leftSidebar.innerHTML = config.leftSidebarContent || "";
    }

    updateTheoremText(config);
    // Update dynamic sub-buttons
    const dynamicButtonsContainer = document.getElementById("dynamic-buttons");
    if (config.buttonSet && Array.isArray(config.buttonSet)) {
        dynamicButtonsContainer.innerHTML = ""; // Clear existing buttons

        // Render sub-buttons
        config.buttonSet.forEach((buttonConfig) => {
            const btn = document.createElement("button");
            btn.classList.add("triangle-button");
            btn.textContent = buttonConfig.label;
            btn.dataset.type = buttonConfig.type;
            btn.dataset.functionalityKey = functionalityKey;

            // Attach click handler
            btn.addEventListener("click", () => {
                activateButton("#dynamic-buttons", btn);
                switchFunctionality(functionalityKey, buttonConfig.type);
            });

            dynamicButtonsContainer.appendChild(btn);
        });

        dynamicButtonsContainer.style.display = "block";

        // Activate default sub-button if none is active
        const activeSubButton = dynamicButtonsContainer.querySelector(".triangle-button.active");
        const effectiveSubButton =
            activeSubButton ||
            dynamicButtonsContainer.querySelector(
                `button[data-type="${config.defaultButtonType}"]`
            );

        if (effectiveSubButton) {
            activateButton("#dynamic-buttons", effectiveSubButton);
        }
    } else {
        dynamicButtonsContainer.style.display = "none"; // Hide if no buttons
    }
}

export function updateRightSidebar(functionalityKey, subClassification) {
    console.log('%c' + "Function URS : Functionality Key,Subclassification: ", 'color: green;', functionalityKey, subClassification);
   
    

    const config = functionalityConfig[functionalityKey];

     console.log('Functionality Configuration:', config);

    if (!config) {
        console.error(`No configuration found for functionality key: ${functionalityKey}`);
        return;
    }

    const rightSidebarContent = config.rightSidebarContent;

  //  console.log("RHS Functionality Configuration:", rightSidebarContent);

    if (!rightSidebarContent) {
        console.error(`No rightSidebarContent defined for functionality key: ${functionalityKey}`);
        return;
    }

    let content = rightSidebarContent[subClassification];

    if (functionalityKey === "trigonoRatios") 
            content = rightSidebarContent;
    
    if (!content) {
        console.error(`No content found for subClassification: ${subClassification}`);
        document.querySelector('.sidebar.right').innerHTML = `<p>Content not available.</p>`;
        return;
    }

    // Update the sidebar
    document.querySelector('.sidebar.right').innerHTML = content;
   // console.log("Right Sidebar updated with:", content);
}

function updateSidebars(config) {
    const leftSidebar = document.querySelector('.sidebar.left');
    const rightSidebar = document.querySelector('.sidebar.right');
    if (leftSidebar) leftSidebar.innerHTML = config.leftSidebarContent || '';
    if (rightSidebar) rightSidebar.innerHTML = config.rightSidebarContent || '';
    console.log("The sidebars updated with", leftSidebar.innerHTML, rightSidebar.innerHTML);
}

function updateTheoremText(config) {
    console.log("Inside updateTheoremText", config);
    const theoremText = document.getElementById('theorem-text');
    if (theoremText) {
        console.log(`Updating theorem definition to: ${config.theoremDefinition}`);
        theoremText.textContent = config.theoremDefinition || 'No definition available for this theorem.';
    }
}
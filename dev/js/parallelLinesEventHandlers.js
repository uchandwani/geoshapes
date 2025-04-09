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

import { functionalityConfig } from './parallelLinesConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';

// Functions ordered alphabetically

/**
 * Activates a button in the specified container.
 */
function activateButton(containerSelector, button) {
    console.log('%c' + "Function AB - activateButton", 'color: green;', button);

    const container = document.querySelector(containerSelector);
    if (!container) return;

    const buttons = container.querySelectorAll(".triangle-button");
    buttons.forEach((btn) => btn.classList.remove("active"));  // Remove active class from all buttons

    button.classList.add("active");  // Add active class to the clicked button
    console.log("The active button is now:", button);
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
                if (key === "sineTheta") {
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

    const circleShape = new Circle(center, radius);
    
    // 🔹 Ensure enableDrag is applied properly
    circleShape.setEnableDrag(canvasConfig.enableDrag ?? true);  

    canvasManager.addShape(circleShape);
    canvasManager.render();

    console.log("Circle successfully drawn:", canvasManager.shapes);
}


function drawPoints(canvasConfig, buttonType) {
    console.log('%c' + "Function DWP - Drawing Points", 'color: green;', canvasConfig, buttonType);

    if (!canvasConfig.points || !Array.isArray(canvasConfig.points)) {
        console.warn("⚠️ No points found in configuration.");
        return;
    }

    canvasConfig.points.forEach(({ x, y, label, color = "black", radius = 5, type }) => {
        // ✅ Draw points that:
        // - Match the current buttonType (sin, cos, tan)
        // - OR Have no 'type' (universal points like E)
        if (!type || type === buttonType) {
            const point = new Point(x, y, label, color, radius);
            canvasManager.addShape(point);
         //   console.log(`✅ Point drawn at (${x}, ${y}) with label "${label}" (Type: ${type || "Universal"})`);
        }
    });

    canvasManager.render();
}




/**
 * Draws lines filtered by the specified type.
 */
function drawLines(canvasConfig) {
    console.log('%c' + "Function DWL - Drawing Lines", 'color: blue;', canvasConfig);

    if (!canvasConfig.lines || !Array.isArray(canvasConfig.lines)) {
        console.warn("⚠️ No valid lines data in canvasConfig:", canvasConfig.lines);
        return;
    }

    console.log(`🔍 Found ${canvasConfig.lines.length} lines to draw`);

    canvasConfig.lines.forEach(({ endA, endB, color = "black" }) => {
        if (endA && endB) {
            const line = new Line(endA, endB, color);
            
            // 🔹 Ensure enableDrag is applied properly
            line.setEnableDrag(canvasConfig.enableDrag ?? true);  

            canvasManager.addShape(line);
        } else {
            console.warn("⚠️ Skipping invalid line (missing endpoints):", { endA, endB });
        }
    });

    console.log("🔄 Rendering lines...");
    canvasManager.render();
}




/**
 * Draws shapes (circle, triangles, or lines) on the canvas.
 */
function drawShapes(fkey, canvasConfig, buttonType) {
    console.log('%c' + "Function DWS - canvasConfig, buttonType", 'color: green;', buttonType);
   
    if (canvasConfig.points) {
        drawPoints(canvasConfig, buttonType);
    }

   if (canvasConfig.circle) {
        console.log("✅ Drawing Circle");
        drawCircle(canvasConfig);
    }

    if (canvasConfig.triangles) {
        console.log("✅ Drawing Triangles");
        drawTriangles(canvasConfig, buttonType);
    }

    if (canvasConfig.lines) {
        console.log("✅ Drawing Lines");
        drawLines(canvasConfig, buttonType);
    } else {
        console.warn("⚠️ No lines found in canvasConfig");
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
        let { vertexA, vertexB, vertexC, angles, radius, labels, showMidPoints = false, showMeasurements = false } = triangleConfig;

        if (triangleConfig.vertexA && triangleConfig.angles && triangleConfig.radius) {
            console.log("Inside if vertex, angles and radius defined", triangleConfig);
           
            const angle1 = (angles[0] * Math.PI) / 180;

            vertexB = {
                x: vertexA.x + radius * Math.cos(angle1),
                y: vertexA.y - radius * Math.sin(angle1),
            };
            vertexC = {
                x: vertexB.x,
                y: vertexA.y,
            };
        } else if (triangleConfig.vertices) {
            if (triangleConfig.vertices.length === 3) {
                console.log("Inside else if : Three vertices are defined", triangleConfig.vertices);
                [vertexA, vertexB, vertexC] = triangleConfig.vertices;
            } else {
                console.warn("⚠️ Invalid vertices configuration. Expected exactly 3 points.");
                return;
            }
        } else {
            console.warn("⚠️ Triangle configuration missing required data.");
            return;
        }

        const triangle = new Triangle(vertexA, vertexB, vertexC);
        triangle.setVertexLabels(labels);
        
        // 🔹 Ensure enableDrag is applied properly
        triangle.setEnableDrag(canvasConfig.enableDrag ?? true);  

        triangle.setShowLabels(true); 
        triangle.setShowMidpoints(showMidPoints);
        triangle.setShowMeasurements(showMeasurements);

        if (triangleConfig.labels) {
            triangle.setVertexLabels(triangleConfig.labels);
        }
        
        canvasManager.addShape(triangle);
    });

    canvasManager.render();
    console.log("✅ Triangles successfully drawn.");
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

    if(fkey === "sineTheta" || fkey === "cosineTheta" ) {
       
            drawLines(canvasConfig, type);
    }    
    // Render canvas
    canvasManager.render();
    console.log(`${type} shapes redrawn for functionality key: ${fkey}`);
}


export function switchFunctionality(functionalityKey, buttonType) {
    console.log(`Switching functionality: ${functionalityKey}, buttonType: ${buttonType}`);

    handleNavButtons(functionalityKey);
    const config = functionalityConfig[functionalityKey];
    if (!config) {
        console.error("Invalid functionality key:", functionalityKey);
        return;
    }

    canvasManager.clearAllShapes();

    // Ensure lines, circles, and triangles are drawn before rendering
    drawShapes(functionalityKey, config.canvasConfig, buttonType);

    updateUI(config, functionalityKey,buttonType);
    updateLeftSidebar(functionalityKey, buttonType);
    updateRightSidebar(functionalityKey, buttonType);

    // 🔹 Ensure everything is rendered correctly
    console.log("🔄 Rendering final shapes...");
    canvasManager.render();
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

function updateUI(config, functionalityKey, subButtonType = null) {
    console.log("Function UUI - Updating UI for:", functionalityKey, config, subButtonType);

    // ✅ Ensure theorem text is updated based on functionalityKey and subButtonType
    if (subButtonType && config.theoremDefinitions && config.theoremDefinitions[subButtonType]) {
        console.log("Inside multiple definition", config.theoremDefinitions);
        updateTheoremText(config.theoremDefinitions[subButtonType]); // Use specific theorem text
    } else {
        console.log("Inside single definition", config.theoremDefinition);
        updateTheoremText(config.theoremDefinition || "No theorem available for this selection.");
    }

    // ✅ Handle dynamic sub-buttons
    const dynamicButtonsContainer = document.getElementById("dynamic-buttons");

    // ✅ Hide sub-buttons for specific cases
    if (functionalityKey === "sineTheta") {
        dynamicButtonsContainer.style.display = "none"; // Hide sub-buttons
    } else if (config.buttonSet && Array.isArray(config.buttonSet)) {
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
                console.log(`🔵 Clicked Sub-Button: ${buttonConfig.type}`);

                // ✅ Remove active class from all buttons
                document.querySelectorAll(".triangle-button").forEach((button) => {
                    button.classList.remove("active");
                });

                // ✅ Set clicked button as active
                btn.classList.add("active");

                // ✅ Switch functionality with the sub-button type
                switchFunctionality(functionalityKey, buttonConfig.type);

                // ✅ Update theorem text dynamically based on sub-button selection
                if (config.theoremDefinitions && config.theoremDefinitions[buttonConfig.type]) {
                    updateTheoremText(config.theoremDefinitions[buttonConfig.type]);
                } else {
                    updateTheoremText(config.theoremDefinition || "No theorem available for this selection.");
                }
            });

            dynamicButtonsContainer.appendChild(btn);
        });

        dynamicButtonsContainer.style.display = "block"; // Show sub-buttons

        // ✅ Ensure at least one sub-button is active
        const activeSubButton = dynamicButtonsContainer.querySelector(".triangle-button.active");
        const effectiveSubButton = activeSubButton || dynamicButtonsContainer.querySelector(
            `button[data-type="${config.defaultButtonType}"]`
        );

        if (effectiveSubButton) {
            // ✅ Clear previous active buttons before setting a new one
            document.querySelectorAll(".triangle-button").forEach((button) => {
                button.classList.remove("active");
            });

            // ✅ Set the new active button
            effectiveSubButton.classList.add("active");

            // ✅ Update theorem text for the default sub-button
            if (config.theoremDefinitions && config.theoremDefinitions[effectiveSubButton.dataset.type]) {
                updateTheoremText(config.theoremDefinitions[effectiveSubButton.dataset.type]);
            }
        }
    } else {
        dynamicButtonsContainer.style.display = "none"; // Hide if no buttons exist
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

    if (functionalityKey === "sineTheta") 
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

export function updateLeftSidebar(functionalityKey, subClassification) {
    console.log('%c' + "Function ULS : Functionality Key, Subclassification: ", 'color: green;', functionalityKey, subClassification);

    const config = functionalityConfig[functionalityKey];

    console.log('Functionality Configuration:', config);

    if (!config) {
        console.error(`No configuration found for functionality key: ${functionalityKey}`);
        return;
    }

    const leftSidebarContent = config.leftSidebarContent;

    if (!leftSidebarContent) {
        console.error(`No leftSidebarContent defined for functionality key: ${functionalityKey}`);
        return;
    }

    let content = leftSidebarContent[subClassification]; // Extract content for sub-button

    // ✅ Fix: If functionality is `sineTheta`, show all content at once
    if (functionalityKey === "sineTheta") {
        content = leftSidebarContent;
    }

    
    
    // ✅ Ensure content is a valid HTML string before inserting
    if (!content) {
        console.error(`No valid content found for subClassification: ${subClassification}`);
        document.querySelector('.sidebar.left').innerHTML = `<p>Content not available.</p>`;
        return;
    }

    
    // Update the sidebar
    document.querySelector('.sidebar.left').innerHTML = content;
   // consoled HTML
}





    

function updateSidebars(config) {
    const leftSidebar = document.querySelector('.sidebar.left');
    const rightSidebar = document.querySelector('.sidebar.right');
    if (leftSidebar) leftSidebar.innerHTML = config.leftSidebarContent || '';
    if (rightSidebar) rightSidebar.innerHTML = config.rightSidebarContent || '';
    console.log("The sidebars updated with", leftSidebar.innerHTML, rightSidebar.innerHTML);
}

function  updateTheoremText(definition) {
    console.log("Inside updateTheoremText", definition);
    const theoremText = document.getElementById('theorem-text');
    console.log("theorem-text", theoremText);
    if (theoremText) {
        console.log(`Updating theorem definition to: ${definition}`);
        theoremText.textContent = definition || 'No definition available for this theorem.';
    }
}
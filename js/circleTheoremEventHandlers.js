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

import { functionalityConfig } from './circleTheoremConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { setMode } from '../shapes.js';


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
        alternateSegments: document.getElementById("alternateSegments-button"),
        subtendedAngles: document.getElementById("subtendedAngles-button"),
        quadrilaterals: document.getElementById("quadrilaterals-button"),
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
    console.log('%c' + "Function DWC - canvasConfig", 'color: green;', canvasConfig, canvasConfig.length);
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


function drawPoints(config, subtype) {
    let points = config.points || [];

    // Include external points but filter them based on subtype
    if (config.externalPoints) {
        const externalPoint = config.externalPoints[subtype];
        if (externalPoint) {
            points.push(externalPoint);
        }
    }

    console.log(`📌 drawPoints - Incoming points for subtype "${subtype}":`, points);

    // ✅ Filter points that belong to the selected subtype
    if (subtype) {
        points = points.filter(p => !p.subtype || p.subtype === subtype);
    }

    console.log(`🔎 drawPoints - Filtered points for subtype "${subtype}":`, points);

    if (!Array.isArray(points) || points.length === 0) {
        console.warn(`⚠️ No points found in configuration for subtype "${subtype}".`);
        return;
    }

    console.log(`🖊 Drawing ${points.length} points for subtype "${subtype}":`, points);

    points.forEach(({ x, y, label, color = "black", radius = 5 }) => {
        if (x === undefined || y === undefined) {
            console.warn("⚠️ Skipping invalid point with missing coordinates:", { x, y, label });
            return;
        }

        // ✅ Correctly create and store the Point object
        const point = new Point(x, y, label || "", color, radius);

        console.log(`🖊 Adding point ${label} at (${x}, ${y})`);

        // ✅ First add the point to the canvas
        canvasManager.addShape(point);
    });

    // ✅ Render all added points at once after the loop
    canvasManager.render();
}

/**
 * Draws lines filtered by the specified type.
 */
function drawLines(canvasConfig, subtype = null) {
    console.log(`%cFunction DWL - Drawing Lines for subtype: "${subtype}"`, 'color: blue;', canvasConfig);

    if (!canvasConfig.lines || !Array.isArray(canvasConfig.lines)) {
        console.warn("⚠️ No valid lines data in canvasConfig:", canvasConfig.lines);
        return;
    }

    // ✅ If subtype is provided, filter lines; otherwise, use all lines
    const filteredLines = subtype 
        ? canvasConfig.lines.filter(line => line.subtype === subtype) 
        : canvasConfig.lines;

    console.log(`🔍 Found ${filteredLines.length} lines to draw for subtype "${subtype || 'ALL'}"`);

    if (filteredLines.length === 0) {
        console.warn(`⚠️ No lines found for subtype "${subtype}". Skipping drawing.`);
        return;
    }

    filteredLines.forEach(({ endA, endB, color = "black", enableDrag = true }) => {
        if (endA && endB) {
            const line = new Line(endA, endB, color);
            line.setEnableDrag(enableDrag);  // Apply dragging setting from config

            canvasManager.addShape(line);
            console.log(`📏 Drawing line from (${endA.x}, ${endA.y}) to (${endB.x}, ${endB.y}) in color "${color}"`);
        } else {
            console.warn("⚠️ Skipping invalid line (missing endpoints):", { endA, endB });
        }
    });

    console.log("🔄 Rendering lines...");
    canvasManager.render();
}


function drawTangents(config, subtype) {
    console.log(`🎯 Processing Tangents for ${subtype}`);

    const { circle, points, externalPoints, tangentLines } = config;
    if (!circle || !points) {
        console.warn("⚠️ Invalid tangent configuration.");
        return;
    }

    const [center, radius] = circle;

    /*** 📌 Step 1: Handle Standard Two-Point Tangents ***/
    const tangentPoints = points.filter(p => p.type === "tangent" && p.subtype === subtype);
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
            drawPoints({ points: [midpoint] });
        });
    }

    console.log(`🎯 Tangents processing complete for ${subtype}`);
}


/**
 * Computes the external intersection point of two tangents from given points on the circle.
 */
function computeExternalPoint(center, radius, point1, point2) {
    const midX = (point1.x + point2.x) / 2;
    const midY = (point1.y + point2.y) / 2;

    // Compute slope of the line joining the two tangent points
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;

    // Find the perpendicular slope
    if (dy === 0) return null;  // Avoid division by zero
    const perpSlope = -dx / dy;

    // Estimate external intersection beyond midpoint (adjust multiplier if needed)
    const distance = 2 * Math.hypot(midX - center.x, midY - center.y);
    const angle = Math.atan(perpSlope);

    return {
        x: midX + distance * Math.cos(angle),
        y: midY + distance * Math.sin(angle),
        label: "P",
        color: "blue",
        radius: 5
    };
}



/**
 * Computes the external intersection point of two tangents from given points on the circle.
 */
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
 * Draws shapes (circle, triangles, or lines) on the canvas.
 */
function drawShapes(fkey, canvasConfig, buttonType) {
    console.log('%c' + "Function DWS - canvasConfig, buttonType", 'color: green;', buttonType);

    if (canvasConfig.points) {
        console.log("✅ Points in config before filtering:", JSON.stringify(canvasConfig.points, null, 2));
        drawPoints(canvasConfig, buttonType);
    } else {
        console.warn("⚠️ No points found in `canvasConfig.points`");
    }

    if (canvasConfig.circle) {
        console.log("✅ Drawing Circle");
        drawCircle(canvasConfig);
    }

    // Extract tangent points from config.points
    const tangentPoints = canvasConfig.points?.filter(p => p.type === "tangent" && p.subtype === buttonType) || [];

    // Check if tangentLines exist in config
    const hasTangentLines = Array.isArray(canvasConfig.tangentLines) && canvasConfig.tangentLines.length > 0;

    if (tangentPoints.length === 2 || hasTangentLines) {
        console.log(`✅ Drawing Tangents for subtype: ${buttonType}`, JSON.stringify({ tangentPoints, tangentLines: canvasConfig.tangentLines }, null, 2));
        drawTangents(canvasConfig, buttonType);
    } else {
        console.warn(`⚠️ No valid tangent points or tangent lines found for subtype "${buttonType}".`);
    }



    if (canvasConfig.lines) {
        console.log("✅ Drawing Lines");
        drawLines(canvasConfig, buttonType);
    } else {
        console.warn("⚠️ No lines found in `canvasConfig.lines`");
    }

    canvasManager.render();
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
    console.log(`🟢 [switchFunctionality] Key: ${functionalityKey}, Sub-Button: ${buttonType}`);

    console.log(`🚨 switchFunctionality triggered from sub-button with:`, functionalityKey, buttonType);


    handleNavButtons(functionalityKey);

    const config = functionalityConfig[functionalityKey];
    if (!config) {
        console.error("❌ Invalid functionality key:", functionalityKey);
        return;
    }

    console.log("🟡 [switchFunctionality] Loaded config:", config);

    canvasManager.clearAllShapes();
    console.log("🧹 Cleared canvas shapes");

    drawShapes(functionalityKey, config.canvasConfig, buttonType);


    updateUI(config, functionalityKey, buttonType);
    updateLeftSidebar(functionalityKey, buttonType);
    updateRightSidebar(functionalityKey, buttonType);

    // 🛠️ Prevents unintended drawing
    setMode("modify");

    console.log("🟢 [switchFunctionality] Rendered final shapes");
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

    // ✅ Update theorem text
    if (subButtonType && config.theoremDefinitions && config.theoremDefinitions[subButtonType]) {
        updateTheoremText(config.theoremDefinitions[subButtonType]);
    } else {
        updateTheoremText(config.theoremDefinition || "No theorem available for this selection.");
    }

    // ✅ Handle sub-buttons
    const dynamicButtonsContainer = document.getElementById("dynamic-buttons");

    if (functionalityKey === "sineTheta") {
        dynamicButtonsContainer.style.display = "none";
        return;
    }

    if (config.buttonSet && Array.isArray(config.buttonSet)) {
        dynamicButtonsContainer.innerHTML = "";

        config.buttonSet.forEach((buttonConfig) => {
            const btn = document.createElement("button");
            btn.classList.add("triangle-button");
            btn.textContent = buttonConfig.label;
            btn.dataset.type = buttonConfig.type;
            btn.dataset.functionalityKey = functionalityKey;


            console.log("🛠️ Sub-button created:", buttonConfig.type);
    

            // ✅ Click event
            btn.addEventListener("click", () => {
                console.log(`🔵 Clicked Sub-Button: ${buttonConfig.type}`);

                // Prevent duplicate processing
                if (btn.classList.contains("active")) {
                    console.log("🟡 Button already active. Skipping re-processing.");
                    return;
                }

                document.querySelectorAll(".triangle-button").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Delegate functionality switch
                switchFunctionality(functionalityKey, buttonConfig.type);
            });

            // Pre-activate button if it matches current type
            if (buttonConfig.type === subButtonType) {
                btn.classList.add("active");
            }

            dynamicButtonsContainer.appendChild(btn);
        });

        dynamicButtonsContainer.style.display = "flex";
    } else {
        dynamicButtonsContainer.style.display = "none";
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
    if (functionalityKey === "sineTheta" ||  functionalityKey === "cosineTheta" ) {
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

function updateTheoremText(definition) {
    console.log("Inside updateTheoremText", definition);
    const theoremText = document.getElementById('theorem-text');
    if (theoremText) {
        console.log(`Updating theorem definition to: ${definition}`);
        theoremText.textContent = definition || 'No definition available for this theorem.';
    }
}
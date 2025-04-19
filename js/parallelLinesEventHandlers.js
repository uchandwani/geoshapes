/**
 * Program: Parallel Lines Canvas Tool (Merged Final Version)
 * Description: Handles dynamic drawing and UI updates for Parallel Lines Theorem with sub-button support.
 */

import { functionalityConfig } from './parallelLinesConfig.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';

/**
 * 🔄 Switches functionality, redraws shapes, and updates UI.
 */
export function switchFunctionality(functionalityKey, buttonType = null) {
    console.log("🔁 switchFunctionality:", functionalityKey, buttonType);

    const config = functionalityConfig[functionalityKey];
    if (!config) {
        console.error("Invalid functionalityKey:", functionalityKey);
        return;
    }

    canvasManager.clearAllShapes();
    drawShapes(config.canvasConfig, buttonType);

    updateUI(config, functionalityKey, buttonType);
    updateLeftSidebar(functionalityKey, buttonType);
    updateRightSidebar(functionalityKey, buttonType);

    canvasManager.render();
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

/**
 * 🧠 Updates UI elements like theorem text and sub-buttons.
 */
function updateUI(config, functionalityKey, buttonType = null) {
    const theoremText = config.theoremDefinitions?.[buttonType] || config.theoremDefinition;
    updateTheoremText(theoremText, buttonType);

    const dynamicButtons = document.getElementById("dynamic-buttons");
    if (Array.isArray(config.buttonSet)) {
        dynamicButtons.innerHTML = "";
        config.buttonSet.forEach(({ label, type }) => {
            const btn = document.createElement("button");
            btn.classList.add("triangle-button");
            btn.textContent = label;
            btn.dataset.type = type;
            btn.addEventListener("click", () => switchFunctionality(functionalityKey, type));
            dynamicButtons.appendChild(btn);
        });
        dynamicButtons.style.display = "block";
    } else {
        dynamicButtons.style.display = "none";
    }
}

export function updateLeftSidebar(functionalityKey, type) {
    const config = functionalityConfig[functionalityKey];
    const allContent = config?.leftSidebarContent;

    let content;

    if (typeof allContent === "string") {
        // ✅ For theorems without subtypes (e.g., sineTheta)
        content = allContent;
    } else if (typeof allContent === "object" && type && allContent[type]) {
        // ✅ For subtyped content (e.g., sin, cos, tan)
        content = allContent[type];
    } else {
        content = "<p>Content not available.</p>";
    }

    document.querySelector(".sidebar.left").innerHTML = content;
}


export function updateRightSidebar(functionalityKey, type) {
    const config = functionalityConfig[functionalityKey];
    const allContent = config?.rightSidebarContent;
    let content;

    if (typeof allContent === "string") {
        content = allContent;
    } else if (typeof allContent === "object" && type && allContent[type]) {
        content = allContent[type];
    } else {
        content = "<p>Content not available.</p>";
    }

    document.querySelector(".sidebar.right").innerHTML = content;
}

export function updateTheoremText(functionalityKey, subtype = null) {
    const config = functionalityConfig[functionalityKey];

    if (!config) {
        console.error("No config found for:", functionalityKey);
        document.getElementById("theorem-text").textContent = "No definition available.";
        return;
    }

    const definitions = config.theoremDefinitions;
    const defaultDefinition = config.theoremDefinition;

    let definitionText = "";

    if (definitions && typeof definitions === "object" && subtype && definitions[subtype]) {
        definitionText = definitions[subtype];
    } else if (defaultDefinition) {
        definitionText = defaultDefinition;
    } else {
        definitionText = "No definition available.";
    }

    document.getElementById("theorem-text").textContent = definitionText;
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

export function attachNavBarListeners() {
    const navMap = {
        sineTheta: "sin",
        cosineTheta: "cos",
        trigonoRatios: "tan",
        trigonoIdentities: "tan"
    };

    Object.entries(navMap).forEach(([id, subtype]) => {
        const button = document.getElementById(`${id}-button`);
        if (button) {
            const clone = button.cloneNode(true);
            button.parentNode.replaceChild(clone, button);
            clone.addEventListener("click", () => switchFunctionality(id, subtype));
        }
    });
}

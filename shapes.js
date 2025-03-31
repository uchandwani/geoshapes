// Import shapes and utilities
import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { canvasManager } from './shapes/CanvasManager.js';
import { Divider } from './shapes/Divider.js';
import { Compass } from './shapes/Compass.js';
import {Arc} from './shapes/Arc.js';
import {functionalityConfig} from '../js/functionalityConfig.js';
import { currentPageFeatures } from '../js/functionalityConfig.js';



// Other shape creation logic
export { Shape, Point, Line, Circle, Triangle, Rectangle, Protractor, Divider, };
export const allshapes = {
    currentArc: null,
    geoshapes: []
};

let dragCallback = null; 

const currentPage = location.pathname.split("/").pop();

// Retrieve feature flags for the current page


// Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export const geoshapes = [];
let isGridVisible = false;
const points = [];
let selectedShape = null;
let dragStart = null;
let mode = 'modify';
let shapeType = 'line';
let pointCounter = 0;
const snapThreshold = 10;
let activeStyle = 'classic';
let previousMousePos = null; // Declare and initialize to null
// let currentArc = null; // Default style

const container = document.getElementById('geometry-container');
let scale = 1; // Initial scale
const scaleStep = 0.2; // Amount to zoom in/out with each step
const minScale = 0.5; // Minimum zoom level
const maxScale = 3; // Maximum zoom level

export const shapeSettings = {
    showLabels: false, // Global toggle for all labels
    showMeasurements: true, // Global toggle for all measurements
    measurementsConfig: {
        Circle: { showRadius: true, showArea: true, showCircumference: false },
        Triangle: { showAngles: true, showArea: false, showSides: false },
    }
};


function logInteractionState(source = "") {
    const styleSource = "color: white; background: #4a90e2; font-weight: bold; padding: 2px 6px; border-radius: 4px;";
    const styleKey = "color: #333; font-weight: bold;";
    const styleValue = "color: green;";

    console.log(`%c[${source}] %cMode:%c ${mode} %c| Shape:%c ${shapeType}`,
        styleSource,
        styleKey, styleValue,
        styleKey, styleValue
    );
}



// Generic function to attach event listeners
function attachButtonListener(buttonId, callback, fallbackMessage) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', callback);
        console.log(`Listener attached to button: ${buttonId}`);
    } else if (fallbackMessage) {
        console.warn(fallbackMessage || `Button ${buttonId} not found in the DOM.`);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    attachButtonListener('toggle-grid', toggleGrid, 'Grid button not found in the DOM');
    attachButtonListener('style-classic', () => {
        activeStyle = 'classic';
        console.log('Classic style selected');
    }, 'Classic button not found in the DOM');
    attachButtonListener('style-modern', () => {
        activeStyle = 'modern';
        console.log('Modern style selected');
    }, 'Modern button not found in the DOM');

    attachButtonListener('toggle-measurements', () => {
        canvasManager.toggleGlobalMeasurements();
        canvasManager.render(ctx, canvas);
    }, 'Measurements toggle button not found in the DOM');

    attachButtonListener('add-divider', () => {
    activateMode('create', 'divider', 'Add Divider');
    }, 'Divider button not found in the DOM');

    attachButtonListener('add-compass', () => {
        activateMode('create', 'compass', 'Add Compass');
    }, 'Compass button not found in the DOM');

    attachButtonListener('toggle-labels', () => {
        canvasManager.toggleGlobalLabels();
        canvasManager.render(ctx, canvas);
    }, 'Labels toggle button not found in the DOM');

    attachButtonListener('toggle-coordinates', () => {
        canvasManager.toggleGlobalCoordinates();
        canvasManager.render(ctx, canvas);
    }, 'Coordinates toggle button not found in the DOM');

    // Shape buttons
    const shapeButtons = [
        { id: 'draw-line', shape: 'line', description: 'Draw Line' },
        { id: 'draw-triangle', shape: 'triangle', description: 'Draw Triangle' },
        { id: 'draw-rectangle', shape: 'rectangle', description: 'Draw Rectangle' },
        { id: 'draw-circle', shape: 'circle', description: 'Draw Circle' },
        { id: 'draw-protractor', shape: 'protractor', description: 'Draw Protractor' },
        { id: 'add-divider', shape: 'divider', description: 'Add Divider' },
        { id: 'add-compass', shape: 'compass', description: 'Add Compass' },
    ];
    shapeButtons.forEach(({ id, shape, description }) => {
        attachButtonListener(id, () => activateMode('create', shape, description));
    });

    // Mode buttons
    attachButtonListener('modify-shape', () => activateMode('modify', null, 'Modify Shape'));
    attachButtonListener('delete-shape', () => activateMode('delete', null, 'Delete Shape'));
});

// Function to activate a mode and optionally set a shape type
function activateMode(newMode, newShapeType, description) {
    mode = newMode;
    shapeType = newShapeType || shapeType;
    console.log(`Mode: ${mode}, Shape: ${shapeType}, Action: ${description}`);
    updateActiveButton(newMode, newShapeType);
}

// Function to highlight the active button
function updateActiveButton(newMode, newShapeType) {
    const buttons = document.querySelectorAll('.icon-btn');
    buttons.forEach((button) => button.classList.remove('active'));

    let activeButtonId;
    if (newMode === 'create' && newShapeType) {
        activeButtonId = `draw-${newShapeType}`;
    } else if (newMode === 'modify') {
        activeButtonId = 'modify-shape';
    } else if (newMode === 'delete') {
        activeButtonId = 'delete-shape';
    }

    if (activeButtonId) {
        const activeButton = document.getElementById(activeButtonId);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }
}

// Function to toggle grid visibility
function toggleGrid() {
    isGridVisible = !isGridVisible;
    canvasManager.render(ctx, canvas);
}



export function collectPoints(x, y) {
    points.push(new Point(x, y));
    //render();
    canvasManager.render(ctx, canvas);
    console.log(`Inside collectPoints shapeType ${shapeType} ${canvasManager.shapes.length}`);
    if (
        (shapeType === 'line' && points.length === 2) ||
        (shapeType === 'triangle' && points.length === 3) ||
        (shapeType === 'angle' && points.length === 3) ||
        (shapeType === 'rectangle' && points.length === 2) ||
        (shapeType === 'circle' && points.length === 2) ||
        (shapeType === 'protractor' && points.length === 1) ||
        (shapeType === 'compass' && points.length === 1) ||
        (shapeType === 'divider' && points.length === 1)
    ) {
        createShapeFromPoints();
        points.length = 0; // Reset points after creating shape
    }
}


export function createShapeFromPoints() {
    console.log("Inside crearteShape shapeType", shapeType, points.length);
    if (shapeType === 'point') {
      //  canvasManager.addShape(shape);
        geoshapes.push(new Point(points[0].x, points[0].y));
    }   else if (shapeType === 'line') {
        const shape = new Line(points[0], points[1])
        canvasManager.addShape(shape);
       
    } else if (shapeType === 'circle') {
        const radius = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        const shape = new Circle(points[0], radius);
        canvasManager.addShape(shape);
       
    } else if (shapeType === 'triangle') {
        const shape = new Triangle(points[0], points[1], points[2]);
        canvasManager.addShape(shape); // Add shape to CanvasManager
        
       
    } else if (shapeType === 'angle') {
        canvasManager.addShape(new Angle(points[0], points[1], points[2]));
    } else if (shapeType === 'protractor') {
            const shape = new Protractor(points[0], 100); // Create protractor
            shape.style = activeStyle; // Assign the current active style
            canvasManager.addShape(shape);
            
    }  else if (shapeType === 'compass') {
            const shape = new Compass(points[0].x, points[0].y);
            canvasManager.addShape(shape);
            console.log("compass created:", shape);
    } else if (shapeType === 'divider') {
        const shape = new Divider(points[0].x, points[0].y); // Divider-specific logic
        canvasManager.addShape(shape);
            // Add to shapes array
           
    } else if (shapeType === 'rectangle') {
        const shape = new Rectangle(points[0], points[1])
        canvasManager.addShape(shape);
       
    }
   // render();
    canvasManager.render(ctx, canvas);
    setMode('modify');
}


// Function to set the active mode
export function setMode(newMode) {
    mode = newMode;
    console.log(`Mode set to: ${newMode}`);
}


// Shape manipulation functions
export function generatePointLabel() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let label = '';
    let index = pointCounter;

    do {
        label = alphabet[index % 26] + label;
        index = Math.floor(index / 26) - 1;
    } while (index >= 0);

    pointCounter++;
    return label;
}



canvas.addEventListener('mousedown', (e) => {
    const { offsetX, offsetY } = e;

     
    if (mode === 'modify') {
        // Detect shape under the cursor
        console.log("The available shapes are", canvasManager.shapes);
        selectedShape = canvasManager.shapes.find((shape) => shape.isPointInside(offsetX, offsetY));
        
        if (!selectedShape) {
        console.log("No shape found under cursor.");
        return;
         }

         else {

            console.log("Mouse down : Selected shape:", selectedShape);
            console.log("State of arc in mousedown:", selectedShape.arc);
            const shapeType = selectedShape.constructor.name;
            console.log("Shape Type in mousedown:", shapeType);
            const distanceToCenter = Math.hypot(offsetX - selectedShape.center?.x, offsetY - selectedShape.center?.y);

            switch (shapeType) {
                case 'Line':
                    if (selectedShape.isPointInside(offsetX, offsetY)) {
                        selectedShape.startDragging(offsetX, offsetY);
                        console.log("Dragging Line Started:", selectedShape);
                    }
                    break;

                case 'Circle':
                    const distanceFromCenter = Math.hypot(offsetX - selectedShape.center.x, offsetY - selectedShape.center.y);
                    
                    if (Math.abs(distanceFromCenter - selectedShape.radius) < 10) {
                        selectedShape.draggingEdge = true; // Dragging radius
                        console.log("Dragging Circle Edge for resizing.");
                    } else {
                        selectedShape.draggingCenter = true; // Dragging entire circle
                        console.log("Dragging Circle Center.");
                    }
                    break;
  

                case 'Protractor':
                    if (Math.abs(distanceToCenter - selectedShape.radius) < 10) {
                        selectedShape.draggingEdge = true;
                        console.log(`${shapeType} resizing initiated.`);
                    } else if (e.shiftKey) {
                        selectedShape.rotating = true;
                        console.log(`${shapeType} rotation initiated.`);
                    } else {
                        selectedShape.draggingEdge = false;
                        selectedShape.draggingPoint = selectedShape.center;
                        console.log(`${shapeType} center dragging initiated.`);
                    }
                    break;

                case 'Triangle':
                case 'Rectangle':
                    selectedShape.draggingPoint = selectedShape.points.find((point) =>
                        point.isPointInside(offsetX, offsetY)
                    );
                    console.log(`Dragging vertex for: ${shapeType}`);
                    break;
                case 'Divider':
                    if (selectedShape.isPointInside(offsetX, offsetY)) {
                        if (e.shiftKey) {
                            // Enable rotation mode for the divider
                            selectedShape.rotating = true;
                            console.log("🔄 Divider rotation initiated.");
                        } else {
                            // Detect which part of the divider is clicked and set `this.dragging`
                            if (selectedShape.isNearPivot(offsetX, offsetY)) {
                                selectedShape.dragging = 'pivot';
                                console.log("📌 Dragging Divider Pivot.");
                            } else if (selectedShape.isNearLeg1(offsetX, offsetY)) {
                                selectedShape.dragging = 'leg1';
                                console.log("📏 Dragging Divider Leg 1.");
                            } else if (selectedShape.isNearLeg2(offsetX, offsetY)) {
                                selectedShape.dragging = 'leg2';
                                console.log("📏 Dragging Divider Leg 2.");
                            } else {
                                console.log("❌ Clicked inside divider but no part was selected.");
                            }
                        }
                    }
                    break;


                case 'Compass':
                    const dx = offsetX - selectedShape.leg2.x;
                    const dy = offsetY - selectedShape.leg2.y;
                    if (selectedShape.isPointInside(offsetX, offsetY)) {
                        if (selectedShape.dragging === 'pivot') {
                            console.log("Dragging Compass Pivot.");
                            selectedShape.startDragging(offsetX, offsetY, e.shiftKey);
                        } else if (selectedShape.dragging === 'leg1') {
                            if (event.shiftKey){
                                 const mouseX = event.offsetX;
                                 const mouseY = event.offsetY;

                                 const newArc = new Arc(
                                        selectedShape.leg2.x,
                                        selectedShape.leg2.y,
                                        Math.sqrt(dx * dx + dy * dy), // Fixed radius
                                        Math.atan2(dy, dx), // Start angle
                                        Math.atan2(dy, dx), // End angle (same as start initially)
                                        false // Default to clockwise     
                                    );
                               allshapes.currentArc = newArc;
                               selectedShape.arc = newArc;   
                            console.log("Dragging Compass Leg 1.", allshapes.currentArc);
                           selectedShape.startDragging(offsetX, offsetY, e.shiftKey);
                                
                        } else if (selectedShape.dragging === 'leg2') {
                            console.log("Dragging Compass Leg 2.");
                            selectedShape.startDragging(offsetX, offsetY, e.shiftKey);
                        }
                    }}
                    break;

                default:
                    console.log("Unknown shape type:", shapeType);
                    break;
            }

            // Update drag start point
            dragStart = { x: offsetX, y: offsetY };
        } 
    } else if (mode === 'create') {
        collectPoints(offsetX, offsetY);
    } else if (mode === 'delete') {
        const index = geoshapes.findIndex((shape) => shape.isPointInside(offsetX, offsetY));
        if (index !== -1) {
            canvasManager.shapes.splice(index, 1);
            geoshapes.splice(index, 1);
            canvasManager.render(ctx, canvas);
        }
    }
});



canvas.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;

    if (!selectedShape || !dragStart) return; //


    if (mode === 'modify' && selectedShape && dragStart) {
        const dx = offsetX - dragStart.x;
        const dy = offsetY - dragStart.y;
      
        switch (selectedShape.constructor.name) {

            
           // const shapeType = selectedShape.constructor.name;
           // console.log("Shape Type in mousedown:", shapeType);
            case 'Line':
                console.log(`Dragging Line: dx = ${dx}, dy = ${dy}`);
                selectedShape.drag(dx, dy);
                break;
            case 'Protractor':
                handleProtractorMove(selectedShape, dx, dy, offsetX, offsetY, e);
                break;

            case 'Circle':
                if (selectedShape.draggingEdge) {
                    selectedShape.radius += dx; // Modify radius
                    if (selectedShape.radius < 5) selectedShape.radius = 5; // Prevent negative radius
                    console.log("Resizing Circle:", selectedShape.radius);
                } else if (selectedShape.draggingCenter) {
                    selectedShape.center.x += dx;
                    selectedShape.center.y += dy;
                    console.log("Moving Circle Center.");
                }
                break;
    

            case 'Divider':
                console.log("Inside divider selectedShape is ", selectedShape);
                if (selectedShape.rotating) {
                    // Handle rotation logic
                   const angleIncrement = Math.atan2(offsetY - selectedShape.pivot.y, offsetX - selectedShape.pivot.x) -
                               Math.atan2(dragStart.y - selectedShape.pivot.y, dragStart.x - selectedShape.pivot.x);

                    // Step 4: Fine rotation step logic
                    const rotationStep = Math.PI / 60; // 3 degrees in radians
                    const adjustedIncrement = Math.round(angleIncrement / rotationStep) * rotationStep;

                    // Rotate the divider using the adjusted increment
                    selectedShape.rotateDivider(adjustedIncrement);

                     console.log(`Rotating Divider by: ${adjustedIncrement} radians (adjusted from ${angleIncrement} radians).`);
                } else if (selectedShape.dragging === 'pivot') {
                    selectedShape.drag(dx, dy, e.shiftKey, ctx, offsetX, offsetY);
                    console.log("Dragging Divider Pivot.");
                } else if (selectedShape.dragging === 'leg1' || selectedShape.dragging === 'leg2') {
                    selectedShape.adjustLeg(offsetX, offsetY);
                    console.log(`Adjusting Divider ${selectedShape.dragging}.`);
                }
               // handleDividerMove(selectedShape,dx, dy,offsetX,offsetY);
                break;

            case 'Compass':
                console.log("Mouse down : Selected shape:", selectedShape);
                console.log("State of arc in mousedown:", selectedShape.arc);
                handleCompassMove(selectedShape, dx, dy, offsetX, offsetY, e);
                console.log("State of arc in mousemove entry: selectShape.arc, allshapes.currentArc", selectedShape.arc, allshapes.currentArc);

                if (allshapes.currentArc) {
                    const mouseX = e.offsetX;
                    const mouseY = e.offsetY;

                    // Calculate the angle relative to the center (leg2)
                    const dx = mouseX - allshapes.currentArc.center.x;
                    const dy = mouseY - allshapes.currentArc.center.y;
                    const angle = Math.atan2(dy, dx);

                    // Constrain the mouse position to the circle's path
                    const fixedRadius = allshapes.currentArc.radius; // Use the fixed radius
                    const constrainedX = allshapes.currentArc.center.x + fixedRadius * Math.cos(angle);
                    const constrainedY = allshapes.currentArc.center.y + fixedRadius * Math.sin(angle);

                    // Update the arc properties
                    allshapes.currentArc.endAngle = angle; // Update end angle
                    allshapes.currentArc.constrainedX = constrainedX; // Update constrained X position
                    allshapes.currentArc.constrainedY = constrainedY; // Update constrained Y position

                    // Draw radius line and arc
                    canvasManager.render(ctx, canvas);

                    console.log("Mouse constrained to circle:", {
                        constrainedX,
                        constrainedY,
                        angle,
                    });
                    console.log("State of arc in mousemove exit: selectShape.arc, allshapes.currentArc", selectedShape.arc, allshapes.currentArc);
                }
                break;


            default:
                console.log(`Dragging ${selectedShape.constructor.name}: dx = ${dx}, dy = ${dy}`);
                selectedShape.drag(dx, dy, e.shiftKey, ctx, offsetX, offsetY);
                break;
        }

        // Update the drag start point
        dragStart = { x: offsetX, y: offsetY };
       // console.log('Rendering updated shape compass with arc', selectedShape.arc?.currentAngle);

        // Re-render the canvas
        canvasManager.render(ctx, canvas);
    }
});

canvas.addEventListener('mouseup', (e) => {
    console.log(`Inside mouse up Mouse Up at: X = ${e.offsetX}, Y = ${e.offsetY}`);
    
    if (!selectedShape) {
        console.log("No shape was selected before mouse up. Exiting safely.");
        return; // 🔥 Avoid accessing undefined properties
    }

    console.log("The selectShape is", selectedShape);

    switch (selectedShape.constructor.name) {
        case 'Divider':
            selectedShape.draggingLeg = null;
            selectedShape.rotating = false;
            break;

        case 'Compass':
            console.log("Mouse up on Compass. Finalizing changes.");
            selectedShape.stopDragging();
            if (allshapes.currentArc) {
                console.log("Finalizing arc:", allshapes.currentArc);
                allshapes.geoshapes.push(allshapes.currentArc);
                canvasManager.addShape(allshapes.currentArc);
                allshapes.currentArc = null;
                selectedShape.resetToDefault();
            }
            break;

        case 'Line':
        case 'Circle':
            selectedShape.stopDragging();
            console.log(`Mouse up on ${selectedShape.constructor.name}.`);
            break;

        default:
            console.log("No special handling for", selectedShape.constructor.name);
    }

    // Reset the selection
    selectedShape = null;
    dragStart = null;
    canvasManager.render();
});


// Helper function to determine which leg is being dragged
function determineLeg(x, y, shape) {
    if (shape.isPointNearLeg(x, y, 'leg1') || shape.isPointNearLeg(x, y, 'pencilLeg')) {
        return shape.constructor.name === 'divider' ? 'leg1' : 'pencilLeg';
    } else if (shape.isPointNearLeg(x, y, 'leg2') || shape.isPointNearLeg(x, y, 'staticLeg')) {
        return shape.constructor.name === 'divider' ? 'leg2' : 'staticLeg';
    }
    return null;
}

// Specific handlers for different shapes
function handleProtractorMove(protractor, dx, dy, mouseX, mouseY, event) {
    if (protractor.draggingEdge) {
        protractor.resize(mouseX, mouseY);
        console.log("Protractor resized.");
    } else if (event.shiftKey) {
        protractor.rotateLabels(mouseX, mouseY, dragStart);
        console.log("Protractor rotated.");
    } else {
        console.log("The enableProtractorSnapping status",currentPageFeatures.enableProtractorSnapping );
       
        protractor.drag(
            dx,
            dy,
            currentPageFeatures.enableProtractorSnapping,
            canvasManager.shapes,
            event.altkey,
            { x: mouseX, y: mouseY }
                    
        );
        console.log("Protractor dragged.");
    }
}


function handleDividerMove(shape, dx, dy, offsetX, offsetY) {

    if (shape.dragging === 'pivot') 
              shape.drag(dx, dy, e.shiftKey, ctx, offsetX, offsetY);
                   
    else if (shape.dragging === 'leg1' || shape.dragging === 'leg2') 
                shape.adjustLeg(dx, dy);
    } 
    

function handleCompassMove(compass, dx, dy, mouseX, mouseY, event) {
    if (event.shiftKey) {
        compass.rotateAroundLeg2(mouseX, mouseY);
        console.log("Calling render after compass rotation");
        canvasManager.render(ctx, canvas);

        console.log("Compass pencil leg rotated.");
    } else if (compass.dragging === 'pivot') {
        compass.drag(dx, dy);
        console.log("Dragging Compass Pivot.");
    } else if (compass.dragging === 'leg1') {
        compass.leg1.x += dx;
        compass.leg1.y += dy;
        console.log("Dragging Compass Leg 1.");
    } else if (compass.dragging === 'leg2') {
        compass.leg2.x += dx;
        compass.leg2.y += dy;
        console.log("Dragging Compass Leg 2.");
    }

   
}



function drawGrid(ctx, canvas) {
    const gridSize = 20; // Size of each grid square
    ctx.strokeStyle = '#ddd'; // Light gray color for the grid
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}


function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect(); // Get the canvas's bounding box
    const x = event.clientX - rect.left; // X-coordinate relative to the canvas
    const y = event.clientY - rect.top;  // Y-coordinate relative to the canvas
    return { x, y };
}


export function selectShape(x, y) {
  selectedShape = canvasManager.shapes.find((shape) => shape.isPointInside(x, y));
  console.log("The selected shape is ", selectedShape);
}

export function deleteShape(x, y) {
    // Find the shape at the given coordinates
    const shapeIndex = geoshapes.findIndex((shape) => shape.isPointInside(x, y));

    if (shapeIndex !== -1) {
        console.log(`Deleting shape at index: ${shapeIndex}, Shape:`, geoshapes[shapeIndex]);
        canvasManager.shapes.splice(shapeIndex, 1);
        // Remove the shape from geoshapes
        geoshapes.splice(shapeIndex, 1);

        // Re-render the canvas
        canvasManager.render(ctx, canvas);
        console.log("Shape deleted successfully.");
    } else {
        console.warn("No shape found at the given coordinates.");
    }
}



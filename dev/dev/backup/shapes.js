// Import shapes and utilities
import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { Angle } from './shapes/Angles.js';

// Other shape creation logic
export { Shape, Point, Line, Circle, Triangle, Rectangle, Protractor, Angle };

// Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
export const geoshapes = [];
const points = [];
let selectedShape = null;
let dragStart = null;
let mode = 'create';
let shapeType = 'points';
let pointCounter = 0;
const snapThreshold = 10;



// Onload logic to add shapes programmatically


// Event Listeners and Dropdown Logic
const modeRadios = document.querySelectorAll('input[name="mode"]');
const shapeTypeDropdown = document.getElementById('shapeType');

// Attach event listeners for mode radio buttons
modeRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        mode = e.target.value;

        // Show or hide dropdown based on mode
        shapeTypeDropdown.disabled = mode !== 'create';
        console.log(`Dropdown ${mode === 'create' ? 'enabled' : 'disabled'} for ${mode} mode`);
    });
});

// Attach event listener for shapeType dropdown
shapeTypeDropdown.addEventListener('change', (e) => {
    if (mode === 'create') {
        shapeType = e.target.value;
        console.log('Selected shape type:', shapeType);
        if (shapeType == Protractor) {drawProtractor();
                    }
        }
    });

function getMousePosition(canvas, event) {
    const rect = canvas.getBoundingClientRect(); // Get the canvas's bounding box
    return {
        x: event.clientX - rect.left, // X-coordinate relative to the canvas
        y: event.clientY - rect.top  // Y-coordinate relative to the canvas
    };
}



canvas.addEventListener('mousedown', (e) => {
    const { offsetX, offsetY } = e;
  //  const mousePos = getMousePosition(canvas, e);

   
    // For 'modify' mode: handle shape selection and dragging logic
    if (mode === 'modify') {
        // Find the selected shape
        selectedShape = geoshapes.find((shape) => shape.isPointInside(offsetX, offsetY));

        if (selectedShape) {
            console.log("Selected shape:", selectedShape);

            // Handle dragging logic for specific shapes
            if (selectedShape.constructor.name === 'Circle') {
                const distanceToCenter = Math.hypot(offsetX - selectedShape.center.x, offsetY - selectedShape.center.y);

                if (Math.abs(distanceToCenter - selectedShape.radius) < 10) {
                    selectedShape.draggingEdge = true; // Ready to resize
                    console.log("Dragging Circle circumference to resize.");
                } else {
                    selectedShape.draggingEdge = false;
                    selectedShape.draggingPoint = selectedShape.center; // Move the Circle
                    console.log("Dragging Circle center to move.");
                }
                                             
            } else if (selectedShape.constructor.name === 'Protractor') {
                // Protractor always drags its center
                selectedShape.draggingPoint = selectedShape.center;
                console.log("Dragging Protractor center.");
            } else if (selectedShape.constructor.name === 'Triangle' || selectedShape.constructor.name === 'Rectangle') {
                // Handle dragging for other shapes with vertices
                selectedShape.draggingPoint = selectedShape.points.find((point) =>
                    point.isPointInside(offsetX, offsetY)
                );
                console.log("Dragging vertex for:", selectedShape.constructor.name);
                    }

              dragStart = { x: offsetX, y: offsetY }; // Set the drag start point

        } else {
            console.log("No shape found under cursor.");
            }
    } else if (mode === 'create') {
        // For 'create' mode: collect points to form new shapes
        collectPoints(offsetX, offsetY);
    } else if (mode === 'delete') {
        // For 'delete' mode: remove the shape under the cursor
        const index = geoshapes.findIndex((shape) => shape.isPointInside(offsetX, offsetY));
        if (index !== -1) {
            geoshapes.splice(index, 1);
            render();
        }
    }
});


canvas.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;

    if (mode === 'modify' && selectedShape && dragStart) {
        const dx = offsetX - dragStart.x;
        const dy = offsetY - dragStart.y;

        // Check if the selected shape has specific resizing logic (e.g., Circle)
        if (selectedShape.constructor.name === 'Circle' && selectedShape.draggingEdge) {
            // Specific logic for resizing Circle
            const newRadius = Math.hypot(offsetX - selectedShape.center.x, offsetY - selectedShape.center.y);
            selectedShape.radius = newRadius;
            console.log(`Resizing Circle. New radius: ${newRadius}`);
         } else if (selectedShape.constructor.name === 'Protractor') {
            if (e.shiftKey) {
                console.log("Inside shift key logic");
                const currentMousePos = { x: offsetX, y: offsetY };
                const previousMousePos = { x: dragStart.x, y: dragStart.y };
                console.log("Inside shift key logic",currentMousePos,previousMousePos);
                selectedShape.rotate(currentMousePos, previousMousePos);// Handle rotation
                    
            } else {
                // Handle dragging
                selectedShape.drag(dx, dy);
                }  
        } else  {
            // Generic dragging logic for other shapes
            console.log(`Dragging ${selectedShape.constructor.name}: dx = ${dx}, dy = ${dy}`);
            selectedShape.drag(dx, dy, e.shiftKey, ctx, offsetX, offsetY);
        }

        // Update dragStart for subsequent movement
        dragStart = { x: offsetX, y: offsetY };

        // Redraw the canvas
        render();
    }
});

  
canvas.addEventListener('mouseup', () => {
    if (selectedShape) {
        console.log(`Stopped dragging ${selectedShape.constructor.name}`);
        selectedShape.draggingPoint = null; // Reset dragging point
    }
    dragStart = null;
});

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

/*function handleProtractorDrag(dx, dy) {
    // Update protractor position
    protractor.center.x += dx;
    protractor.center.y += dy;

    // Check if snapping is required
    const vertex = findNearestVertex(protractor.center);
    if (vertex && isWithinSnapThreshold(protractor.center, vertex, snapThreshold)) {
        // Snap the protractor to the vertex
        protractor.center.x = vertex.x;
        protractor.center.y = vertex.y;
    }
}



export function findNearestVertex(point) {
    let nearestVertex = null;
    let minDistance = Infinity;

    // Iterate over all triangle vertices
    geoshapes.forEach((shape) => {
        if (shape.type === 'triangle') {
            shape.vertices.forEach((vertex) => {
                const distance = getDistance(point, vertex);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestVertex = vertex;
                }
            });
        }
    });

    return nearestVertex;
}

export function isWithinSnapThreshold(point, vertex, threshold) {
    return getDistance(point, vertex) <= threshold;
}

*/
export function getDistance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}


export function collectPoints(x, y) {
    points.push(new Point(x, y));
    render();
    console.log("Inside collectPoints shapeType", shapeType, points.length);
    if (
        (shapeType === 'line' && points.length === 2) ||
        (shapeType === 'triangle' && points.length === 3) ||
        (shapeType === 'angle' && points.length === 3) ||
        (shapeType === 'rectangle' && points.length === 2) ||
        (shapeType === 'circle' && points.length === 2) ||
        (shapeType === 'protractor' && points.length === 1)
    ) {
        createShapeFromPoints();
        points.length = 0; // Reset points after creating shape
    }
}

export function createShapeFromPoints() {
    console.log("Inside crearteShape shapeType", shapeType, points.length);
    if (shapeType === 'point') {
        geoshapes.push(new Point(points[0].x, points[0].y));
    }   else if (shapeType === 'line') {
        geoshapes.push(new Line(points[0], points[1]));
    } else if (shapeType === 'circle') {
        const radius = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
        geoshapes.push(new Circle(points[0], radius));
    } else if (shapeType === 'triangle') {
        geoshapes.push(new Triangle(points[0], points[1], points[2]));
    } else if (shapeType === 'angle') {
        geoshapes.push(new Angle(points[0], points[1], points[2]));
    } else if (shapeType === 'protractor') {
        geoshapes.push(new Protractor(points[0], 50)); 
    } else if (shapeType === 'rectangle') {
        geoshapes.push(new Rectangle(points[0], points[1]));
    }
    render();
}

export function selectShape(x, y) {
  selectedShape = geoshapes.find((shape) => shape.isPointInside(x, y));
  console.log("The selected shape is ", selectedShape);
}

export function deleteShape(x, y) {
  const index = geoshapes.findIndex((shape) => shape.isPointInside(x, y));
  if (index !== -1) {
    geoshapes.splice(index, 1);
    render();
  }
}

export function render() {
   // console.log("Inside render points and geoshapes", points, geoshapes);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach((point) => point.draw(ctx));
    console.log("Points",points);
    geoshapes.forEach((shape) => shape.draw(ctx));
    console.log("Shapes are",geoshapes);
}

export function getLineIntersection(line1, line2) {
    const { start: p1, end: p2 } = line1;
    const { start: q1, end: q2 } = line2;

    const a1 = p2.y - p1.y;
    const b1 = p1.x - p2.x;
    const c1 = a1 * p1.x + b1 * p1.y;

    const a2 = q2.y - q1.y;
    const b2 = q1.x - q2.x;
    const c2 = a2 * q1.x + b2 * q1.y;

    const determinant = a1 * b2 - a2 * b1;

    if (determinant === 0) {
        return null; // Lines are parallel or coincident
    }

    const x = (b2 * c1 - b1 * c2) / determinant;
    const y = (a1 * c2 - a2 * c1) / determinant;

    // Check if the intersection is within both line segments
    if (
        x >= Math.min(p1.x, p2.x) && x <= Math.max(p1.x, p2.x) &&
        y >= Math.min(p1.y, p2.y) && y <= Math.max(p1.y, p2.y) &&
        x >= Math.min(q1.x, q2.x) && x <= Math.max(q1.x, q2.x) &&
        y >= Math.min(q1.y, q2.y) && y <= Math.max(q1.y, q2.y)
    ) {
        return { x, y };
    }
    return null;
}

export function drawIntersection(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI); // Small circle
    ctx.fillStyle = 'red';
    ctx.fill();
}

export function measureAngleAtIntersection(intersection, line1, line2) {
    const { x, y } = intersection;

    // Vector from intersection to line1's start and end
    const v1 = { x: line1.start.x - x, y: line1.start.y - y };
    const v2 = { x: line1.end.x - x, y: line1.end.y - y };

    // Vector from intersection to line2's start and end
    const v3 = { x: line2.start.x - x, y: line2.start.y - y };
    const v4 = { x: line2.end.x - x, y: line2.end.y - y };

    // Choose vectors that form the angle (one from each line)
    const vectorA = v1; // From intersection to line1.start
    const vectorB = v3; // From intersection to line2.start

    // Calculate dot product and magnitudes
    const dotProduct = vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    const magnitudeA = Math.sqrt(vectorA.x ** 2 + vectorA.y ** 2);
    const magnitudeB = Math.sqrt(vectorB.x ** 2 + vectorB.y ** 2);

    // Calculate the angle in radians and convert to degrees
    const angleRadians = Math.acos(dotProduct / (magnitudeA * magnitudeB));
    return (angleRadians * 180) / Math.PI; // Convert to degrees
}

export function isPointNearCenter(point, center, tolerance = 5) {
    const distance = Math.sqrt((point.x - center.x) ** 2 + (point.y - center.y) ** 2);
    return distance <= tolerance; // Return true if within tolerance
}

export function highlightAndMeasureAngles(ctx, lines, protractorCenter) {
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            const intersection = getLineIntersection(lines[i], lines[j]);
            if (intersection) {
                // Highlight the intersection point
                drawIntersection(ctx, intersection.x, intersection.y);

                // Check if the intersection is near the protractor center
                if (isPointNearCenter(intersection, protractorCenter)) {
                    // Measure and display the angle
                    const angle = measureAngleAtIntersection(intersection, lines[i], lines[j]);
                    console.log(`Angle at (${intersection.x}, ${intersection.y}): ${angle.toFixed(2)}°`);

                    // Draw the angle value on the canvas
                    ctx.font = '14px Arial';
                    ctx.fillStyle = 'blue';
                    ctx.fillText(`${angle.toFixed(2)}°`, intersection.x + 10, intersection.y - 10);
                }
            }
        }
    }
}

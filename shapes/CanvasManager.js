import { Line } from './Lines.js';
import { Triangle } from './Triangle.js';
import * as allshapes from '../shapes.js';
import {Divider} from './Divider.js';
import{Arc} from './Arc.js';




export class CanvasManager {

    // Get the current page name
//const currentPage = location.pathname.split("/").pop();

// Retrieve feature flags for the current page
//const currentPageFeatures = pageFeatures[currentPage] || {};

    constructor(ctx, canvas) {
        this.shapes = []; // List of all shapes on the canvas
        this.intersections = []; 
        this.specificPoints = [];
        this.midPoints = [];  // List of detected intersections
        this.ctx = ctx; // Canvas rendering context
        this.canvas = canvas; 
        this.enableIntersections = false;// Canvas element
    }

    // Add a new shape to the canvas manager
    addShape(shape) {
        this.shapes.push(shape);
    }

    // Remove a shape from the canvas manager
    removeShape(shape) {
        const index = this.shapes.indexOf(shape);
        if (index !== -1) {
            this.shapes.splice(index, 1);
        }
    }

// Add a specific point
    addSpecificPoint(point) {
        this.specificPoints.push(point);
    }

    // Clear all specific points
    clearSpecificPoints() {
        this.specificPoints = [];
    }

    addMidpoint(midpoint) {
    this.midPoints.push(midpoint);
}

calculatemidPoints(vertices) {
    const midPoints = [
        new Point(
            (vertices[1].x + vertices[2].x) / 2,
            (vertices[1].y + vertices[2].y) / 2,
            'M2',
            'blue',
            5
        ),
        new Point(
            (vertices[0].x + vertices[2].x) / 2,
            (vertices[0].y + vertices[2].y) / 2,
            'M3',
            'blue',
            5
        ),
    ];

    this.midPoints.push(...midPoints); // Add midPoints to CanvasManager
    return midPoints;
}
    renderOnly(shape) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (shape && typeof shape.draw === 'function') {
        shape.draw(this.ctx);

        // If it’s a Divider, update button positions explicitly
        if (shape instanceof Divider && shape.updateRotationControls) {
            shape.updateRotationControls();
        }
    }
}

getSnapCandidates() {
    return this.shapes.flatMap(shape => {
        // Include standalone points
        if (shape instanceof Point) return [shape];

        // Include triangle vertices (but not midpoints or internal points)
        if (shape.points && shape.constructor.name === "Triangle") {
            return shape.points;
        }

        return [];
    });
}


    clearTrianglesOnly() {
        this.shapes = this.shapes.filter((shape) => !(shape instanceof Triangle));
    }
    // Clear all shapes from the canvas
    clear() {
        this.shapes = [];
        this.intersections = [];
        this.render();
    }

    clearCircles() {
        this.shapes =this.shapes.filter((shape) => !(shape instanceof Circle));
    }

    clearLines() {
       this.shapes =this.shapes.filter((shape) => !(shape instanceof Line));
    }
    

    toggleGlobalMeasurements() {
        this.showMeasurements = !this.showMeasurements; // Flip global state
        this.shapes.forEach((shape) => (shape.showMeasurements = this.showMeasurements));
        this.render(); // Re-render to reflect changes
    }

    // Toggle global labels
    toggleGlobalLabels() {
        this.showLabels = !this.showLabels; // Flip global state
        this.shapes.forEach((shape) => (shape.showLabels = this.showLabels));
        this.render(); // Re-render to reflect changes
    }

    // Toggle global coordinates
    toggleGlobalCoordinates() {
        this.showCoordinates = !this.showCoordinates; // Flip global state
        this.shapes.forEach((shape) => (shape.showCoordinates = this.showCoordinates));
        this.render(); // Re-render to reflect changes
    }

    enableIntersectionDetection() {
        this.enableIntersections = true;
        
    }

    // Disable intersection detection
    disableIntersectionDetection() {
        this.enableIntersections = false;
        
    }
        

    // Generalized intersection detection
    detectIntersections() {

        
             console.warn("⚠️ Intersection detection is currently disabled.");
        return []; // Return an empty array, effectively disabling it
}
/*
        this.intersections = []; // Reset intersections

        for (let i = 0; i < this.shapes.length; i++) {
            for (let j = i + 1; j < this.shapes.length; j++) {
                const shape1 = this.shapes[i];
                const shape2 = this.shapes[j];

               

                if (this.shouldSkipIntersectionDetection(shape1) || this.shouldSkipIntersectionDetection(shape2)) {
               // console.warn("Skipping intersection detection for:", shape1, shape2);
                continue;
                }

                const sides1 = shape1.getSides();
                const sides2 = shape2.getSides();
                sides1.forEach((side1) => {
                    sides2.forEach((side2) => {
                        const intersection = this.calculateLineIntersection(side1, side2);
                        if (intersection) {
                            const label = allshapes.generatePointLabel(); 
                            this.intersections.push({
                                point: { x: intersection.x, y: intersection.y },
                                shapes: [shape1, shape2],
                                label: label,
                                lines: [side1, side2],
                                angle: intersection.angle,
                            });
                        }
                    });
                });
            }
        }

        this.render();
        return this.intersections; // Always return the array
    }

    // Calculate the intersection between two lines
    calculateLineIntersection(line1, line2) {
        const { startPoint: p1, endPoint: p2 } = line1;
        const { startPoint: p3, endPoint: p4 } = line2;

        const denominator = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);

        if (denominator === 0) return null; // Lines are parallel or coincident

        const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denominator;
        const u = -((p1.x - p2.x) * (p1.y - p3.y) - (p1.y - p2.y) * (p1.x - p3.x)) / denominator;

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            const xi = p1.x + t * (p2.x - p1.x);
            const yi = p1.y + t * (p2.y - p1.y);
            const angle = this.calculateAngles(line1, line2);

            return { x: xi, y: yi, angle };
        }
        return null; // Intersection is outside line segments
    }

    shouldSkipIntersectionDetection(shape) {
    const ignoredShapes = ['Circle', 'Protractor', 'Compass', 'Divider', 'Line', 'Triangle']; // Add shape names to exclude
    return ignoredShapes.includes(shape.constructor.name);
}*/

    // Calculate angles between two lines
    calculateAngles(line1, line2) {
        const slope1 = line1.slope;
        const slope2 = line2.slope;

        const angle1 = Math.atan(slope1);
        const angle2 = Math.atan(slope2);

        const startAngle = Math.min(angle1,angle2);
        const endAngle = Math.max(angle1,angle2);

    // Calculate the primary angle
    

        const primaryAngle = Math.abs(angle2 - angle1);
        const complementaryAngle = Math.PI - primaryAngle;

         return [
        {
            start: startAngle,
            end: endAngle,
            type: 'primary',
            color: '#a7e8b2',
            lines: [line1, line2], // Add the lines forming the angle
        },
           // { start: endAngle, end: startAngle - Math.PI/2, type: 'complementary', color: '#f0a1a1' },
        ];
    }

    // Render all shapes and intersections
    render(isGridVisible = true, hoveredIntersection = null) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (isGridVisible) {
        this.drawGrid(this.ctx, this.canvas);
    }

    // Render shapes
    console.log("Rendering following shapes",this.shapes);
    this.shapes.forEach((shape) => {
        
        if (shape instanceof Divider) {
            
            shape.draw(this.ctx);
        } /* else if (shape.type === "arc") {
           
            this.ctx.beginPath();
            this.ctx.arc(
                shape.center.x,
                shape.center.y,
                shape.radius,
                shape.startAngle,
                shape.endAngle,
                shape.anticlockwise
            );
            this.ctx.strokeStyle = 'black'; // Arc color
            this.ctx.lineWidth = 2;
            this.ctx.stroke(); 
        } */ else if (typeof shape.draw === "function") {
            
            shape.draw(this.ctx);
       //     this.specificPoints.forEach((point) => point.draw(this.ctx, true, false));
            
        }  
    });

    this.specificPoints.forEach((point) => {
        point.draw(this.ctx, true, false); // Show labels, no coordinates
    });

     if(this.midPoints.length){
     this.midPoints.forEach((midpoint) => {
        midpoint.draw(this.ctx, true, false); // Show label, no coordinates
    });
 }

    // Render dynamic arcs for Compass
    if (allshapes.currentArc instanceof Arc) {
      
        /*
        // Draw the dynamic arc
        this.ctx.beginPath();
        this.ctx.arc(
            allshapes.currentArc.center.x,
            allshapes.currentArc.center.y,
            allshapes.currentArc.radius,
            allshapes.currentArc.startAngle,
            allshapes.currentArc.endAngle,
            allshapes.currentArc.anticlockwise
        );
        this.ctx.strokeStyle = 'green'; // Temporary arc color
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Draw the dotted radius line
        this.ctx.beginPath();
        this.ctx.setLineDash([5, 5]); // Dotted line
        this.ctx.moveTo(allshapes.currentArc.center.x, allshapes.currentArc.center.y);
        this.ctx.lineTo(allshapes.currentArc.constrainedX, allshapes.currentArc.constrainedY);
        this.ctx.strokeStyle = '#00f'; // Blue radius line
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
        this.ctx.setLineDash([]); // Reset to solid line */
    } 

    // Render intersections and their annotations
    this.intersections.forEach(({ point, lines, angle }, index) => {
        const { x, y } = point;

        // Highlight hovered intersection
        this.ctx.fillStyle = hoveredIntersection?.point === point ? 'orange' : 'red';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
        this.ctx.fill();

        // Annotate intersection
        this.ctx.fillStyle = 'blue';
        this.ctx.fillText(`I${index + 1}`, x + 10, y - 10);

        // Draw angles
        this.drawAngleArc(this.ctx, point, lines[0], lines[1]);
    });
}



    // Draw angle arcs at intersections
    drawAngleArc(ctx, intersectionPoint, line1, line2, radius = 20) {
        const { x, y } = intersectionPoint;

        const angleData = this.calculateAngles(line1, line2);
        
/*
         const startAngle = Math.min(angle1,angle2);
    const endAngle = Math.max(angle1,angle2);

    // Calculate the primary angle
    const angleRadians = Math.abs(endAngle - startAngle);
    console.log("The difference in angles is", startAngle, endAngle,angle);
    const angleDegrees = (angleRadians * 180) / Math.PI; */



        angleData.forEach(({ start, end, color }) => {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.arc(x, y, radius, start, end, false);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();

            const angleRadians = Math.abs(end - start);
            const labelX = x + radius * 1.5 * Math.cos((start + end) / 2);
            const labelY = y + radius * 1.5 * Math.sin((start + end) / 2);

            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(`${(angleRadians * (180 / Math.PI)).toFixed(1)}°`, labelX, labelY);
        });
    }

   clearAllShapes() {
    console.log("Clearing all shapes! Shapes before clearing:", this.shapes);

    this.shapes.forEach(shape => {
        shape.removeDOMElements?.(); // ✅ Clean up buttons or overlays
    });

    this.shapes = [];
    this.specificPoints = [];
    this.midPoints = [];
    this.intersections = [];

    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


    addProgrammaticShape(shape) {
    this.shapes.push(shape);
    this.render(); // Re-render the canvas to include the new shape
}

    
     addHoverListener() {
        this.canvas.addEventListener('mousemove', (event) => {
            const mouseX = event.offsetX;
            const mouseY = event.offsetY;

            const hoveredIntersection = this.intersections.find(({ point }) => {
                const dx = mouseX - point.x;
                const dy = mouseY - point.y;
                return Math.sqrt(dx * dx + dy * dy) < 10;
            });

            if (hoveredIntersection) {
                
            }
        });
    }


     handleDetectIntersections() {
        

        const intersections = this.detectIntersections();
        intersections.forEach(({ point, lines }) => {
        const angle = this.calculateAngles(lines[0], lines[1]);
            
        });
    }

    

    drawGrid(ctx, canvas) {
    const step = 20; // Minor grid step size
    const scaleStep = 100; // Major grid step size

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Minor grid lines
    ctx.strokeStyle = '#aaa'; // Slightly darker shade
    ctx.lineWidth = 0.5;

    for (let x = step; x <= canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = step; y <= canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Major grid lines (blue)
    ctx.strokeStyle = '#888'; // #0056b3'; // Darker blue
    ctx.lineWidth = 1.5;

    for (let x = 0; x <= canvas.width; x += scaleStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += scaleStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw scale labels
    ctx.font = '12px Arial';
    ctx.fillStyle = '#333'; // Darker color for labels

    for (let x = scaleStep; x <= canvas.width; x += scaleStep) {
        ctx.fillText(x, x + 2, 10); // X-axis scale labels
    }

    for (let y = scaleStep; y <= canvas.height; y += scaleStep) {
        ctx.fillText(y, 2, y - 2); // Y-axis scale labels
    }
}


    drawLineProgrammatically(startX, startY, endX, endY, color = 'black') {
    const startPoint = new Point(startX, startY);
    const endPoint = new Point(endX, endY);
    const line = new Line(startPoint, endPoint, color);

    canvasManager.addProgrammaticShape(line);
  

    }

    snapProtractorToVertex(protractor, triangles) {
    triangles.forEach((triangle) => {
        triangle.points.forEach((vertex) => {
            const distance = Math.hypot(vertex.x - protractor.center.x, vertex.y - protractor.center.y);
            if (distance < this.snapThreshold) { // Define snapThreshold globally or locally
                protractor.center.x = vertex.x;
                protractor.center.y = vertex.y;
                
            }
        });
    });
}}


    

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 1️⃣ Fix: Explicitly set width & height in JavaScript (Avoid CSS scaling)
canvas.width = 800;  // Change as needed
canvas.height = 800;

// 2️⃣ Fix: Prevent distortion from high-DPI screens
const scale = window.devicePixelRatio; // Get device pixel ratio
canvas.width *= scale;
canvas.height *= scale;
ctx.scale(scale, scale); // Scale drawing context

// 3️⃣ Fix: Ensure No Transformation is Applied Before Drawing
ctx.setTransform(1, 0, 0, 1, 0, 0);

export const canvasManager = new CanvasManager(ctx, canvas);


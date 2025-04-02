import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import {Triangle} from './Triangle.js'


import {functionalityConfig} from '/geoshapes/js/functionalityConfig.js';
import {currentPageFeatures } from '/geoshapes/js/functionalityConfig.js';
import {canvasManager} from '../shapes/CanvasManager.js';

const enableSnapping = currentPageFeatures.enableProtractorSnapping || false;

export class Protractor extends Shape {
    constructor(center, radius = 80, style = 'modern') {
        super();
        this.type = 'protractor'; // important for cleanup
        this.center = center;
        this.radius = radius;
        this.style = style;
        this.angleStep = 5;
        this.angleOffset = 0;
        this.draggingEdge = false; 
        this.draggingCenter = false;// Track if the edge is being dragged
        this.rotationControls = null; // To hold button elements
    }

    draw(ctx) {
        // Draw the protractor (existing code)
        {
            this.drawModern(ctx);
        }
         if (this.highlightedAngle) {
        this.highlightAngle(ctx, this.highlightedAngle);
         }

        this.center.draw(ctx);

         if (!this.rotationControls) {
            this.addRotationControls();
        }
       
    }

   addRotationControls() {
        const rotateLeft1 = this.createButton('−1°', -1);
        const rotateRight1 = this.createButton('+1°', 1);
        const rotateLeft5 = this.createButton('−5°', -5);
        const rotateRight5 = this.createButton('+5°', 5);

        document.body.appendChild(rotateLeft1);
        document.body.appendChild(rotateRight1);
        document.body.appendChild(rotateLeft5);
        document.body.appendChild(rotateRight5);

        this.rotationControls = { rotateLeft1, rotateRight1, rotateLeft5, rotateRight5 };

        const majorLineColor = '#CB4154'; // Same color as major lines
        Object.values(this.rotationControls).forEach((button) => {
            button.style.backgroundColor = majorLineColor;
            button.style.color = 'white'; // Ensure good contrast
            button.style.border = `1px solid ${majorLineColor}`; // Optional: add a border matching the line
            button.style.borderRadius = '5px'; // Optional: round edges
            button.style.padding = '5px'; // Adjust padding
    });

        this.updateRotationControlsPosition(); // Position buttons near the protractor
    }

    createButton(label, rotationStep) {
        const button = document.createElement('button');
        button.innerText = label;
        button.style.position = 'absolute';
        button.style.zIndex = '10';
        button.addEventListener('click', () => {
            this.rotateByDegrees(rotationStep);
            canvasManager.render(); // Redraw the canvas after rotation
        });
        return button;
    }

   updateRotationControlsPosition() {
    if (this.rotationControls) {
        const { rotateLeft1, rotateRight1, rotateLeft5, rotateRight5 } = this.rotationControls;

        const canvasRect = canvas.getBoundingClientRect(); // Adjust for canvas position
        const centerX = this.center.x + canvasRect.left;
        const centerY = this.center.y + canvasRect.top;

        const offsetX = 20; // Horizontal offset (reduce further if needed)
        const offsetY = 20; // Vertical offset (reduce further if needed)

        rotateLeft1.style.left = `${centerX - 2 * offsetX}px`;
        rotateLeft1.style.top = `${centerY - 2 * offsetY}px`;

        rotateRight1.style.left = `${centerX + offsetX}px`;
        rotateRight1.style.top = `${centerY - 2* offsetY}px`;

        rotateLeft5.style.left = `${centerX - 2 * offsetX}px`;
        rotateLeft5.style.top = `${centerY + offsetY}px`;

        rotateRight5.style.left = `${centerX + offsetX}px`;
        rotateRight5.style.top = `${centerY + offsetY}px`;

        console.log("Updated button positions:", {
            rotateLeft1: rotateLeft1.style.left,
            rotateRight1: rotateRight1.style.left,
            rotateLeft5: rotateLeft5.style.left,
            rotateRight5: rotateRight5.style.left,
        });
    }
}


    removeRotationControls() {
        if (this.rotationControls) {
            const { rotateLeft1, rotateRight1, rotateLeft5, rotateRight5 } = this.rotationControls;
            [rotateLeft1, rotateRight1, rotateLeft5, rotateRight5].forEach((btn) => {
                if (btn && btn.parentNode) btn.parentNode.removeChild(btn);
            });
            this.rotationControls = null;
        }
        this.rotationControlsInitialized = false;
    }


    rotateByDegrees(degrees) {
        this.angleOffset = (this.angleOffset + degrees + 360) % 360;
        console.log(`Protractor rotated by ${degrees}°. Current offset: ${this.angleOffset}`);
        this.updateRotationControlsPosition(); // Update button positions
    }

 /*   resize(newRadius) {
        this.radius = newRadius;
        console.log(`Protractor resized to radius: ${this.radius}`);
        this.updateCircumferencePoint(); // Ensure the circumference point is updated
    }
*/


     handleMouseDown(x, y, isShiftKey = false) {
        const distance = Math.hypot(x - this.center.x, y - this.center.y);
        if (Math.abs(distance - this.radius) < 10) {
            this.draggingEdge = true; // Resizing the radius
            this.draggingCenter = false;
            this.rotating = false;
        } else if (distance <= this.radius && isShiftKey) {
            this.rotating = true; // Start rotation
            this.previousMousePos = { x, y }; // Initialize previous mouse position
        } else if (distance <= this.radius) {
            this.draggingCenter = true; // Dragging the center
            this.draggingEdge = false;
            this.rotating = false;
        }
    }

resize(mouseX, mouseY) {
        const newRadius = Math.hypot(mouseX - this.center.x, mouseY - this.center.y);
        if (newRadius > 10) {
            this.radius = newRadius;
            console.log(`Protractor resized to radius: ${this.radius}`);
        }
    }

     drawClassic(ctx) {
    // Draw background (transparent yellow)
   
}

/* snapToIntersection(intersections, snapThreshold = 10) {
    let nearestIntersection = null;
    let minDistance = Infinity;

    intersections.forEach(({ point, angle }) => {
        const distance = Math.hypot(this.center.x - point.x, this.center.y - point.y);
        if (distance < snapThreshold && distance < minDistance) {
            minDistance = distance;
            nearestIntersection = { point, angle };
        }
    });

    if (nearestIntersection) {
        // Snap to the intersection point
        this.center.x = nearestIntersection.point.x;
        this.center.y = nearestIntersection.point.y;

        // Align the protractor's zero line to the start angle of the primary angle
        const primaryAngleData = nearestIntersection.angle.find((a) => a.type === 'primary');
        if (primaryAngleData) {
            this.alignProtractorToPrimaryAngle(primaryAngleData);
        } else {
            console.warn("No primary angle found to align.");
        }
    }
*/

   snapToIntersection(intersections, snapThreshold = 10) {
    let nearestIntersection = null;
    let minDistance = Infinity;

    if (!this.intersections || this.intersections.length === 0) {
        console.warn("No intersections detected or intersection detection is disabled.");
        return;
    }

    // Find the nearest intersection point
    intersections.forEach(({ point, angle }) => {
        const distance = Math.hypot(this.center.x - point.x, this.center.y - point.y);
        if (distance < snapThreshold && distance < minDistance) {
            minDistance = distance;
            nearestIntersection = { point, angle };
        }
    });

    if (nearestIntersection) {
        // Snap to the intersection point
        this.center.x = nearestIntersection.point.x;
        this.center.y = nearestIntersection.point.y;

        // Align the protractor's zero line to the start angle of the primary angle
        const primaryAngleData = nearestIntersection.angle.find((a) => a.type === 'primary');
        if (primaryAngleData) {
            this.alignProtractorToPrimaryAngle(primaryAngleData);

            // Highlight the angle between the two lines
            this.highlightedAngle = primaryAngleData; // Store the angle for rendering
        } else {
            console.warn("No primary angle found to align.");
        }
    } else {
        this.highlightedAngle = null; // Clear any previous highlight if no intersection is found
    }
}
    

// Function to snap protractor to the nearest vertex
snapToVertex(protractor, triangles) {
    let closestVertex = null;
    let minDistance = Infinity;

    // Find the nearest vertex to the protractor's center
    triangles.forEach((triangle) => {
        triangle.points.forEach((vertex) => {
            const distance = Math.hypot(protractor.center.x - vertex.x, protractor.center.y - vertex.y);
            if (distance < minDistance) {
                minDistance = distance;
                closestVertex = vertex;
            }
        });
    });

    // Snap the protractor to the closest vertex
    if (closestVertex && minDistance < 20) { // Snap if within a threshold
        protractor.center.x = closestVertex.x;
        protractor.center.y = closestVertex.y;
        console.log("Protractor snapped to vertex:", closestVertex);
    }
}

// In your mousemove or drag logic

snapToNearestPoint(protractor, shapes) {
    let closestPoint = null;
    let minDistance = Infinity;

    // Iterate through all shapes to find the nearest point
    shapes.forEach((shape) => {
        if (shape instanceof Point) { // Only check Point objects
            const distance = Math.hypot(protractor.center.x - shape.x, protractor.center.y - shape.y);
            if (distance < minDistance) {
                minDistance = distance;
                closestPoint = shape;
            }
        }
    });

    // Snap to the closest point if within threshold (e.g., 20px)
    if (closestPoint && minDistance < 20) {
        protractor.center.x = closestPoint.x;
        protractor.center.y = closestPoint.y;
        console.log("✅ Protractor snapped to nearest point:", closestPoint);
    }
}


alignProtractorToPrimaryAngle(primaryAngleData) {
    if (!primaryAngleData || primaryAngleData.type !== 'primary') {
        console.warn("No valid primary angle data to align.");
        return;
    }

    const smallerAngle = Math.max(primaryAngleData.start, primaryAngleData.end); // Choose the smaller angle
    this.angleOffset = (360 + (smallerAngle * 180) / Math.PI) % 360; // Convert radians to degrees
    console.log(`Protractor aligned to smaller angle. Offset: ${this.angleOffset}`);
}



    drawModern(ctx) {
    const fullLineLength = this.radius;
    const majorLineLength = 40;  // Length of major lines (multiples of 5 degrees)
    const minorLineLength = 20;  // Length of minor lines (other degrees)

    
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    // Draw the outer circle
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    for (let angle = 0; angle < 360; angle++) {
        const adjustedAngle = (360 - angle + this.angleOffset) % 360;
        const radians = (adjustedAngle * Math.PI) / 180;

        // Determine if this is a major or minor line
      
        const isFull = angle % 30 === 0;
        const isMajor = !isFull && angle % 5 === 0;

        // Set line length based on whether it's a major or minor line
        const lineLength = isFull ? fullLineLength : (isMajor ? majorLineLength : minorLineLength);

        // Calculate start and end points for the line
        const startX = this.center.x + (this.radius - lineLength) * Math.cos(radians);
        const startY = this.center.y + (this.radius - lineLength) * Math.sin(radians);
        const endX = this.center.x + this.radius * Math.cos(radians);
        const endY = this.center.y + this.radius * Math.sin(radians);

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = isFull ? '#77DD77' : (isMajor ? '#CB4154' : 'gray'); // Major lines in blue, minor in gray
        ctx.lineWidth = isFull ? 2 : (isMajor ? 1.5 : 0.5);
        ctx.stroke();

        // Add labels only for major lines
        if (isFull || isMajor && angle % 10 === 0) {
            const labelX = this.center.x + (this.radius + 10) * Math.cos(radians);
            const labelY = this.center.y + (this.radius + 10) * Math.sin(radians);

            ctx.font = '10px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${angle}`, labelX, labelY);
        }
    }
}


    rotateLabels(direction) {
        const step = direction === 'clockwise' ? this.angleStep : -this.angleStep;
        this.angleOffset = (this.angleOffset + step + 360) % 360;
        console.log(`Protractor rotated ${direction}. Current offset: ${this.angleOffset}`);
    }

    highlightAngle(ctx, angleData) {
    const { start, end } = angleData;

    // Draw the arc representing the angle
    ctx.beginPath();
    ctx.arc(
        this.center.x,
        this.center.y,
        this.radius, // Use the protractor's radius
        start,
        end,
        false // Counterclockwise = false
    );
    ctx.lineTo(this.center.x, this.center.y); // Connect the arc to the center
    ctx.closePath();

    // Fill the highlighted area
    ctx.fillStyle = 'rgba(0, 255, 0, 0.2)'; // Light green with transparency
    ctx.fill();
}


    resize(mouseX, mouseY) {
        const newRadius = Math.hypot(mouseX - this.center.x, mouseY - this.center.y);
        if (newRadius > 10) {
            this.radius = newRadius;
            console.log(`Protractor resized to radius: ${this.radius}`);
        }
    }
/*
    drag(dx, dy) {
        console.log("The status of draggingEdge, draggingCenter are", this.draggingEdge,this.draggingCenter);
        if (this.draggingEdge) {
           this.radius += dx; // Resize (stretch radius)
            if (this.radius < 5) this.radius = 5; 
            
            console.log(`Protractor resized: New radius = ${this.radius}`); // Resizing logic
            
        } else if (this.draggingCenter) {
            this.center.x += dx;
            this.center.y += dy;
        console.log(`Protractor dragged to (${this.center.x}, ${this.center.y})`);
    }
}*/

 drag(dx, dy, enableSnapping = false, geoshapes = [],isModifierKeyPressed = false,currentMousePos, intersections=false, ) {
    // Resizing the protractor (dragging the edge)
    const angleStep = 1;

    if (this.draggingEdge) {
        const newRadius = this.radius + dx; // Adjust radius using dx
        this.radius = Math.max(newRadius, 10); // Set minimum radius to prevent collapse
        console.log(`Resized Protractor: Radius = ${this.radius}`);
    } 
    // Dragging the center of the protractor
    else if (this.draggingCenter) {
        this.center.x += dx;
        this.center.y += dy;

        this.updateRotationControlsPosition(); 

        console.log(`Dragged Protractor: Center = (${this.center.x}, ${this.center.y})`);

        console.log("The enable snapping status inside Protractor is",enableSnapping); // Handle snapping to vertices if enabled
        if (enableSnapping  && !isModifierKeyPressed) {
            const closestVertex = this.findClosestVertex(this.center, canvasManager.shapes);
            console.log("The closest Vertex is", closestVertex);
            const closestPoint = findClosestPoint(this.center,canvasManager.shapes);
            if (closestVertex) {
                this.center.x = closestVertex.x;
                this.center.y = closestVertex.y;
                console.log("Protractor snapped to vertex at:", this.center);
            } else {

                this.center.x = closestPoint.x;
                this.center.y = closestPoint.y;
                console.log("Protractor snapped to vertex at:", this.center);

           }
        }

        // Snap to intersections if any exist
        if (intersections && intersections.length > 0) {
            this.snapToIntersection(intersections);
        }
    } 
    // Rotating the protractor
    else if (this.rotating && this.previousMousePos) {
        const prevAngle = Math.atan2(
            this.previousMousePos.y - this.center.y,
            this.previousMousePos.x - this.center.x
        );
        const currentAngle = Math.atan2(
            currentMousePos.y - this.center.y,
            currentMousePos.x - this.center.x
        );
        let angleDelta = ((currentAngle - prevAngle) * 180) / Math.PI;

        if (angleDelta > 180) angleDelta -= 360;
        if (angleDelta < -180) angleDelta += 360;

        const adjustedDelta = Math.round(angleDelta / angleStep) * angleStep;

        this.angleOffset = (this.angleOffset + adjustedDelta + 360) % 360; // Update rotation angle
        console.log(`Protractor rotated. Current offset: ${this.angleOffset} (adjusted by ${adjustedDelta}°)`);

        this.previousMousePos = currentMousePos; // Update previous position
    }

        
}

rotateByDegrees(degrees) {
    this.angleOffset = (this.angleOffset + degrees + 360) % 360;
    console.log(`Protractor rotated by ${degrees}°. Current offset: ${this.angleOffset}`);
}

     findClosestVertex(currentPosition, canvasshapes) {
        const snapThreshold = 10; // Distance threshold for snapping
        let closestVertex = null;
        let minDistance = Infinity;
        console.log("Inside findClosestVertex", canvasshapes);
        canvasshapes.forEach((canvasshape) => {
            console.log("The shape type is", canvasshape);
            if (canvasshape instanceof Triangle) {
                console.log("Inside shape type condition");
                canvasshape.points.forEach((vertex) => {
                    const distance = Math.hypot(
                        currentPosition.x - vertex.x,
                        currentPosition.y - vertex.y
                    );

                    if (distance < snapThreshold && distance < minDistance) {
                        closestVertex = vertex;
                        minDistance = distance;
                    }
                });
            }
        });

        return closestVertex;
    }


    findClosestPoint(currentPosition, canvasShapes) {
    const snapThreshold = 10; // Distance threshold for snapping
    let closestPoint = null;
    let minDistance = Infinity;

    console.log("🔍 Searching for closest point...", canvasShapes);

    canvasShapes.forEach((shape) => {
        if (shape instanceof Point) { // Only check Point objects
            const distance = Math.hypot(
                currentPosition.x - shape.x,
                currentPosition.y - shape.y
            );

            if (distance < snapThreshold && distance < minDistance) {
                closestPoint = shape;
                minDistance = distance;
            }
        }
    });

    console.log("✅ Closest point found:", closestPoint);
    return closestPoint;
}




    isPointInside(x, y) {
        const distance = Math.hypot(x - this.center.x, y - this.center.y);
        if (Math.abs(distance - this.radius) <= 10) {
            // Near the circumference for resizing
            this.draggingEdge = true;
            this.draggingCenter = false;
            return true;
        } else if (distance <= this.radius) {
            // Inside the circle for dragging the center
            this.draggingCenter = true;
            this.draggingEdge = false;
            return true;
        }
        return false; // Not inside the Protractor
    }

 
    handleMouseUp() {
        this.draggingEdge = false;
        this.draggingCenter = false;
    }
  
    getPointsForDragging() {
        return [this.center];
    }
}

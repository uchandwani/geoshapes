import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import {Triangle} from './Triangle.js'


import {functionalityConfig} from '/geoshapes/js/commonConfig.js';
import {currentPageFeatures } from '/geoshapes/js/commonConfig.js';
import {canvasManager} from '../shapes/CanvasManager.js';

const enableSnapping = currentPageFeatures.enableProtractorSnapping || false;

export class Protractor extends Shape {
    constructor(center, radius, style = 'classic') {
        super();
        this.center = center;
        this.radius = radius;
        this.style = style;
        this.draggingEdge = false;
        this.draggingCenter = false;
        this.rotating = false;
        this.previousMousePos = null;
        this.angleOffset = 0;
        this.wasSnapped = false; // ✅ Important missing line
        this.snappingEnabled = true;
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
        
            this.rotationControls = {
                rotateLeft1,
                rotateRight1,
                rotateLeft5,
                rotateRight5
            };
        
            const majorLineColor = '#CB4154';
            Object.values(this.rotationControls).forEach((button) => {
                button.style.backgroundColor = majorLineColor;
                button.style.color = 'white';
                button.style.border = `1px solid ${majorLineColor}`;
                button.style.borderRadius = '5px';
                button.style.padding = '5px';
                button.style.cursor = 'pointer';
            });
        
            this.updateRotationControlsPosition();
        }
        
        createButton(label, rotationStep) {
            const button = document.createElement('button');
            button.innerText = label;
            button.style.position = 'absolute';
            button.style.zIndex = '10';
            button.addEventListener('click', () => {
                console.log(`🔁 Button "${label}" clicked → Rotating by ${rotationStep}°`);
                this.rotateByDegrees(rotationStep); // ✅ Main rotation method
            });
            return button;
        }
        
        rotateByDegrees(degrees) {
            this.angleOffset = (this.angleOffset + degrees + 360) % 360;
            console.log(`✅ Protractor rotated by ${degrees}°. New offset: ${this.angleOffset}`);
            this.updateRotationControlsPosition(); // Keep buttons positioned
            canvasManager.render(); // ✅ Redraw canvas and protractor
        }

        drawSnapToggleButton(ctx) {
            const cx = this.center.x;
            const cy = this.center.y + this.radius + 30; // position below protractor
            const radius = 12;
        
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.snappingEnabled ? '#4CAF50' : '#aaa';
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.stroke();
        
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '14px sans-serif';
            ctx.fillText(this.snappingEnabled ? '🧲' : '⛔', cx, cy + 1);
        
            this._snapButton = { x: cx, y: cy, r: radius };
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

clampCenterWithinCanvas() {

    const canvas = this.canvas; // use internal canvas object
    if (!canvas) {
        console.error("🚫 Canvas not found inside Protractor!");
        return;
    }
    const minX = this.radius;
    const minY = this.radius;
    const maxX = canvas.width - this.radius;
    const maxY = canvas.height - this.radius;

    this.center.x = Math.max(minX, Math.min(this.center.x, maxX));
    this.center.y = Math.max(minY, Math.min(this.center.y, maxY));
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

            // Deleted else if button for shift
        
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
    
 

// In your mousemove or drag logic

removeDOMElements() {
    this.removeRotationControls?.();
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

drawCanvasButtons(ctx) {
    const cx = this.center.x;
    const cy = this.center.y;
    const spacing = 20;
    const btnSize = 20;

    const buttons = [
        { label: '-5°', dx: -spacing, dy: -spacing, delta: -5 },
        { label: '-1°', dx: -spacing, dy: spacing, delta: -1 },
        { label: '+1°', dx: spacing, dy: -spacing, delta: 1 },
        { label: '+5°', dx: spacing, dy: spacing, delta: 5 },
    ];

    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    this._canvasButtons = [];

    buttons.forEach(({ label, dx, dy, delta }) => {
        const x = cx + dx;
        const y = cy + dy;

        ctx.beginPath();
        ctx.rect(x - btnSize / 2, y - btnSize / 2, btnSize, btnSize);
        ctx.fillStyle = '#CB4154';
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.fillText(label, x, y);

        this._canvasButtons.push({ x, y, w: btnSize, h: btnSize, delta });
    });
    this.drawSnapToggleButton(ctx);

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
    this.drawCanvasButtons(ctx);  
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

     

    drag(dx, dy, geoshapes = []) {
    if (!this.center) return;

    // First, move the center by dx, dy
    this.center.x += dx;
    this.center.y += dy;

    // Snap only if enabled and geoshapes available
    const shouldSnap = this.snappingEnabled && geoshapes.length > 0;

    if (shouldSnap) {
        let closestPoint = null;
        let minDistance = Infinity;

        geoshapes.forEach((shape) => {
            if (shape instanceof Point) {
                const dist = Math.hypot(this.center.x - shape.x, this.center.y - shape.y);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestPoint = shape;
                }
            } else if (shape.constructor.name === 'Triangle') {
                shape.points?.forEach((vertex) => {
                    const dist = Math.hypot(this.center.x - vertex.x, this.center.y - vertex.y);
                    if (dist < minDistance) {
                        minDistance = dist;
                        closestPoint = vertex;
                    }
                });
            }
        });

        if (closestPoint && minDistance < 20) {
            this.center.x = closestPoint.x;
            this.center.y = closestPoint.y;
            console.log("✅ Snapped to closest Point or Triangle Vertex:", closestPoint.label || '(unnamed)');
        }
    }

    // Keep center within canvas bounds
    if (typeof canvas !== "undefined" && canvas) {
        this.clampCenterWithinCanvas(canvas);
    }
}

        
    
    
 clampCenterWithinCanvas(canvas) {
        if (!canvas) {
            console.error("🚫 Canvas not found inside Protractor!");
            return;
        }
        this.center.x = Math.min(Math.max(this.center.x, this.radius), canvas.width - this.radius);
        this.center.y = Math.min(Math.max(this.center.y, this.radius), canvas.height - this.radius);
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
    const buttonPadding = 4; // ➡️ Allow slight forgiveness around button box

    if (this._canvasButtons) {
        for (let btn of this._canvasButtons) {
            const { x: bx, y: by, w, h, delta } = btn;
            const left = bx - w / 2 - buttonPadding;
            const right = bx + w / 2 + buttonPadding;
            const top = by - h / 2 - buttonPadding;
            const bottom = by + h / 2 + buttonPadding;
            if (x >= left && x <= right && y >= top && y <= bottom) {
                console.log(`🖱 Click detected inside button (${delta}°) → setting pendingRotation.`);
                this.pendingRotation = delta;
                this.draggingCenter = true; // ✅ Ensures shape is selected
                return true;
            }
        }
    }

    // ✅ Check snap toggle button
        if (this._snapButton) {
            const dx = x - this._snapButton.x;
            const dy = y - this._snapButton.y;
            const dist = Math.hypot(dx, dy);  // 🔧 Define dist before using it

            if (dist <= this._snapButton.r) {
                this.snappingEnabled = !this.snappingEnabled;
                console.log("🧲 Snapping toggled to:", this.snappingEnabled);
                canvasManager.render();

                // Prevent unintended dragging or rotation
                this.draggingEdge = false;
                this.draggingCenter = false;
                this.pendingRotation = null;

                return true;
            }
}

    

    const distance = Math.hypot(x - this.center.x, y - this.center.y);
    if (Math.abs(distance - this.radius) <= 10) {
        this.draggingEdge = true;
        this.draggingCenter = false;
        return true;
    } else if (distance <= this.radius) {
        this.draggingCenter = true;
        this.draggingEdge = false;
        return true;
    }
    return false;
}


 
handleMouseUp() {
    console.log("🖐 Mouse Up event");

    // Reset dragging states in all cases
    this.draggingEdge = false;
    this.draggingCenter = false;

    // 🧲 Apply rotation if any
    if (this.pendingRotation != null) {
        console.log(`⏳ Applying pending rotation: ${this.pendingRotation}°`);
        this.rotateByDegrees(this.pendingRotation);
        this.pendingRotation = null;
        canvasManager.render();
        return; // ✅ Done — don’t allow further action
    }

    // 🧲 Edge case: ensure no phantom dragging was triggered by snap toggle
    if (!this.draggingEdge && !this.draggingCenter) {
        console.log("❎ No dragging active — likely a snap toggle click");
        return;
    }

    // ✋ Other drag end logic (if needed) can go here...
}

    
  
getPointsForDragging() {
        return [this.center];
    }
}

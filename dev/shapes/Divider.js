import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import {canvasManager} from './CanvasManager.js';

export class Divider extends Shape {
    constructor(pivotX, pivotY) {
        super();
        this.type = 'divider';
        this.pivot = { x: pivotX, y: pivotY };
        this.leg1 = { x: pivotX - 50, y: pivotY + 100 };
        this.leg2 = { x: pivotX + 50, y: pivotY + 100 };
        this.screw = { x: pivotX, y: pivotY + 20 };
        this.ringRadius = 10;
        this.dragging = null;
        this.rotationControlsInitialized = false;
        this.pivotDraggable = false;
        this.snappingEnabled = false;
    
        this.buttons = {
            rotate: {
                minus1: this.createButton('−1°', () => this.handleRotation(-1)),
                minus5: this.createButton('−5°', () => this.handleRotation(-5)),
                plus1: this.createButton('+1°', () => this.handleRotation(1)),
                plus5: this.createButton('+5°', () => this.handleRotation(5)),
            },
            snapToggle: this.createSnapToggleButton(),
        };
    
        this.updateButtonPositions();
    }

    setupSnapToggleButton(buttonElement) {
        if (!buttonElement) {
          console.warn("🚫 Snap toggle button not found.");
          return;
        }
      
        console.log("✅ Snap toggle button found and listener attached.");
        buttonElement.addEventListener("click", () => {
          this.snappingEnabled = !this.snappingEnabled;
          console.log(this.snappingEnabled ? "🔁 Snap Enabled" : "⛔ Snap Disabled");
        });
      }
      

    getSnapToggleSVGMarkup() {
        const fillColor = this.snappingEnabled ? '#cce0ff' : 'none';
        return `
            <svg class="sub-button-svg" width="36" height="36" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" stroke="#1E88E5" fill="${fillColor}" stroke-width="4"/>
                <path d="M30 50 L45 65 L70 30" stroke="#1E88E5" stroke-width="6" fill="none" />
                <title>Toggle Snap</title>
            </svg>
        `;
    }
    
    createSnapToggleButton() {
        const btn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        btn.setAttribute("width", "24");
        btn.setAttribute("height", "24");
        btn.setAttribute("viewBox", "0 0 24 24");
        btn.setAttribute("title", "Toggle Snap for Divider Legs");
        btn.style.position = 'absolute';
        btn.style.cursor = 'pointer';
        btn.style.zIndex = 1000;
        btn.style.background = 'white';
        btn.style.border = '1px solid #ccc';
        btn.style.borderRadius = '6px';
        btn.style.padding = '2px';
        btn.style.boxShadow = '0 1px 4px rgba(0,0,0,0.2)';
    
        btn.innerHTML = `
          <circle cx="12" cy="12" r="10" stroke="#1E88E5" fill="none" stroke-width="2" />
          <path d="M6 12l4 4 8-8" stroke="#1E88E5" stroke-width="2" fill="none" />
        `;
        btn.addEventListener('click', () => {
            this.snappingEnabled = !this.snappingEnabled;
            const circle = btn.querySelector('circle');
            if (circle) {
                circle.setAttribute("fill", this.snappingEnabled ? '#cce0ff' : 'none');
            }
            console.log(`📐 Divider snapping ${this.snappingEnabled ? 'enabled' : 'disabled'}`);
        });
    
        document.body.appendChild(btn);
        return btn;
    }
    
     
    
    drag(dx, dy, isShiftKey, ctx, mouseX, mouseY, geoshapes = []) {
        if (!ctx) {
            console.error("❌ drag(): Canvas context is undefined!");
            return;
        }
    
        if (isShiftKey) {
            this.rotateDivider(mouseX, mouseY);
            this.updateRotationControls();
    
        } else if (this.dragging === 'pivot' && this.pivotDraggable) {
            this.pivot.x += dx;
            this.pivot.y += dy;
            this.screw.x += dx;
            this.screw.y += dy;
            this.leg1.x += dx;
            this.leg1.y += dy;
            this.leg2.x += dx;
            this.leg2.y += dy;
            this.updateRotationControls();
    
        } else if (this.dragging === 'leg1' || this.dragging === 'leg2') {
            const target = this.dragging === 'leg1' ? this.leg1 : this.leg2;
    
            if (this.snappingEnabled && geoshapes.length > 0) {
                console.log("🧲 Checking for snap - Dragging:", this.dragging, 
                    "Snap Enabled:", this.snappingEnabled, 
                    "GeoShapes:", geoshapes?.length);
                const snapped = this.findSnapCandidate(target, geoshapes);
                if (snapped) {
                    target.x = snapped.x;
                    target.y = snapped.y;
                    console.log(`✅ Divider ${this.dragging} snapped to`, snapped.label || snapped);
                } else {
                    console.log(`🚫 No snap candidate found for Divider ${this.dragging}`);
                    target.x += dx;
                    target.y += dy;
                }
            } else {
                target.x += dx;
                target.y += dy;
            }
    
            this.updateRotationControls();
        }
    
        if (ctx?.canvas) {
            this.constrainToCanvas(ctx.canvas.width, ctx.canvas.height);
        }
    
        this.updateButtonPositions();
    }
    
    adjustLeg(mouseX, mouseY, geoshapes = []) {
        const pointToAdjust = this.dragging === 'leg1' ? this.leg1 : this.leg2;
    
        let newX = mouseX;
        let newY = mouseY;
    
        if (this.snappingEnabled && Array.isArray(geoshapes)) {
            const closest = this.findClosestSnapPoint({ x: newX, y: newY }, geoshapes);
            if (closest && closest.distance < 20) {
                newX = closest.x;
                newY = closest.y;
                console.log("📌 Snapped Divider leg to vertex or point:", closest);
            }
        }
    
        pointToAdjust.x = newX;
        pointToAdjust.y = newY;
    }
    

createButton(label, onClick) {
    const button = document.createElement('button');
    button.innerText = label;
    button.style.position = 'absolute';
    button.style.zIndex = 1000;
    button.style.padding = '4px 6px';
    button.style.fontSize = '10px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);
    button.addEventListener('click', onClick);
    return button;
}

rotatePoint(point, pivot, angle) {
        const dx = point.x - pivot.x;
        const dy = point.y - pivot.y;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        return {
            x: pivot.x + dx * cos - dy * sin,
            y: pivot.y + dx * sin + dy * cos,
        };
    }

updateRotationControls() {
        const canvasRect = document.querySelector('canvas').getBoundingClientRect();
        const offsetX = canvasRect.left;
        const offsetY = canvasRect.top;
          const setPosition = (button, x, y) => {
            button.style.left = `${x + offsetX}px`;
            button.style.top = `${y + offsetY}px`;
        };
        const offset = 10;
        setPosition(this.buttons.rotate.minus1, this.pivot.x - offset - 40, this.pivot.y - offset);
        setPosition(this.buttons.rotate.minus5, this.pivot.x - offset - 40, this.pivot.y - offset + 30);
        setPosition(this.buttons.rotate.plus1, this.pivot.x + offset, this.pivot.y - offset);
        setPosition(this.buttons.rotate.plus5, this.pivot.x + offset, this.pivot.y - offset + 30);
        setPosition(this.buttons.snapToggle, this.pivot.x - 12, this.pivot.y - 60);
    }
   
constrainToCanvas(canvasWidth, canvasHeight) {
        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

        // Constrain all points
        this.pivot.x = clamp(this.pivot.x, 0, canvasWidth);
        this.pivot.y = clamp(this.pivot.y, 0, canvasHeight);
        this.leg1.x = clamp(this.leg1.x, 0, canvasWidth);
        this.leg1.y = clamp(this.leg1.y, 0, canvasHeight);
        this.leg2.x = clamp(this.leg2.x, 0, canvasWidth);
        this.leg2.y = clamp(this.leg2.y, 0, canvasHeight);
    }


   draw(ctx) {
    console.log("🎨 Drawing Divider:", this);
    console.log("🎯 Rotation Buttons State:", this.buttons);

    // 1️⃣ Draw the two legs from pivot to leg1 and leg2
    ctx.beginPath();
    ctx.moveTo(this.pivot.x, this.pivot.y);
    ctx.lineTo(this.leg1.x, this.leg1.y);
    ctx.moveTo(this.pivot.x, this.pivot.y);
    ctx.lineTo(this.leg2.x, this.leg2.y);
    ctx.strokeStyle = '#008080';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    // 2️⃣ Draw the central screw
    ctx.beginPath();
    ctx.rect(this.screw.x - 5, this.screw.y - 10, 10, 20);
    ctx.fillStyle = '#777';
    ctx.fill();
    ctx.closePath();

    // 3️⃣ Draw distance label between legs
    const distance = Math.hypot(this.leg1.x - this.leg2.x, this.leg1.y - this.leg2.y);
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Distance: ${distance.toFixed(0)}`, this.pivot.x, this.pivot.y - 20);

    // 3️⃣.5 Draw snap toggle indicator (canvas-based mimic)
    ctx.beginPath();
    ctx.arc(this.pivot.x, this.pivot.y - 40, 14, 0, 2 * Math.PI);
    ctx.fillStyle = this.snappingEnabled ? '#cce0ff' : 'white';
    ctx.strokeStyle = '#1E88E5';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // ✔ Draw check mark
    ctx.beginPath();
    ctx.moveTo(this.pivot.x - 6, this.pivot.y - 42);
    ctx.lineTo(this.pivot.x - 2, this.pivot.y - 36);
    ctx.lineTo(this.pivot.x + 6, this.pivot.y - 46);
    ctx.strokeStyle = '#1E88E5';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();


    // 4️⃣ Draw pivot circle last so color toggle is visible on top
    ctx.beginPath();
    ctx.arc(this.pivot.x, this.pivot.y, this.ringRadius, 0, 2 * Math.PI);
    const pivotColor = this.pivotDraggable ? 'red' : '#008080';
    console.log("🎨 Pivot color set to:", pivotColor);
    ctx.fillStyle = pivotColor;
    ctx.fill();
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // SCREW ring (for disabling drag)
    ctx.beginPath();
    ctx.arc(this.screw.x, this.screw.y, this.ringRadius, 0, 2 * Math.PI);

    // Change appearance if pivotDraggable is true
    ctx.fillStyle = this.pivotDraggable ? '#aaa' : '#008080';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if (
        this.rotationButtons?.snapToggle &&
        !this.snapToggleListenerSet
      ) {
        console.log("📌 Attaching snap toggle event handler");
        this.setupSnapToggleButton(this.rotationButtons.snapToggle);
        this.snapToggleListenerSet = true; // ✅ Prevent repeated listeners
      }
      

    // 5️⃣ Optional: call helper to draw rotation arrows
    this.updateRotationControls();
}

    
    startDragging(mouseX, mouseY) {
            console.log("Divider drag starts");
            if (this.isPointInside({ x: mouseX, y: mouseY })) {
                if (Math.hypot(this.pivot.x - mouseX, this.pivot.y - mouseY) <= 10) {
                this.pivotDraggable = !this.pivotDraggable;
                canvasManager.render(); // 🔁 Force redraw so color update is visible
                console.log("✅ Pivot toggle. Now draggable?", this.pivotDraggable);

                    this.dragging = 'pivot';
                } else if (Math.hypot(this.leg1.x - mouseX, this.leg1.y - mouseY) <= 10) {
                    this.dragging = 'leg1';
                } else if (Math.hypot(this.leg2.x - mouseX, this.leg2.y - mouseY) <= 10) {
                    this.dragging = 'leg2';
                }
            console.log("Divider drag", this.dragging);
            }
        

        }

    isPointNearLeg(x, y, leg) {
        const legPoint = leg === 'leg1' ? this.leg1 : this.leg2;
        const distance = Math.hypot(x - legPoint.x, y - legPoint.y);
        return distance < 10;
    }

 /* isPointInside(x, y) {
    console.log(`🔍 Checking if point (${x}, ${y}) is inside the divider`);

    const pivotDistance = Math.hypot(this.pivot.x - x, this.pivot.y - y);
    if (pivotDistance <= this.ringRadius + 2) { // include padding
        console.log("✅ Click detected on pivot circle.");
        canvasManager.render();
        return true;
    }

    // Old area-based triangle detection (optional now)
    const { pivot, leg1, leg2 } = this;

    function area(p1, p2, p3) {
        return Math.abs(
            (p1.x * (p2.y - p3.y) +
             p2.x * (p3.y - p1.y) +
             p3.x * (p1.y - p2.y)) / 2
        );
    }

    const totalArea = area(pivot, leg1, leg2);
    const area1 = area({ x, y }, leg1, leg2);
    const area2 = area(pivot, { x, y }, leg2);
    const area3 = area(pivot, leg1, { x, y });

    const epsilon = 0.5;
    const inside = Math.abs(totalArea - (area1 + area2 + area3)) < epsilon;

    if (inside) {
        console.log("✅ Click detected inside the divider triangle.");
    } else {
        console.log("❌ Click is outside the divider triangle.");
    }

    return inside;
} */
  isNearScrew(x, y) {
    const distance = Math.hypot(x - this.screw.x, y - this.screw.y);
    return distance < 15; // Same radius as pivot
}
  


  isPointInside(x, y) {
    if (this.isNearPivot(x, y)) {
        this.pivotDraggable = true;
        console.log("🔴 Pivot clicked — Drag enabled");
        return true;
    }

    if (this.pivotDraggable && this.isNearScrew(x, y)) {
        this.pivotDraggable = false;
        console.log("⚪ Screw clicked — Drag disabled");
        return true;
    }

    // Optional: also allow selection when near legs
    if (this.isNearLeg && this.isNearLeg(x, y, 'leg1')) return true;
    if (this.isNearLeg && this.isNearLeg(x, y, 'leg2')) return true;

    return false;
}

snapDividerLegToNearestPoint(divider, shapes) {
    if (!divider.draggingLeg) return; // No leg is being dragged
  
    const draggedPoint = divider[divider.draggingLeg];
    let closest = null;
    let minDistance = Infinity;
  
    shapes.forEach((shape) => {
      // Snap to standalone points
      if (shape instanceof Point) {
        const dist = Math.hypot(draggedPoint.x - shape.x, draggedPoint.y - shape.y);
        if (dist < minDistance) {
          minDistance = dist;
          closest = shape;
        }
      }
  
      // Snap to triangle vertices
      if (shape.constructor.name === 'Triangle' && Array.isArray(shape.points)) {
        shape.points.forEach((vertex) => {
          const dist = Math.hypot(draggedPoint.x - vertex.x, draggedPoint.y - vertex.y);
          if (dist < minDistance) {
            minDistance = dist;
            closest = vertex;
          }
        });
      }
    });
  
    if (closest && minDistance < 20) {
      draggedPoint.x = closest.x;
      draggedPoint.y = closest.y;
      console.log(`✅ Divider ${divider.draggingLeg} snapped to:`, closest.label || '(unnamed point)', closest);
    }
  }

findSnapCandidate(currentPoint, shapes) {
    let closest = null;
    let minDistance = Infinity;

    shapes.forEach(shape => {
        if (shape instanceof Point) {
            const dist = Math.hypot(currentPoint.x - shape.x, currentPoint.y - shape.y);
            if (dist < minDistance) {
                minDistance = dist;
                closest = shape;
            }
        }

        if (shape.constructor.name === 'Triangle' && shape.points?.length === 3) {
            shape.points.forEach(vertex => {
                const dist = Math.hypot(currentPoint.x - vertex.x, currentPoint.y - vertex.y);
                if (dist < minDistance) {
                    minDistance = dist;
                    closest = vertex;
                }
            });
        }
    });
    console.log("🔍 Checking candidate:", point.label || point, 
        "Distance:", distance);
    return minDistance < 20 ? closest : null;
}


rotateDivider(angle) {
    const rotatePoint = (point, pivot, angle) => {
        const dx = point.x - pivot.x;
        const dy = point.y - pivot.y;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        return {
            x: pivot.x + dx * cos - dy * sin,
            y: pivot.y + dx * sin + dy * cos,
        };
    };

    // Rotate legs around the pivot
    this.leg1 = rotatePoint(this.leg1, this.pivot, angle);
    this.leg2 = rotatePoint(this.leg2, this.pivot, angle);
    this.updateButtonPositions();

}

isSnapToggleHit(x, y) {
    const dx = x - this.pivot.x;
    const dy = y - (this.pivot.y - 40);
    return Math.hypot(dx, dy) <= 14;
}

rotatePointAroundPivot(point, angle) {
        const dx = point.x - this.pivot.x;
        const dy = point.y - this.pivot.y;

        const length = Math.sqrt(dx ** 2 + dy ** 2); // Distance from pivot
        const originalAngle = Math.atan2(dy, dx); // Original angle relative to pivot

        // New angle after rotation
        const newAngle = originalAngle + angle;

        // Update point coordinates
        point.x = this.pivot.x + length * Math.cos(newAngle);
        point.y = this.pivot.y + length * Math.sin(newAngle);
    }

    stopDragging() {
        this.dragging = null;
    }

    removeRotationControls() {
        Object.values(this.buttons.rotate).forEach((button) => {
            if (button && button.parentNode) {
                button.parentNode.removeChild(button);
            }
        });
        if (this.buttons.snapToggle && this.buttons.snapToggle.parentNode) {
            this.buttons.snapToggle.parentNode.removeChild(this.buttons.snapToggle);
        }
        this.rotationControlsInitialized = false;
        this.pivotDraggable = false;
    }

isNearPivot(x, y) {
    const distance = Math.hypot(x - this.pivot.x, y - this.pivot.y);
    console.log("Checking inside pivot : distance is", distance);
    return distance < 15; // or whatever feels accurate
}

isNearLeg(x, y, leg) {
    const legPoint = leg === 'leg1' ? this.leg1 : this.leg2;
    const distance = Math.hypot(x - legPoint.x, y - legPoint.y);
    console.log("Checking near leg: distance is", leg, distance);
    return distance < 15;
}



 updateRotationControls() {
    const canvasRect = document.querySelector('canvas').getBoundingClientRect(); // Get canvas position
    const offsetX = canvasRect.left;
    const offsetY = canvasRect.top;

    const setPosition = (button, x, y) => {
        button.style.position = 'absolute';
        button.style.left = `${x + offsetX}px`; // Adjust for canvas offset
        button.style.top = `${y + offsetY}px`; // Adjust for canvas offset
    };

    const offset = 10; // Distance from the pivot center to place the buttons

    // Place buttons near the pivot center
    setPosition(this.buttons.rotate.minus1, this.pivot.x - offset - 40, this.pivot.y - offset); // Top-left of pivot
    setPosition(this.buttons.rotate.minus5, this.pivot.x - offset - 40, this.pivot.y - offset + 30); // Bottom-left of pivot

    setPosition(this.buttons.rotate.plus1, this.pivot.x + offset, this.pivot.y - offset); // Top-right of pivot
    setPosition(this.buttons.rotate.plus5, this.pivot.x + offset, this.pivot.y - offset + 30); // Bottom-right of pivot
}

removeDOMElements() {
    this.removeRotationControls?.();
}

updateButtonPositions() {
    const setPosition = (button, x, y) => {
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        console.log("The position is ", button.style.left, button.style.top);
    };

    // Place rotation buttons near the left and right legs for aesthetics
    setPosition(this.buttons.rotate.minus1, this.leg1.x - 10, this.leg1.y - 30);
    setPosition(this.buttons.rotate.minus5, this.leg1.x - 30, this.leg1.y );
    setPosition(this.buttons.rotate.plus1, this.leg2.x + 10, this.leg2.y - 30);
    setPosition(this.buttons.rotate.plus5, this.leg2.x + 10, this.leg2.y) ;
}


/* 
handleRotation(angle) {
        this.rotateDivider(angle);
        canvasManager.render(); // Redraw the canvas to reflect the rotation
        this.updateButtonPositions();
    } */

    handleRotation(angle) {
    const radians = (angle * Math.PI) / 180; // Convert degrees to radians

    // Rotate both legs around the pivot
    this.leg1 = this.rotatePoint(this.leg1, this.pivot, radians);
    this.leg2 = this.rotatePoint(this.leg2, this.pivot, radians);
    this.updateButtonPositions();
    canvasManager.render(); // Redraw the canvas after rotation
     // Update button positions after rotation
}

}

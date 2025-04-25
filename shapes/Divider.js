import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import {canvasManager} from './CanvasManager.js';

export class Divider extends Shape {
constructor(pivotX, pivotY){
    super();
    this.type = 'divider';
    this.pivot = { x: pivotX, y: pivotY };
    this.leg1 = { x: pivotX - 50, y: pivotY + 100 };
    this.leg2 = { x: pivotX + 50, y: pivotY + 100 };
    this.screw = { x: pivotX, y: pivotY + 20 };
    this.ringRadius = 10;
    this.dragging = null;
    this.rotationControlsInitialized = false;
    this.pivotDraggable = false; // new flag to allow drag when pivot is clicked


    // Initialize buttons
    this.buttons = {
        rotate: {
            minus1: this.createButton('−1°', () => this.handleRotation(-1)),
            minus5: this.createButton('−5°', () => this.handleRotation(-5)),
            plus1: this.createButton('+1°', () => this.handleRotation(1)),
            plus5: this.createButton('+5°', () => this.handleRotation(5)),
        },
    };

    this.updateButtonPositions(); // Position buttons initially
}


    drag(dx, dy, isShiftKey, ctx, mouseX, mouseY) {
        
        if (!ctx) {
        console.error("❌ drag(): Canvas context is undefined!");
        return;
        }
        if (isShiftKey) {
            this.rotateDivider(mouseX, mouseY); 
             this.updateRotationControls(); 
        } else if (this.dragging === 'pivot' && this.pivotDraggable) {
            // Move pivot and both legs
            this.pivot.x += dx;
            this.pivot.y += dy;
            this.screw.x += dx;
            this.screw.y += dy;
            this.leg1.x += dx;
            this.leg1.y += dy;
            this.leg2.x += dx;
            this.leg2.y += dy;
            this.updateRotationControls(); // Update button positions when dragged
        } else if (this.dragging === 'leg1') {
            // Adjust only the first leg
            this.leg1.x += dx;
            this.leg1.y += dy;
            this.updateRotationControls(); 
        } else if (this.dragging === 'leg2') {
            // Adjust only the second leg
            this.leg2.x += dx;
            this.leg2.y += dy;
        }

        // Enforce canvas boundaries
        if (ctx && ctx.canvas) {
            this.constrainToCanvas(ctx.canvas.width, ctx.canvas.height);
        } else {
            console.warn("⚠️ Canvas reference not available; skipping constraint enforcement.");
            }

        this.updateButtonPositions();
    }

   adjustLeg(mouseX, mouseY) {
    if (this.dragging === 'leg1') {
        const dx = mouseX - this.pivot.x;
        const dy = mouseY - this.pivot.y;
        const length = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        this.leg1.x = this.pivot.x + length * Math.cos(angle);
        this.leg1.y = this.pivot.y + length * Math.sin(angle);
    } else if (this.dragging === 'leg2') {
        const dx = mouseX - this.pivot.x;
        const dy = mouseY - this.pivot.y;
        const length = Math.hypot(dx, dy);

        const angle = Math.atan2(dy, dx);
        this.leg2.x = this.pivot.x + length * Math.cos(angle);
        this.leg2.y = this.pivot.y + length * Math.sin(angle);
    }
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
        const canvasRect = document.getElementById('canvas').getBoundingClientRect();  
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
      
        const offsetX = canvasRect.left + scrollX;
        const offsetY = canvasRect.top + scrollY;
      
        const setPosition = (button, x, y) => {
          button.style.left = `${x + offsetX}px`;
          button.style.top = `${y + offsetY}px`;
        };
      
        const offset = 10;
      
        setPosition(this.buttons.rotate.minus1, this.pivot.x - offset - 40, this.pivot.y - offset);
        setPosition(this.buttons.rotate.minus5, this.pivot.x - offset - 40, this.pivot.y - offset + 30);
        setPosition(this.buttons.rotate.plus1,  this.pivot.x + offset, this.pivot.y - offset);
        setPosition(this.buttons.rotate.plus5,  this.pivot.x + offset, this.pivot.y - offset + 30);
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
    ctx.strokeStyle = '#000';
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

    // 4️⃣ Draw pivot circle last so color toggle is visible on top
    ctx.beginPath();
    ctx.arc(this.pivot.x, this.pivot.y, this.ringRadius, 0, 2 * Math.PI);
    const pivotColor = this.pivotDraggable ? 'red' : 'gray';
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
    ctx.fillStyle = this.pivotDraggable ? '#aaa' : 'gray';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


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
    this.rotationControlsInitialized = false;
    this.pivotDraggable = false; // new flag to allow drag when pivot is clicked

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
    // ✅ Throttle DOM updates to avoid layout reflow flicker
    if (!this.lastUpdate) this.lastUpdate = 0;
    const now = performance.now();
    if (now - this.lastUpdate < 30) return;
    this.lastUpdate = now;

    const canvasRect = document.querySelector('canvas').getBoundingClientRect();
    const offsetX = canvasRect.left;
    const offsetY = canvasRect.top;

    const setTransform = (button, x, y) => {
        // 🔁 Use GPU-friendly transform instead of top/left
        button.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
    };

    const offset = 10;

    // 🧠 Position relative to pivot
    setTransform(this.buttons.rotate.minus1, this.pivot.x - offset - 40, this.pivot.y - offset);
    setTransform(this.buttons.rotate.minus5, this.pivot.x - offset - 40, this.pivot.y - offset + 30);
    setTransform(this.buttons.rotate.plus1, this.pivot.x + offset, this.pivot.y - offset);
    setTransform(this.buttons.rotate.plus5, this.pivot.x + offset, this.pivot.y - offset + 30);
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

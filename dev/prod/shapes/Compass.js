// Compass.js
import { Shape } from './Shapes.js';
import * as allshapes from '../shapes.js';
import { canvasManager } from './CanvasManager.js';
import {Arc} from './Arc.js';

export class Compass extends Shape {
    constructor(pivotX, pivotY) {
        super();
        this.type = 'compass';
        this.pivot = { x: pivotX, y: pivotY }; 
        this.screw = { x: pivotX, y: pivotY + 20 };
        // Pivot point
        this.leg1 = { x: pivotX + 100, y: pivotY +100 }; // First leg endpoint (pencil leg)
        this.leg2 = { x: pivotX - 50, y: pivotY + 100 }; // Second leg endpoint (static leg)
        
        
        this.pencilLines = [
        { startRelativeTo: 'leg1', endRelativeTo: 'leg1', startOffset: { x: 0, y: 0 }, endOffset: { x: 10, y: 10} }, // Tip of pencil
        { startRelativeTo: 'leg1', endRelativeTo: 'pivot', startOffset: { x: 0, y: 0 }, endOffset: { x: 10, y: -5 } }, // Side of pencil
        { startRelativeTo: 'pivot', endRelativeTo: 'leg1', startOffset: { x: 10, y: 10 }, endOffset: { x: 0, y: 0 } }, // Back of pencil
    ];

        this.dragging = null; // Track dragging state ('pivot', 'leg1', 'leg2')
        this.arc = null; // Arc details for rotation
        this.drawingArc = false;
        this.shiftKeyPressed = false;
         // Track shift key state
        this.rotationAngle = 0; // Initialize rotation angle
        
    }

// Update the draw method to render the lines dynamically

    draw(ctx,mouseX = null, mouseY = null) {
        
        const gradientColors = ['#ccc', '#666'];
        const gradient = ctx.createLinearGradient(this.pivot.x,this.pivot.y,this.leg2.x, this.leg2.y);// Draw leg1
        gradient.addColorStop(0, gradientColors[0]); // Start color
        gradient.addColorStop(1, gradientColors[1]); // End color
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 6; // Slightly thicker for aes

        ctx.beginPath();
        ctx.moveTo(this.pivot.x, this.pivot.y);
        ctx.lineTo(this.leg2.x, this.leg2.y);
        //ctx.strokeStyle = '#555'; // Static leg color
     //   ctx.lineWidth = 3;
        ctx.stroke();   

        ctx.beginPath();
        ctx.moveTo(this.pivot.x, this.pivot.y);
        ctx.lineTo(this.leg1.x, this.leg1.y);
        ctx.strokeStyle = 'black'; // Pencil leg color
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw leg2
        

        // Draw pivot
        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#000';
        ctx.fill();

        ctx.beginPath();
        ctx.rect(this.screw.x - 5, this.screw.y - 10, 10, 20);
        ctx.fillStyle = '#777';
        ctx.fill();
        ctx.closePath();

        // Draw ring
        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y, 15, 0, 2 * Math.PI);
        ctx.strokeStyle = '#bbb';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw screw
        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y + 10, 5, 0, 2 * Math.PI);
        ctx.fillStyle = '#777'; // Screw color
        ctx.fill();

        const gradientLeg1 = ctx.createLinearGradient(this.pivot.x, this.pivot.y, this.leg1.x, this.leg1.y);
        gradientLeg1.addColorStop(0, '#ccc'); // Start color (red)
        gradientLeg1.addColorStop(1, '#666'); // End color (darker red)

        ctx.strokeStyle = gradientLeg1;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(this.pivot.x, this.pivot.y);
        ctx.lineTo(this.leg1.x, this.leg1.y);
        ctx.stroke();

        // Gradient for pivot
        const gradientPivot = ctx.createRadialGradient(this.pivot.x, this.pivot.y, 0, this.pivot.x, this.pivot.y, 15);
        gradientPivot.addColorStop(0, '#fff');
        gradientPivot.addColorStop(1, '#777');

        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = gradientPivot;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y, 16, 0, 2 * Math.PI); // Slightly smaller radius
        ctx.strokeStyle = '#777'; // Darker outline color
        ctx.lineWidth = 4; // Thinner outline
        ctx.stroke();

        // Draw the compass legs (example for leg1 and leg2)
        const tailLength = 30; // Length of the tail
        const tailAngle = Math.PI * 1.5; // Angle relative to the pivot
        const tailEndX = this.pivot.x + tailLength * Math.cos(tailAngle);
        const tailEndY = this.pivot.y + tailLength * Math.sin(tailAngle);

        ctx.beginPath();
        ctx.moveTo(this.pivot.x, this.pivot.y);
        ctx.lineTo(tailEndX, tailEndY);
        ctx.strokeStyle = '#444'; // Tail color
        ctx.lineWidth = 8;
        ctx.stroke();

        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // Shadow color
        ctx.shadowBlur = 5; // Shadow blur
        ctx.shadowOffsetX = 3; // Shadow horizontal offset
        ctx.shadowOffsetY = 3; // Shadow vertical offset;

        // Example: Apply shadow to the pivot
        ctx.beginPath();
        ctx.arc(this.pivot.x, this.pivot.y, 15, 0, 2 * Math.PI);
        ctx.fillStyle = '#bbb'; // Pivot fill color
        ctx.fill();

        // Reset shadow to avoid affecting other elements
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        if (this.dragging === 'leg1') {
        ctx.strokeStyle = 'green'; // Highlight color for leg1
        ctx.lineWidth = 5; // Thicker line for better visibility
        }

        ctx.lineCap = 'round'; // Rounded endpoints for lines


        // Draw the additional lines around leg1
        this.pencilLines.forEach((line) => {
        const start = this.getPointPosition(line.startRelativeTo, line.startOffset);
        const end = this.getPointPosition(line.endRelativeTo, line.endOffset);

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = '#666666'; // Pencil color
        ctx.lineWidth = 4;
        ctx.stroke();
         });

        const distance = Math.hypot(this.leg1.x - this.leg2.x, this.leg1.y - this.leg2.y);
        ctx.font = '14px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(`Distance: ${distance.toFixed(2)}`, this.pivot.x, this.pivot.y - 20);
        // Draw arc if it exists
      
           // Existing code for drawing Compass
        console.log("Rendering compass. Arc state:", this.arc);
    // Draw the Arc if it exists
            if (this.arc && this.arc instanceof Arc) {
                console.log("Arc properties:", this.arc);
                ctx.beginPath();
                ctx.arc(
                    this.arc.center.x,
                    this.arc.center.y,
                    this.arc.radius,
                    this.arc.startAngle,
                    this.arc.endAngle,
                    this.arc.anticlockwise
                );
                ctx.strokeStyle = 'black'; // Arc color
                ctx.lineWidth = 2;
                ctx.stroke();

                const startAngleDegrees = (this.arc.startAngle * 180) / Math.PI;
                const endAngleDegrees = (this.arc.endAngle * 180) / Math.PI;

                // Format text
                const startText = `Start: ${startAngleDegrees.toFixed(1)}°`;
                const endText = `End: ${endAngleDegrees.toFixed(1)}°`;

                // Draw text near leg1
                const textX = this.leg1.x + 10; // Offset X for better visibility
                const textY = this.leg1.y - 20; // Offset Y for better visibility

                ctx.font = '12px Arial';
                ctx.fillStyle = '#333';
                ctx.fillText(startText, textX, textY);
                ctx.fillText(endText, textX, textY + 25); // Slightly below the star

                const radiusEndX = mouseX !== null ? mouseX : this.arc.center.x + this.arc.radius * Math.cos(this.arc.endAngle);
                const radiusEndY = mouseY !== null ? mouseY : this.arc.center.y + this.arc.radius * Math.sin(this.arc.endAngle);

                ctx.setLineDash([5, 5]); // Define the dotted line pattern
                ctx.beginPath();
                ctx.moveTo(this.arc.center.x, this.arc.center.y);
                ctx.lineTo(radiusEndX, radiusEndY);
                ctx.strokeStyle = '#ff6600'; // Radius line color
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.setLineDash([]); // Reset line dash to solid

                // Display radius value
                const radiusText = `Radius: ${this.arc.radius.toFixed(1)}`;
                const angleText = `Angle: ${(this.arc.endAngle * 180 / Math.PI).toFixed(1)}°`;
                ctx.font = '12px Arial';
                ctx.fillStyle = '#000';
                ctx.fillText(radiusText, radiusEndX -100, radiusEndY - 10); // Slight offset for better visibility
                ctx.fillText(angleText, radiusEndX -100, radiusEndY + 5);

            } else {
                console.log("Not currently drawing an arc or invalid arc instance");
            }
        }

    

    drawLeg(ctx, startX, startY, endX, endY, gradientColors) {
    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    gradient.addColorStop(0, gradientColors[0]); // Start color
    gradient.addColorStop(1, gradientColors[1]); // End color
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 4; // Slightly thicker for aesthetics
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    }

    getPointPosition(relativeTo, offset) {
    let anchor;
    if (relativeTo === 'leg1') {
        anchor = this.leg1;
    } else if (relativeTo === 'pivot') {
        anchor = this.pivot;
    } else if (relativeTo === 'leg2') {
        anchor = this.leg2;
    } else {
        throw new Error('Invalid anchor point');
    }

    return {
        x: anchor.x + offset.x,
        y: anchor.y + offset.y,
    };
}

    adjustLeg(offsetX, offsetY) {
    this.leg1.x = offsetX;
    this.leg1.y = offsetY;

    // Optionally, modify the lines based on some logic
    this.lines = this.lines.map((line) => ({
        offsetX: line.offsetX,
        offsetY: line.offsetY,
    }));
}

  


    rotatePoint(x, y, originX, originY, angle) {
        // Rotate point (x, y) around origin (originX, originY) by angle (in radians)
        const dx = x - originX;
        const dy = y - originY;
        const rotatedX = dx * Math.cos(angle) - dy * Math.sin(angle) + originX;
        const rotatedY = dx * Math.sin(angle) + dy * Math.cos(angle) + originY;
        return { x: rotatedX, y: rotatedY };
        }


    drag(dx, dy) {
        if (this.dragging === 'pivot') {
            // Move the entire compass
            this.pivot.x += dx;
            this.pivot.y += dy;
            this.screw.x += dx;
            this.screw.y += dy;
            this.leg1.x += dx;
            this.leg1.y += dy;
            this.leg2.x += dx;
            this.leg2.y += dy;
        } else if (this.dragging === 'leg1') {
            if (this.shiftKeyPressed) {
                this.rotateAroundLeg2(dx, dy);
                
            } else {
                this.leg1.x += dx;
                this.leg1.y += dy;
                
            }
        } else if (this.dragging === 'leg2') {
            this.leg2.x += dx;
            this.leg2.y += dy;
        }
    }

       

    rotateAroundLeg2(mouseX, mouseY) {
    const dx = mouseX - this.leg2.x;
    const dy = mouseY - this.leg2.y;

    const newAngle = Math.atan2(dy, dx);
    const radius = Math.hypot(this.leg1.x - this.leg2.x, this.leg1.y - this.leg2.y);

    if (!this.arc) {
        this.arc = {
            radius,
            startAngle: newAngle,
            endAngle: newAngle,
            anticlockwise: false,
        };
        this.drawingArc = true;
    } else {
        let angleDiff = newAngle - this.arc.endAngle;

        // Handle angle wrapping
        if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
        if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

        this.arc.endAngle = newAngle;
        this.arc.anticlockwise = angleDiff < 0;

        console.log('Updated Arc:', this.arc);

    }

    this.leg1.x = this.leg2.x + radius * Math.cos(newAngle);
    this.leg1.y = this.leg2.y + radius * Math.sin(newAngle);
}
    


   resetToDefault() {
    // Set to the same initial position as when the compass is first added
    this.pivot = { x: 100, y: 100 }; // Initial pivot point
    this.leg1 = { x: 150, y: 200 }; // Initial pencil leg position
    this.leg2 = { x: 50, y: 200 }; // Initial static leg position
    this.screw ={ x: 100, y: 130 };
    // Reset rotation and arc-related states
    this.rotation = 0;
    this.arc = null;
    this.drawingArc = false;
}


    updateScrewPosition() {
        // Screw remains fixed relative to pivot
        this.screw = {
            x: this.pivot.x,
            y: this.pivot.y + 10,
        };
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

    startDragging(mouseX, mouseY, isShiftKey) {
        this.shiftKeyPressed = isShiftKey;
        if (Math.hypot(this.pivot.x - mouseX, this.pivot.y - mouseY) <= 10) {
            this.dragging = 'pivot';
        } else if (Math.hypot(this.leg1.x - mouseX, this.leg1.y - mouseY) <= 10) {
            this.dragging = 'leg1';
        } else if (Math.hypot(this.leg2.x - mouseX, this.leg2.y - mouseY) <= 10) {
            this.dragging = 'leg2';
        } else {
            this.dragging = null;
        }
    }

stopDragging() {
    console.log("Entering stopDragging, Drawing Arc:", this.drawingArc);

    
    if (this.drawingArc) {{
        console.log("Finalizing arc drawing");
        this.drawingArc = false;

        if (this.arc) {
            this.arc.endAngle = this.arc.endAngle || this.arc.startAngle; // Ensure end angle is set
            console.log("Final arc state:", this.arc);
        }

        this.arc = null; 
        
    }

    this.dragging = null;
    console.log("Reset compass dragging state.");
} else if (this.dragging === 'leg1' || this.dragging === 'leg2') {
        console.log("Stretching compass leg, updating positions.");
    } else if (this.dragging === 'pivot') {
        console.log("Stopped dragging pivot, position updated.");
    } else {
        console.log("Stopped dragging a general compass part.");
    }
}

    isPointInside(x, y) {
        const tolerance = 10; // Allow some margin for selecting points

        // Check proximity to pivot
        if (Math.abs(x - this.pivot.x) < tolerance && Math.abs(y - this.pivot.y) < tolerance) {
            this.dragging = 'pivot';
            return true;
        }

        // Check proximity to leg1
        if (Math.abs(x - this.leg1.x) < tolerance && Math.abs(y - this.leg1.y) < tolerance) {
            this.dragging = 'leg1';
            return true;
        }

        // Check proximity to leg2
        if (Math.abs(x - this.leg2.x) < tolerance && Math.abs(y - this.leg2.y) < tolerance) {
            this.dragging = 'leg2';
            return true;
        }

        // Not near any part
        this.dragging = null;
        return false;
    }
}

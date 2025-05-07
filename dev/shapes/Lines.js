import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { canvasManager} from './CanvasManager.js';
import { calculateSlope, calculateAngle, calculateLength } from './GeometryUtils.js';

export class Line extends Shape {
    constructor(start, end, color = 'black') {
        super();
        this.startPoint = start instanceof Point ? start : new Point(start.x, start.y);
        this.endPoint = end instanceof Point ? end : new Point(end.x, end.y);
        this.color = color;

        this.updateProperties();
        this.draggingPoint = null;
        this.showMeasurements = false;
        this.showLabels = false;
        this.showCoordinates = false;
        this.enableDrag = true; // ✅ New property to enable/disable dragging
        this.measurements = {
            length: true,
            slope: true,
            angle: true,
        };
    }

    // Update slope, angle, and length
    updateProperties() {
        this.slope = calculateSlope(this.startPoint, this.endPoint);
        this.angle = calculateAngle(this.startPoint, this.endPoint);
        this.length = calculateLength(this.startPoint, this.endPoint);
    }

     getSides() {
        // A line has only one "side"
        return [this];
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getAngle() {
        const dx = this.endPoint.x - this.startPoint.x;
        const dy = this.endPoint.y - this.startPoint.y;
        return Math.atan2(dy, dx); // Angle in radians
    }

    getSlope() {
        const dx = this.endPoint.x - this.startPoint.x;
        const dy = this.endPoint.y - this.startPoint.y;

        if (dx === 0) {
            return Infinity; // Vertical line
        }
        return dy / dx;
    }

    // Toggle measurements
    toggleMeasurements(type) {
        if (this.measurements.hasOwnProperty(type)) {
            this.measurements[type] = !this.measurements[type];
        }
    }

    toggleLabels() {
        this.showLabels = !this.showLabels;
    }

    toggleCoordinates() {
        this.showCoordinates = !this.showCoordinates;
    }

    // Dragging methods
    dragStartPoint(dx, dy) {
        this.startPoint.drag(dx, dy);
        this.updateProperties();
    }

    dragEndPoint(dx, dy) {
        this.endPoint.drag(dx, dy);
        this.updateProperties();
    }

    // Main draw method
    draw(ctx,showScale = false) {
    ctx.beginPath();
    ctx.moveTo(this.startPoint.x, this.startPoint.y);
    ctx.lineTo(this.endPoint.x, this.endPoint.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.stroke();
   
     const drawPoint = (point, isSelected) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, isSelected ? 7 : 5, 0, 2 * Math.PI);
        ctx.fillStyle = isSelected ? 'orange' : 'red';
        ctx.fill();
        ctx.strokeStyle = 'green';
        ctx.stroke();
    }; 
  
     const isStartPointSelected = this.draggingPoint === this.startPoint;
    const isEndPointSelected = this.draggingPoint === this.endPoint;

    drawPoint(this.startPoint, isStartPointSelected);
    drawPoint(this.endPoint, isEndPointSelected);

    this.slope = this.getSlope();
    this.angle = this.getAngle();
    this.length = this.getLength();

    // Draw scales if toggled
        if (showScale) {
            this.drawScale(ctx);
        }
    // Draw measurements
    if (this.showMeasurements) {
        if (this.measurements.length) this.drawLength(ctx);
        if (this.measurements.slope) this.drawSlope(ctx);
        if (this.measurements.angle) this.drawAngle(ctx);
    }

    if (this.showLabels) {
        ctx.font = '12px Arial';
        ctx.fillStyle = 'blue';

        // Use point labels instead of hardcoded "Start" and "End"
        if (this.startPoint.label) {
            ctx.fillText(
                this.startPoint.label,
                this.startPoint.x + 5,
                this.startPoint.y - 5
            );
        }

        if (this.endPoint.label) {
            ctx.fillText(
                this.endPoint.label,
                this.endPoint.x + 5,
                this.endPoint.y - 5
            );
        }
    }

    // Draw coordinates if enabled
    if (this.showCoordinates) {
        ctx.font = '10px Arial';
        ctx.fillStyle = 'green';
        ctx.fillText(
            `(${this.startPoint.x}, ${this.startPoint.y})`,
            this.startPoint.x + 5,
            this.startPoint.y + 15
        );
        ctx.fillText(
            `(${this.endPoint.x}, ${this.endPoint.y})`,
            this.endPoint.x + 5,
            this.endPoint.y + 15
        );
    }



    // Draw intersections
    if (this.intersections) {
        this.intersections.forEach(({ point, angle }, index) => {
            const { x, y } = point;

            if (x !== undefined && y !== undefined) {
                // Draw intersection point
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI); // Small circle
                ctx.fill();

                // Label the intersection point
                ctx.font = '12px Arial';
                ctx.fillStyle = 'blue';
                ctx.fillText(`I${index + 1}`, x + 10, y - 10);

                // Draw the angle if valid
                if (typeof angle === 'number') {
                    ctx.fillStyle = 'red';
                    ctx.fillText(`Angle: ${Math.abs(angle).toFixed(2)}°`, x + 10, y + 10);
                }
            }
        });
    }
}


    drawScale(ctx, numMarks = 10) {
        const totalLength = this.getLength();
        for (let i = 0; i <= numMarks; i++) {
            const t = i / numMarks; // Ratio of the current mark
            const x = this.startPoint.x + t * (this.endPoint.x - this.startPoint.x);
            const y = this.startPoint.y + t * (this.endPoint.y - this.startPoint.y);

            // Draw tick marks
            ctx.beginPath();
            ctx.moveTo(x, y);
            const tickSize = 5; // Tick length
            ctx.lineTo(
                x - tickSize * Math.sin(this.angle),
                y + tickSize * Math.cos(this.angle)
            );
            ctx.strokeStyle = 'blue';
            ctx.stroke();

            // Draw scale labels
            ctx.fillStyle = 'black';
            ctx.font = '10px Arial';
            ctx.fillText((t * totalLength).toFixed(1), x + 5, y - 5);
        }
    }
    

    // Draw length
    drawLength(ctx) {
        const midX = (this.startPoint.x + this.endPoint.x) / 2;
        const midY = (this.startPoint.y + this.endPoint.y) / 2;

        ctx.fillStyle = 'blue';
        ctx.font = '12px Arial';
        ctx.fillText(`Length: ${this.length.toFixed(2)}`, midX-10, midY-10);
    }

    // Draw slope
    drawSlope(ctx) {
        const midX = (this.startPoint.x + this.endPoint.x) / 2;
        const midY = (this.startPoint.y + this.endPoint.y) / 2 + 15;

        ctx.fillStyle = 'green';
        ctx.font = '12px Arial';
        ctx.fillText(`Slope: ${this.slope.toFixed(2)}`, midX, midY);
    }

    // Draw angle
    drawAngle(ctx) {
        const midX = (this.startPoint.x + this.endPoint.x) / 2;
        const midY = (this.startPoint.y + this.endPoint.y) / 2 + 30;

        ctx.fillStyle = 'red';
        ctx.font = '12px Arial';
        ctx.fillText(`Angle: ${(this.angle * 180 / Math.PI).toFixed(1)}°`, midX, midY);
    }

    isPointNear(point, mouseX, mouseY, tolerance = 10) {
    const distance = Math.hypot(mouseX - point.x, mouseY - point.y);
    return distance <= tolerance;
}

getLength() {
        return Math.hypot(this.endPoint.x - this.startPoint.x, this.endPoint.y - this.startPoint.y);
    }

updateAngle() {
        this.angle = this.calculateAngle();
    } 

   
calculateAngle() {
        const dx = this.endPoint.x - this.startPoint.x;
        const dy = this.endPoint.y - this.startPoint.y;
                
        return Math.atan2(dy,dx) ;
    }    

isPointInside(x, y) {
        if (!this.enableDrag) {
            console.log("🚫 isPointInside: Dragging is disabled for this line.");
            return false;
        }
    
        const distToStart = Math.hypot(this.startPoint.x - x, this.startPoint.y - y);
        const distToEnd = Math.hypot(this.endPoint.x - x, this.endPoint.y - y);
        const lineLength = this.getLength();
    
        if (distToStart < 10) {
            this.draggingPoint = this.startPoint; // Start point selected
            return true;
        } else if (distToEnd < 10) {
            this.draggingPoint = this.endPoint; // End point selected
            return true;
        } else {
            this.draggingPoint = null; // No specific point selected
        }
    
        // Check if the click is near the line itself
        return Math.abs(distToStart + distToEnd - lineLength) < 1;
    }
    

setEnableDrag(enable) {
    this.enableDrag = enable;
}

getEnableDrag() {
    return this.enableDrag;
}    

startDragging(mouseX, mouseY) {
    if (!this.enableDrag) {
        console.log("🚫 Dragging is disabled for this line.");
        return;
    }

    if (this.isPointNear(this.startPoint, mouseX, mouseY)) {
        this.draggingPoint = this.startPoint;
    } else if (this.isPointNear(this.endPoint, mouseX, mouseY)) {
        this.draggingPoint = this.endPoint;
    } else {
        this.draggingPoint = null; // Dragging the entire line
        this.offset = { x: mouseX - this.startPoint.x, y: mouseY - this.startPoint.y };
    }
}


drag(dx, dy) {
    if (!this.enableDrag) {
        console.log("🚫 Dragging is disabled for this line.");
        return;
    }

    if (this.draggingPoint) {
        // Dragging a specific point
        this.draggingPoint.x += dx;
        this.draggingPoint.y += dy;
        console.log(`Dragging Line Point to (${this.draggingPoint.x}, ${this.draggingPoint.y})`);
    } else {
        // Dragging the entire line
        this.startPoint.x += dx;
        this.startPoint.y += dy;
        this.endPoint.x += dx;
        this.endPoint.y += dy;
        console.log(`Dragging Line: dx = ${dx}, dy = ${dy}`);
    }

    this.updateAngle();
    canvasManager.detectIntersections();
}


stopDragging() {
    this.draggingPoint = null;
    this.offset = null;
}
}



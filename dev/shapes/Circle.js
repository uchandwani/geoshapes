import { Shape } from './Shapes.js';
import { Point } from './Points.js';

export class Circle extends Shape {
    constructor(center, radius) {
        super();

      //   this.center = center instanceof Point ? center : new Point(0, 0);
        this.radius = radius || 50;
        this.center = center;

    // Initialize circumference point
        this.circumferencePoint = new Point(this.center.x + this.radius, this.center.y);
        

        this.draggingEdge = false;
        this.draggingCenter = false;

        this.showMeasurements = false;
        this.showLabels = true;
        this.showCoordinates = true;

        this.enableDrag = true;
        this.enableStretch = true;

        this.measurements = {
            showRadius: true,
            showArea: true,
            showCircumference: true,
        };
    }

    static create(center, radius, label = '') {
        return new Circle(center, radius, label);
    }
    // Toggles
    toggleGlobalMeasurements() {
        this.showMeasurements = !this.showMeasurements;
    }

    toggleLabels() {
        this.showLabels = !this.showLabels;
    }


    toggleCoordinates() {
        this.showCoordinates = !this.showCoordinates;
    }

    toggleSelectiveMeasurements(type) {
        if (this.measurements.hasOwnProperty(type)) {
            this.measurements[type] = !this.measurements[type];
        }
    }

     setInteraction(type, enabled) {
        switch (type) {
            case 'drag':
                this.enableDrag = enabled;
                break;
            case 'stretch':
                this.enableStretch = enabled;
                break;
        }
    }

    setEnableDrag(enable) {
        this.enableDrag = enable;
    }

    getEnableDrag() {
        return this.enableDrag;
    }

    setEnableStretch(enable) {
        this.enableStretch = enable;
    }

    getEnableStretch() {
        return this.enableStretch;
    }

    // Main draw function
    draw(ctx) {
        console.log(`Drawing Circle at (${this.center.x}, ${this.center.y}) with radius ${this.radius}`);// Draw circle
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
      //  ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
       // ctx.fill();

       // this.center.draw(ctx, this.showLabels, this.showCoordinates, 'red', 'blue'); // Center point
      //  this.circumferencePoint.draw(ctx, this.showLabels, this.showCoordinates, 'green', 'blue'); // Circumference point

        // Draw measurements
        if (this.label) {
            ctx.fillStyle = 'black';
            ctx.font = '14px Arial';
            ctx.fillText(this.label, this.center.x - 10, this.center.y - this.radius - 10);
        }

        if (this.showMeasurements) {
            if (this.measurements.showRadius) this.drawRadius(ctx);
            if (this.measurements.showArea) this.drawArea(ctx);
            if (this.measurements.showCircumference) this.drawCircumference(ctx);
        }

     /*   if (this.showLabels || this.showCoordinates) {
        this.center.draw(ctx, this.showLabels, this.showCoordinates);
         } */
    }

    drawRadius(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.center.x, this.center.y);
        ctx.lineTo(this.center.x + this.radius, this.center.y);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.fillStyle = 'blue';
        ctx.fillText(`r = ${this.radius.toFixed(2)}`, this.center.x + this.radius / 2, this.center.y - 5);
    }

    drawArea(ctx) {
        const area = Math.PI * this.radius ** 2;
        ctx.fillStyle = 'green';
        ctx.fillText(`Area: ${area.toFixed(2)}`, this.center.x, this.center.y + this.radius + 15);
    }

    drawCircumference(ctx) {
        const circumference = 2 * Math.PI * this.radius;
        ctx.fillStyle = 'orange';
        ctx.fillText(`C: ${circumference.toFixed(2)}`, this.center.x, this.center.y - this.radius - 5);
    }

    // Event handling for dragging/stretching
    handleMouseDown(x, y) {

        if (!this.enableDrag) {
        console.log("🚫 Dragging is disabled for this circle.");
        return;
    }

        
        const distance = Math.hypot(x - this.center.x, y - this.center.y);
        if (Math.abs(distance - this.radius) < 10 && this.enableStretch) {
            this.draggingEdge = true; // Stretching the radius
        } else if (distance <= this.radius && this.enableDrag) {
            this.draggingCenter = true; // Dragging center
        }
    }

    drawMeasurements(ctx) {
        if (this.measurements.showRadius) this.drawRadius(ctx);
        if (this.measurements.showArea) this.drawArea(ctx);
        if (this.measurements.showCircumference) this.drawCircumference(ctx);
    }

    // Draw radius line
    
   drag(dx, dy) {

        if (!this.enableDrag) {
        console.log("🚫 Dragging is disabled for this circle.");
        return;
    }
        if (this.draggingEdge) {
            this.radius += dx; // Resize (stretch radius)
            if (this.radius < 5) this.radius = 5; 
             this.updateCircumferencePoint();
             
        } else if (this.draggingCenter) {
            this.center.x += dx;
            this.center.y += dy;
            this.updateCircumferencePoint();
       
        }
    }

   
    stopDragging() {
    this.draggingCenter = false;
    this.draggingEdge = false;
    console.log("Stopped dragging Circle.");
    }
    

    isPointInside(x, y) {
    const distance = Math.hypot(x - this.center.x, y - this.center.y);
    if (Math.abs(distance - this.radius) <= 10 && this.enableStretch) {
        // Near the circumference for resizing
        this.draggingEdge = true;
        this.draggingCenter = false;
        return true;
    } else if (distance <= this.radius && this.enableDrag) {
        // Inside the circle for dragging the center
        this.draggingCenter = true;
        this.draggingEdge = false;
        return true;
    }
    return false; // Not inside the circle
}

    updateCircumferencePoint() {
        this.circumferencePoint = new Point(this.center.x + this.radius, this.center.y);
    }

}

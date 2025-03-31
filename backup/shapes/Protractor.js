  import { Shape } from './Shapes.js';
  import { Point } from './Points.js';

  export class Protractor extends Shape {
    constructor(center, radius = 80) {
        super();
        this.center = center instanceof Point ? center : new Point(center.x, center.y); // Center of the protractor
        this.radius = radius; // Radius of the protractor
    }

    draw(ctx) {
    ctx.save(); // Save canvas state

    // Translate and rotate the canvas for the protractor
    ctx.translate(this.center.x, this.center.y);
    ctx.rotate(this.angle); // Rotate by the current angle

    // Draw the protractor's circle
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI); // Center at (0, 0) after translation
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw angle markers and labels
    for (let angle = 0; angle < 360; angle += 5) {
        const radians = (angle * Math.PI) / 180;
        const endX = this.radius * Math.cos(radians);
        const endY = this.radius * Math.sin(radians);

        // Draw lines
        ctx.beginPath();
        ctx.moveTo(0, 0); // From center
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = angle % 90 === 0 ? 'red' : 'gray';
        ctx.lineWidth = angle % 90 === 0 ? 1.5 : 0.5;
        ctx.stroke();

        // Draw labels
        if (angle % 30 === 0) {
            const labelX = (this.radius + 10) * Math.cos(radians);
            const labelY = (this.radius + 10) * Math.sin(radians);

            ctx.font = '10px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${angle}°`, labelX, labelY);
        }
    }

    ctx.restore(); // Restore canvas state
}



    isPointInside(x, y) {
          const distanceToCenter = Math.hypot(this.center.x - x, this.center.y - y);
                // Check if the point is inside the circle
          if (distanceToCenter <= this.radius) {
            return true;
          }
        }

     getPointsForDragging() {
          return [this.center]; // Return center as an array for consistency
        }    

   /* drag(dx, dy) {
            this.center.drag(dx, dy);
            console.log("The drag coordinates are", dx, dy);
            } */    
      
     drag(dx, dy) {
     console.log("Inside drag function", this.draggingPoint)  ; 
    if (this.draggingPoint) {
        if (this.draggingPoint === this.center) {
            this.center.drag(dx, dy); // Move the center of the protractor
            console.log(`Protractor center dragged to (${this.center.x}, ${this.center.y})`);
        }
    }
}
  
    rotate(currentMousePos, previousMousePos) {
    // Calculate angles relative to the protractor's center
    const previousAngle = Math.atan2(previousMousePos.y - this.center.y, previousMousePos.x - this.center.x);
    const currentAngle = Math.atan2(currentMousePos.y - this.center.y, currentMousePos.x - this.center.x);
    console.log("The angles are", previousAngle,currentAngle);
    // Calculate rotation angle
    const rotationAngle = currentAngle - previousAngle;

    // Update the protractor's angle
    this.angle += rotationAngle;

    console.log(`Protractor rotated to angle: ${this.angle} radians`);
}

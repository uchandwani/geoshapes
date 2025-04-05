import { Shape } from './Shapes.js';
import { Point } from './Points.js';

  export class Circle extends Shape {
      constructor(center, radius) {
        super();
        this.center = center;
        this.radius = radius;
        this.circumferencePoint = new Point(center.x + radius, center.y); 
        this.draggingEdge = false; // Track whether the edge is being dragged
      }

      draw(ctx) {
        console.log(`Drawing Circle at (${this.center.x}, ${this.center.y}) with radius ${this.radius}`);
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fill();

        const area = this.getArea().toFixed(2);
        const circumference = this.getCircumference().toFixed(2);
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        //ctx.fillText(`Radius: ${this.radius.toFixed(2)}`, this.center.x + this.radius + 10, this.center.y - 10);
        //ctx.fillText(`Area: ${area}`, this.center.x + this.radius + 10, this.center.y + 10);
        //ctx.fillText(`Circumference: ${circumference}`, this.center.x + this.radius + 10, this.center.y + 30);
        this.center.draw(ctx);
             // Draw the circumference point
       // this.circumferencePoint.draw(ctx);
      }     
        getArea() { 
          return Math.PI * Math.pow(this.radius, 2);
          }

        getCircumference() {
          return 2 * Math.PI * this.radius;
        }

     getPointsForDragging() {
          return [this.center]; // Return center as an array for consistency
        }
   
    

     isPointInside(x, y) {
          const distanceToCenter = Math.hypot(this.center.x - x, this.center.y - y);
          
         if (Math.abs(distanceToCenter - this.radius) <= 5) { // 5px tolerance
            this.draggingEdge = true;
            return true;
          }
          
          // Check if the point is inside the circle
          if (distanceToCenter <= this.radius) {
            this.draggingEdge = false;
            return true;
          }

          this.draggingEdge = false;
          return false;
        }

     /* drag(dx, dy) {
          if (this.draggingEdge) {
            // Calculate the new radius based on the dragged position of the circumference point
            const mouseX = this.circumferencePoint.x + dx;
            const mouseY = this.circumferencePoint.y + dy;
            const newRadius = Math.hypot(this.center.x - mouseX, this.center.y - mouseY);

            if (newRadius > 5) { // Ensure radius doesn't shrink to an invalid value
              this.radius = newRadius;
              this.updateCircumferencePoint(); // Update the circumference point position
            }
          } else {
            // Move the entire circle
            this.center.drag(dx, dy);
            this.circumferencePoint.drag(dx, dy); // Move the circumference point along with the center
          }
        }*/


   drag(dx, dy) {
    if (this.draggingEdge) {
        // Ensure draggingEdge is valid before accessing it
        if (this.circumferencePoint) {
            this.radius = Math.sqrt(
                Math.pow(this.circumferencePoint.x + dx - this.center.x, 2) +
                Math.pow(this.circumferencePoint.y + dy - this.center.y, 2)
            );
            console.log(`Circle radius adjusted to ${this.radius}`);
        } else {
            console.error("Dragging edge failed: circumferencePoint is null.");
        }
    } else if (this.draggingPoint) {
        // Move the center of the circle
        this.center.x += dx;
        this.center.y += dy;
        console.log(`Circle center moved to (${this.center.x}, ${this.center.y})`);
    } else {
        console.error("No valid dragging action detected for Circle.");
    }
}
     

        updateCircumferencePoint() {
            // Place the circumference point directly to the right of the center for simplicity
            this.circumferencePoint.x = this.center.x + this.radius;
            this.circumferencePoint.y = this.center.y;
          }



      }
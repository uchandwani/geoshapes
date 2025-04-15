import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { Line } from './Lines.js';

export class Angle extends Shape {
    constructor(p1,p2,p3){
        super(); // Call the base class constructor
        this.points = [p1, p2, p3];
            }

    draw(ctx) {
       
        // Draw the arms of the angle
        ctx.beginPath();
        ctx.moveTo(this.points[1].x, this.points[1].y); // Start at vertex (p2)
        ctx.lineTo(this.points[0].x, this.points[0].y); // Line to p1

        // Draw second arm (line from vertex to p3)
        ctx.moveTo(this.points[1].x, this.points[1].y); // Start at vertex (p2)
        ctx.lineTo(this.points[2].x, this.points[2].y);
        ctx.closePath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.stroke();
        this.drawAngleArc(ctx);

       
        // Draw the points (A, B, C)
        this.drawPoint(this.points[0]);
        this.drawPoint(this.points[1]);
        this.drawPoint(this.points[2]);
        this.points.forEach((point) => point.draw(ctx));
        // Draw the angle arc and label
       const angle = this.calculateAngle();
       // this.drawAngleArc(this.points[1], this.points[0], this.points[2], angle);
       this.labelAngle(ctx,this.points[1], angle);
    }

         drawPoint(point) {
        const ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    } 

    calculateAngle() {
        // Vector AB
        const AB = { x: this.points[0].x - this.points[1].x, y: this.points[0].y - this.points[1].y };
        // Vector CB
        const CB = { x: this.points[2].x - this.points[1].x, y: this.points[2].y - this.points[1].y };

        // Dot product and magnitudes
        const dotProduct = AB.x * CB.x + AB.y * CB.y;
        const magnitudeAB = Math.sqrt(AB.x ** 2 + AB.y ** 2);
        const magnitudeCB = Math.sqrt(CB.x ** 2 + CB.y ** 2);

        // Calculate angle in radians and convert to degrees
        const angleRadians = Math.acos(dotProduct / (magnitudeAB * magnitudeCB));
        return (angleRadians * 180) / Math.PI;
    }

    drawAngleArc(ctx) {
        const [p1, p2, p3] = this.points; // p1, p2 (vertex), p3
        const radius = 30; // Radius for the arc

        // Calculate angles for the arc
        const startAngle = Math.atan2(p1.y - p2.y, p1.x - p2.x);
        const endAngle = Math.atan2(p3.y - p2.y, p3.x - p2.x);

        // Draw the arc
        ctx.beginPath();
        ctx.arc(p2.x, p2.y, radius, startAngle, endAngle);
        ctx.strokeStyle = 'green';
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    labelAngle(ctx,vertex, angle) {
        //const ctx = this.ctx;
        ctx.font = '14px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(`${angle.toFixed(1)}°`, vertex.x + 15, vertex.y - 15);
    } 

     isPointInside(x, y) {
        const [A, B, C] = this.points;
        const area = (p1, p2, p3) =>
          Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
        const totalArea = area(A, B, C);
        const area1 = area({ x, y }, B, C);
        const area2 = area(A, { x, y }, C);
        const area3 = area(A, B, { x, y });

        for (const point of this.points) {
            if (point.isPointInside(x, y)) {
            this.draggingPoint = point; // Set the selected vertex for dragging
            return true;
            }
          }
          this.draggingPoint = null;
          return Math.abs(totalArea - (area1 + area2 + area3)) < 0.1;
      }

      drag(dx, dy) {
        console.log("Inside drag",points);
        if (this.draggingPoint) {
          this.draggingPoint.drag(dx, dy);
        } else {
          this.points.forEach((point) => point.drag(dx, dy));
        }
      }

}

import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { Line } from './Lines.js';

      export class Rectangle extends Shape {
      constructor(p1, p2) {
        super();
        const p3 = new Point(p2.x, p1.y);
        const p4 = new Point(p1.x, p2.y);
        this.points = [p1, p3, p2, p4];
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach((point, index) => {
          const nextPoint = this.points[(index + 1) % this.points.length];
          ctx.lineTo(nextPoint.x, nextPoint.y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.fill();

        this.points.forEach((point) => point.draw(ctx));
      }

      getPointsForDragging() {
       return this.points; // Return array of points
        }


      isPointInside(x, y) {
        // Check if the mouse is near any vertex
        for (const point of this.points) {
          if (point.isPointInside(x, y)) {
            this.draggingPoint = point; // Set the vertex for dragging
            return true; // Mouse is on a vertex
          }
        }

        // Check if the mouse is inside the rectangle's boundary
        const [p1, , p2] = this.points; // Top-left and bottom-right points
        const isInsideBoundary = x >= p1.x && x <= p2.x && y >= p1.y && y <= p2.y;

        if (isInsideBoundary) {
          this.draggingPoint = null; // No vertex selected, but inside boundary
        }

        return isInsideBoundary; // Return true if within the boundary, false otherwise
      }

/*
      drag(dx, dy) {
  if (this.draggingPoint) {
    // Update the position of the dragged point
    this.draggingPoint.drag(dx, dy);

    // Recalculate the other points to maintain the rectangle shape
    const [p1, p3, p2, p4] = this.points;

    if (this.draggingPoint === p1) {
      // Adjust points relative to top-left corner (p1)
      p3.y = p1.y; // Keep p3 aligned horizontally with p1
      p4.x = p1.x; // Keep p4 aligned vertically with p1
    } else if (this.draggingPoint === p2) {
      // Adjust points relative to bottom-right corner (p2)
      p3.x = p2.x; // Keep p3 aligned vertically with p2
      p4.y = p2.y; // Keep p4 aligned horizontally with p2
    } else if (this.draggingPoint === p3) {
      // Adjust points relative to top-right corner (p3)
      p1.y = p3.y; // Keep p1 aligned horizontally with p3
      p2.x = p3.x; // Keep p2 aligned vertically with p3
    } else if (this.draggingPoint === p4) {
      // Adjust points relative to bottom-left corner (p4)
      p1.x = p4.x; // Keep p1 aligned vertically with p4
      p2.y = p4.y; // Keep p2 aligned horizontally with p4
    }
  } else {
    // General dragging of the rectangle
    this.points.forEach((point) => point.drag(dx, dy));
  }
}*/

drag(dx, dy) {
    if (this.draggingPoint) {
        // Update the position of the dragged point
        this.draggingPoint.drag(dx, dy);

        // Recalculate other points to maintain the rectangle shape
        const [p1, p3, p2, p4] = this.points;

        switch (this.draggingPoint) {
            case p1:
                p3.y = p1.y; // Keep p3 aligned horizontally with p1
                p4.x = p1.x; // Keep p4 aligned vertically with p1
                break;
            case p2:
                p3.x = p2.x; // Keep p3 aligned vertically with p2
                p4.y = p2.y; // Keep p4 aligned horizontally with p2
                break;
            case p3:
                p1.y = p3.y; // Keep p1 aligned horizontally with p3
                p2.x = p3.x; // Keep p2 aligned vertically with p3
                break;
            case p4:
                p1.x = p4.x; // Keep p1 aligned vertically with p4
                p2.y = p4.y; // Keep p2 aligned horizontally with p4
                break;
        }
    } else {
        // General dragging of the rectangle
        this.points.forEach((point) => point.drag(dx, dy));
    }
}



}
import { Shape } from './Shapes.js';
import { Point } from './Points.js';

 export class Line extends Shape {
      constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        this.start.draw(ctx);
        this.end.draw(ctx);
      }

      isPointInside(x, y) {
        if (this.start.isPointInside(x, y)) {
          this.draggingPoint = this.start;
          return true;
        }
        if (this.end.isPointInside(x, y)) {
          this.draggingPoint = this.end;
          return true;
        }
        const distToStart = Math.hypot(this.start.x - x, this.start.y - y);
        const distToEnd = Math.hypot(this.end.x - x, this.end.y - y);
        const lineLength = Math.hypot(this.start.x - this.end.x, this.start.y - this.end.y);
        const isOnLine = Math.abs(distToStart + distToEnd - lineLength) < 1;

        if (isOnLine) {
          this.draggingPoint = null;
        }
        return isOnLine;
      }

      drag(dx, dy) {
        if (this.draggingPoint) {
          this.draggingPoint.drag(dx, dy);
        } else {
          this.start.drag(dx, dy);
          this.end.drag(dx, dy);
        }
      }
    }

    function resetLabels() {
      pointCounter = 0;
    }
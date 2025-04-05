import { Shape } from './Shapes.js';
import { Point } from './Points.js';

export class Line extends Shape {
    constructor(start, end) {
        super();
        // Normalize inputs to Points
        this.start = start instanceof Point ? start : new Point(start.x, start.y);
        this.end = end instanceof Point ? end : new Point(end.x, end.y);
    }

    draw(ctx) {
        // Draw the line
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the points (start and end)
        this.start.draw(ctx);
        this.end.draw(ctx);

        // Draw optional labels
        this.drawLabels(ctx);
    }

    drawLabels(ctx) {
        ctx.font = '12px Arial';
        ctx.fillStyle = 'black';

        // Label the start point
        if (this.start.label) {
            ctx.fillText(this.start.label, this.start.x + 5, this.start.y - 5);
        }

        // Label the end point
        if (this.end.label) {
            ctx.fillText(this.end.label, this.end.x + 5, this.end.y - 5);
        }
    }

    isPointInside(x, y) {
        // Check if a point is near the start or end points
        if (this.start.isPointInside(x, y)) {
            this.draggingPoint = this.start;
            return true;
        }
        if (this.end.isPointInside(x, y)) {
            this.draggingPoint = this.end;
            return true;
        }

        // Check if the point is on the line
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

    // Static method for programmatic creation
    static create(x1, y1, x2, y2, labelStart = null, labelEnd = null) {
        const start = new Point(x1, y1, labelStart);
        const end = new Point(x2, y2, labelEnd);
        return new Line(start, end);
    }
}

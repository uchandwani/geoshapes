import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { Line } from './Lines.js';

import { canvasManager } from './CanvasManager.js';

export class Rectangle extends Shape {
    constructor(p1, p2, color = 'black') {
        super();
        if (!p1 || !p2) {
            throw new Error('Invalid points provided for Rectangle');
        }

        this.color = color;

        // Define the first two points as vertices
        this.points = [p1, p2];

        // Calculate the remaining points
        this.calculateRemainingPoints();

        this.draggingPoint = null;

        // Toggle properties
        this.showLabels = false;
        this.showCoordinates = false;
        this.showMeasurements = false;

        this.measurements = {
            perimeter: true,
            sides: true,
            area: true,
        };
    }

    getSides() {
    const sides = [];
    for (let i = 0; i < this.points.length; i++) {
        const p1 = this.points[i];
        const p2 = this.points[(i + 1) % this.points.length];
        sides.push(new Line(p1, p2));
    }
    return sides;
}


    // Calculate the remaining two points to form a rectangle
    calculateRemainingPoints() {
        const [p1, p2] = this.points;

        // Vector representing the side between p1 and p2
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        // Perpendicular vector
        const perpendicularX = -dy;
        const perpendicularY = dx;

        // Define the other two points
        const p3 = new Point(p2.x + perpendicularX, p2.y + perpendicularY);
        const p4 = new Point(p1.x + perpendicularX, p1.y + perpendicularY);

        // Update the points array
        this.points = [p1, p2, p3, p4];
    }

    // Handle dragging of a vertex
    drag(dx, dy, isShiftKey, ctx, mouseX, mouseY) {
    if (this.draggingPoint) {
        // Dragging a specific vertex
        this.draggingPoint.x += dx;
        this.draggingPoint.y += dy;
        console.log(`Dragging Rectangle Vertex to (${this.draggingPoint.x}, ${this.draggingPoint.y})`);
        this.updateVertices();
    } else if (this.draggingSide) {
        // Dragging a specific side
        this.draggingSide.startPoint.x += dx;
        this.draggingSide.startPoint.y += dy;
        this.draggingSide.endPoint.x += dx;
        this.draggingSide.endPoint.y += dy;
        console.log(`Dragging Rectangle Side`);
        this.updateVerticesForSide();
    } else {
        // Dragging the entire rectangle
        this.points.forEach((point) => point.drag(dx, dy));
        console.log(`Dragging Entire Rectangle: dx = ${dx}, dy = ${dy}`);
    }

    // Detect intersections and re-render
    canvasManager.detectIntersections();
    canvasManager.render();
}

detectSide(x, y) {
    const tolerance = 10; // Adjust tolerance for side detection
    for (const side of this.getSides()) {
        const distToStart = Math.hypot(side.startPoint.x - x, side.startPoint.y - y);
        const distToEnd = Math.hypot(side.endPoint.x - x, side.endPoint.y - y);
        const sideLength = side.getLength();

        if (Math.abs(distToStart + distToEnd - sideLength) < tolerance) {
            this.draggingSide = side;
            return true;
        }
    }
    this.draggingSide = null;
    return false;
}

updateVertices() {
    const [p1, p2, p3, p4] = this.points;

    // Adjust vertices based on updated draggingPoint
    if (this.draggingPoint === p1) {
        p2.y = p1.y;
        p4.x = p1.x;
    } else if (this.draggingPoint === p2) {
        p1.y = p2.y;
        p3.x = p2.x;
    } else if (this.draggingPoint === p3) {
        p4.y = p3.y;
        p2.x = p3.x;
    } else if (this.draggingPoint === p4) {
        p3.y = p4.y;
        p1.x = p4.x;
    }
}

updateVerticesForSide() {
    const [p1, p2, p3, p4] = this.points;

    // Adjust vertices based on dragged side
    if (this.draggingSide.startPoint === p1 && this.draggingSide.endPoint === p2) {
        p4.x = p1.x;
        p3.x = p2.x;
    } else if (this.draggingSide.startPoint === p2 && this.draggingSide.endPoint === p3) {
        p1.y = p2.y;
        p4.y = p3.y;
    } else if (this.draggingSide.startPoint === p3 && this.draggingSide.endPoint === p4) {
        p2.x = p3.x;
        p1.x = p4.x;
    } else if (this.draggingSide.startPoint === p4 && this.draggingSide.endPoint === p1) {
        p3.y = p4.y;
        p2.y = p1.y;
    }
}


    // Adjust the remaining vertices to maintain the rectangle shape
    adjustRectangle() {
        const [p1, p2] = this.points;

        // Calculate the vectors for the new rectangle
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        const perpendicularX = -dy;
        const perpendicularY = dx;

        // Update the other two points
        this.points[2].x = p2.x + perpendicularX;
        this.points[2].y = p2.y + perpendicularY;

        this.points[3].x = p1.x + perpendicularX;
        this.points[3].y = p1.y + perpendicularY;
    }

    handleMouseDown(x, y) {
        this.draggingPoint = this.points.find(point => point.isPointInside(x, y));
        if (!this.draggingPoint) {
            console.log("Dragging entire rectangle");
        } else {
            console.log(`Dragging vertex: (${this.draggingPoint.x}, ${this.draggingPoint.y})`);
        }
    }

    handleMouseUp() {
        this.draggingPoint = null;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        this.points.forEach((point, index) => {
            const nextPoint = this.points[(index + 1) % 4];
            ctx.lineTo(nextPoint.x, nextPoint.y);
        });

        ctx.closePath();

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.fill();

        this.points.forEach((point) => point.draw(ctx, this.showLabels, this.showCoordinates));

        if (this.showMeasurements) {
            this.drawMeasurements(ctx);
        }
    }

    drawMeasurements(ctx) {
        const width = Math.hypot(
            this.points[1].x - this.points[0].x,
            this.points[1].y - this.points[0].y
        );
        const height = Math.hypot(
            this.points[3].x - this.points[0].x,
            this.points[3].y - this.points[0].y
        );
        const area = (width * height).toFixed(2);
        const perimeter = (2 * (width + height)).toFixed(2);

        const centerX = (this.points[0].x + this.points[2].x) / 2;
        const centerY = (this.points[0].y + this.points[2].y) / 2;

        ctx.fillStyle = 'blue';
        ctx.font = '12px Arial';
        ctx.fillText(`Area: ${area}`, centerX, centerY - 10);
        ctx.fillText(`Perimeter: ${perimeter}`, centerX, centerY + 10);
    }

    isPointInside(x, y) {
        return (
            x >= Math.min(...this.points.map((p) => p.x)) &&
            x <= Math.max(...this.points.map((p) => p.x)) &&
            y >= Math.min(...this.points.map((p) => p.y)) &&
            y <= Math.max(...this.points.map((p) => p.y))
        );
    }
}

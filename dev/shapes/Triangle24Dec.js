import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { Line } from './Lines.js';
import { GeometryUtils } from './GeometryUtils.js';
import { canvasManager } from './CanvasManager.js';
import { calculateAngle,calculateDistance, calculateArea } from './GeometryUtils.js';

export class Triangle extends Shape {
    constructor(p1, p2, p3) {
        super();
        this.points = [p1, p2, p3];
        this.extensions = {};
        this.externalAngles = {}; // External angles for each vertex
        this.showMeasurements = false; // Global toggle for measurements
        this.showLabels = false;
        this.showCoordinates = false;
        this.enableDrag = true; // Allow dragging by default
        this.enableStretch = true; // Allow stretching
        this.enableRotation = false;

        this.measurements = {
            angles: true,
            sides: true,
            area: true,
        };
    }

    // Toggle global measurements
    toggleGlobalMeasurements() {
        this.showMeasurements = !this.showMeasurements;
    }

    toggleLabels() {
        this.showLabels = !this.showLabels;
    }

    toggleCoordinates() {
        this.showCoordinates = !this.showCoordinates;
    }

    // Toggle selective measurements (angles, sides, area)
    toggleSelectiveMeasurements(type) {
        if (this.measurements.hasOwnProperty(type)) {
            this.measurements[type] = !this.measurements[type];
        }
    }

    draw(ctx) {
    this.drawTriangle(ctx);

    
}


    // Main draw method
    draw(ctx) {
        this.drawTriangle(ctx);

        if (this.showMeasurements) {
            if (this.measurements.angles) this.drawInternalArcs(ctx);
            if (this.measurements.sides) this.drawSideLengths(ctx);
            if (this.measurements.area) this.drawArea(ctx);
        }

        // Draw extensions
        this.drawExtensions(ctx);

        // Use global states from CanvasManager
        if (canvasManager.showMeasurements && this.measurements.angles) {
        this.drawInternalArcs(ctx);
        }
        if (canvasManager.showMeasurements && this.measurements.sides) {
        this.drawSideLengths(ctx);
         }
        if (canvasManager.showMeasurements && this.measurements.area) {
        this.drawArea(ctx);
         }

        if (canvasManager.showLabels || canvasManager.showCoordinates) {
        this.points.forEach((point) => point.draw(ctx, canvasManager.showLabels, canvasManager.showCoordinates));
         }

        // Draw vertices
        this.points.forEach(point => point.draw(ctx, this.showLabels, this.showCoordinates));
    }

    // Draw the triangle itself
    drawTriangle(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        this.points.forEach((point, index) => {
            if (index > 0) ctx.lineTo(point.x, point.y);
        });
        ctx.closePath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
        ctx.fill();
    }

    // Draw side lengths
    drawSideLengths(ctx) {
        const sideLengths = this.getSideLengths();
        this.points.forEach((point, index) => {
            const nextPoint = this.points[(index + 1) % 3];
            const midX = (point.x + nextPoint.x) / 2;
            const midY = (point.y + nextPoint.y) / 2;

            ctx.fillStyle = 'blue';
            ctx.font = '12px Arial';
            ctx.fillText(sideLengths[index].toFixed(2), midX, midY);
        });
    }

    getSideLengths() {
        return this.points.map((point, i) => {
            const next = this.points[(i + 1) % 3];
            return calculateDistance(point, next);
        });
    }

    // Draw area of the triangle
    drawArea(ctx) {
        const area = this.getArea();
        const centroidX = this.points.reduce((sum, p) => sum + p.x, 0) / 3;
        const centroidY = this.points.reduce((sum, p) => sum + p.y, 0) / 3;

        ctx.fillStyle = 'green';
        ctx.font = '12px Arial';
        ctx.fillText(`Area: ${area.toFixed(2)}`, centroidX, centroidY);
    }

 
    getArea() {
    return GeometryUtils.calculateArea(this);
    }


    

    // Draw internal arcs for angles
    drawInternalArcs(ctx) {
        const angles = this.getInternalAngles();
        this.points.forEach((vertex, index) => {
            const prev = this.points[(index + 2) % 3];
            const next = this.points[(index + 1) % 3];

            const startAngle = calculateAngle(vertex, prev);
            const endAngle = calculateAngle(vertex, next);

            ctx.beginPath();
            ctx.arc(vertex.x, vertex.y, 20, startAngle, endAngle, false);
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Annotate angles
            const labelX = vertex.x + 25 * Math.cos((startAngle + endAngle) / 2);
            const labelY = vertex.y + 25 * Math.sin((startAngle + endAngle) / 2);
            ctx.fillStyle = 'black';
            ctx.fillText(`${angles[index].toFixed(1)}°`, labelX, labelY);
        });
    }

    getInternalAngles() {
        const sides = this.getSideLengths();
        const [a, b, c] = sides;

        const angleA = this.calculateAngle(b, c, a);
        const angleB = this.calculateAngle(a, c, b);
        const angleC = this.calculateAngle(a, b, c);

        return [angleA, angleB, angleC];
    }

    calculateAngle(adj1, adj2, opp) {
        return (Math.acos((adj1 ** 2 + adj2 ** 2 - opp ** 2) / (2 * adj1 * adj2)) * 180) / Math.PI;
    }

    getSides() {
    const { points } = this; // Assume `points` contains vertices in order
    return [
        new Line(points[0], points[1]),
        new Line(points[1], points[2]),
        new Line(points[2], points[0]),
    ];
}

    // Draw extensions for vertices
    drawExtensions(ctx) {
        Object.entries(this.extensions).forEach(([label, extendedPoint]) => {
            const vertex = this.points.find(p => p.label === label);
            if (vertex && extendedPoint) {
                this.drawExtendedLine(ctx, vertex, extendedPoint);
            }
        });
    }

    drawExtendedLine(ctx, start, end) {
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    handleMouseDown(x, y, shiftKey) {
        this.draggingPoint = this.points.find(point => point.isPointInside(x, y));
        if (this.draggingPoint && shiftKey) {
            console.log('Extending vertex:', this.draggingPoint);
        } else {
            console.log('Dragging entire triangle.');
        }
    }

    drag(dx, dy, isShiftKey, ctx, mouseX, mouseY) {
        if (this.enableDrag) {
            if (this.draggingPoint) {
                if (isShiftKey) {
                    console.log(`Dragging with Shift key: Extending sides for vertex: ${this.draggingPoint.label}`);
                    this.handleShiftKeyDrag(ctx, mouseX, mouseY);
                } else {
                    this.draggingPoint.drag(dx, dy);
                }
            } else {
                this.points.forEach(point => point.drag(dx, dy));
            }
            canvasManager.detectIntersections();
        }
    }

    handleShiftKeyDrag(ctx, mouseX, mouseY) {
        const otherPoints = this.points.filter(point => point !== this.draggingPoint);
        const [p1, p2] = otherPoints;

        const unitVector1 = this.normalizeVector({ x: p1.x - this.draggingPoint.x, y: p1.y - this.draggingPoint.y });
        const unitVector2 = this.normalizeVector({ x: p2.x - this.draggingPoint.x, y: p2.y - this.draggingPoint.y });

        const projection1 = this.projectToVector(unitVector1, mouseX, mouseY);
        const projection2 = this.projectToVector(unitVector2, mouseX, mouseY);

        const extendedPoint1 = this.extendPoint(unitVector1, projection1);
        const extendedPoint2 = this.extendPoint(unitVector2, projection2);

        const chosenPoint = this.getClosestPoint(mouseX, mouseY, extendedPoint1, extendedPoint2);

        this.extensions[this.draggingPoint.label] = new Point(chosenPoint.x, chosenPoint.y);

        this.drawExtendedLine(ctx, this.draggingPoint, this.extensions[this.draggingPoint.label]);
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
       

    normalizeVector(vector) {
        const magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2);
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    }

    projectToVector(unitVector, mouseX, mouseY) {
        return ((mouseX - this.draggingPoint.x) * unitVector.x) + ((mouseY - this.draggingPoint.y) * unitVector.y);
    }

    extendPoint(unitVector, projection) {
        return {
            x: this.draggingPoint.x + unitVector.x * projection,
            y: this.draggingPoint.y + unitVector.y * projection,
        };
    }

    getClosestPoint(mouseX, mouseY, point1, point2) {
        const distance1 = calculateDistance({ x: mouseX, y: mouseY }, point1);
        const distance2 = calculateDistance({ x: mouseX, y: mouseY }, point2);
        return distance1 < distance2 ? point1 : point2;
    }
}

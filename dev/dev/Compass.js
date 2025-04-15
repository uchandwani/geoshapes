// Compass.js
import { Shape } from './Shapes.js';

export class Compass extends Shape {
    constructor(pivotX, pivotY) {
        super();
        this.type = 'compass';
        this.pivot = { x: pivotX, y: pivotY }; // Pivot point
        this.pencilLeg = { x: pivotX + 100, y: pivotY }; // Pencil leg endpoint
        this.staticLeg = { x: pivotX - 50, y: pivotY + 50 }; // Static leg endpoint
        this.arc = null; // Store arc details
        this.dragging = null; // Track dragging state
    }

    draw(ctx) {
        // Draw static leg
        ctx.beginPath();
        ctx.moveTo(this.staticLeg.x, this.staticLeg.y);
        ctx.lineTo(this.pivot.x, this.pivot.y);
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw pencil leg
        ctx.beginPath();
        ctx.moveTo(this.pivot.x, this.pivot.y);
        ctx.lineTo(this.pencilLeg.x, this.pencilLeg.y);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw arc if present
        if (this.arc) {
            const { centerX, centerY, radius, startAngle, endAngle } = this.arc;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.strokeStyle = '#0077cc';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    rotate(mouseX, mouseY) {
        // Rotate pencilLeg and pivot around staticLeg
        const angle = Math.atan2(mouseY - this.staticLeg.y, mouseX - this.staticLeg.x);
        const radius = Math.hypot(this.pencilLeg.x - this.staticLeg.x, this.pencilLeg.y - this.staticLeg.y);

        // Update pivot position
        this.pivot.x = this.staticLeg.x + radius * Math.cos(angle);
        this.pivot.y = this.staticLeg.y + radius * Math.sin(angle);

        // Update pencil leg position
        const pencilAngle = angle + Math.PI / 4; // Example offset for pencil leg
        this.pencilLeg.x = this.staticLeg.x + radius * Math.cos(pencilAngle);
        this.pencilLeg.y = this.staticLeg.y + radius * Math.sin(pencilAngle);

        console.log(`Rotated Compass: Pivot (${this.pivot.x}, ${this.pivot.y}), PencilLeg (${this.pencilLeg.x}, ${this.pencilLeg.y})`);
    }

    startArc(mouseX, mouseY) {
        // Initialize arc parameters
        this.arc = {
            centerX: this.staticLeg.x,
            centerY: this.staticLeg.y,
            radius: Math.hypot(this.pencilLeg.x - this.staticLeg.x, this.pencilLeg.y - this.staticLeg.y),
            startAngle: Math.atan2(mouseY - this.staticLeg.y, mouseX - this.staticLeg.x),
            endAngle: Math.atan2(mouseY - this.staticLeg.y, mouseX - this.staticLeg.x),
        };
        console.log(`Arc initialized: ${JSON.stringify(this.arc)}`);
    }

    updateArc(mouseX, mouseY) {
        if (this.arc) {
            this.arc.endAngle = Math.atan2(mouseY - this.staticLeg.y, mouseX - this.staticLeg.x);
            console.log(`Arc updated: Start Angle = ${this.arc.startAngle}, End Angle = ${this.arc.endAngle}`);
        }
    }
}
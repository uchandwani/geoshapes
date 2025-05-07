import { Shape } from './Shapes.js'; // If Shape is a base class

export class Arc extends Shape {
    constructor(centerX, centerY, radius, startAngle, endAngle, anticlockwise) {
        super(); // If extending a base Shape class
        this.type = 'arc';
        this.center = { x: centerX, y: centerY };
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.anticlockwise = anticlockwise;
    }

    draw(ctx) {

        console.log('Drawing Arc:', this);
        ctx.beginPath();
    
        
        ctx.arc(
            this.center.x,
            this.center.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.anticlockwise
        );
        ctx.strokeStyle = '#0077cc'; // Arc color
        ctx.lineWidth = 2;
        ctx.stroke();
        console.log(
    "Rendering Arc:",
    {
        center: this.center,
        radius: this.radius,
        startAngle: (this.startAngle * Math.PI),
        endAngle: (this.endAngle* Math.PI),
        anticlockwise: this.anticlockwise,
    }
);

    }

    isPointInside(x, y) {
        // Check distance from center
        const distanceFromCenter = Math.hypot(x - this.center.x, y - this.center.y);
        const angle = Math.atan2(y - this.center.y, x - this.center.x);

        // Normalize angle within [0, 2π]
        const normalizedAngle = (angle + 2 * Math.PI) % (2 * Math.PI);
        const normalizedStartAngle = (this.startAngle + 2 * Math.PI) % (2 * Math.PI);
        const normalizedEndAngle = (this.endAngle + 2 * Math.PI) % (2 * Math.PI);

        // Check if point is within the radius and angle range
        const withinRadius = Math.abs(distanceFromCenter - this.radius) < 5; // Tolerance of 5px
        const withinAngles = 
            normalizedStartAngle <= normalizedEndAngle
                ? normalizedAngle >= normalizedStartAngle && normalizedAngle <= normalizedEndAngle
                : normalizedAngle >= normalizedStartAngle || normalizedAngle <= normalizedEndAngle;

        return withinRadius && withinAngles;
    }
}

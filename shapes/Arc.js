import { Shape } from './Shapes.js';

export class Arc extends Shape {
  constructor(centerX, centerY, radius, startAngle, endAngle, anticlockwise = false, color = 'green') {
    super();
    this.type = 'arc';
    this.center = { x: centerX, y: centerY };
    this.radius = radius;
    this.color = color
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = anticlockwise;
  }

  draw(ctx) {
    console.log("🌀 Drawing Arc with properties:", {
      center: this.center,
      radius: this.radius,
      startAngle: this.startAngle.toFixed(2),
      endAngle: this.endAngle.toFixed(2),
      anticlockwise: this.anticlockwise
    });

    if (!ctx) {
      console.warn("⚠️ draw(ctx) called without a valid context.");
      return;
    }

    ctx.beginPath();

    ctx.arc(
      this.center.x,
      this.center.y,
      this.radius,
      this.startAngle,
      this.endAngle,
      this.anticlockwise,
      this.color
    );

    ctx.strokeStyle = this.color; 
    ctx.lineWidth = 2;
    ctx.stroke();

    // Label position (optional)
    const midAngle = (this.startAngle + this.endAngle) / 2;
    const labelX = this.center.x + (this.radius + 10) * Math.cos(midAngle);
    const labelY = this.center.y + (this.radius + 10) * Math.sin(midAngle);
    ctx.font = '14px Arial';
    ctx.fillStyle = 'black';
   

    console.log("✅ Arc stroke rendered at:", this.center, "radius:", this.radius);
  }

  isPointInside(x, y) {
    const dist = Math.hypot(x - this.center.x, y - this.center.y);
    const angle = Math.atan2(y - this.center.y, x - this.center.x);
    const normalizedAngle = (angle + 2 * Math.PI) % (2 * Math.PI);
    const start = (this.startAngle + 2 * Math.PI) % (2 * Math.PI);
    const end = (this.endAngle + 2 * Math.PI) % (2 * Math.PI);

    const withinRadius = Math.abs(dist - this.radius) < 5;
    const withinAngle = start < end
      ? normalizedAngle >= start && normalizedAngle <= end
      : normalizedAngle >= start || normalizedAngle <= end;

    return withinRadius && withinAngle;
  }
}

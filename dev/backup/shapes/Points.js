 import { Shape } from './Shapes.js';
 import * as shapes from '../shapes.js';

 export class Point extends Shape {
      constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.label = shapes.generatePointLabel(); 
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();

        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(
    `${this.label} (${Math.round(this.x)}, ${Math.round(this.y)})`,
    this.x + 8,
    this.y - 8
  );

      }

      isPointInside(px, py) {
        return Math.hypot(this.x - px, this.y - py) <= this.radius;
      }

      drag(dx, dy) {
        this.x += dx;
        this.y += dy;
      }
    }
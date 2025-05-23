import { Shape } from './Shapes.js';
import * as shapes from '../shapes.js';
//added comment

    export class Point {
        constructor(x, y, label = null, color = 'black', radius = 5) {
            this.x = x;
            this.y = y;
            this.label = label || shapes.generatePointLabel(); // Label for the point
            this.color = color; // Default color
            this.radius = radius; // Radius for drawing the point
            this.showLabel = true; // Whether to display label
            this.showCoordinates = false; // Whether to display coordinates
            this.enableDrag = false; // ✅ Default allow dragging
        }
        

        // Draw the point on the canvas
        draw(ctx, showLabel=this.label, showCoordinates = this.showCoordinates, color = this.color) {
            
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();

            const offsetX = 10;
            const offsetY = -10;

          //  console.log("The label and coordinate status is", showLabel,showCoordinates); // Draw label if enabled
            if (showLabel) {
               
                ctx.fillStyle = 'green';
                ctx.font = '14px Arial';
                ctx.fillText(this.label, this.x + offsetX, this.y + offsetY);
            }

        // Draw coordinates if enabled
        if (showCoordinates) {
            const coordinates = `(${this.x.toFixed(0)}, ${this.y.toFixed(0)})`;
            ctx.fillStyle = 'green';
            ctx.font = '10px Arial';
            ctx.fillText(coordinates, this.x + offsetX, this.y + offsetY + 12);
        }
    }

    // Check if a point is inside the clickable area (for dragging)
    isPointInside(mouseX, mouseY) {
        if (!this.enableDrag) {
            console.log("🚫 isPointInside: Dragging is disabled for this point.");
            return false;
        }
        const distance = Math.hypot(mouseX - this.x, mouseY - this.y);
        return distance <= this.radius;
    }
    

    // Toggle label visibility
    toggleLabel() {
        this.showLabel = !this.showLabel;
    }

    setShowLabel(show) {
    this.showLabel = show;
}

    

    // Toggle coordinate visibility
    toggleCoordinates() {
        this.showCoordinates = !this.showCoordinates;
    }

    setEnableDrag(enable) {
        this.enableDrag = enable;
    }
    
    getEnableDrag() {
        return this.enableDrag;
    }
    

    // Drag the point
    drag(dx, dy) {
        if (!this.enableDrag) {
            console.log("🚫 Dragging is disabled for this point.");
            return;
        }
        this.x += dx;
        this.y += dy;
    }
    
}

export class Scale {
    constructor(center, length = 200, angle = 0) {
        this.center = center; // Center point of the scale
        this.length = length; // Total length of the scale
        this.angle = angle; // Rotation angle in radians
        this.dragging = false; // To track dragging state
        this.rotating = false; // To track rotation state
    }

    draw(ctx) {
        const halfLength = this.length / 2;

        ctx.save();
        ctx.translate(this.center.x, this.center.y);
        ctx.rotate(this.angle);

        // Draw the main line
        ctx.beginPath();
        ctx.moveTo(-halfLength, 0);
        ctx.lineTo(halfLength, 0);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw measurement lines (major and minor)
        for (let i = -halfLength; i <= halfLength; i += 5) {
            const isMajor = i % 10 === 0;
            const isHalfMajor = i % 15 === 0;

            const lineLength = isMajor ? 15 : isHalfMajor ? 10 : 5;
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, lineLength);
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = isMajor ? 1.5 : 1;
            ctx.stroke();

            // Add labels for major lines
            if (isMajor) {
                ctx.font = '12px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(Math.abs(i), i, lineLength + 10);
            }
        }

        ctx.restore();
    }

    isPointInside(x, y) {
        const dx = x - this.center.x;
        const dy = y - this.center.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        return distance < this.length / 2;
    }

    drag(dx, dy) {
        this.center.x += dx;
        this.center.y += dy;
    }

    rotate(currentMouse, previousMouse) {
        const prevAngle = Math.atan2(previousMouse.y - this.center.y, previousMouse.x - this.center.x);
        const currentAngle = Math.atan2(currentMouse.y - this.center.y, currentMouse.x - this.center.x);
        this.angle += currentAngle - prevAngle;
    }
}

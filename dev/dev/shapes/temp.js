drag(dx, dy) {
    if (this.draggingEdge) {
        // Use circumferencePoint to calculate the new radius
        if (this.circumferencePoint) {
            this.circumferencePoint.x += dx;
            this.circumferencePoint.y += dy;
            this.radius = Math.sqrt(
                Math.pow(this.circumferencePoint.x - this.center.x, 2) +
                Math.pow(this.circumferencePoint.y - this.center.y, 2)
            );
            console.log(`Circle radius adjusted to ${this.radius}`);
        } else {
            console.error("Dragging edge failed: circumferencePoint is null.");
        }
    } else if (this.draggingPoint) {
        // Move the circle center
        this.center.x += dx;
        this.center.y += dy;
        console.log(`Circle center moved to (${this.center.x}, ${this.center.y})`);
    } else {
        console.error("No valid dragging action detected for Circle.");
    }
}

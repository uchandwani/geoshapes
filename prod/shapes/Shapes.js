export class Shape {
    constructor() {
        this.draggingPoint = null; // Common property for dragging
    }

    draw(ctx) {
        // Default draw implementation, to be overridden by subclasses
        console.log(`${this.constructor.name} draw() method not implemented.`);
    }

    isPointInside(x, y) {
        // Default method to check if a point is inside the shape
        console.log(`${this.constructor.name} isPointInside() method not implemented.`);
        return false;
    }

    drag(dx, dy) {
        // Default drag behavior, to be overridden by subclasses
        console.log(`${this.constructor.name} drag() method not implemented.`);
    }

    handleMouseDown(x, y) {
        // Called when the mouse is pressed on a shape
        this.draggingPoint = { x, y }; // Initialize dragging state
        console.log(`${this.constructor.name} handleMouseDown: (${x}, ${y})`);
    }



    toggleMeasurements() {
    this.showMeasurements = !this.showMeasurements;
    console.log(`${this.constructor.name}: Measurements toggled to ${this.showMeasurements}`);
    }

    toggleLabels() {
        this.showLabels = !this.showLabels;
        console.log(`${this.constructor.name}: Labels toggled to ${this.showLabels}`);
    }

    toggleCoordinates() {
        this.showCoordinates = !this.showCoordinates;
        console.log(`${this.constructor.name}: Coordinates toggled to ${this.showCoordinates}`);
    }


    handleMouseMove(dx, dy) {
        // Called when the mouse is moved while dragging
        if (this.draggingPoint) {
            this.drag(dx, dy); // Call the drag method for movement
            console.log(`${this.constructor.name} handleMouseMove: dx = ${dx}, dy = ${dy}`);
        }
    }

    handleMouseUp() {
        // Called when the mouse is released
        this.draggingPoint = null; // Reset dragging state
        console.log(`${this.constructor.name} handleMouseUp`);
    }
}

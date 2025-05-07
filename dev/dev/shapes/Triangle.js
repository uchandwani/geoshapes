    import { Shape } from './Shapes.js';
    import { Point } from './Points.js';
    import { Line } from './Lines.js';
    import { GeometryUtils } from './GeometryUtils.js';
    import { canvasManager } from './CanvasManager.js';
    import { calculateAngle,calculateDistance, calculateArea } from './GeometryUtils.js';

        export class Triangle extends Shape {
        constructor(p1, p2, p3) {
    super();

    this.points = [
        p1 instanceof Point ? p1 : new Point(p1.x, p1.y, 'A'),
        p2 instanceof Point ? p2 : new Point(p2.x, p2.y, 'B'),
        p3 instanceof Point ? p3 : new Point(p3.x, p3.y, 'C'),
    ];

    // Default properties
    this.vertexLabels = { A: 'A', B: 'B', C: 'C' };
    this.midpoints = [];
    this.showMeasurements = false;
    this.showLabels = false;
    this.showCoordinates = false;
    this.showMidpoints = true;
    this.enableDrag = true;
    this.extensions = {};
    this.externalAngles = {};
    this.measurements = { angles: false, sides: true, area: false };
    }


        // Vertex labels
        setVertexLabels(labels) {
            this.vertexLabels = labels;
            this.points[0].label = labels.A || 'A';
            this.points[1].label = labels.B || 'B';
            this.points[2].label = labels.C || 'C';
        }

        getVertexLabels() {
            return this.vertexLabels;
        }

        // Midpoint labels
       setMidpointLabels(midpointLabels) {
        this.midpointLabels = midpointLabels;
       

        // Ensure midpoints are calculated
        if (this.midpoints.length === 0) {
            this.calculateMidpoints(); // Calculate midpoints if not already done
        }

        if(this.midpoints.length > 0) {// Update midpoints with new labels
        this.midpoints.forEach((midpoint, index) => {
            const label = midpointLabels[`M${index + 1}`] || midpoint.label; // Fallback to default label
            midpoint.label = label;
           
        });
        }
    }
        


        getMidpointLabels() {
            return this.midpointLabels;
        }

        // Measurements visibility
        setShowMeasurements(show) {
            this.showMeasurements = show;
        }

        getShowMeasurements() {
            return this.showMeasurements;
        }

        // Labels visibility
        setShowLabels(show) {
            this.showLabels = show;
        }

        getShowLabels() {
            return this.showLabels;
        }

        // Enable/disable dragging
        setEnableDrag(enable) {
            this.enableDrag = enable;
        }

        getEnableDrag() {
            return this.enableDrag;
        }

        // External angles
        setExternalAngles(angles) {
            this.externalAngles = angles;
        }

        getExternalAngles() {
            return this.externalAngles;
        }

        // Extensions
        setExtensions(extensions) {
            this.extensions = extensions;
        }

        getExtensions() {
            return this.extensions;
        }

        setShowMidpoints(show) {
        this.showMidpoints = show;
        }

        getShowMidpoints() {
        return this.showMidpoints;
        }


        // Individual measurement toggles
        setMeasurement(type, value) {
            if (this.measurements.hasOwnProperty(type)) {
                this.measurements[type] = value;
            } else {
                throw new Error(`Invalid measurement type: ${type}`);
            }
        }

        getMeasurement(type) {
            if (this.measurements.hasOwnProperty(type)) {
                return this.measurements[type];
            } else {
                throw new Error(`Invalid measurement type: ${type}`);
            }
        }

        // Toggle all measurements at once
        setAllMeasurements({ angles = false, sides = true, area = true }) {
            this.measurements.angles = angles;
            this.measurements.sides = sides;
            this.measurements.area = area;
        }

        getAllMeasurements() {
            return this.measurements;
        }
        

        // Create midpoints with custom labels
       calculateMidpoints(forceUpdate = false) {
            if (!forceUpdate && this.midpoints.length) return; // Skip recomputation if midpoints exist

            this.midpoints = this.points.map((point, i) => {
                const next = this.points[(i + 1) % 3];
                const label = this.midpointLabels?.[`M${i + 1}`] || `M${i + 1}`;
                return new Point((point.x + next.x) / 2, (point.y + next.y) / 2, label);
            });

            console.log("Midpoints calculated:", this.midpoints);
        }





        // Draw midpoints
        drawMidpoints(ctx) {
        if (!this.showMidpoints) return; // Skip rendering if midpoints are disabled

        if (!this.midpoints.length) {
            this.calculateMidpoints(); // Ensure midpoints are calculated
        }

        this.midpoints.forEach((midpoint) => {
            midpoint.draw(ctx); // Use the Point's `draw` method
            ctx.fillStyle = 'black';
            ctx.font = '12px Arial';
            ctx.fillText(midpoint.label, midpoint.x + 5, midpoint.y - 5); // Optional labels
        });
    }


        

         static create(options) {
            const { sides, angles, labels = { A: 'A', B: 'B', C: 'C' }, showMidpoints = false } = options;

            if (sides?.length === 3) {
                // SSS - Three sides
                return Triangle.createFromThreeSides(sides[0], sides[1], sides[2], labels, showMidpoints);
            } else if (sides?.length === 2 && angles?.length === 1) {
                // SAS - Two sides and the included angle
                return Triangle.createFromTwoSidesAndAngle(sides[0], sides[1], angles[0], labels, showMidpoints);
            } else if (sides?.length === 1 && angles?.length === 2) {
                // ASA - One side and two angles
                return Triangle.createFromOneSideAndTwoAngles(sides[0], angles[0], angles[1], labels, showMidpoints);
            } else {
                throw new Error("Invalid parameters for triangle construction.");
            }
        }

        // SSS: Create from three sides
        static createFromThreeSides(a, b, c, labels, showMidpoints) {
            if (a + b <= c || b + c <= a || a + c <= b) {
                throw new Error("Invalid triangle sides (violates triangle inequality).");
            }

            const vertexA = { x: 0, y: 0 };
            const vertexB = { x: a, y: 0 };
            const angleC = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));
            const vertexC = { x: b * Math.cos(angleC), y: b * Math.sin(angleC) };

            return new Triangle(vertexA, vertexB, vertexC, labels, showMidpoints);
        }

        // SAS: Create from two sides and the included angle
        static createFromTwoSidesAndAngle(a, b, angleInDegrees, labels, showMidpoints) {
            const angleInRadians = (angleInDegrees * Math.PI) / 180;
            const vertexA = { x: 0, y: 0 };
            const vertexB = { x: a, y: 0 };
            const vertexC = { x: b * Math.cos(angleInRadians), y: b * Math.sin(angleInRadians) };

            return new Triangle(vertexA, vertexB, vertexC, labels, showMidpoints);
        }

        // ASA: Create from one side and two angles
        static createFromOneSideAndTwoAngles(side, angleA, angleB, labels, showMidpoints) {
            const angleC = 180 - (angleA + angleB);
            const angleARad = (angleA * Math.PI) / 180;
            const angleBRad = (angleB * Math.PI) / 180;
            const angleCRad = (angleC * Math.PI) / 180;

            const vertexA = { x: 0, y: 0 };
            const vertexB = { x: side, y: 0 };
            const vertexC = {
                x: side * Math.cos(angleCRad),
                y: side * Math.sin(angleCRad),
            };

            return new Triangle(vertexA, vertexB, vertexC, labels, showMidpoints);
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

        

        // Main draw method
        draw(ctx) {
            this.drawTriangle(ctx);
           
            if (this.showMidpoints) {
                
            this.drawMidpoints(ctx);
        }
                  
           if (this.showMeasurements) {
                this.drawSideLengths(ctx); // Show side lengths
              //  this.drawArea(ctx); // Show area
               // this.drawInternalArcs(ctx); 
            //    this.drawExternalArcs(ctx); // Show angles// Show angles
            }
            if (this.showLabels) {
                        this.points.forEach((point) => {
                            point.draw(ctx, true); // Enable labels
                        });
                    }
                    // Draw extensions
            
            this.drawExtensions(ctx);

             // Draw vertex labels
            

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
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 2;
            ctx.stroke();
        //    ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
        //    ctx.fill();
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
                ctx.fillText(sideLengths[index].toFixed(0), midX-10, midY+10);
            });
        }

        getSideLengths() {
            return this.points.map((point, i) => {
                const next = this.points[(i + 1) % 3];
                return calculateDistance(point, next);
            });
        }

        calculateMidpoints() {
       
        this.midpoints = this.points.map((point, i) => {
            const next = this.points[(i + 1) % 3];
          //  console.log("The stored midpoint labels are ", this.midpoints);// Use custom labels from `this.midpointLabels` if available
            const label = this.midpointLabels?.[`M${i + 1}`] || `M${i + 1}`;
            return new Point((point.x + next.x) / 2, (point.y + next.y) / 2, label);
        });
    }



        // Method to draw midpoints
        drawMidpoints(ctx) {
        if (!this.midpoints.length) {
            this.calculateMidpoints(); // Ensure midpoints are calculated
        }

        this.midpoints.forEach((midpoint, index) => {
            midpoint.draw(ctx); // Midpoint is now a `Point` instance
            ctx.fillStyle = 'red';
            ctx.font = '12px Arial';
           // ctx.fillText(midpoint.label, midpoint.x + 5, midpoint.y - 5);// Optional labels
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
                this.calculateMidpoints();
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
    // First check if near any vertex
    for (const point of this.points) {
        if (point.isPointInside(x, y)) {
            this.draggingPoint = point;
            return true;
        }
    }

    // Then check if inside the triangle using the area method
    const area = (p1, p2, p3) =>
        Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);

    const totalArea = area(this.points[0], this.points[1], this.points[2]);
    const area1 = area({ x, y }, this.points[1], this.points[2]);
    const area2 = area(this.points[0], { x, y }, this.points[2]);
    const area3 = area(this.points[0], this.points[1], { x, y });

    const inside = Math.abs(totalArea - (area1 + area2 + area3)) < 0.1;

    if (inside) this.draggingPoint = null; // Reset vertex dragging if inside
    return inside;
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
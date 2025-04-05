import { Shape } from './Shapes.js';
import { Point } from './Points.js';
import { Line } from './Lines.js';

  export class Triangle extends Shape {
      constructor(p1, p2, p3) {
        super();
        this.points = [p1, p2, p3];
        this.extensions = {};
        this.externalAngles = {}; // Store external angles by vertex label // Initialize as an empty object
      }

      draw(ctx) {
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

        const sideLengths = this.getSideLengths().map(length => length.toFixed(2));
        const area = this.getArea().toFixed(2);
        const angles = this.getInternalAngles().map(angle => angle.toFixed(1));
        const centroidX = (this.points[0].x + this.points[1].x + this.points[2].x) / 3;
        const centroidY = (this.points[0].y + this.points[1].y + this.points[2].y) / 3;
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';

        const internalAngles = this.getInternalAngles();

          this.points.forEach((point, index) => {
             const angle = internalAngles[index]; // Correct angle for this vertex
    // Position the label closer to the vertex
           
           const labelX = point.x + (this.points[(index + 1) % 3].x - point.x) * 0.2;
           const labelY = point.y + (this.points[(index + 1) % 3].y - point.y) * 0.2;

          ctx.fillStyle = 'black';
          ctx.font = '12px Arial';
          ctx.fillText(`${angle.toFixed(1)}°`, labelX, labelY);
           // Draw internal arcs
        
});

       // ctx.fillText(`Sides: ${sideLengths.join(', ')}`, centroidX, centroidY - 20);
        //ctx.fillText(`Area: ${area}`, centroidX, centroidY);
        // Draw the extended line if it exists
        
        this.points.forEach((point) => point.draw(ctx));
     
        this.drawInternalArcs(ctx);

        if (this.extensions && Object.keys(this.extensions).length > 0) {
            Object.entries(this.extensions).forEach(([label, extendedPoint]) => {
                const originalPoint = this.points.find((p) => p.label === label);
                if (originalPoint && extendedPoint) {
                    this.drawExtendedLine(ctx, originalPoint, extendedPoint);
                }
            });
          }

          // Annotate external angles
          if (this.externalAngles && Object.keys(this.externalAngles).length > 0) {
              Object.entries(this.externalAngles).forEach(([label, externalAngle], index) => {
                  const vertex = this.points[index];
                  ctx.fillStyle = 'red';
                  ctx.font = '12px Arial';
                  ctx.fillText(`${externalAngle.toFixed(1)}°`, vertex.x + 20, vertex.y + 10);
                  //this.drawExternalArcs(ctx);    
              });
          }
      }
     

     getPointsForDragging() {
        return this.points; // Return array of points
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

 
drag(dx, dy, isShiftKey, ctx, mouseX, mouseY) {
    if (this.draggingPoint) {
        if (isShiftKey) {


            // Get the two other points connected to the dragging point
            const otherPoints = this.points.filter((point) => point !== this.draggingPoint);
            const [p1, p2] = otherPoints;

            // Calculate direction vectors for both sides
            const vector1 = { x: p1.x - this.draggingPoint.x, y: p1.y - this.draggingPoint.y };
            const vector2 = { x: p2.x - this.draggingPoint.x, y: p2.y - this.draggingPoint.y };

            // Normalize the vectors
            const normalize = (v) => {
                const magnitude = Math.sqrt(v.x ** 2 + v.y ** 2);
                return { x: v.x / magnitude, y: v.y / magnitude };
            };
            const unitVector1 = normalize(vector1);
            const unitVector2 = normalize(vector2);

            // Project the mouse position onto both vectors
            const project = (unitVector, mx, my, px, py) =>
                ((mx - px) * unitVector.x) + ((my - py) * unitVector.y);

            const projection1 = project(unitVector1, mouseX, mouseY, this.draggingPoint.x, this.draggingPoint.y);
            const projection2 = project(unitVector2, mouseX, mouseY, this.draggingPoint.x, this.draggingPoint.y);

            const extend = (unitVector, projection) => ({
                x: this.draggingPoint.x + unitVector.x * projection,
                y: this.draggingPoint.y + unitVector.y * projection,
            });

            const extendedPoint1 = extend(unitVector1, projection1);
            const extendedPoint2 = extend(unitVector2, projection2);

            // Determine which extension point is closer to the mouse
            const distance1 = Math.hypot(mouseX - extendedPoint1.x, mouseY - extendedPoint1.y);
            const distance2 = Math.hypot(mouseX - extendedPoint2.x, mouseY - extendedPoint2.y);
            const chosenPoint = distance1 < distance2 ? extendedPoint1 : extendedPoint2;

            // Store or update the extension for the currently dragged vertex
            this.extensions[this.draggingPoint.label] = new Point(chosenPoint.x, chosenPoint.y);

            // Draw the extended line dynamically
            this.drawExtendedLine(ctx, this.draggingPoint, this.extensions[this.draggingPoint.label]);

            // Recalculate external angles
            this.calculateExternalAngles();
        } else {
            // Regular dragging of the vertex
            this.draggingPoint.drag(dx, dy);
        }
    } else {
        // Dragging the entire triangle
        this.points.forEach((point) => point.drag(dx, dy));
    }
}


      getSideLengths() {
          const [p1, p2, p3] = this.points;
          return [
            Math.hypot(p2.x - p1.x, p2.y - p1.y),
            Math.hypot(p3.x - p2.x, p3.y - p2.y),
            Math.hypot(p1.x - p3.x, p1.y - p3.y),
          ];
        }

      getArea() {
          const [p1, p2, p3] = this.points;
          return Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
        }

      getInternalAngles() {
          const [p1, p2, p3] = this.points;
          const [c, a, b] = this.getSideLengths();

          // Calculate angles using the Law of Cosines
          const angleA = (Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)) * 180) / Math.PI; // Angle at p1
          const angleB = (Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)) * 180) / Math.PI; // Angle at p2
          const angleC = (Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b)) * 180) / Math.PI; // Angle at p3
    
          return [angleA, angleB, angleC];
        }
      

      drawExtendedLine(ctx, start, end) {
          if (!ctx) {
              console.error("Canvas context (ctx) is undefined!");
              return;
          }
         
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = 'red'; // Use a different color for extended lines
          ctx.lineWidth = 1.5;
          ctx.stroke();
      }


    // Calculate external angles
        calculateExternalAngles() {
            const internalAngles = this.getInternalAngles();

            // External angle = 180° - Internal angle
            Object.entries(internalAngles).forEach(([label, angle]) => {
                this.externalAngles[label] = 180 - angle;
            });

           
            return this.externalAngles;
        }

    drawAngleArc(ctx, vertex, angle, radius, clockwise) {
    const [p1, p2] = this.points.filter((point) => point !== vertex);

    // Calculate angles for the arc
    const startAngle = Math.atan2(p1.y - vertex.y, p1.x - vertex.x);
    const endAngle = Math.atan2(p2.y - vertex.y, p2.x - vertex.x);

    // Adjust based on clockwise or counterclockwise
    const adjustedStart = clockwise ? endAngle : startAngle;
    const adjustedEnd = clockwise ? startAngle : endAngle;

    // Draw the arc
    ctx.beginPath();
    ctx.arc(vertex.x, vertex.y, radius, adjustedStart, adjustedEnd, clockwise);
    ctx.strokeStyle = 'blue'; // Change color as needed
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Annotate the angle
    const labelX = vertex.x + radius * Math.cos((adjustedStart + adjustedEnd) / 2);
    const labelY = vertex.y + radius * Math.sin((adjustedStart + adjustedEnd) / 2);

    ctx.fillStyle = clockwise ? 'red' : 'black'; // Internal: black, External: red
    ctx.font = '12px Arial';
    ctx.fillText(`${angle.toFixed(1)}°`, labelX, labelY);
}


  drawInternalArcs(ctx) {
    const internalAngles = this.getInternalAngles();
    const colors = ['red', 'yellow', 'green'];
    this.points.forEach((vertex, index) => {
        const angle = internalAngles[index]; // Internal angle at the current vertex
        const prevPoint = this.points[(index + 2) % 3]; // Previous vertex
        const nextPoint = this.points[(index + 1) % 3]; // Next vertex

        // Calculate start and end angles for the arc
        const startAngle = Math.atan2(prevPoint.y - vertex.y, prevPoint.x - vertex.x);
        const endAngle = Math.atan2(nextPoint.y - vertex.y, nextPoint.x - vertex.x);

        // Adjust arc radius
        const radius = 30; // Adjust radius to fit inside the triangle
        //   console.log("Inside Internal arc") ;
        // Draw the arc
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, radius, startAngle, endAngle, false); // Counterclockwise
        ctx.strokeStyle = 'red'; // Internal arc color
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = colors[index % colors.length];
        // Annotate the internal angle
        const labelX = vertex.x + (radius / 1.5) * Math.cos((startAngle + endAngle) / 2);
        const labelY = vertex.y + (radius / 1.5) * Math.sin((startAngle + endAngle) / 2);

        //ctx.fillStyle = 'black';
        //ctx.font = '12px Arial';
       // ctx.fillText(`${angle.toFixed(1)}°`, labelX, labelY);
    });
}

drawExternalArcs(ctx) {
    Object.entries(this.externalAngles).forEach(([label, externalAngle], index) => {
        const vertex = this.points[index]; // Current vertex
        const extension = this.extensions[vertex.label]; // Extended point for the vertex
        const adjacentPoint = this.points[(index + 2) % 3]; // Previous vertex in clockwise order

        if (extension) {
            // Define the radius for the external arc
            const radius = 40;

            // Calculate angles
            const startAngle = Math.atan2(adjacentPoint.y - vertex.y, adjacentPoint.x - vertex.x);
            const endAngle = Math.atan2(extension.y - vertex.y, extension.x - vertex.x);

            // Normalize angles
            let finalStartAngle = startAngle;
            let finalEndAngle = endAngle;

            if (endAngle < startAngle) {
                finalEndAngle += 2 * Math.PI; // Ensure the arc spans correctly
            }

            // Calculate the actual arc span
            let spanAngle = finalEndAngle - finalStartAngle;
            let spanAngleDegrees = (spanAngle * 180) / Math.PI;

            // Adjust span angle if it exceeds 180 degrees
            if (spanAngleDegrees > 180) {
                spanAngleDegrees = 360 - spanAngleDegrees;
                [finalStartAngle, finalEndAngle] = [finalEndAngle - 2 * Math.PI, finalStartAngle];
            }

            // Validate the span against the external angle
            if (Math.abs(spanAngleDegrees - externalAngle) > 1) {
                console.log(
                    `Skipping arc for vertex ${vertex.label} due to mismatch: Span = ${spanAngleDegrees}, External Angle = ${externalAngle}`
                );
                return; // Skip drawing if the arc is incorrect
            }

            // Draw the external arc
            ctx.beginPath();
            ctx.moveTo(vertex.x, vertex.y); // Move to the vertex
            ctx.arc(vertex.x, vertex.y, radius, finalStartAngle, finalEndAngle, true); // Clockwise
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'; // Light red for external arc
            ctx.fill();

            // Draw the arc border
            ctx.strokeStyle = 'red'; // Red border for external arcs
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Annotate the external angle
            const labelX = vertex.x + (radius + 10) * Math.cos((finalStartAngle + finalEndAngle) / 2);
            const labelY = vertex.y + (radius + 10) * Math.sin((finalStartAngle + finalEndAngle) / 2);

            ctx.fillStyle = 'red';
            ctx.font = '12px Arial';
            ctx.fillText(`${externalAngle.toFixed(1)}°`, labelX, labelY);
        }
    });
}


 
  }  

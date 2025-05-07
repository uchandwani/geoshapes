import { Triangle } from '../shapes/Triangle.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { functionalityConfig } from './trianglePropConfig.js';
import { switchFunctionality } from './trianglePropeventHandlers.js';
import { attachNavBarListeners } from './trianglePropeventHandlers.js';
import {Line} from '../shapes/Lines.js';
import {Point} from '../shapes/Points.js';
import {Circle} from '../shapes/Circle.js';

    
document.addEventListener('DOMContentLoaded', () => {
    console.log("Triangle Properties Page Loaded");

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
   /* console.log('Current Mode:', mode);
    const buttonActions = {
        
        'icon-btn-1': () => console.log('Placeholder Icon 1 Clicked'),
        'icon-btn-2': () => console.log('Placeholder Icon 2 Clicked'),
        'icon-btn-3': () => console.log('Placeholder Icon 3 Clicked'),
        'icon-btn-4': () => console.log('Placeholder Icon 4 Clicked'),
        'icon-btn-5': () => console.log('Placeholder Icon 5 Clicked'),
        'icon-btn-6': () => console.log('Placeholder Icon 6 Clicked'),
        'icon-btn-7': () => console.log('Placeholder Icon 7 Clicked'),
        'icon-btn-8': () => console.log('Placeholder Icon 8 Clicked'),
        'icon-btn-14': () => console.log('Placeholder Icon 14 Clicked'),
        'icon-btn-16': () => console.log('Placeholder Icon 16 Clicked'),
        'icon-btn-9': () => console.log('Placeholder Icon 9 Clicked'),
        'icon-btn-10': () => console.log('Placeholder Icon 10 Clicked'),
        'icon-btn-11': () => console.log('Placeholder Icon 11 Clicked'),
        'icon-btn-12': () => console.log('Placeholder Icon 12 Clicked'),
        'icon-btn-13': () => console.log('Placeholder Icon 13 Clicked'),
         'icon-btn-15': () => console.log('Placeholder Icon 15 Clicked'),
    };

    Object.keys(buttonActions).forEach((id) => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', buttonActions[id]);
            console.log(`Listener attached to button: ${id}`);
        } else {
            console.warn(`Button with ID ${id} not found.`);
        }
    });//});
 */
    
    attachNavBarListeners(); // Set up listeners for nav buttons
    const defaultFunctionality = 'sineTheta';
    const defaultType = 'sin';

    switchFunctionality(defaultFunctionality, defaultType);
    // Function to handle button activation
    // Step 3: Set the default button as active
   /* const defaultButton = document.getElementById(`${defaultFunctionality}-button`);
    if (defaultButton) {
        defaultButton.classList.add('active');
    console.log("active button changed")  ;  
    } */
    });
    // Default state: Activate Sin Theta and load default functionality
        
   
  //setupEventHandlers(ctx, canvas);
  //  loadTriangle('default');
    // Draw a default triangle on page load
  // drawDefaultCircle(ctx, canvas);
  // a(ctx, canvas)


// Function to draw the default triangle on page load
function drawDefaultCircle(ctx,canvas) {
    const centerPoint = new Point(300, 300);
    const radius = 200;
    const label = 'My Circle';

const circle = Circle.draw(centerPoint, radius, label);
canvasManager.addShape(circle);

}

export function decimalToFraction(decimal) {
    if (decimal === parseInt(decimal)) {
        // If the number is already an integer
        return `${decimal}/1`;
    }

    let numerator = decimal;
    let denominator = 1;

    // Eliminate the decimal by multiplying numerator and denominator
    while (numerator % 1 !== 0) {
        numerator *= 10;
        denominator *= 10;
    }

    // Find the greatest common divisor (GCD)
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Simplify the fraction
    const commonDivisor = gcd(numerator, denominator);
    numerator /= commonDivisor;
    denominator /= commonDivisor;

    return `${numerator}/${denominator}`;
}



 export function calculateSin(rowId) {
            const perpendicular = parseFloat(document.getElementById(`perpendicular-${rowId}`).value);
            const hypotenuse = parseFloat(document.getElementById(`hypotenuse-${rowId}`).value);
            const sinCell = document.getElementById(`sin-${rowId}`);

            console.log("The value of input for calculation is", perpendicular, hypotenuse);
            
            if (!isNaN(perpendicular) && !isNaN(hypotenuse) && hypotenuse !== 0) {
                const sinValue = (perpendicular / hypotenuse).toFixed(2);
                console.log("The sinValue is", sinValue);
            const epsilon = 0.01;

                switch (true) {
                    case Math.abs(sinValue - 0.50) < epsilon:
                        sinCell.textContent = "1/2";
                        break;
                    case Math.abs(sinValue - 0.7071) < epsilon:
                        sinCell.textContent = "√2/2";
                        break;
                    case Math.abs(sinValue - 0.86602) < epsilon:
                        sinCell.textContent = "√3/2";
                        break;
                    case Math.abs(sinValue - 0.0872 ) < epsilon:
                        sinCell.textContent = "0.0872";
                        break;
                    case Math.abs(sinValue - 0.9962) < epsilon:
                        sinCell.textContent = "0.9962";
                        break;
                    default:
                        sinCell.textContent = "Invalid";
                        break;
                

    console.log(`Updated sinCell content: ${sinCell.textContent}`);
    }
            } else {
                sinCell.textContent = "Invalid";
            }
        }

export function calculateCos(rowId) {
    console.log(`Calculating cos for row: ${rowId}`);
    const base = parseFloat(document.getElementById(`base-${rowId}`).value);
    const hypotenuse = parseFloat(document.getElementById(`hypotenuse-${rowId}`).value);
    console.log(`Base: ${base}, Hypotenuse: ${hypotenuse}`);
    
    const cosCell = document.getElementById(`cos-${rowId}`);
    if (!isNaN(base) && !isNaN(hypotenuse) && hypotenuse !== 0) {
        const cosValue = (base / hypotenuse).toFixed(2);
        const epsilon = 0.01;

                switch (true) {
                    case Math.abs(cosValue - 0.50) < epsilon:
                        cosCell.textContent = "1/2";
                        break;
                    case Math.abs(cosValue - 0.7071) < epsilon:
                        cosCell.textContent = "√2/2";
                        break;
                    case Math.abs(cosValue - 0.86602) < epsilon:
                        cosCell.textContent = "√3/2";
                        break;
                    case Math.abs(cosValue - 0.0872 ) < epsilon:
                        cosCell.textContent = "0.0872";
                        break;
                    case Math.abs(cosValue - 0.9962) < epsilon:
                        cosCell.textContent = "0.9962";
                        break;
                    default:
                        cosCell.textContent = "Invalid";
                        break;
        cosCell.textContent = decimalToFraction(cosValue);
    }
} else {
        cosCell.textContent = "Invalid";
    }
}


function drawDefaultTriangle(ctx, canvas) {
    console.log("Drawing default triangle on load...");

    // Define vertices for the triangle
    const p1 = { x: 300, y: 300 };
    const p2 = { x: 400, y: 300 };
    const p3 = { x: 300, y: 200 };

    // Create a triangle and set properties
    const triangle = new Triangle(p1, p2, p3);
  //  triangle.setVertexLabels({ A: 'C', B: 'A', C: 'F' });
  //  triangle.setMidpointLabels({ M1: 'E', M2: 'D', M3: 'B' }); // Custom midpoint labels
    triangle.setShowMeasurements(setShowMeasurements || false);
    triangle.setShowLabels(false);

    // Add triangle to canvas manager and render it
    //canvasManager.addShape(triangle);
    //canvasManager.render();
    renderCanvas(functionalityConfig.sineTheta);

    console.log("Default triangle drawn.");
}

function enableDraggingForPointE(center, radius, draggableConfig) {
    const { initialPosition, labels } = draggableConfig;

    // Create Point E
    const pointE = new Point(initialPosition.x, initialPosition.y); // Assuming you have a Point class
    const pointA = new Point(initialPosition.x, center.y); // Initial projection of E onto horizontal axis
    const lineEA = new Line(pointE, pointA); // Line connecting E to A

    // Add shapes to canvas manager
    canvasManager.addShape(pointE);
    canvasManager.addShape(pointA);
    canvasManager.addShape(lineEA);

    let isDragging = false;

    // Add event listeners for drag behavior
    document.addEventListener('mousedown', (event) => {
        // Check if the mouse is near Point E
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const distance = Math.sqrt(
            Math.pow(mouseX - pointE.x, 2) + Math.pow(mouseY - pointE.y, 2)
        );

        if (distance <= 10) { // 10 is the detection radius
            isDragging = true;
        }
    });

    document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Constrain Point E to the circle
        const dx = mouseX - center.x;
        const dy = mouseY - center.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        pointE.x = center.x + (dx / distance) * radius;
        pointE.y = center.y + (dy / distance) * radius;

        // Update Point A (projection of E onto horizontal axis)
        pointA.x = pointE.x;
        pointA.y = center.y;

        // Update the line connecting E to A
        lineEA.setPoints([pointE, pointA]);

        canvasManager.render(); // Redraw the canvas
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

export function showTab(tabId) {
            const dynamicDiv = document.getElementById('dynamic-buttons');
            
            if (tabId === 'verify') {
                dynamicDiv.style.display = 'block'; // Show the div
            } else {
                dynamicDiv.style.display = 'none'; // Hide the div
            }
        }


export function calculateTrig(rowId) {
    // Get input values
    const perpendicular = parseFloat(document.getElementById(`perpendicular-angle${rowId}`).value) || 0;
    const base = parseFloat(document.getElementById(`base-angle${rowId}`).value) || 0;
    const hypotenuse = parseFloat(document.getElementById(`hypotenuse-angle${rowId}`).value) || 0;
    console.log("The value of rowId", rowId);
    // Validate input values
    if (perpendicular > 0 && base > 0 && hypotenuse > 0 && hypotenuse >= perpendicular && hypotenuse >= base) {
        // Calculate Sin θ
        
        let sinValue = toFraction(perpendicular / hypotenuse);
              
        document.getElementById(`sin-angle${rowId}`).textContent = sinValue;

        // Calculate Cos θ
        let cosValue = toFraction(base / hypotenuse);
        
     
        document.getElementById(`cos-angle${rowId}`).textContent = cosValue;
    
            // Calculate Tan θ
        let tanValue = toFraction (perpendicular / base);

        document.getElementById(`tan-angle${rowId}`).textContent = tanValue;
    } else {
        // Display "Invalid" if inputs are incomplete or invalid
        document.getElementById(`sin-angle${rowId}`).textContent = "Invalid";
        document.getElementById(`cos-angle${rowId}`).textContent = "Invalid";
        document.getElementById(`tan-angle${rowId}`).textContent = "Invalid";
    }
}

export function calcTrig(rowId, tableType) {
    // Get input values
    const perpendicular = parseFloat(document.getElementById(`perpendicular-${tableType}-${rowId}`).value) || 0;
    const base = parseFloat(document.getElementById(`base-${tableType}-${rowId}`).value) || 0;
    const hypotenuse = parseFloat(document.getElementById(`hypotenuse-${tableType}-${rowId}`).value) || 0;

    console.log(`Calculating trigonometric values for row ${rowId} in ${tableType} table.`);
    
    // Validation
    if (perpendicular > 0 && base > 0 && hypotenuse > 0 && hypotenuse >= perpendicular && hypotenuse >= base) {
        // Sin and Cos Calculations (Table 1)
        console.log(`Inside if condition -Calculating trigonometric values for row ${rowId} in ${tableType} table.`);
        if (tableType === "sin") {
              console.log(`Inside if tabletype condition -Calculating trigonometric values for row ${rowId} in ${tableType} table.`);
            const sinValue = (perpendicular / hypotenuse);
            const cosValue = (base / hypotenuse);
            console.log("Inside tableType if block", tableType);
            document.getElementById(`sin-${tableType}-${rowId}`).textContent = toFraction(sinValue);
            document.getElementById(`cos-${tableType}-${rowId}`).textContent = toFraction(cosValue);

            const sin2Value = (sinValue ** 2).toFixed(2);
            const cos2Value = (cosValue ** 2).toFixed(2);
            const sin2PlusCos2 = (parseFloat(sin2Value) + parseFloat(cos2Value)).toFixed(2);
            console.log("The values calculated by calcTrig for sin table are", toFraction(sinValue), toFraction(cosValue), sin2Value,cos2Value,sin2PlusCos2 );
            


            document.getElementById(`sin2-${tableType}-${rowId}`).textContent = sin2Value;
            document.getElementById(`cos2-${tableType}-${rowId}`).textContent = cos2Value;
            document.getElementById(`sin2pluscos2-${tableType}-${rowId}`).textContent = sin2PlusCos2;
        }

        // Tan and Sec Calculations (Table 2)
        if (tableType === "cos") {
             console.log(`Inside if tabletype condition -Calculating trigonometric values for row ${rowId} in ${tableType} table.`);
            const tanValue = (perpendicular / base);
            const secValue = (hypotenuse / base);

            document.getElementById(`tan-${tableType}-${rowId}`).textContent = toFraction(tanValue);
            document.getElementById(`sec-${tableType}-${rowId}`).textContent = toFraction(secValue);

            const tan2Value = (tanValue ** 2).toFixed(2);
            const sec2Value = (secValue ** 2).toFixed(2);
            const onePlusTan2 = (1 + parseFloat(tan2Value)).toFixed(2);

            document.getElementById(`tan2-${tableType}-${rowId}`).textContent = tan2Value;
            document.getElementById(`sec2-${tableType}-${rowId}`).textContent = sec2Value;
            document.getElementById(`one-plus-tan2-${tableType}-${rowId}`).textContent = onePlusTan2;
        }

        // Cot and Cosec Calculations (Table 3)
        if (tableType === "tan") {
            const cotValue = (base / perpendicular).toFixed(2);
            const cosecValue = (hypotenuse / perpendicular).toFixed(2);

            document.getElementById(`cot-${tableType}-${rowId}`).textContent = toFraction(cotValue);
            document.getElementById(`cosec-${tableType}-${rowId}`).textContent = toFraction(cosecValue);

            const cot2Value = (cotValue ** 2);
            const cosec2Value = (cosecValue ** 2);
            const cot2PlusOne = (parseFloat(cot2Value) + 1);

            document.getElementById(`cot2-${tableType}-${rowId}`).textContent = toFraction(cot2Value);
            document.getElementById(`cosec2-${tableType}-${rowId}`).textContent = toFraction(cosec2Value);
            document.getElementById(`cot2plusone-${tableType}-${rowId}`).textContent =toFraction(cot2PlusOne.toFixed(2));
        }
    } else {
        // If inputs are invalid, set fields to "Invalid"
        const outputFields = [
            `sin-${tableType}-${rowId}`, `cos-${tableType}-${rowId}`, `sin2-${tableType}-${rowId}`,
            `cos2-${tableType}-${rowId}`, `sin2pluscos2-${tableType}-${rowId}`, `tan-${tableType}-${rowId}`,
            `sec-${tableType}-${rowId}`, `tan2-${tableType}-${rowId}`, `sec2-${tableType}-${rowId}`,
            `one-plus-tan2-${tableType}-${rowId}`, `cot-${tableType}-${rowId}`, `cosec-${tableType}-${rowId}`,
            `cot2-${tableType}-${rowId}`, `cosec2-${tableType}-${rowId}`, `cot2plusone-${tableType}-${rowId}`
        ];
        outputFields.forEach((id) => {
            const field = document.getElementById(id);
            if (field) field.textContent = "Invalid";
        });
    }
}

export function toFraction(decValue) {
    const epsilon = 0.01; // Margin of error for comparison

    console.log("The decValue is:", decValue);

    if (Math.abs(decValue - 0.50) < epsilon) {
        console.log("Matched 0.50");
        return "1/2";
    } else if (Math.abs(decValue - 0.7071) < epsilon) {
        console.log("Matched 0.7071");
        return "√2/2";
    } else if (Math.abs(decValue - 0.86602) < epsilon) {
        console.log("Matched 0.86602");
        return "√3/2";
     } else if (Math.abs(decValue - 0.5773) < epsilon) {
        console.log("Matched 0.5773");
        return "√3/3";

    } else if (Math.abs(decValue - 1.732) < epsilon) {
        
        return "√3";
    } else if (Math.abs(decValue - .3333) < epsilon) {
        
        return "1/3";
    } else if (Math.abs(decValue - 3.99) < epsilon) {
        
        return "4";
    } else if (Math.abs(decValue - 1.34) < epsilon) {
        
        return "4/3";    
    
   } else {
        console.log("No match, returning original value");
        return Math.round(decValue); // Ensure consistent precision for other decimals
    }
}

export function handleTriangleType(fkey, type) {
    const config = functionalityConfig[fkey];
    if (!config || !config.canvasConfig) {
        console.error("Invalid configuration for functionality key:", fkey);
        return;
    }

    const canvasConfig = config.canvasConfig;

    // Clear the canvas
    canvasManager.clearAllShapes();

    // Draw circles
    if (canvasConfig.circles && Array.isArray(canvasConfig.circles)) {
        canvasConfig.circles.forEach(({ center, radius }) => {
            const circle = new Circle(center, radius);
            canvasManager.addShape(circle);
            console.log("The canvas shapes after adding circle are ", canvasManager.shapes);
        });
    }

    // Draw triangles
    if (canvasConfig.triangles && Array.isArray(canvasConfig.triangles)) {
        const triangles = canvasConfig.triangles.filter(triangle => triangle.type === type);
        triangles.forEach(triangleConfig => {
            const { vertexA, angles, radius, labels, showMidpoints } = triangleConfig;
            const angle1 = (angles[0] * Math.PI) / 180;

            const vertexB = {
                x: vertexA.x + radius * Math.cos(angle1),
                y: vertexA.y - radius * Math.sin(angle1),
            };
            const vertexC = {
                x: vertexB.x,
                y: vertexA.y,
            };

            const triangle = new Triangle(vertexA, vertexB, vertexC);
            triangle.setVertexLabels(labels);
            triangle.setShowMidpoints(showMidpoints || false);
            triangle.setShowLabels(true);
            canvasManager.addShape(triangle);
             console.log("The canvas shapes after adding triangle are ", canvasManager.shapes);

        });
    }

    // Render all shapes
    canvasManager.render();
}



export function renderCanvas(config) {
    const { canvasConfig } = config;

    // Clear the canvas before drawing
   // canvasManager.clearCanvas();

    // Draw the circle
    if (canvasConfig.circle) {
        const [center, radius] = canvasConfig.circle;
        console.log("The circle details are ", canvasConfig.circle);
        console.log("The circle parameters are ")
        const circle = new Circle(center, radius);
        canvasManager.addShape(circle);
        canvasManager.render();
        console.log("The canvas shapes after adding circle are ", canvasManager.shapes);

        // Enable dragging for Point E
    if (config.canvasConfig.draggablePoint) {
    enableDraggingForPointE(
        config.canvasConfig.circle[0], // Circle center
        config.canvasConfig.circle[1], // Circle radius
        config.canvasConfig.draggablePoint // Draggable point configuration
    ); 
    
    }


}


    // Draw the primary triangle
    if (canvasConfig.triangleVertices) {
        console.log("canvasConfig triangleVertices", canvasConfig.triangleVertices);
        const triangle = new Triangle(
            canvasConfig.triangleVertices[0],
            canvasConfig.triangleVertices[1],
            canvasConfig.triangleVertices[2]
        );
        triangle.setVertexLabels(canvasConfig.vertexLabels);
        triangle.setShowMeasurements(setShowMeasurements || false);
        triangle.setShowLabels(true);
        canvasManager.addShape(triangle);
         console.log("The canvas shapes after adding triangle are ", canvasManager.shapes);
    }

    // Draw additional triangles
    if (canvasConfig.additionalTriangles) {
        canvasConfig.additionalTriangles.forEach(({ vertices, vertexLabels, midpointLabels }) => {
            const triangle = new Triangle(vertices[0], vertices[1], vertices[2]);
            triangle.setVertexLabels(vertexLabels);
            triangle.setShowLabels(true);
            triangle.setShowMeasurements(setShowMeasurements || false);
            canvasManager.addShape(triangle);
        });
    }

    // Render all shapes on the canvas
    canvasManager.render();
}


// Call renderCanvas with the desired configuration
renderCanvas(functionalityConfig.sineTheta);








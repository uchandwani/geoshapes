import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { Angle} from './shapes/Angles.js';

// Other shape creation logic
export { Shape, Point, Line, Circle, Triangle, Rectangle, Protractor, Angle };

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shapes = [];
const points = [];
let selectedShape = null;
let dragStart = null;
let mode = 'create';
let shapeType = 'points';
let pointCounter = 0;

const modeRadios = document.querySelectorAll('input[name="mode"]');
const shapeTypeDropdown = document.getElementById('shapeType');

// Attach event listeners for mode radio buttons
    modeRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
    mode = e.target.value;

    // Show or hide dropdown based on mode
        if (mode === 'create') {
          shapeTypeDropdown.disabled = false; // Enable dropdown
          console.log("Dropdown enabled for create mode");
        } else {
          shapeTypeDropdown.disabled = true; // Disable dropdown
          console.log("Dropdown disabled for non-create modes");
        }
      });
    });

// Event Listeners
// Attach event listener for shapeType dropdown
    shapeTypeDropdown.addEventListener('change', (e) => {
      if (mode === 'create') {
        shapeType = e.target.value;
        console.log(e.target); // Logs the entire dropdown element
        console.log(e.target.value); // Logs the value of the selected option
        console.log("Selected shape type:", shapeType);
        drawProtractor();
      }
    });

  document.getElementById('shapeType').addEventListener('change', (e) => {
  shapeType = e.target.value;
  console.log("Dropdown manually updated - New shapeType:", shapeType);
});

canvas.addEventListener('mousedown', (e) => {
  const { offsetX, offsetY } = e;

  if (mode === 'create') {
       collectPoints(offsetX, offsetY);
     }
  else if (mode === 'modify') {
    selectShape(offsetX, offsetY);
    dragStart = { x: offsetX, y: offsetY };
  } else if (mode === 'delete') {
    deleteShape(offsetX, offsetY);
  }
});

canvas.addEventListener('mousemove', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;

  if (mode === 'modify' && selectedShape && dragStart) {
    const { offsetX, offsetY } = e;
    const dx = offsetX - dragStart.x;
    const dy = offsetY - dragStart.y;

    console.log('Dragging selected shape:', selectedShape.constructor.name, selectedShape, `dx: ${dx}, dy: ${dy}`);
    selectedShape.drag(dx, dy);
    dragStart = { x: offsetX, y: offsetY };
    render();
  }
});

canvas.addEventListener('mouseup', () => {
  dragStart = null;
  if (selectedShape) selectedShape.draggingPoint = null;
});

export function generatePointLabel() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let label = '';
    let index = pointCounter;

    do {
      label = alphabet[index % 26] + label;
      index = Math.floor(index / 26) - 1;
    } while (index >= 0);

    pointCounter++;
    console.log("The label is", label)
    return label;
  }

// Helper Functions
export function collectPoints(x, y) {
  points.push(new Point(x, y));
  render();
  console.log("Inside collectPoints shapeType", shapeType, points.length);
  if (
    (shapeType === 'line' && points.length === 2) ||
    (shapeType === 'triangle' && points.length === 3) ||
    (shapeType === 'angle' && points.length === 3) ||
    (shapeType === 'rectangle' && points.length === 2) ||
    (shapeType === 'parallelogram' && points.length === 4) ||
    (shapeType === 'circle' && points.length === 2) ||
    (shapeType === 'protractor' && points.length === 1)
  ) {
    console.log("Calling createShapeFromPoints", shapeType, points.length);
    createShapeFromPoints();
    points.length = 0; // Reset points only after creating shape
  }
}

export function createShapeFromPoints() {
  console.log("Entering createShapeFromPoints shapeType", shapeType)
  if (shapeType === 'point') {
    shapes.push(new Point(points[0].x, points[0].y));
  } else if (shapeType === 'line') {
    console.log("Inside createShapeFromPoints", shapeType);
    shapes.push(new Line(points[0], points[1]));
  } else if (shapeType === 'circle') {
    const radius = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
    shapes.push(new Circle(points[0], radius));
  } else if (shapeType === 'triangle') {
    shapes.push(new Triangle(points[0], points[1], points[2]));
  } else if (shapeType === 'angle') {
    shapes.push(new Angle(points[0], points[1], points[2]));
  } else if (shapeType === 'rectangle') {
    shapes.push(new Rectangle(points[0], points[1]));
  } else if (shapeType === 'protractor') {
    shapes.push(new Protractor(points[0], 50));
  }
  console.log("Exiting createShapeFromPoints shapeType", shapeType)
  render();
}

export function drawProtractor(){
     console.log('Before adding shape:', shapes);
 shapes.push(new Protractor(ctx,points[0]));
console.log('After adding shape:', shapes);
}
export function selectShape(x, y) {
  selectedShape = shapes.find((shape) => shape.isPointInside(x, y));
  console.log("The selected shape is ", selectedShape);
}

export function deleteShape(x, y) {
  const index = shapes.findIndex((shape) => shape.isPointInside(x, y));
  if (index !== -1) {
    shapes.splice(index, 1);
    render();
  }
}

export function resetLabels() {
      pointCounter = 0;
    }

export function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  points.forEach((point) => point.draw(ctx));
  console.log("Inside render the shapes is", shapes);
  shapes.forEach((shape) => shape.draw(ctx));
  console.log("Inside render");
}

export function resetCanvas() {
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas
    }
    shapes.length = 0;
    points.length = 0;
    render();
}



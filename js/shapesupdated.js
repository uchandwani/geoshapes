// shapes.js (Final Cleaned Version)

// ===== Imports =====
import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { Divider } from './shapes/Divider.js';
import { Compass } from './shapes/Compass.js';
import { Arc } from './shapes/Arc.js';
import { canvasManager } from './shapes/CanvasManager.js';
import { currentPageFeatures } from '/geoshapes/js/functionalityConfig.js';

// ===== Global Exports and State =====
export { Shape, Point, Line, Circle, Triangle, Rectangle, Protractor, Divider };
export const allshapes = { currentArc: null, geoshapes: [] };

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const points = [];
const snapThreshold = 10;

let selectedShape = null;
let dragStart = null;
let previousMousePos = null;
let mode = 'modify';
let shapeType = 'line';
let activeStyle = 'classic';
let pointCounter = 0;

export const shapeSettings = {
  showLabels: false,
  showMeasurements: true,
  measurementsConfig: {
    Circle: { showRadius: true, showArea: true, showCircumference: false },
    Triangle: { showAngles: true, showArea: false, showSides: false }
  }
};

// ===== Utility =====
function logState(source, data) {
  console.log(`[${source}]`, data);
}

export function setMode(newMode) {
  mode = newMode;
  console.log(`Mode set to: ${newMode}`);
}

export function generatePointLabel() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let label = '', index = pointCounter;
  do {
    label = alphabet[index % 26] + label;
    index = Math.floor(index / 26) - 1;
  } while (index >= 0);
  pointCounter++;
  return label;
}

// ===== Point Collection and Shape Creation =====
export function collectPoints(x, y) {
  points.push(new Point(x, y));
  canvasManager.render();
  if ((shapeType === 'line' && points.length === 2) ||
      (shapeType === 'circle' && points.length === 2) ||
      (shapeType === 'triangle' && points.length === 3) ||
      ['rectangle', 'divider', 'compass', 'protractor'].includes(shapeType) && points.length === 1) {
    createShapeFromPoints();
    points.length = 0;
  }
}

export function createShapeFromPoints() {
  let shape;
  switch (shapeType) {
    case 'line':
      shape = new Line(points[0], points[1]);
      break;
    case 'circle':
      const r = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      shape = new Circle(points[0], r);
      break;
    case 'triangle':
      shape = new Triangle(points[0], points[1], points[2]);
      break;
    case 'rectangle':
      shape = new Rectangle(points[0], points[1]);
      break;
    case 'divider':
      shape = new Divider(points[0].x, points[0].y);
      break;
    case 'compass':
      shape = new Compass(points[0].x, points[0].y);
      break;
    case 'protractor':
      shape = new Protractor(points[0], 100);
      shape.style = activeStyle;
      break;
  }
  if (shape) {
    canvasManager.addShape(shape);
    canvasManager.render();
    setMode('modify');
  }
}

// ===== Mouse Events =====
canvas.addEventListener('mousedown', e => {
  const { offsetX, offsetY } = e;
  if (mode === 'modify') {
    selectedShape = canvasManager.shapes.find(shape => shape.isPointInside(offsetX, offsetY));
    if (!selectedShape) return;
    const name = selectedShape.constructor.name;
    dragStart = { x: offsetX, y: offsetY };

    switch (name) {
      case 'Line':
        selectedShape.startDragging(offsetX, offsetY);
        break;
      case 'Circle':
        const d = Math.hypot(offsetX - selectedShape.center.x, offsetY - selectedShape.center.y);
        selectedShape.draggingEdge = Math.abs(d - selectedShape.radius) < 10;
        selectedShape.draggingCenter = !selectedShape.draggingEdge;
        break;
      case 'Protractor':
        const dc = Math.hypot(offsetX - selectedShape.center.x, offsetY - selectedShape.center.y);
        selectedShape.draggingEdge = Math.abs(dc - selectedShape.radius) < 10;
        selectedShape.isCenterDragging = !selectedShape.draggingEdge;
        selectedShape.draggingPoint = selectedShape.center;
        break;
      case 'Triangle':
      case 'Rectangle':
        selectedShape.draggingPoint = selectedShape.points.find(p => p.isPointInside(offsetX, offsetY));
        break;
      case 'Divider':
        selectedShape.detectDragPart(offsetX, offsetY);
        break;
      case 'Compass':
        selectedShape.prepareArcDrawing(offsetX, offsetY, e.shiftKey);
        break;
    }
  } else if (mode === 'create') {
    collectPoints(offsetX, offsetY);
  } else if (mode === 'delete') {
    const index = canvasManager.shapes.findIndex(shape => shape.isPointInside(offsetX, offsetY));
    if (index !== -1) {
      canvasManager.shapes.splice(index, 1);
      canvasManager.render();
    }
  }
});

canvas.addEventListener('mousemove', e => {
  if (!selectedShape || !dragStart || mode !== 'modify') return;
  const dx = e.offsetX - dragStart.x;
  const dy = e.offsetY - dragStart.y;
  dragStart = { x: e.offsetX, y: e.offsetY };

  switch (selectedShape.constructor.name) {
    case 'Line':
    case 'Triangle':
    case 'Rectangle':
      selectedShape.drag(dx, dy);
      break;
    case 'Circle':
      selectedShape.resizeOrMove(dx, dy);
      break;
    case 'Divider':
      selectedShape.handleDrag(dx, dy, e.shiftKey, e.offsetX, e.offsetY);
      break;
    case 'Protractor':
      selectedShape.drag(dx, dy, currentPageFeatures.enableProtractorSnapping, canvasManager.shapes, e.altKey, { x: e.offsetX, y: e.offsetY });
      break;
    case 'Compass':
      selectedShape.handleMove(dx, dy, e.offsetX, e.offsetY, e);
      break;
  }

  canvasManager.render();
});

canvas.addEventListener('mouseup', () => {
  if (!selectedShape) return;
  selectedShape.stopDragging?.();
  selectedShape.draggingEdge = false;
  selectedShape.isCenterDragging = false;
  selectedShape.rotating = false;
  selectedShape.dragging = null;

  if (selectedShape.constructor.name === 'Compass' && allshapes.currentArc) {
    canvasManager.addShape(allshapes.currentArc);
    allshapes.geoshapes.push(allshapes.currentArc);
    allshapes.currentArc = null;
    selectedShape.resetToDefault();
  }

  selectedShape = null;
  dragStart = null;
  canvasManager.render();
});

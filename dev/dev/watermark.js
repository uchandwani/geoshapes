import { Line } from './Line.js'; // Assuming Line class is defined in Line.js
import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { Angle } from './shapes/Angles.js';
import * as shapes from './shapes.js';
import { render,geoshapes } from './shapes.js';


window.onload = function () {
    // Watermark Canvas
    const watermarkCanvas = document.getElementById('watermarkCanvas');
    const watermarkCtx = watermarkCanvas.getContext('2d');

    // Set reduced opacity for watermark
    watermarkCtx.globalAlpha = 0.2;

    window.onload = () => {
    console.log('Creating shapes programmatically on page load');

    // Add a line
    const line1 = new Line(new Point(50, 385, 'A'), new Point(600, 385, 'B'));
    geoshapes.push(line1);

    // Add another line
    const line2 = new Line(new Point(50, 500, 'C'), new Point(600,500, 'D'));
    geoshapes.push(line2);

    const line3 = new Line(new Point(50, 600, 'E'), new Point(600,600, 'F'));
    geoshapes.push(line3);

    const line4 = new Line(new Point(230, 280, 'G'), new Point(400, 700, 'H'));
    geoshapes.push(line4);

    // Add another line
    const line5 = new Line(new Point(300, 320, 'I'), new Point(150,700, 'J'));
    geoshapes.push(line5);

    const line6 = new Line(new Point(280, 300, 'K'), new Point(250,700, 'L'));
    geoshapes.push(line6);

    // Add a circle
    

    // Render all shapes
    render();

    // Main Drawing Canvas
    const drawingCanvas = document.getElementById('drawingCanvas');
    const drawingCtx = drawingCanvas.getContext('2d');

    // Example: Interactive drawing logic can be added here for drawingCanvas
};

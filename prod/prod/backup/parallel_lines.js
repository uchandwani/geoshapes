import { Shape } from './shapes/Shapes.js';
import { Point } from './shapes/Points.js';
import { Line } from './shapes/Lines.js';
import { Circle } from './shapes/Circle.js';
import { Triangle } from './shapes/Triangle.js';
import { Rectangle } from './shapes/Rectangle.js';
import { Protractor } from './shapes/Protractor.js';
import { Angle } from './shapes/Angles.js';
import * as shapes from './shapes.js';
import {drawIntersection, highlightAndMeasureAngles} from './shapes.js';
import {render,geoshapes } from './shapes.js';

window.onload = () => {
    console.log('Creating shapes programmatically on page load');

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    const lines = [
        new Line({ x: 50, y: 385 }, { x: 600, y: 385 }),
        new Line({ x: 50, y: 500 }, { x: 600, y: 500 }),
        new Line({ x: 50, y: 600 }, { x: 600, y: 600 }),
        new Line({ x: 230, y: 280 }, { x:400, y: 700 }, 'blue'),
        new Line({ x: 300, y: 320 }, { x: 150, y: 700 }, 'green'),
        new Line({ x: 280, y: 300 }, { x: 250, y: 700 }, 'purple'),
    ];

    const protractorCenter = { x: 100, y: 100 };
    const defaultProtractor = new Protractor( protractorCenter);
    geoshapes.push(defaultProtractor);
    
  //  lines.forEach((line) => line.draw(ctx));
    lines.forEach((line) => geoshapes.push(line));
    // Highlight and measure intersections
     highlightAndMeasureAngles(ctx, lines, protractorCenter);

    // Render all shapes
    render();
};

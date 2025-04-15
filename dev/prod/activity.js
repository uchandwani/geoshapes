import { Line } from './shapes/Lines.js';

function drawGrid(ctx, rows, cols) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    const rowHeight = height / rows;
    const colWidth = width / cols;

    // Draw rows
    for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * rowHeight);
        ctx.lineTo(width, i * rowHeight);
        ctx.strokeStyle = 'lightgray';
        ctx.stroke();
    }

    // Draw columns
    for (let j = 0; j <= cols; j++) {
        ctx.beginPath();
        ctx.moveTo(j * colWidth, 0);
        ctx.lineTo(j * colWidth, height);
        ctx.strokeStyle = 'lightgray';
        ctx.stroke();
    }
}


const instructions = [
    "Activity 1: Draw a line in Row 1.",
    "Activity 2: Draw two parallel lines in Row 2.",
    "Activity 3: Draw two intersecting lines in Row 3.",
];

function displayInstructions(instructions) {
    const instructionDiv = document.getElementById('instructions');
    instructions.forEach((instruction, index) => {
        const p = document.createElement('p');
        p.textContent = `${index + 1}. ${instruction}`;
        instructionDiv.appendChild(p);
    });
}


function validateActivity(lines, activity) {
    if (activity === 1) {
        // Check if there's exactly one line in Row 1
        return lines.some(line => line.row === 1);
    }
    if (activity === 2) {
        // Check if there are two parallel lines in Row 2
        const row2Lines = lines.filter(line => line.row === 2);
        return row2Lines.length === 2 && areLinesParallel(row2Lines[0], row2Lines[1]);
    }
    if (activity === 3) {
        // Check if there are two intersecting lines in Row 3
        const row3Lines = lines.filter(line => line.row === 3);
        return row3Lines.length >= 2 && doLinesIntersect(row3Lines[0], row3Lines[1]);
    }
    return false;
}

// Helper functions for parallelism and intersection checks
function areLinesParallel(line1, line2) {
    const slope1 = (line1.end.y - line1.start.y) / (line1.end.x - line1.start.x);
    const slope2 = (line2.end.y - line2.start.y) / (line2.end.x - line2.start.x);
    return Math.abs(slope1 - slope2) < 0.01; // Allow for minor differences
}

function doLinesIntersect(line1, line2) {
    const intersection = getLineIntersection(line1, line2);
    return intersection !== null;
}


window.onload = function () {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');

    // Set up grid (3 rows, 1 column)
    const rows = 3;
    drawGrid(ctx, rows, 1);

    // Display instructions
    const instructions = [
        "Activity 1: Draw a line in Row 1.",
        "Activity 2: Draw two parallel lines in Row 2.",
        "Activity 3: Draw two intersecting lines in Row 3.",
    ];
    displayInstructions(instructions);

    // Activity tracking
    const lines = [];
    let isDrawing = false;
    let startPoint = null;

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Determine the row clicked
        const rowHeight = canvas.height / rows;
        const currentRow = Math.ceil(y / rowHeight);

        // Set starting point for line
        startPoint = { x, y, row: currentRow };
        isDrawing = true;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return;

        // Clear the canvas and redraw everything for live feedback
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(ctx, rows, 1);
        lines.forEach((line) => line.draw(ctx));

        // Draw the current line dynamically
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    canvas.addEventListener('mouseup', (e) => {
        if (!isDrawing) return;
        isDrawing = false;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create the final line object
        const newLine = new Line(startPoint, { x, y });
        newLine.row = startPoint.row; // Track which row the line belongs to
        lines.push(newLine);

        // Redraw everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid(ctx, rows, 1);
        lines.forEach((line) => line.draw(ctx));
    });

    // Validate the current activity
    document.getElementById('validateButton').addEventListener('click', () => {
        const activity = parseInt(document.getElementById('activityNumber').value, 10);
        if (validateActivity(lines, activity)) {
            alert(`Activity ${activity} completed successfully!`);
        } else {
            alert(`Activity ${activity} not completed correctly.`);
        }
    });
};


// PRTshapes.js — Defines shape rendering logic for PRTscaled.html

function drawPRTShapes(ctx, config) {
  if (!config || !config.shapes) return;

  config.shapes.forEach(shape => {
    ctx.beginPath();
    ctx.strokeStyle = shape.color || 'black';
    ctx.lineWidth = 2;

    if (shape.type === 'line') {
      ctx.moveTo(shape.x1, shape.y1);
      ctx.lineTo(shape.x2, shape.y2);
      ctx.stroke();
    }

    // Add support for more shape types here if needed
  });
}

// Register drawPRTShapes with the global CanvasManager
if (typeof CanvasManager !== 'undefined') {
  CanvasManager.registerShapeRenderer('PRT', drawPRTShapes);
}

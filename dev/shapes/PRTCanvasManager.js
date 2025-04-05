
// PRTCanvasManager.js — Non-module version for responsive PRTscaled.html

const CanvasManager = {
  canvas: null,
  ctx: null,
  shapeRenderer: {},

  init(canvasElement, layoutKey) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d");

    if (window.PRTConfig && this.shapeRenderer[layoutKey]) {
      this.shapeRenderer[layoutKey](this.ctx, window.PRTConfig);
    } else {
      console.warn("No renderer or config found for layoutKey:", layoutKey);
    }
  },

  redraw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.init(this.canvas, "PRT");
  },

  registerShapeRenderer(key, rendererFn) {
    this.shapeRenderer[key] = rendererFn;
  }
};

// Make globally available
window.CanvasManager = CanvasManager;

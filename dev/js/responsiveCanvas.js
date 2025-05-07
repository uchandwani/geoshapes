/**
 * responsiveCanvas.js
 * Dynamically resizes a canvas to fit its container with a square aspect ratio.
 * Assumes the canvas is placed inside a container with a defined width/height (e.g., .canvas-wrapper).
 */

function resizeCanvasToFit() {
  const canvas = document.getElementById("canvas");
  if (!canvas) {
    console.warn("⚠️ Canvas with ID 'myCanvas' not found.");
    return;
  }

  const container = canvas.parentElement;
  if (!container) {
    console.warn("⚠️ Canvas does not have a parent container.");
    return;
  }

  const containerWidth = container.clientWidth*.98;
  const containerHeight = container.clientHeight*.98;

  // Maintain a square aspect ratio
  const size = Math.min(containerWidth, containerHeight);

  // Set canvas internal resolution
  canvas.width = size;
  canvas.height = size;

  // Set canvas CSS dimensions
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  console.log(`✅ Canvas resized to: ${size} × ${size}`);
}

// Call on page load
window.addEventListener("DOMContentLoaded", resizeCanvasToFit);

// Call on window resize for responsiveness
window.addEventListener("resize", resizeCanvasToFit);

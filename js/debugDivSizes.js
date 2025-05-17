function updateDivSizeLabels() {
  const ids = ['left-sidebar', 'additional-div', 'canvas-wrapper', 'right-sidebar'];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    let label = el.querySelector('.size-label');

    if (!label) {
      label = document.createElement('div');
      label.className = 'size-label';
      el.appendChild(label);
    }

    label.textContent = `${Math.round(rect.width)} × ${Math.round(rect.height)} px`;
  });
}

window.addEventListener('DOMContentLoaded', updateDivSizeLabels);
window.addEventListener('resize', updateDivSizeLabels);

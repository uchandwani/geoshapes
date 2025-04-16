
// ✅ Prevent redefining if script is loaded multiple times
if (typeof window.pageTitles === 'undefined') {
  window.pageTitles = {
    'index.html': 'Home',
    'circle_theorems_02.html': 'Circle Theorems',
    'parallel_lines_04.html': 'Parallel Lines',
    'triangle_theorem_07.html': 'Triangle Theorems',
    'trig_properties_09.html': 'Trigonometric Properties',
    'parallel_lines_05.html': 'Parallel Lines (Responsive)',
    'PLT2.html': 'Triangle Properties (Responsive)',
    'reference.html': 'Canvas Layout Demo'
  };

  window.updatePageTitle = function () {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const title = window.pageTitles[pageName] || 'Geometry Explorer';
    const header = document.querySelector('header h1');
    if (header) {
      header.textContent = title;
    }
  };
}

// Configuration for page titles
const pageTitles = {
    "index.html": "Home",
    "pythogoras_theorem_02.html": "Pythogoras Theorem",
    "circle_theorems_01.html": "Circle Theorems",
    "parallel_lines_04.html": "Parallel Lines",
    "estimatingPi_03.html": "Estimating Pi",

    "tri_properties_05.html": "Representing Underroot X",
    "circleTheorems_06.html": "Symmetry and Congruence",
    "triangle_theorem_07.html": "Triangle Theorems",
    "estimatingPi_08.html": "ArithMatic Progression",

    "trig_properties_09.html": "Trigonometric Properties",
    "circleTheorems_10.html": "Circle Theorems",
    "parallelLines_11.html": "Parallel Lines",
    "estimatingPi_12.html": "Estimating Pi",

    "tri_properties_13.html": "Triangle Properties",
    "circleTheorems_14.html": "Circle Theorems",
    "parallelLines_15.html": "Parallel Lines",
    "estimatingPi_16.html": "Estimating Pi",
    // Add more pages as needed
};

// Function to dynamically generate the header
function generateHeader() {
    const pageName = location.pathname.split("/").pop();
    const title = pageTitles[pageName] || "Default Title";

    const headerHTML = `
        
        <h1>${title}</h1>
        
        
    `;

    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = headerHTML;
    }
}

// Helper function to generate icon buttons
function generateIcons(start, end) {
    let iconsHTML = "";
    for (let i = start; i <= end; i++) {
        iconsHTML += `
            <button class="nav-icon-btn" id="icon-btn-${i}" title="Placeholder Icon ${i}">
                <img src="icons/icon${i}.png" alt="Icon ${i}" />
            </button>
        `;
    }
    return iconsHTML;
}

// Load header on page load
document.addEventListener("DOMContentLoaded", generateHeader);



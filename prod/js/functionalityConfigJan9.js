export  const functionalityConfig = {

// Define the feature configuration
   
    midSegmentTheorem: {
        theoremDefinition: "If a line segment joins the midpoints of the two sides of a triangle, then the segment is parallel to third side and is of half its length.",
        
        canvasConfig: {
            autoloadShape: 'triangle',
            triangleVertices: [
                { x: 200, y: 600 }, // Vertex A
                { x: 700, y: 600 }, // Vertex B
                { x: 450, y: 200 }  // Vertex C
            ],
            vertexLabels: { A: 'C', B: 'E', C: 'A' }, // Custom vertex labels
            midpointLabels: { M1: 'G', M2: 'D', M3: 'B' } // Custom mid-point labels
        },
        buttonSet: [
                { label: "Right Angle Triangle", type: "right" },
                { label: "Acute Triangle", type: "acute" },
                { label: "Obtuse Triangle", type: "obtuse" },
            ],
        leftSidebarContent: `
          
             <h3> Instructions</h3>
   <h4>PART 1</h4>
    <ol>
        <li>Draw a line from point <strong>B</strong> to <strong>D</strong> – Line segment <strong>BD</strong>.</li>
        <li>
            Place one point of the divider on <strong>Vertex A</strong> and another on point <strong>B</strong>.
            <ul>
                <li>Maintain the spread of the divider.</li>
                <li>Place one point of the divider on <strong>B</strong> and check if the other point reaches <strong>C</strong>.</li>
            </ul>
        </li>
        <li>
            Place divider on point  <strong>A</strong> and on point <strong>D</strong>.
            <ul>
                <li>Maintain the spread of the divider.</li>
                <li>Place one point of the divider on <strong>D</strong> and check if the other point reaches <strong>F</strong>.</li>
            </ul>
        </li>
        <li>
            Place divider on point <strong>B</strong> and on point <strong>D</strong>.
            <ul>
                <li>Note the reading of the length of the line segment <strong>BD</strong> in <strong>Table 1</strong>.</li>
                <li>Then place divider on point <strong>C</strong> and on <strong>F</strong>.</li>
                <li>Note the reading of the length of side <strong>CF</strong> in <strong>Table 1</strong>.</li>
            </ul>
        </li>
    </ol>

    <h4>PART 2</h4>
    <ol>
        <li>Bring the Protractor to point <strong>B</strong> and measure <strong>∠ABD</strong>.</li>
        <li>Similarly, measure <strong>∠ADB</strong>.</li>
        <li>
            Measure the corresponding angles:
            <ul>
                <li><strong>∠ACF</strong></li>
                <li><strong>∠AFC</strong></li>
            </ul>
        </li>
        <li>Note down your readings in <strong>Table 2</strong>.</li>
    </ol>
        `,

        rightSidebarContent: {
             acute: `<h3>Acute Angle Inference</h3>`, // Correct key
             obtuse: `<h3>Obtuse Angle Inference</h3>`, // Correct key
            right: `<h3>Right Angle Inference</h3>`   // Correct key
}
    
},
    angleBisectorTheorem: {
        theoremDefinition: "If a ray bisects an angle of a triangle, then it divides the opposite side of the triangle into segments proportional to the other two sides.",
        canvasConfig: {
            autoloadShape: 'triangle',
            triangleVertices: [
                { x: 200, y: 400 }, // Vertex A
                { x: 600, y: 400 }, // Vertex B
                { x: 400, y: 100 }  // Vertex C
            ],
            
            
            vertexLabels: { A: 'C', B: 'E', C: 'A' }, // Custom vertex labels
            midpointLabels: { M1: 'G', M2: 'D', M3: 'B' } 
        },
        buttonSet: [
                { label: "Right Angle Triangle", type: "right" },
                { label: "Acute Triangle", type: "acute" },
                { label: "Obtuse Triangle", type: "obtuse" },
            ],
        leftSidebarContent: `
            <h3>Instructions:</h3>
             <h2>PART 1</h2>
    <ol>
        <li>Draw a line from point <strong>A</strong> to <strong>E</strong> – Line segment <strong>AE</strong>.</li>
        <li>
            Bring the Protractor to point <strong>A</strong> and measure:
            <ul>
                <li><strong>∠CAE</strong></li>
                <li><strong>∠FAE</strong></li>
            </ul>
            <p>Verify that <strong>AE</strong> bisects the <strong>∠CAF</strong>.</p>
        </li>
    </ol>

    <h2>PART 2</h2>
    <ol>
        <li>
            Place one point of the divider on <strong>Vertex C</strong> and another on point <strong>E</strong>.
            <ul>
                <li>Note the length <strong>CE</strong> in <strong>Table 1</strong>.</li>
            </ul>
        </li>
        <li>
            Similarly, measure the length <strong>EF</strong> and note the reading in <strong>Table 1</strong>.
        </li>
        <li>
            Place one point of the divider on <strong>A</strong> and another on <strong>C</strong> to measure the length <strong>AC</strong>.
        </li>
        <li>
            Similarly, measure the length <strong>AF</strong>.
            <ul>
                <li>Note the lengths of <strong>AC</strong> and <strong>AF</strong> in <strong>Table 2</strong>.</li>
            </ul>
        </li>
    </ol>

    <h2>EXTENDED ACTIVITY</h2>
    <p>
        Do a similar activity with the angle bisector for the other two angles of <strong>ΔACF</strong>, 
        which are <strong>∠C</strong> and <strong>∠F</strong>.
    </p>
        `,
        rightSidebarContent: {
             acute: `<h3>Acute Angle Inference</h3>`, // Correct key
             obtuse: `<h3>Obtuse Angle Inference</h3>`, // Correct key
            right: `<h3>Right Angle Inference</h3>`   // Correct key
        }
    },
    propertiesOfTriangles: {
        theoremDefinition: "All three sides of an equilateral triangle are equal. \n Angle opposite to equal sides of an isosceles triangle are equal.",
        canvasConfig: {
            autoloadShape: 'triangle',
            triangleVertices: [
                { x: 200, y: 400 }, // Vertex A
                { x: 600, y: 400 }, // Vertex B
                { x: 400, y: 100 }  // Vertex C
            ],
            
            vertexLabels: { A: 'C', B: 'E', C: 'A' }, // Custom vertex labels
            midpointLabels: { M1: 'E', M2: 'D', M3: 'B' } 
        },
        buttonSet: [
                { label: "Equilateral Triangle", type: "equilateral" },
                { label: "Isosceles Triangle", type: "isosceles" },
                { label: "Scalene Triangle", type: "scalene" },
            ],
        leftSidebarContent: `
            <h3>Instructions</h3>
           <h4>Select any type of triangle – <strong>ΔACF</strong></h4>
    
       <ul>
        <li>
        Measure the three sides using a divider and record them in <strong>Table 1</strong>.</li>
     
        
        <li> Measure the three angles using a protractor and record them in <strong>Table 2</strong>.</li>
           
       
  

    <h4> For Equilateral Triangle, Check:</h4>
    <ul>
        <li>If all three side lengths are equal to each other.</li>
        <li>All three angles are 60⁰ and equal.</li>
    </ul>

    <h4> For Isosceles Triangle, Check:</h4>
    <ul>
        <li>Any two side lengths are equal to each other.</li>
        <li>Angles opposite the equal sides are also equal.</li>
    </ul>

    <h4>For Scalene Triangle, Check:</h4>
    <ul>
        <li>All three side lengths are unequal to each other.</li>
        <li>If all three angles are unequal to each other.</li>
    </ul>

    <h4>Verifying the Triangle Inequality</h4>
    <p>
    Add any two sides of <strong>ΔACF</strong> , record in  <strong>Table 3</strong>, and compare with the third side
        
    </p>

    <h4>Verifying Angles and Sides</h4   >
    <p>
    In a triangle, the largest angle lies opposite the longest side. This applies to <strong>Isosceles</strong>  and <strong>Scalene Triangles</strong>. triangles.
        
    </p>
    <ol>

    Select the longest side from <strong>Table 1</strong> and the largest angle from <strong>Table 2</strong>. Record these in <strong>Table 4</strong>.
       
    </ol>
        `,
        rightSidebarContent: {
            equilateral : `<h3>Equilateral Inference</h3>`,
            isosceles : `<h3>Isosceles Inference</h3>`,
             scalene : `<h3>Inference</h3>`
         },
     },
    basicProportionalityTheorem: {
        theoremDefinition: "If the line segment divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
        canvasConfig: {
            autoloadShape: 'triangle',
            triangleVertices: [
                { x: 200, y: 400 },
                { x: 600, y: 400 },
                { x: 400, y: 100 },
            ],
            
            vertexLabels: { A: 'C', B: 'E', C: 'A' }, // Custom vertex labels
            midpointLabels: { M1: 'G', M2: 'D', M3: 'B' } 
        },
        buttonSet: [
            { label: "Right Angle Triangle", type: "right" },
            { label: "Acute Triangle", type: "acute" },
            { label: "Obtuse Triangle", type: "obtuse" },
            ],
        leftSidebarContent: `
            <h3>Instructions:</h3>
            <h4>PART 1</h4>
    <ol>
        <li>Draw a line from point <strong>B</strong> to <strong>D</strong> – Line segment <strong>BD</strong>.</li>
        <li>
            Place one point of the divider on <strong>Vertex A</strong> and another on point <strong>B</strong>.
            <ul>
                <li>Note the length <strong>AB</strong> in <strong>Table 1</strong>.</li>
            </ul>
        </li>
        <li>
            Place divider on point <strong>B</strong> and on vertex <strong>C</strong>.
            <ul>
                <li>Note the length <strong>BC</strong> in <strong>Table 1</strong>.</li>
            </ul>
        </li>
        <li>
            Place divider on point <strong>A</strong> and on point <strong>D</strong>.
            <ul>
                <li>Place divider on point <strong>D</strong> and on vertex <strong>F</strong>.</li>
                <li>Note the lengths of <strong>AD</strong> and <strong>DF</strong> in <strong>Table 2</strong>.</li>
            </ul>
        </li>
        <li>
            (Progress to <strong>PART 2</strong> only if the answer to <strong>PART 1</strong> is “yes”.)
        </li>
    </ol>

    <h4>PART 2</h4>
    <ol>
        <li>Bring the Protractor to point <strong>B</strong> and measure <strong>∠ABD</strong>.</li>
        <li>Similarly, measure <strong>∠ADB</strong>.</li>
        <li>
            Measure the corresponding angles:
            <ul>
                <li><strong>∠ACF</strong></li>
                <li><strong>∠AFC</strong></li>
            </ul>
        </li>
        <li>Note down your readings in <strong>Table 3</strong>.</li>
    </ol>

    <h2>EXTENDED ACTIVITY</h2>
    <p>Do a similar activity with line segment <strong>DE</strong>.</p>

        `,
        rightSidebarContent: {
             acute: `<h3>Acute Angle Inference</h3>`, // Correct key
             obtuse: `<h3>Obtuse Angle Inference</h3>`, // Correct key
            right: `<h3>Right Angle Inference</h3>`   // Correct key

         },
}

}
    export const pageFeatures = {
    'triangle_theorems_07.html': { enableProtractorSnapping: true },
    'circlePage.html': { enableProtractorSnapping: false },
};

export const currentPage = location.pathname.split('/').pop(); // Get current page
export const currentPageFeatures = pageFeatures[currentPage] || {}; // Get features for the current page

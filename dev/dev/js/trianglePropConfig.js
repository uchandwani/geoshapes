export  const functionalityConfig = {

        
    
        sineTheta: {
        defaultButtonType: 'sin',    
        theoremDefinition: "To Verify that the value of sin θ increases with the increase in θ when 0 ≤ θ ≤ 90⁰",
        canvasConfig: {
            circle: [{ x: 400, y: 400 }, 200], 
             lines: [ {
                      type: 'cos',
                      endA: {x:400, y:400},
                      endB: {x:400, y:200},
                    },
                 {
                      type: 'cos',
                      endA: {x:400, y:401},
                      endB: {x:600, y:401},
                    },
            ], 
            triangles: [
                {
                    type: 'cos', 
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [5,85], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'A', C: 'E' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [30, 60], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'E', C: 'A' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 },
                    angles: [45, 45],
                    radius: 200,
                    labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 200,
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   type:'cos',
                    vertexA: { x: 400, y: 400 },
                    angles: [85,5],
                    radius: 200,
                    labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false,
                    setShowMeasurements:false
                }
            ]
        
    }, buttonSet: [
                { label: "regular", type: "sin" },
                { label: "edge", type: "cos" },
                
            ],

        leftSidebarContent: `

       <h3>Instructions</h3>
<h2>Regular Angles : Steps</h2>
<ul>
    <li>
        Bring the protractor to center point P
    </li>
    <li>
        With the protractor, measure an angle <em>θ = 30°</em> from the horizontal axis <strong>PX</strong>, we get ∠APE in ΔAPE.
    </li>
    <li>
        In this ΔAPE, measure the side opposite to the angle <em>θ</em>, which will be the perpendicular <strong>P = AE</strong>, by placing one point of the divider on <strong>A</strong> and another on <strong>E</strong> and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Similarly, measure the Hypotenuse <strong>H = PE</strong> and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Conduct the same steps for <em>θ = 45°, 60°, 90°</em> measured from the horizontal axis <strong>PX</strong>.
    </li>
</ul>

<h2>Edge Angles</h2>

<ul>
    <li>
        Let's take a look at ΔAPE:
        <ul>
            <li>If we keep taking the point E closer to the horizontal line PX, we see that the Hypotenuse coincides with the base of the triangle, and hence the Perpendicular becomes zero.</li>
            <li>Here, θ = 0 → ∠XPM.</li>
            <li>And P = 0, put this value in Table 1.</li>
        </ul>
    </li>
    <li>
        In ΔRPQ:
        <ul>
            <li>If we keep taking the point Q closer to the vertical line PY, we see that the Hypotenuse coincides with the Perpendicular of the triangle, and hence the Perpendicular becomes equal to the Hypotenuse.</li>
            <li>Here, θ = 90° → ∠XPN.</li>
        </ul>
    </li>
</ul>
        `,

       rightSidebarContent: {
        sin:  `
            <h3>Verification Regular Angles</h3>


             <h2>Table 1</h2>
    <table>

    <colgroup>
        <col style="width: 5%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
        <thead>
            <tr>
                <th>Angle "θ"</th>
                <th>Perpendicular "P"</th>
                <th>Hypotenuse "H"</th>
                <th>Sine of the Angle<br>Sin(θ) = P / H</th>
            </tr>
        </thead>
        <tbody style="background-color: #d9e1f2; style="width: 70%">
           
            <tr>
                
                <td>∠APE 30°</td>
                <td><input type="text" id="perpendicular-30" oninput="calculateSin(30)" /></td>
                <td><input type="text" id="hypotenuse-30" oninput="calculateSin(30)" /></td>
                <td id="sin-30"></td>
            </tr>
            <tr>
                
                <td>∠RPQ 45°</td>
                <td><input type="text" id="perpendicular-45" oninput="calculateSin(45)" /></td>
                <td><input type="text" id="hypotenuse-45" oninput="calculateSin(45)" /></td>
                <td id="sin-45"></td>
            </tr>
            <tr>
              
                <td>∠SPT 60°</td>
                <td><input type="text" id="base-60" oninput="calculateSin(60)" /></td>
                <td><input type="text" id="hypotenuse-60" oninput="calculateSin(60)" /></td>
                <td id="sin-60"></td>
            </tr>
           
        </tbody>
    </table>

            
        `,

        cos:  `
            <h3>Verification Edge Angles:</h3>

            <h2>Table 1</h2>
    <table>
    <colgroup>
        <col style="width: 5%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
        <thead>
            <tr>
                <th>Angle "θ"</th>
                <th>Perpendicular "P"</th>
                <th>Hypotenuse "H"</th>
                <th>Sine of the Angle<br>Sin(θ) = P / H</th>
            </tr>
        </thead>
        <tbody style="background-color: #d9e1f2; style="width: 70%">
            <tr>
               
                <td> 0°</td>
                <td><input type="text" id="perpendicular-0" oninput="calculateSin(0)" /></td>
                <td><input type="text" id="hypotenuse-0" oninput="calculateSin(0)" /></td>
                <td id="sin-0"></td>
            </tr>
            <tr>
                
                               
                <td> ∠UPV 90°</td>
                <td><input type="text" id="perpendicular-90" oninput="calculateSin(90)" /></td>
                <td><input type="text" id="hypotenuse-90" oninput="calculateSin(90)" /></td>
                <td id="sin-90"></td>
            </tr>
        </tbody>
    </table>

    <div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; color: white ; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>
         
        `,
    }
},
    cosineTheta: {

        defaultButtonType: 'sin',
        theoremDefinition: "To Verify that the value of cos θ decreases with the increase in θ when 0 ≤ θ ≤ 90⁰",
        canvasConfig: {
            circle: [{ x: 400, y: 400 }, 200],
            lines: [ {
                      type: 'cos',
                      endA: {x:400, y:400},
                      endB: {x:400, y:200},
                    },
                 {
                      type: 'cos',
                      endA: {x:400, y:401},
                      endB: {x:600, y:401},
                    },
            ], 
            triangles: [
                {
                    type: 'cos', 
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [5,85], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'D', C: 'B' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [30, 60], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'E', C: 'A' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 },
                    angles: [45, 45],
                    radius: 200,
                    labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   
                    type:'sin',
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 200,
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false,
                    setShowMeasurements:false
                },
                {   type:'cos',
                    vertexA: { x: 400, y: 400 },
                    angles: [85,5],
                    radius: 200,
                    labels: { A: 'P', B: 'U', C: 'V' },
                    showMidpoints: false,
                    setShowMeasurements:false
                }
            ]
        
    
        },
        buttonSet: [
                { label: "regular", type: "sin" },
                { label: "edge", type: "cos" },
                
            ],
        leftSidebarContent: `


       <h3>Instructions</h3>

     
        <h2>Steps</h2>
<ul>
    <li>
        <strong>Bring the protractor to center point P</strong>
    </li>
    <li>
        With the protractor, measure an angle <em>θ = 30°</em> from the horizontal axis <strong>PX</strong>, we get ∠APE in ΔAPE.
    </li>
    <li>
        In this ΔAPE, measure the side adjacent to the angle <em>θ</em>, which will be the Base <strong>B = AP</strong>, by placing one point of the divider on <strong>A</strong> and another on <strong>P</strong> and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Similarly, measure the Hypotenuse <strong>H = PE</strong> and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Conduct the same steps for <em>θ = 45°, 60°, 90°</em> measured from the horizontal axis <strong>PX</strong>.
    </li>
</ul>

<h2>Edge Angles</h2>

<ul>
    <li>
        Let's take a look at ΔAPE:
        <ul>
            <li>If we keep taking the point E closer to the horizontal line PX, we see that the Hypotenuse coincides with the base of the triangle, and hence the Perpendicular becomes zero.</li>
            <li>Here, θ = 0 → ∠XPM.</li>
            <li>And P = 0, put this value in Table 1.</li>
        </ul>
    </li>
    <li>
        In ΔRPQ:
        <ul>
            <li>If we keep taking the point Q closer to the vertical line PY, we see that the Hypotenuse coincides with the Perpendicular of the triangle, and hence the Perpendicular becomes equal to the Hypotenuse.</li>
            <li>Here, θ = 90° → ∠XPN.</li>
        </ul>
    </li>
</ul>


        `,
        rightSidebarContent: {
        sin:  `
            <h3>Verification Regular Angles</h3>


             <h2>Table 1</h2>
    <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">

    <colgroup>
        <col style="width: 5%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>

        <thead>
            <tr>
                <th>Angle "θ"</th>
                <th>Base "B"</th>
                <th>Hypotenuse "H"</th>
                <th>Cosine of the Angle<br>Cos(θ) = B / H</th>
            </tr>
        </thead>
        <tbody style="background-color: #d9e1f2; style="width: 70%">
           
            <tr>
                
                <td>∠APE 30°</td>
                <td><input type="text" id="base-30" oninput="calculateCos(30)" /></td>
                <td><input type="text" id="hypotenuse-30" oninput="calculateCos(30)" /></td>
                <td id="cos-30"></td>
            </tr>
            <tr>
                
                <td>∠RPQ 45°</td>
                <td><input type="text" id="base-45" oninput="calculateCos(45)" /></td>
                <td><input type="text" id="hypotenuse-45" oninput="calculateCos(45)" /></td>
                <td id="cos-45"></td>
            </tr>
            <tr>
              
                <td>∠SPT 60°</td>
                <td><input type="text" id="base-60" oninput="calculateCos(60)" /></td>
                <td><input type="text" id="hypotenuse-60" oninput="calculateCos(60)" /></td>
                <td id="cos-60"></td>
            </tr>
           
        </tbody>
    </table>

              
        `,

        cos:  `
            <h3>Verification Edge Angles </h3>

            <h2>Table 1</h2>
   <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">

    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
        <thead>
            <tr>
                <th>Angle "θ"</th>
                <th>Base "B"</th>
                <th>Hypotenuse "H"</th>
                <th>Cosine of the Angle<br>Cos(θ) = B / H</th>
            </tr>
        </thead>
        <tbody style="background-color: #d9e1f2; style="width: 70%">
            <tr>
               
                <td>∠DPB 5°</td>
                <td><input type="text" id="base-5" style="width: 70%" oninput="calculateCos(5)" /></td>
                <td><input type="text" id="hypotenuse-5" oninput="calculateCos(5)" /></td>
                <td id="cos-5"></td>
            </tr>
            <tr>
                
                <td> ∠UPV 85°</td>
                <td><input type="text" id="base-85" style="width: 70% oninput="calculateCos(85)" /></td>
                <td><input type="text" id="hypotenuse-85" oninput="calculateCos(85)" /></td>
                <td id="cos-85"></td>
            </tr>
        </tbody>
    </table>
         
    <div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; color: white ; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>
    
    `,
}},
    trigonoRatios: {
        theoremDefinition: "Trig. Ratios don’t change even if the length of the sides of the triangle changes.",
         canvasConfig: {
            circle: [{ x: 400, y: 400 }, 200], // Circle center and radius
            triangles: [
                {
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [45, 45], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false,
                    setShowMeasurements:true
                },
                {
                    vertexA: { x: 400, y: 400 },
                    angles: [45, 45],
                    radius: 300,
                    labels: { A: 'P', B: 'A', C: 'E' },
                    showMidpoints: false,
                    setShowMeasurements:true
                },

                {
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [60, 30], // Adjacent angles
                    radius: 200, // Circle radius
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false,
                    setShowMeasurements:true
                },
                {
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 300,
                    labels: { A: 'P', B: 'V', C: 'W' },
                    showMidpoints: false,
                    setShowMeasurements:true
                },
              
            ]
        
    },
      
        leftSidebarContent: `
            
       <h3>Instructions</h3>
            <h2>Steps</h2>
<ul>
    <li>
        Bring the protractor to center point P.
    </li>
    <li>
        With the protractor, measure an angle <em>θ = 45°</em> from the horizontal axis <strong>PX</strong>, we get ∠APE in ΔAPE and ∠RPQ in ΔRPQ.
    </li>
    <li>
        Measure the perpendicular <strong>P</strong>, by placing one point of the divider on <strong>A</strong> and another on <strong>E</strong> for ΔAPE and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Similarly, measure the Hypotenuse <strong>H = PE</strong> and Base <strong>B = AP</strong> and note the reading in <strong>Table 1</strong>.
    </li>
    <li>
        Conduct the same steps for ΔRPQ and note the reading in <strong>Table 1</strong>.
    </li>
</ul>


        `,
        rightSidebarContent: `
            
    <h3>Verification for Properties of Triangles</h3>

     <h2>Table 1</h2>

    <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">

    <colgroup>
        <col style="width: 25%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
    </colgroup>
    <!-- Table Header -->
    <thead>
        <tr>
             <td>Angle Name</td>
            <td>APE</td>
            <td>RPQ</td>
         
        </tr>
    </thead>
    <!-- Table Body -->
     <tbody style="background-color: #d9e1f2; style="width: 70%">
      
        <tr>
            <td>Perpendicular P</td>
            <td><input type="text" id="perpendicular-angle1" placeholder="Enter AE" oninput="calculateTrig(1)" /></td>
            <td><input type="text" id="perpendicular-angle2" placeholder="Enter RQ" oninput="calculateTrig(2)" /></td>
        </tr>
        <!-- Row 6 -->
        <tr>
            <td>Base B</td>
            <td><input type="text" id="base-angle1" placeholder="Enter PE" oninput="calculateTrig(1)"/></td>
            <td><input type="text" id="base-angle2" placeholder="Enter PQ" oninput="calculateTrig(2)"/></td>
        </tr>
        <!-- Row 7 -->
        <tr>
            <td>Hypotenuse H</td>
            <td><input type="text" id="hypotenuse-angle1" placeholder="Enter AP" oninput="calculateTrig(1)" /></td>
            <td><input type="text" id="hypotenuse-angle2" placeholder="Enter RP" oninput="calculateTrig(2)"/></td>
        </tr>
        <!-- Row 8 -->
        <tr>
            <td>Sin θ</td>
            <td> <span id="sin-angle1">(calculated) </span> </td>
            <td> <span id="sin-angle2">(calculated) </span> </td>
        </tr>
        <!-- Row 9 -->
        <tr>
            <td>Cos θ</td>
            <td id="cos-angle1">(calculated)</td>
            <td id="cos-angle2">(calculated)</td>
        </tr>
        <!-- Row 10 -->
        <tr>
            <td>Tan θ</td>
            <td id="tan-angle1">(calculated)</td>
            <td id="tan-angle2">(calculated)</td>
        </tr>
    </tbody>
</table>

  <h2>Table 2</h2>

 <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <!-- Table Header -->

    <colgroup>
        <col style="width: 25%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
    </colgroup>
    <thead>
        <tr>
             <td>Angle Name</td>
            <td>VPW</td>
            <td>SPT</td>
         
        </tr>
    </thead>
    <!-- Table Body -->
     <tbody style="background-color: #d9e1f2; style="width: 70%">
      
        <tr>
            <td>Perpendicular P</td>
            <td><input type="text" id="perpendicular-angle3" placeholder="Enter VW" oninput="calculateTrig(3)" /></td>
            <td><input type="text" id="perpendicular-angle4" placeholder="Enter ST" oninput="calculateTrig(4)" /></td>
        </tr>
        <!-- Row 6 -->
        <tr>
            <td>Base B</td>
            <td><input type="text" id="base-angle3" placeholder="Enter PW" oninput="calculateTrig(3)"/></td>
            <td><input type="text" id="base-angle4" placeholder="Enter PT" oninput="calculateTrig(4)"/></td>
        </tr>
        <!-- Row 7 -->
        <tr>
            <td>Hypotenuse H</td>
            <td><input type="text" id="hypotenuse-angle3" placeholder="Enter VP" oninput="calculateTrig(3)" /></td>
            <td><input type="text" id="hypotenuse-angle4" placeholder="Enter SP" oninput="calculateTrig(4)"/></td>
        </tr>
        <!-- Row 8 -->
        <tr>
            <td>Sin θ</td>
            <td> <span id="sin-angle3">(calculated) </span> </td>
            <td> <span id="sin-angle4">(calculated) </span> </td>
        </tr>
        <!-- Row 9 -->
        <tr>
            <td>Cos θ</td>
            <td id="cos-angle3">(calculated)</td>
            <td id="cos-angle4">(calculated)</td>
        </tr>
        <!-- Row 10 -->
        <tr>
            <td>Tan θ</td>
            <td id="tan-angle3">(calculated)</td>
            <td id="tan-angle4">(calculated)</td>
        </tr>
    </tbody>
</table>

    <ul>
        <li><strong>Note:</strong> Ensure that all angles are measured accurately.</li>
        <li>Use the <strong>Protractor</strong> tool for precise angle measurements.</li>
        <li>Verify your results by comparing with the provided theorems.</li>
    </ul>
</div>

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; color: white ; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>


        `,
    },
    trigonoIdentities: {
        defaultButtonType: 'sin',
        theoremDefinition: "Trigono Identities.",
         canvasConfig: {
            circle: [{ x: 400, y: 400 }, 200], // Circle center and radius
            triangles: [
                {   type:'sin',
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [30, 60], // Adjacent angles
                    radius: 200, // Circle radius
                   labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false
                },
                
                {   type:'sin',
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 200,
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false
                },
                {   type:'cos',
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [30, 60], // Adjacent angles
                    radius: 200, // Circle radius
                   labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false
                },
                
                {   type:'cos',
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 200,
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false
                },
                {   type:'tan',
                    vertexA: { x: 400, y: 400 }, // Center of the circle
                    angles: [30, 60], // Adjacent angles
                    radius: 200, // Circle radius
                   labels: { A: 'P', B: 'R', C: 'Q' },
                    showMidpoints: false
                },
                
                {   type:'tan',
                    vertexA: { x: 400, y: 400 },
                    angles: [60, 30],
                    radius: 200,
                    labels: { A: 'P', B: 'S', C: 'T' },
                    showMidpoints: false
                }
            ]
        
        },
         buttonSet: [
                { label: "sin²θ + cos²θ = 1", type: "sin" },
                { label: "1 + tan²θ = sec²θ", type: "cos" },
                { label: "cot²θ + 1 = cosec²θ", type: "tan" },
            ],
       
        leftSidebarContent: `
              <h3>Activity 4 Instructions:</h3>
            <ul>
    <li>Bring the protractor to center point P</li>
    <li>
        With the protractor, measure an angle <em>θ = 30<sup>o</sup></em> from the horizontal axis <strong>PX</strong>, we get <strong>∠APE</strong> in <strong>ΔAPE</strong>.
    </li>
    <li>
        Measure the sides of the <strong>ΔAPE</strong> and note the reading in Table 1, 2, and 3:
        <ul>
            <li><strong>PE</strong> = Hypotenuse <strong>“H”</strong></li>
            <li><strong>AE</strong> = Perpendicular <strong>“P”</strong></li>
            <li><strong>AP</strong> = Base <strong>“B”</strong></li>
        </ul>
    </li>
    <li>Verify:
        <ul>
            <li><strong>sin²θ + cos²θ = 1</strong> from Table 1.</li>
            <li><strong>1 + tan²θ = sec²θ</strong> from Table 2.</li>
            <li><strong>cot²θ + 1 = cosec²θ</strong> from Table 3.</li>
        </ul>
    </li>
</ul>


        `,
        rightSidebarContent: {
            sin : `
           
            <h3>Verification for sin²θ + cos²θ = 1</h3> 
             <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Triangle</th>
            <th>ΔAPE</th>
            <th>ΔRPQ</th>
        </tr>
    </thead>
    <tbody>
        <!-- Row 1 -->
        <tr>
            <td>Angle “θ”</td>
            <td>30<sup>o</sup></td>
            <td>60<sup>o</sup></td>
        </tr>
        <!-- Row 2 -->
        <tr>
            <td>Perpendicular “P”</td>
            <td><input type="text" id="perpendicular-sin-1" oninput="calcTrig(1, 'sin')" /></td>
            <td><input type="text" id="perpendicular-sin-2" oninput="calcTrig(2, 'sin')" /></td>
        </tr>
        <!-- Row 3 -->
        <tr>
            <td>Base “B”</td>
            <td><input type="text" id="base-sin-1" oninput="calcTrig(1, 'sin')"/></td>
            <td><input type="text" id="base-sin-2" oninput="calcTrig(2, 'sin')"/></td>
        </tr>
        <!-- Row 4 -->
        <tr>
            <td>Hypotenuse “H”</td>
            <td><input type="text" id="hypotenuse-sin-1" oninput="calcTrig(1, 'sin')"/></td>
            <td><input type="text" id="hypotenuse-sin-2" oninput="calcTrig(2, 'sin')"/></td>
        </tr>
        <!-- Row 5 -->
        <tr style="background-color: #d9e1f2;">
            <td>sinθ = P/H</td>
            <td id="sin-sin-1"></td>
            <td id="sin-sin-2"></td>
        </tr>
        <!-- Row 6 -->
        <tr style="background-color: #d9e1f2;">
            <td>cosθ = B/H</td>
            <td id="cos-sin-1"></td>
            <td id="cos-sin-2"></td>
        </tr>
        <!-- Row 7 -->
        <tr style="background-color: #d9e1f2;">
            <td>sin²θ</td>
            <td id="sin2-sin-1"></td>
            <td id="sin2-sin-2"></td>
        </tr>
        <!-- Row 8 -->
        <tr style="background-color: #d9e1f2;">
            <td>cos²θ</td>
            <td id="cos2-sin-1"></td>
            <td id="cos2-sin-2"></td>
        </tr>
        <!-- Row 9 -->
        <tr style="background-color: #d9e1f2;">
            <td>sin²θ + cos²θ</td>
            <td id="sin2pluscos2-sin-1"></td>
            <td id="sin2pluscos2-sin-2"></td>
        </tr>
    </tbody>
</table>

            
        `,

           cos : `
           
            <h3>Verification for 1 + tan²θ = sec²θ</h3>
             <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Triangle</th>
            <th>ΔAPE</th>
            <th>ΔRPQ</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Angle “θ”</td>
            <td>30°</td>
            <td>60°</td>
        </tr>
        <tr>
            <td>Perpendicular “P”</td>
            <td><input type="text" id="perpendicular-cos-1" oninput="calcTrig(1, 'cos')" /></td>
            <td><input type="text" id="perpendicular-cos-2" oninput="calcTrig(2, 'cos')"/></td>
        </tr>
        <tr>
            <td>Base “B”</td>
            <td><input type="text" id="base-cos-1" oninput="calcTrig(1, 'cos')" /></td>
            <td><input type="text" id="base-cos-2" oninput="calcTrig(2, 'cos')"></td>
        </tr>
        <tr>
            <td>Hypotenuse “H”</td>
            <td><input type="text" id="hypotenuse-cos-1" oninput="calcTrig(1, 'cos')" /></td>
            <td><input type="text" id="hypotenuse-cos-2" oninput="calcTrig(2, 'cos')"/></td>
        </tr>
       <tr style="background-color: #d9e1f2;">
            <td>tanθ = P/B</td>
            <td id="tan-cos-1"></td>
            <td id="tan-cos-2"></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>secθ = H/B</td>
            <td id="sec-cos-1"></td>
            <td id="sec-cos-2"></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>tan²θ</td>
            <td id="tan2-cos-1"></td>
            <td id="tan2-cos-2"></td>
        </tr>
       <tr style="background-color: #d9e1f2;">
            <td>sec²θ</td>
            <td id="sec2-cos-1"></td>
            <td id="sec2-cos-2"></td>
        </tr>
       <tr style="background-color: #d9e1f2;">
            <td>1 + tan²θ</td>
            <td id="one-plus-tan2-cos-1"></td>
            <td id="one-plus-tan2-cos-2"></td>
        </tr>
    </tbody>
</table>

            
        `, 

           tan : `
           
            <h3>Verification for cot²θ + 1 = cosec²θ</h3>
            <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Triangle</th>
            <th>ΔAPE</th>
            <th>ΔRPQ</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Angle “θ”</td>
            <td>30°</td>
            <td>60°</td>
        </tr>
        <tr>
            <td>Perpendicular “P”</td>
            <td><input type="text" id="perpendicular-tan-1" oninput= "calcTrig(1, 'tan')"/></td>
            <td><input type="text" id="perpendicular-tan-2" oninput= "calcTrig(2, 'tan')"/></td>
        </tr>
        <tr>
            <td>Base “B”</td>
            <td><input type="text" id="base-tan-1" oninput ="calcTrig(1, 'tan')" /></td>
            <td><input type="text" id="base-tan-2" oninput ="calcTrig(2, 'tan')" /></td>
        </tr>
        <tr>
            <td>Hypotenuse “H”</td>
            <td><input type="text" id="hypotenuse-tan-1" oninput= "calcTrig(1, 'tan')" /></td>
            <td><input type="text" id="hypotenuse-tan-2" oninput= "calcTrig(2, 'tan')" /></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>cotθ = B/P</td>
            <td id="cot-tan-1"></td>
            <td id="cot-tan-2"></td>
        </tr>
       <tr style="background-color: #d9e1f2;">
            <td>cosecθ = H/P</td>
            <td id="cosec-tan-1"></td>
            <td id="cosec-tan-2"></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>cot²θ</td>
            <td id="cot2-tan-1"></td>
            <td id="cot2-tan-2"></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>cosec²θ</td>
            <td id="cosec2-tan-1"></td>
            <td id="cosec2-tan-2"></td>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td>cot²θ + 1</td>
            <td id="cot2plusone-tan-1"></td>
            <td id="cot2plusone-tan-2"></td>
        </tr>
    </tbody>
</table>

            
        `,  



    },
}
}
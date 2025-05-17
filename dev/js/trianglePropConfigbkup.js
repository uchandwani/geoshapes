export  const functionalityConfig = {

        
    
        sineTheta: {
        defaultButtonType: 'sin',    
        theoremDefinition: "To Verify that the value of sin θ increases with the increase in θ when 0 ≤ θ ≤ 90⁰",
        canvasConfig: {
            circle: [{ x: 300, y: 300 }, 200],
          
            lines: [
              {
                type: 'cos',
                endA: { x: 300, y: 300 },
                endB: { x: 300, y: 100 },
              },
              {
                type: 'cos',
                endA: { x: 300, y: 301 },
                endB: { x: 500, y: 301 },
              }
            ],
          
            triangles: [
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 },
                angles: [5, 85],
                radius: 200,
                labels: { A: 'P', B: 'A', C: 'E' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [30, 60],
                radius: 200,
                labels: { A: 'P', B: 'E', C: 'A' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [45, 45],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 },
                angles: [85, 5],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false,
                setShowMeasurements: false
            }
        ]
    

    },
    
        buttonSet: [

                {
                    label: "Regular",
                    type: "sin",
                    svg: `
                     <svg class="sub-button-svg" width="36" height="36" viewBox="0 0 100 100">
                       <circle cx="0" cy="100" r="100" stroke="black" stroke-width="2" fill="none" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="black" stroke-width="2" />
                        <line x1="0" y1="0" x2="0" y2="100" stroke="black" stroke-width="2" />
                        <line x1="0" y1="100" x2="80" y2="20" stroke="blue" stroke-width="2" />
                        <line x1="0" y1="100" x2="60" y2="40" stroke="blue" stroke-width="2" />
                        <line x1="0" y1="100" x2="40" y2="60" stroke="blue" stroke-width="2" />
                        <line x1="40" y1="60" x2="40" y2="100" stroke="blue" stroke-width="2" />
                        <line x1="60" y1="40" x2="60" y2="100" stroke="blue" stroke-width="2" />
                        <line x1="80" y1="20" x2="80" y2="100" stroke="blue" stroke-width="2" />
                    </svg>
                                            `
                      },
                      {
                    label: "Edge",
                    type: "cos",
                    svg: `
                        <svg class="sub-button-svg" width="36" height="36" viewBox="0 0 100 100">
                        <circle cx="0" cy="100" r="100" stroke="black" stroke-width="2" fill="none" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="red" stroke-width="2" />
                        <line x1="0" y1="100" x2="0" y2="0" stroke="red" stroke-width="2" />
                        <line x1="0" y1="100" x2="80" y2="20" stroke="blue" stroke-width="2" />
                        <line x1="20" y1="100" x2="20" y2="40" stroke="blue" stroke-width="2" />
                        <line x1="80" y1="20" x2="80" y2="100" stroke="blue" stroke-width="2" />
                        <line x1="20" y1="40" x2="80" y2="100" stroke="blue" stroke-width="2" />
                    </svg>
                            `
                        },
                     
                                   
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
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
        <thead>
    <tr>
      <th>Angle "θ"</th>
      <th title="Perpendicular">P</th>
      <th title="Hypotenuse">H</th>
      <th title="Sine(θ) = Perpendicular / Hypotenuse">Sin θ (P/H)</th>
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

    <div style="margin-top: 15px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                style="width: 100%; height: 80px; resize: none;"  ></textarea>
    </div>
    <div style="margin-top: 15px;">
        <button id="save-btn" onclick="handleSave('sineTheta', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
            Save
        </button>
        <button id="submitButton" onclick="handleSubmit('sineTheta', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
            Submit
        </button>
    </div>

            
        `,

        cos:  `
            <h3>Verification Edge Angles:</h3>

            <h2>Table 1</h2>
    <table>
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
        <thead>
    <tr>
      <th>Angle "θ"</th>
      <th title="Perpendicular">P</th>
      <th title="Hypotenuse">H</th>
      <th title="Sine(θ) = Perpendicular / Hypotenuse">Sin θ (P/H)</th>
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



<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('sineTheta', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('sineTheta', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        
        `,
    },
    formStructure: {
        conclusion: "studentConclusion",
        fields: [
          {
            label1: "Opposite (∠APE 30°)",
            label2: "Hypotenuse",
            angle: "30",
            input1: "perpendicular-30",
            input2: "hypotenuse-30",
            result: "sin-30",
            subtype: "sin"
          },
          {
            label1: "Opposite (∠RPQ 45°)",
            label2: "Hypotenuse",
            angle: "45",
            input1: "perpendicular-45",
            input2: "hypotenuse-45",
            result: "sin-45",
            subtype: "sin"
          },
          {
            label1: "Base (∠SPT 60°)",
            label2: "Hypotenuse",
            angle: "60",
            input1: "base-60",
            input2: "hypotenuse-60",
            result: "sin-60",
            subtype: "sin"
          },
          {
            label1: "Opposite (0°)",
            label2: "Hypotenuse",
            angle: "0",
            input1: "perpendicular-0",
            input2: "hypotenuse-0",
            result: "sin-0",
            subtype: "cos"
          },
          {
            label1: "Opposite (∠UPV 90°)",
            label2: "Hypotenuse",
            angle: "90",
            input1: "perpendicular-90",
            input2: "hypotenuse-90",
            result: "sin-90",
            subtype: "cos"
          }
        ]
      },
      
},
    cosineTheta: {

        defaultButtonType: 'sin',
        theoremDefinition: "To Verify that the value of cos θ decreases with the increase in θ when 0 ≤ θ ≤ 90⁰",
        canvasConfig: {
            circle: [{ x: 300, y: 300 }, 200],
          
            lines: [
              {
                type: 'cos',
                endA: { x: 300, y: 300 },
                endB: { x: 300, y: 100 },
              },
              {
                type: 'cos',
                endA: { x: 300, y: 301 },
                endB: { x: 500, y: 301 },
              }
            ],
          
            triangles: [
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 },
                angles: [5, 85],
                radius: 200,
                labels: { A: 'P', B: 'D', C: 'B' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [30, 60],
                radius: 200,
                labels: { A: 'P', B: 'E', C: 'A' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [45, 45],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false,
                setShowMeasurements: false
              },
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 },
                angles: [85, 5],
                radius: 200,
                labels: { A: 'P', B: 'U', C: 'V' },
                showMidpoints: false,
                setShowMeasurements: false
              }
            ]
          },
          
          buttonSet: [

            {
                label: "Regular",
                type: "sin",
                svg: `
                 <svg class="sub-button-svg" width="36" height="36" viewBox="0 0 100 100">
                   <circle cx="0" cy="100" r="100" stroke="black" stroke-width="2" fill="none" />
                    <line x1="0" y1="100" x2="100" y2="100" stroke="black" stroke-width="2" />
                    <line x1="0" y1="0" x2="0" y2="100" stroke="black" stroke-width="2" />
                    <line x1="0" y1="100" x2="80" y2="20" stroke="blue" stroke-width="2" />
                    <line x1="0" y1="100" x2="60" y2="40" stroke="blue" stroke-width="2" />
                    <line x1="0" y1="100" x2="40" y2="60" stroke="blue" stroke-width="2" />
                    <line x1="40" y1="60" x2="40" y2="100" stroke="blue" stroke-width="2" />
                    <line x1="60" y1="40" x2="60" y2="100" stroke="blue" stroke-width="2" />
                    <line x1="80" y1="20" x2="80" y2="100" stroke="blue" stroke-width="2" />
                </svg>
                                        `
                  },
                  {
                label: "Edge",
                type: "cos",
                svg: `
                    <svg class="sub-button-svg" width="36" height="36" viewBox="0 0 100 100">
                    <circle cx="0" cy="100" r="100" stroke="black" stroke-width="2" fill="none" />
                    <line x1="0" y1="100" x2="100" y2="100" stroke="red" stroke-width="2" />
                    <line x1="0" y1="100" x2="0" y2="0" stroke="red" stroke-width="2" />
                    <line x1="0" y1="100" x2="80" y2="20" stroke="blue" stroke-width="2" />
                    <line x1="20" y1="100" x2="20" y2="40" stroke="blue" stroke-width="2" />
                    <line x1="80" y1="20" x2="80" y2="100" stroke="blue" stroke-width="2" />
                    <line x1="20" y1="40" x2="80" y2="100" stroke="blue" stroke-width="2" />
                </svg>
                        `
                    },
                 
                               
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
               
                <th title="Base">B</th>
                 <th title="Hypotenuse">H</th>
                 <th title = "Cosine θ  = Base/ Hypotenuse" > Cosθ (B / H) </th>
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

    <div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
    </div>



<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('cosineTheta', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('cosineTheta', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

              
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
               
                <th title="Base">B</th>
                 <th title="Hypotenuse">H</th>
                <th title = "Cosine θ  = Base/ Hypotenuse" > Cosθ (B / H) </th>
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

    <div style="margin-top: 15px;">
    <button id="save-btn" onclick="handleSave('cosineTheta', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Save
    </button>
    <button id="submitButton" onclick="handleSubmit('cosineTheta', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
    </div>
    
    `,
}, formStructure: {
    conclusion: "studentConclusion",
    fields: [
      {
        label1: "Base (∠APE 30°)",
        label2: "Hypotenuse",
        angle: "30",
        input1: "base-30",
        input2: "hypotenuse-30",
        result: "cos-30",
        subtype: "sin"
      },
      {
        label1: "Base (∠RPQ 45°)",
        label2: "Hypotenuse",
        angle: "45",
        input1: "base-45",
        input2: "hypotenuse-45",
        result: "cos-45",
        subtype: "sin"
      },
      {
        label1: "Base (∠SPT 60°)",
        label2: "Hypotenuse",
        angle: "60",
        input1: "base-60",
        input2: "hypotenuse-60",
        result: "cos-60",
        subtype: "sin"
      },
      {
        label1: "Base (∠DPB 5°)",
        label2: "Hypotenuse",
        angle: "5",
        input1: "base-5",
        input2: "hypotenuse-5",
        result: "cos-5",
        subtype: "cos"
      },
      {
        label1: "Base (∠UPV 85°)",
        label2: "Hypotenuse",
        angle: "85",
        input1: "base-85",
        input2: "hypotenuse-85",
        result: "cos-85",
        subtype: "cos"
      }
    ]
  },
  },
    trigonoRatios: {
        theoremDefinition: "Trig. Ratios don’t change even if the length of the sides of the triangle changes.",
        canvasConfig: {
            circle: [{ x: 300, y: 300 }, 200], // Circle center and radius
          
            triangles: [
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 }, // Center of the circle
                angles: [45, 45],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false,
                setShowMeasurements: true
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [45, 45],
                radius: 300,
                labels: { A: 'P', B: 'A', C: 'E' },
                showMidpoints: false,
                setShowMeasurements: true
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 }, // Center of the circle
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false,
                setShowMeasurements: true
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 300,
                labels: { A: 'P', B: 'V', C: 'W' },
                showMidpoints: false,
                setShowMeasurements: true
              }
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

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('trigonoRatios')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('trigonoRatios')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


        `,

        formStructure: {
            conclusion: "studentConclusion",  // optional, if needed
            fields: [
              {
                angleLabel: "∠APE",
                perpendicular: "perpendicular-angle1",
                base: "base-angle1",
                hypotenuse: "hypotenuse-angle1",
                sinResult: "sin-angle1",
                cosResult: "cos-angle1",
                tanResult: "tan-angle1"
              },
              {
                angleLabel: "∠RPQ",
                perpendicular: "perpendicular-angle2",
                base: "base-angle2",
                hypotenuse: "hypotenuse-angle2",
                sinResult: "sin-angle2",
                cosResult: "cos-angle2",
                tanResult: "tan-angle2"
              },
              {
                angleLabel: "∠VPW",
                perpendicular: "perpendicular-angle3",
                base: "base-angle3",
                hypotenuse: "hypotenuse-angle3",
                sinResult: "sin-angle3",
                cosResult: "cos-angle3",
                tanResult: "tan-angle3"
              },
              {
                angleLabel: "∠SPT",
                perpendicular: "perpendicular-angle4",
                base: "base-angle4",
                hypotenuse: "hypotenuse-angle4",
                sinResult: "sin-angle4",
                cosResult: "cos-angle4",
                tanResult: "tan-angle4"
              }
            ]
          },
          
          
    },
    trigonoIdentities: {
        defaultButtonType: 'sin',
        theoremDefinition: "Trigono Identities.",
        canvasConfig: {
            circle: [{ x: 300, y: 300 }, 200], // Circle center and radius
          
            triangles: [
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 }, // Center of the circle
                angles: [30, 60],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false
              },
              {
                type: 'sin',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false
              },
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 }, // Center of the circle
                angles: [30, 60],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false
              },
              {
                type: 'cos',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false
              },
              {
                type: 'tan',
                vertexA: { x: 300, y: 300 }, // Center of the circle
                angles: [30, 60],
                radius: 200,
                labels: { A: 'P', B: 'R', C: 'Q' },
                showMidpoints: false
              },
              {
                type: 'tan',
                vertexA: { x: 300, y: 300 },
                angles: [60, 30],
                radius: 200,
                labels: { A: 'P', B: 'S', C: 'T' },
                showMidpoints: false
              }
            ]
          },
          
         buttonSet: [

            {
                label: "sin\u00B2\u03B8 + cos\u00B2\u03B8 = 1",
                type: "sin",
                svg: `
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="blue" fill="none" stroke-width="4"/>
                  <line x1="50" y1="50" x2="90" y2="50" stroke="black" stroke-width="4"/>
                  <line x1="90" y1="50" x2="50" y2="10" stroke="black" stroke-width="4"/>
                  <line x1="50" y1="10" x2="50" y2="50" stroke="black" stroke-width="4"/>
                  </svg>
                      `
                  },
                  {
                label: "1 + tan\u00B2\u03B8 = sec\u00B2\u03B8",
                type: "cos",
                svg: `
                    <svg width="24" height="24" viewBox="0 0 100 100">
                    <line x1="10" y1="90" x2="90" y2="90" stroke="black" stroke-width="4"/>
                    <line x1="90" y1="90" x2="90" y2="10" stroke="black" stroke-width="4"/>
                    <line x1="10" y1="90" x2="90" y2="10" stroke="red" stroke-width="4"/>
                    </svg>
                        `
                    },
                 {
                label:"cot\u00B2\u03B8 + 1 = cosec\u00B2\u03B8",
                type: "tan",
                svg: `
                   <svg width="24" height="24" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="black" fill="none" stroke-width="4"/>
                    <line x1="10" y1="90" x2="90" y2="10" stroke="green" stroke-width="4"/>
                    <line x1="50" y1="50" x2="50" y2="5" stroke="black" stroke-width="4"/>
                    </svg>
                        `
                    },    
                               
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

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('trigonoIdentities', sin)" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('trigonoIdentities', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
            
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

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

    <div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('trigonoIdentities', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('trigonoIdentities', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>        
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

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('trigonoIdentities', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('trigonoIdentities', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
            
        `,  



    },

    formStructure: {
        conclusion: "studentConclusion",  // optional field if you wish to collect a summary
      
        fields: [
          // --- SIN subtype ---
          {
            subtype: "sin",
            angle: "30°",
            perpendicular: "perpendicular-sin-1",
            base: "base-sin-1",
            hypotenuse: "hypotenuse-sin-1",
            sin: "sin-sin-1",
            cos: "cos-sin-1",
            sin2: "sin2-sin-1",
            cos2: "cos2-sin-1",
            identityCheck: "sin2pluscos2-sin-1"
          },
          {
            subtype: "sin",
            angle: "60°",
            perpendicular: "perpendicular-sin-2",
            base: "base-sin-2",
            hypotenuse: "hypotenuse-sin-2",
            sin: "sin-sin-2",
            cos: "cos-sin-2",
            sin2: "sin2-sin-2",
            cos2: "cos2-sin-2",
            identityCheck: "sin2pluscos2-sin-2"
          },
      
          // --- COS subtype ---
          {
            subtype: "cos",
            perpendicular: "perpendicular-cos-1",
            base: "base-cos-1",
            hypotenuse: "hypotenuse-cos-1",
            tan: "tan-cos-1",
            sec: "sec-cos-1",
            tan2: "tan2-cos-1",
            sec2: "sec2-cos-1",
            identityCheck: "one-plus-tan2-cos-1"
          },
          {
            subtype: "cos",
            perpendicular: "perpendicular-cos-2",
            base: "base-cos-2",
            hypotenuse: "hypotenuse-cos-2",
            tan: "tan-cos-2",
            sec: "sec-cos-2",
            tan2: "tan2-cos-2",
            sec2: "sec2-cos-2",
            identityCheck: "one-plus-tan2-cos-2"
          },
      
          // --- TAN subtype ---
          {
            subtype: "tan",
            angle: "30°",
            perpendicular: "perpendicular-tan-1",
            base: "base-tan-1",
            hypotenuse: "hypotenuse-tan-1",
            cot: "cot-tan-1",
            cosec: "cosec-tan-1",
            cot2: "cot2-tan-1",
            cosec2: "cosec2-tan-1",
            identityCheck: "cot2plusone-tan-1"
          },
          {
            subtype: "tan",
            angle: "60°",
            perpendicular: "perpendicular-tan-2",
            base: "base-tan-2",
            hypotenuse: "hypotenuse-tan-2",
            cot: "cot-tan-2",
            cosec: "cosec-tan-2",
            cot2: "cot2-tan-2",
            cosec2: "cosec2-tan-2",
            identityCheck: "cot2plusone-tan-2"
          }
        ]
      },
      
}
}
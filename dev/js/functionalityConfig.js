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
             right: 
        `
          
            <h3>Right Angle Inference</h3>
   <h4>Table 1</h4>
<table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
  <colgroup>
        <col style="width: 20%;">
        <col style="width: 20%;">
        <col style="width: 15%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of AB</th>
            <th>Length of BC</th>
            <th>Is AB=BC ?</th>
        </tr>
    </thead>
    <tbody>
      
    <tr style="background-color: #d9e1f2;">
        <td>
            <input type="number" name="length_ab" placeholder="Enter AB" style="width: 70%;"
                oninput="compareMeasures('length_ab', 'length_bc', 'ans1'); updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF')">
        </td>
        <td>
            <input type="number" name="length_bc" placeholder="Enter BC" style="width: 70%;"
                oninput="compareMeasures('length_ab', 'length_bc', 'ans1'); updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF')">
        </td>
        <td>
            <span name="ans1"></span>
        </td>
    </tr>
</tbody>
<thead style="background-color: #6a9be8; color: white;">
    <tr>
        <th>Length of AD</th>
        <th>Length of DF</th>
        <th>Is AD=DF?</th>
    </tr>
</thead>
<tbody>
    <tr style="background-color: #d9e1f2;">
        <td>
            <input type="number" name="length_ad" placeholder="Enter AD" style="width: 70%;"
                oninput="compareMeasures('length_ad', 'length_df', 'ans2'); updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF')">
        </td>
        <td>
            <input type="number" name="length_df" placeholder="Enter DF" style="width: 70%;"
                oninput="compareMeasures('length_ad', 'length_df', 'ans2'); updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF')">
        </td>
        <td>
            <span name="ans2"></span>
        </td>
    </tr>
</tbody>
<!-- Add the message area -->
        
</table>

<div id="MessageArea1" style="margin-top: 10px; font-weight: bold; color: darkblue;"></div>

<h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 20%;">
        <col style="width: 15%;">
    </colgroup>
    <tr>
        <th>Length of BD</th>
        <th>Length of Side CF</th>
        <th>Is BD = CF/2 ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="length_bd" placeholder="Enter BD" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><input type="number" name="length_cf" placeholder="Enter CF" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><span name="cf_div_2"></span></td>
    </tr>
</table>

<h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf'); updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');">
</td>
<td>
    <input type="number" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf'); updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');">
</td>
<td>
    <span name="is_abd_acf"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc'); updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');">
</td>
<td>
    <input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc'); updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');">
</td>
<td>
    <span name="is_adb_afc"></span>
</td>

    </tr>
</table>

<div id="messageArea2" style="margin-top: 10px; font-weight: bold; color: darkblue;"></div>

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

    acute: 
        `
          <h3>Acute Angle Inference</h3>
   <h4>Table 1</h4>
    <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 20%;">
        <col style="width: 15%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of AB</th>
            <th>Length of BC</th>
            <th>Is AB=BC ?</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td><input type="number" name="length_ab" placeholder="Enter AB" style="width: 70%;" oninput="compareMeasures('length_ab', 'length_bc', 'ans1')"></td>
            <td><input type="number" name="length_bc" placeholder="Enter BC" style="width: 70%;" oninput="compareMeasures('length_ab', 'length_bc', 'ans1')"></td>
            <td><span name="ans1"></span></td>
        </tr>
    </tbody>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of AD</th>
            <th>Length of DF</th>
            <th>Is AD=DF ?</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td><input type="number" name="length_ad" placeholder="Enter AD" style="width: 70%;" oninput="compareMeasures('length_ad', 'length_df', 'ans2')"></td>
            <td><input type="number" name="length_df" placeholder="Enter DF" style="width: 70%;" oninput="compareMeasures('length_ad', 'length_df', 'ans2')"></td>
            <td><span name="ans2"></span></td>
        </tr>
    </tbody>
</table>

<h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 20%;">
        <col style="width: 15%;">
    </colgroup>
    <tr>
        <th>Length of BD</th>
        <th>Length of Side CF</th>
        <th>Is BD = CF/2 ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="length_bd" placeholder="Enter BD" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><input type="number" name="length_cf" placeholder="Enter CF" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><span name="cf_div_2"></span></td>
    </tr>
</table>

<h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
   <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
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
obtuse: 
       `
    <h3> Obtuse Angle Inference</h3>
   <h4>Table 1</h4>
    <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
      <colgroup>
            <col style="width: 20%;">
             <col style="width: 20%;">
            <col style="width: 15%;">
        </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of AB</th>
            <th>Length of BC</th>
            <th>Is AB=BC ?</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td><input type="number" name="length_ab" placeholder="Enter AB" style="width: 70%;" oninput="compareMeasures('length_ab', 'length_bc', 'ans1')"></td>
            <td><input type="number" name="length_bc" placeholder="Enter BC" style="width: 70%;" oninput="compareMeasures('length_ab', 'length_bc', 'ans1')"></td>
            <td><span name="ans1"></span></td>
        </tr>
    </tbody>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of AD</th>
            <th>Length of DF</th>
            <th>Is AD=DF ?</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td><input type="number" name="length_ad" placeholder="Enter AD" style="width: 70%;" oninput="compareMeasures('length_ad', 'length_df', 'ans2')"></td>
            <td><input type="number" name="length_df" placeholder="Enter DF" style="width: 70%;" oninput="compareMeasures('length_ad', 'length_df', 'ans2')"></td>
            <td><span name="ans2"></span></td>
        </tr>
    </tbody>
</table>

<h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 20%;">
        <col style="width: 15%;">
    </colgroup>
    <tr>
        <th>Length of BD</th>
        <th>Length of Side CF</th>
        <th>Is BD = CF/2 ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="length_bd" placeholder="Enter BD" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><input type="number" name="length_cf" placeholder="Enter CF" style="width: 90%;" oninput="compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)"></td>
        <td><span name="cf_div_2"></span></td>
    </tr>
</table>

<h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>

    <div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>
<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; color: white ;border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>
        `,            
    },

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

        right: ` <h3>Right Angle Inference</h3>
        <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment CE</th>
            <th>Length of Line Segment EF</th>
            <th>Ratio (a) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment AF</th>
            <th>Ratio (b) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
    </table>
        <p>Is a = b?; Ans- 
            <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
        </p>

        <div style="margin-top: 20px;">
        <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
        <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                  style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
        
            </div>

        <!-- Submit Button -->
        <div style="margin-top: 20px;">
            <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
                Submit
            </button>
        </div>

          `,

        acute: ` <h3>Acute Angle Inference </h3>
       <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment CE</th>
            <th>Length of Line Segment EF</th>
            <th>Ratio (a) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment AF</th>
            <th>Ratio (b) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
    </table>
        <p>Is a = b?; Ans- 
            <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
        </p>

        <div style="margin-top: 20px;">
        <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
        <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                  style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
        
            </div>

        <!-- Submit Button -->
        <div style="margin-top: 20px;">
            <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
                Submit
            </button>
        </div>
          `,

           obtuse: ` <h3>Obtuse Angle Inference </h3>
       <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment CE</th>
            <th>Length of Line Segment EF</th>
            <th>Ratio (a) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" 
                       oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment AF</th>
            <th>Ratio (b) </th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
    </table>
        <p>Is a = b?; Ans- 
            <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
        </p>

        <div style="margin-top: 20px;">
        <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
        <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                  style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
        
            </div>

        <!-- Submit Button -->
        <div style="margin-top: 20px;">
            <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
                Submit
            </button>
        </div>
          `,
    },
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
            equilateral : `<h3>Equilateral Triangle Inference</h3>

    <h4>Table 1</h4>
    <table class="table">
    <tr>
        <th>Length of Side AC</th>
        <th>Length of Side AF</th>
        <th>Length of Side CF</th>
    </tr>
   <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
        <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
        <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
    </tr>
</table>

<h4>Table 2</h4>
<table class="table">
    <tr>
        <th>Measure of Angle ∠CAF</th>
        <th>Measure of Angle ∠ACF</th>
        <th>Measure of Angle ∠AFC</th>
    </tr>
   <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
        <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
        <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
    </tr>
</table>


   <h2>Equilateral Triangle</h2>
<ul>
    <li>
        Is AC = AF = CF? Ans- 
        <input type="text" name="is_ac_af_cf" placeholder="Yes/No" style="width: 50px;">
    </li>
    <li>
        Is ∠A = ∠C = ∠F = 60⁰? Ans- 
        <input type="text" name="is_angles_equal" placeholder="Yes/No" style="width: 50px;">
    </li>
</ul>

        `,

   isosceles : `<h3>Isoceles Triangle Inference</h3>

    <h4>Table 1</h4>
    <table class="table">
    <tr>
        <th>Length of Side AC</th>
        <th>Length of Side AF</th>
        <th>Length of Side CF</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
        <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
        <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
    </tr>
</table>

<h4>Table 2</h4>
<table class="table">
    <tr>
        <th>Measure of Angle ∠CAF</th>
        <th>Measure of Angle ∠ACF</th>
        <th>Measure of Angle ∠AFC</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
        <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
        <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
    </tr>
</table>

    <h2>Isosceles Triangle</h2>
<ul>
    <li>
        Are any two sides equal? Ans- 
        <input type="text" name="isosceles_sides_equal" placeholder="Yes/No" style="width: 50px;">
        (note which two sides are equal: 
        <input type="text" name="isosceles_sides_details" placeholder="Enter sides" style="width: 100px;">)
    </li>
    <li>
        Are the angles opposite to the equal sides equal to each other? Ans- 
        <input type="text" name="isosceles_angles_equal" placeholder="Yes/No" style="width: 50px;">
        (note the equal angles: 
        <input type="text" name="isosceles_angles_details" placeholder="Enter angles" style="width: 100px;">)
    </li>
</ul>

    <h4>Table 3</h4>
<table class="table">
    <tr>
        <th>Sum of Sides "S"</th>
        <th>Length of Remaining Side "R"</th>
        <th>Is S > R</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_1" placeholder="AC + AF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_1" placeholder="CF" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_1" placeholder="Yes" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_2" placeholder="AC + CF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_2" placeholder="AF" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_2" placeholder="Yes" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_3" placeholder="AF + CF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_3" placeholder="AC" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_3" placeholder="Yes" style="width: 90%;"></td>
    </tr>
</table>

<h4>Table 4</h4>
<table class="table">
    <tr>
        <th>Longest Side</th>
        <th>Largest Angle</th>
        <th>Is this Side Opposite to this Angle?</th>
    </tr>
   <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="longest_side" placeholder="Enter Longest Side" style="width: 90%;"></td>
        <td><input type="text" name="largest_angle" placeholder="Enter Largest Angle" style="width: 90%;"></td>
        <td><input type="text" name="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 90%;"></td>
    </tr>
</table>


        `,
  scalene : `<h3>Scalene Triangle Inference</h3>

    <h4>Table 1</h4>
    <table class="table">
    <tr>
        <th>Length of Side AC</th>
        <th>Length of Side AF</th>
        <th>Length of Side CF</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
        <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
        <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
    </tr>
</table>

<h4>Table 2</h4>
<table class="table">
    <tr>
        <th>Measure of Angle ∠CAF</th>
        <th>Measure of Angle ∠ACF</th>
        <th>Measure of Angle ∠AFC</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
        <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
        <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
    </tr>
</table>



<h2>Scalene Triangle</h2>
<ul>
    <li>
        Are all three sides unequal? Ans- 
        <input type="text" name="scalene_sides_unequal" placeholder="Yes/No" style="width: 50px;">
    </li>
    <li>
        Are all three angles unequal? Ans- 
        <input type="text" name="scalene_angles_unequal" placeholder="Yes/No" style="width: 50px;">
    </li>
</ul>


    <h4>Table 3</h4>
<table class="table">
    <tr>
        <th>Sum of Sides "S"</th>
        <th>Length of Remaining Side "R"</th>
        <th>Is S > R</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_1" placeholder="AC + AF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_1" placeholder="CF" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_1" placeholder="Yes" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_2" placeholder="AC + CF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_2" placeholder="AF" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_2" placeholder="Yes" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="text" name="sum_s_3" placeholder="AF + CF" style="width: 90%;"></td>
        <td><input type="text" name="remaining_side_3" placeholder="AC" style="width: 90%;"></td>
        <td><input type="text" name="is_s_greater_r_3" placeholder="Yes" style="width: 90%;"></td>
    </tr>
</table>

    <h4>Table 4</h4>
    <table class="table">
        <tr>
            <th>Longest Side</th>
            <th>Largest Angle</th>
            <th>Is this Side Opposite to this Angle?</th>
        </tr>
        <tr style="background-color: #d9e1f2;">
            <td><input type="text" name="longest_side" placeholder="Enter Longest Side" style="width: 90%;"></td>
            <td><input type="text" name="largest_angle" placeholder="Enter Largest Angle" style="width: 90%;"></td>
            <td><input type="text" name="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 90%;"></td>
        </tr>
    </table>

    
        `,       
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
        right : `
            <h3>Right Angle Triangle Inference </h3>
            

    <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment BC</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_bc" placeholder="Enter BC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AD</th>
            <th>Length of Line Segment DF</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ad" placeholder="Enter AD" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_df" placeholder="Enter DF" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<p>Is a = b?; Ans- 
    <input type="text" name="is_a_equals_b" placeholder="Yes/No" style="width: 50px;">
</p>


    <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
  <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>
<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>
<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>

    `,

        acute : `
            <h3>Acute angle Triangle Inference </h3>
            

    <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment BC</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_bc" placeholder="Enter BC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AD</th>
            <th>Length of Line Segment DF</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ad" placeholder="Enter AD" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_df" placeholder="Enter DF" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<p>Is a = b?; Ans- 
    <input type="text" name="is_a_equals_b" placeholder="Yes/No" style="width: 50px;">
</p>


    <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>

<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>

    `,
        obtuse : `
            <h3>Obtuse Angle Triangle Inference </h3>
            

     <h4>Table 1</h4>
    <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AC</th>
            <th>Length of Line Segment BC</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_bc" placeholder="Enter BC" style="width: 90%;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
    <colgroup>
        <col style="width: 33%;">
        <col style="width: 33%;">
        <col style="width: 34%;">
    </colgroup>
    <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Line Segment AD</th>
            <th>Length of Line Segment DF</th>
            <th>Ratio</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background-color: #d9e1f2;">
            <td>
                <input type="text" name="length_ad" placeholder="Enter AD" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_df" placeholder="Enter DF" style="width: 90%;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly>
            </td>
        </tr>
    </tbody>
</table>


<p>Is a = b?; Ans- 
    <input type="text" name="is_a_equals_b" placeholder="Yes/No" style="width: 50px;">
</p>


    <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
   <tr>
        <th>Measure of ∠ABD</th>
        <th>Measure of ∠ACF </th>
        <th>Is ∠ABD = ∠ACF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 90%;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>

<div style="margin-top: 20px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
              style="width: 100%; height: 80px; resize: none;" oninput="limitWords(this, 50)"></textarea>
    
</div>
<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>  `,
    },
}
}
    export const pageFeatures = {
    'triangle_theorem_07.html': { enableProtractorSnapping: true },
    'circlePage.html': { enableProtractorSnapping: false },
};

export const currentPage = location.pathname.split('/').pop(); // Get current page
export const currentPageFeatures = pageFeatures[currentPage] || {}; // Get features for the current page

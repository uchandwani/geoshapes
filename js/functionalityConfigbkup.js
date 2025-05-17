export  const functionalityConfig = {

// Define the feature configuration
   
    midSegmentTheorem: {
        theoremDefinition: "If a line segment joins the midpoints of the two sides of a triangle, then the segment is parallel to third side and is of half its length.",
        
         canvasConfig: {
      autoloadShape: "triangle",
      triangles: [
        {
          type: "right",
          vertices: [
            { x: 200, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "obtuse",
          vertices: [
            { x: 300, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "acute",
          vertices: [
            { x: 100, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        }
      ]
    },
        buttonSet: [

                {
              label: "Right Angle Triangle",
              type: "right",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="80" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                `
                },
                  {
              label: "Acute Triangle",
              type: "acute",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="40" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="40" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
              `
            },

                      {
              label: "Obtuse Triangle",
              type: "obtuse",
              svg: `
               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                        `
            },
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

<table class="table" style="width:100%;">
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Length / Angle</th>
    <th>Comparison Target</th>
    <th>Equality Check</th>
  </tr>
</thead>

  <!-- Table 1 Header -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
  <td><span>Length of AB</span><br>
    <input type="number" name="length_ab" placeholder="Enter AB" style="width: 90%;"
  oninput="if (this.value && document.getElementsByName('length_bc')[0]?.value) {
      compareMeasures('length_ab', 'length_bc', 'ans1');
      updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
    }
  ">  </td>
    <td><span>Length of BC</span><br>
      <input type="number" name="length_bc" placeholder="Enter BC" style="width: 90%;"
  oninput="
    if (this.value && document.getElementsByName('length_ab')[0]?.value) {
      compareMeasures('length_ab', 'length_bc', 'ans1');
      updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
    }
  "> </td>
    <td><span name="ans1"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>Length of AD</span><br>
      <input type="number" name="length_ad" placeholder="Enter AD" style="width: 90%;"
oninput="
  if (this.value && document.getElementsByName('length_df')[0]?.value) {
    compareMeasures('length_ad', 'length_df', 'ans2');
    updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
  }
">
    </td>
    <td><span>Length of DF</span><br>
      <input type="number" name="length_df" placeholder="Enter DF" style="width: 90%;"
oninput="
  if (this.value && document.getElementsByName('length_ad')[0]?.value) {
    compareMeasures('length_ad', 'length_df', 'ans2');
    updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
  }
">
    </td>
    <td><span name="ans2"></span></td>
  </tr>
</table>
<div id="MessageArea1" style="margin-top: 8px; font-weight: bold; color: darkblue;"></div>

<!-- Table 2 -->
<table class="table" style="width:100%; margin-top: 10px;">
  <colgroup>
    <col style="width: 25%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>Length of BD</span><br>
      <input type="number" name="length_bd" placeholder="Enter BD" style="width: 90%;"
        oninput="if(this.value && document.getElementsByName('length_cf')[0].value) {
          compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);
        }">
    </td>
    <td><span>Length of CF</span><br>
      <input type="number" name="length_cf" placeholder="Enter CF" style="width: 90%;"
        oninput="if(this.value && document.getElementsByName('length_bd')[0].value) {
          compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);
        }">
    </td>
    <td><span name="cf_div_2"></span></td>
  </tr>
  </table>

<!-- Table 3 -->
<table class="table" style="width:100%; margin-top: 10px;">
    <colgroup>
      <col style="width: 25%;">
      <col style="width: 25%;">
      <col style="width: 25%;">
    </colgroup>
    <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
    
    <tr style="background-color: #d9e1f2;">
      <td><span>∠ABD</span><br>
        <input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;"
          oninput="if(this.value && document.getElementsByName('angle_acf')[0].value) {
            compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');
            updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
          }">
      </td>
      <td><span>∠ACF</span><br>
        <input type="number" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"
          oninput="if(this.value && document.getElementsByName('angle_abd')[0].value) {
            compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');
            updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
          }">
      </td>
      <td><span name="is_abd_acf"></span></td>
    </tr>
    
    <tr style="background-color: #d9e1f2;">
      <td><span>∠ADB</span><br>
        <input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;"
          oninput="if(this.value && document.getElementsByName('angle_afc2')[0].value) {
            compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');
            updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
          }">
      </td>
      <td><span>∠AFC</span><br>
        <input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;"
          oninput="if(this.value && document.getElementsByName('angle_adb')[0].value) {
            compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');
            updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
          }">
      </td>
      <td><span name="is_adb_afc"></span></td>
    </tr>
    </table>
    <div id="messageArea2" style="margin-top: 8px; font-weight: bold; color: darkblue;"></div>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('midSegmentTheorem', 'right')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit(midSegmentTheorem', 'right')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        `,

    acute: 
        `
         

<!-- Combined Table -->
<table class="table" style="width: 100%;">
 <h3>Acute Angle Inference</h3>
  <colgroup>
    <col style="width: 30%;">
    <col style="width: 30%;">
    <col style="width: 40%;">
  </colgroup>
  <thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Length / Angle</th>
    <th>Comparison Target</th>
    <th>Equality Check</th>
  </tr>
   </thead>

  <!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>Length of AB</span><br>
    <input type="number" name="length_ab" placeholder="Enter AB" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_bc')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1');">
  </td>
  <td><span>Length of BC</span><br>
    <input type="number" name="length_bc" placeholder="Enter BC" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_ab')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1');">
  </td>
  <td><span name="ans1"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
  <td><span>Length of AD</span><br>
    <input type="number" name="length_ad" placeholder="Enter AD" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_df')[0].value) compareMeasures('length_ad', 'length_df', 'ans2');">
  </td>
  <td><span>Length of DF</span><br>
    <input type="number" name="length_df" placeholder="Enter DF" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_ad')[0].value) compareMeasures('length_ad', 'length_df', 'ans2');">
  </td>
  <td><span name="ans2"></span></td>
</tr>

  <!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>Length of BD</span><br>
    <input type="number" name="length_bd" placeholder="Enter BD" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_cf')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);">
  </td>
  <td><span>Length of CF</span><br>
    <input type="number" name="length_cf" placeholder="Enter CF" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('length_bd')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);">
  </td>
  <td><span name="cf_div_2"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ABD</span><br>
    <input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('angle_acf')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
  </td>
  <td><span>∠ACF</span><br>
    <input type="number" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('angle_abd')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
  </td>
  <td><span name="is_abd_acf"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ADB</span><br>
    <input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('angle_afc2')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
  </td>
  <td><span>∠AFC</span><br>
    <input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 90%;"
      oninput="if (this.value && document.getElementsByName('angle_adb')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
  </td>
  <td><span name="is_adb_afc"></span></td>
</tr>

</table>

<!-- Conclusion and Submit -->
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;" ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('midSegmentTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('midSegmentTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        `,
obtuse: 
       `
 
<table class="table" style="width:100%; text-align:center;">
  <thead style="background-color:#6a9be8; color:white;">
   <h3>Obtuse Angle Inference</h3>
    <tr>
      <th>Length / Angle</th>
      <th>Comparison Target</th>
      <th>Equality Check</th>
    </tr>
  </thead>
  <tbody>
    <!-- Table 1 -->
    <tr style="background-color:#e2efda;">
      <td colspan="3"><strong>Table 1</strong></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>Length of AB<br>
        <input type="number" name="length_ab" placeholder="Enter AB" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_bc')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1')">
      </td>
      <td>Length of BC<br>
        <input type="number" name="length_bc" placeholder="Enter BC" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_ab')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1')">
      </td>
      <td><span name="ans1"></span></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>Length of AD<br>
        <input type="number" name="length_ad" placeholder="Enter AD" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_df')[0].value) compareMeasures('length_ad', 'length_df', 'ans2')">
      </td>
      <td>Length of DF<br>
        <input type="number" name="length_df" placeholder="Enter DF" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_ad')[0].value) compareMeasures('length_ad', 'length_df', 'ans2')">
      </td>
      <td><span name="ans2"></span></td>
    </tr>

    <!-- Table 2 -->
    <tr style="background-color:#e2efda;">
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>Length of BD<br>
        <input type="number" name="length_bd" placeholder="Enter BD" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_cf')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)">
      </td>
      <td>Length of CF<br>
        <input type="number" name="length_cf" placeholder="Enter CF" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('length_bd')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)">
      </td>
      <td><span name="cf_div_2"></span></td>
    </tr>

    <!-- Table 3 -->
    <tr style="background-color:#e2efda;">
      <td colspan="3"><strong>Table 3</strong></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>∠ABD<br>
        <input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('angle_acf')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td>∠ACF<br>
        <input type="number" name="angle_acf" placeholder="Enter ∠ACF" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('angle_abd')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td><span name="is_abd_acf"></span></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>∠ADB<br>
        <input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('angle_afc2')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td>∠AFC<br>
        <input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width:90%;"
          oninput="if(this.value && document.getElementsByName('angle_adb')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td><span name="is_adb_afc"></span></td>
    </tr>
  </tbody>
</table>

<!-- Conclusion -->
<div style="margin-top: 15px;">
  <label for="studentConclusion"><strong>Student's Conclusion (50 words):</strong></label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width:100%; height:80px; resize:none;"></textarea>
</div>

<!-- Buttons -->
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('midSegmentTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('midSegmentTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        `,            
    },

    formStructure: {
      conclusion: "studentConclusion",
      fields: [
        // RIGHT
        { length1: "length_ab", label1: "Length of AB", length2: "length_bc", label2: "Length of BC", result: "ans1", subtype: "right" },
        { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ans2", subtype: "right" },
        { length1: "length_bd", label1: "Length of BD", length2: "length_cf", label2: "Length of CF", result: "cf_div_2", subtype: "right" },
        { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", subtype: "right" },
        { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", subtype: "right" },
    
        // ACUTE
        { length1: "length_ab", label1: "Length of AB", length2: "length_bc", label2: "Length of BC", result: "ans1", subtype: "acute" },
        { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ans2", subtype: "acute" },
        { length1: "length_bd", label1: "Length of BD", length2: "length_cf", label2: "Length of CF", result: "cf_div_2", subtype: "acute" },
        { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", subtype: "acute" },
        { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", subtype: "acute" },
    
        // OBTUSE
        { length1: "length_ab", label1: "Length of AB", length2: "length_bc", label2: "Length of BC", result: "ans1", subtype: "obtuse" },
        { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ans2", subtype: "obtuse" },
        { length1: "length_bd", label1: "Length of BD", length2: "length_cf", label2: "Length of CF", result: "cf_div_2", subtype: "obtuse" },
        { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", subtype: "obtuse" },
        { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", subtype: "obtuse" }
      ]
    }
    
    },

    angleBisectorTheorem: {
        theoremDefinition: "If a ray bisects an angle of a triangle, then it divides the opposite side of the triangle into segments proportional to the other two sides.",
         
      canvasConfig: {
      autoloadShape: "triangle",
      triangles: [
        {
          type: "right",
          vertices: [
            { x: 200, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "obtuse",
          vertices: [
            { x: 300, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "acute",
          vertices: [
            { x: 100, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
    },
]
},
        buttonSet: [

                {
              label: "Right Angle Triangle",
              type: "right",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="80" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                `
                },
                  {
              label: "Acute Triangle",
              type: "acute",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="40" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="40" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
              `
            },

                      {
              label: "Obtuse Triangle",
              type: "obtuse",
              svg: `
               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                        `
            },
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
<table class="table" style="width: 100%; text-align: center;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Length / Ratio</th>
      <th>Comparison Target</th>
      <th>Calculated / Equal?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 1</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;" ></textarea>
</div>

<div style="margin-top: 20px;">
  <button id="submitButton" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Submit
  </button>
</div>


          `,

        acute: ` <h3>Acute Angle Inference</h3>
<table class="table" style="width: 100%; text-align: center;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Length / Ratio</th>
      <th>Comparison Target</th>
      <th>Calculated / Equal?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 1</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;" ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('midSegmentTheoremparallelProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('parallelProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

          `,

           obtuse: ` <h3>Obtuse Angle Inference</h3>
<table class="table" style="width: 100%; text-align: center;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Length / Ratio</th>
      <th>Comparison Target</th>
      <th>Calculated / Equal?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 1</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" placeholder="Enter CE" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" placeholder="Enter EF" style="width: 90%;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 90%;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div style="margin-top: 20px;">
  <button id="submitButton" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer;">
    Submit
  </button>
</div>

          `,
    },
    formStructure: {
      conclusion: "studentConclusion",
      fields: [
        // RIGHT
        { length1: "length_ce", label1: "Length of CE", length2: "length_ef", label2: "Length of EF", result: "ratio_a", subtype: "right" },
        { length1: "length_ac", label1: "Length of AC", length2: "length_af", label2: "Length of AF", result: "ratio_b", subtype: "right" },
        { result: "is_a_equals_b", label: "Is a = b?", subtype: "right" },
    
        // ACUTE
        { length1: "length_ce", label1: "Length of CE", length2: "length_ef", label2: "Length of EF", result: "ratio_a", subtype: "acute" },
        { length1: "length_ac", label1: "Length of AC", length2: "length_af", label2: "Length of AF", result: "ratio_b", subtype: "acute" },
        { result: "is_a_equals_b", label: "Is a = b?", subtype: "acute" },
    
        // OBTUSE
        { length1: "length_ce", label1: "Length of CE", length2: "length_ef", label2: "Length of EF", result: "ratio_a", subtype: "obtuse" },
        { length1: "length_ac", label1: "Length of AC", length2: "length_af", label2: "Length of AF", result: "ratio_b", subtype: "obtuse" },
        { result: "is_a_equals_b", label: "Is a = b?", subtype: "obtuse" }
      ]
    },
  
    },

    propertiesOfTriangles: {
        theoremDefinition: "All three sides of an equilateral triangle are equal. \n Angle opposite to equal sides of an isosceles triangle are equal.",
        canvasConfig: {
      autoloadShape: "triangle",
      triangles: [
        {
          type: "equilateral",
          vertices: [
            { x: 220, y: 450 },
            { x: 620, y: 450 },
            { x: 420, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "isosceles",
          vertices: [
            { x: 200, y: 500 },
            { x: 600, y: 500 },
            { x: 400, y: 300 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "scalene",
          vertices: [
            { x: 200, y: 400 },
            { x: 700, y: 470 },
            { x: 420, y: 120 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        }
      ]
    },
       
         buttonSet: [

                {
              label: "Equilateral Triangle",
              type: "equilateral",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="80" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                `
                },
                  {
              label: "Isosceles Triangle",
              type: "isosceles" ,
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="40" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="40" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
              `
            },

                      {
              label: "Scalene Triangle",
              type: "scalene",
              svg: `
               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                        `
            },
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
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Length of Side AC</th>
    <th>Length of Side AF</th>
    <th>Length of Side CF</th>
</tr>
</thead>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
    <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
    <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
</tr>
</table>

<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Measure of Angle ∠CAF</th>
    <th>Measure of Angle ∠ACF</th>
    <th>Measure of Angle ∠AFC</th>
</tr>
</thead>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
    <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
    <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
</tr>
</table>

<h2>Equilateral Triangle</h2>
<ul>
<li>Is AC = AF = CF? Ans- <input type="text" name="is_ac_af_cf" placeholder="Yes/No" style="width: 50px;"></li>
<li>Is ∠A = ∠C = ∠F = 60⁰? Ans- <input type="text" name="is_angles_equal" placeholder="Yes/No" style="width: 50px;"></li>
</ul>

          `,
           
   isosceles : `<h3>Isosceles Triangle Inference</h3>

<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Length of Side AC</th>
    <th>Length of Side AF</th>
    <th>Length of Side CF</th>
</tr>
</thead>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
    <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
    <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
</tr>
</table>

<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Measure of Angle ∠CAF</th>
    <th>Measure of Angle ∠ACF</th>
    <th>Measure of Angle ∠AFC</th>
</tr>
</thead>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
    <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
    <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
</tr>
</table>

<h2>Isosceles Triangle</h2>
<ul>
<li>Are any two sides equal? Ans- <input type="text" name="isosceles_sides_equal" placeholder="Yes/No" style="width: 50px;"> (note which two sides are equal: <input type="text" name="isosceles_sides_details" placeholder="Enter sides" style="width: 100px;">)</li>
<li>Are the angles opposite to the equal sides equal to each other? Ans- <input type="text" name="isosceles_angles_equal" placeholder="Yes/No" style="width: 50px;"> (note the equal angles: <input type="text" name="isosceles_angles_details" placeholder="Enter angles" style="width: 100px;">)</li>
</ul>

<h4>Table 3</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Sum of Sides "S"</th>
    <th>Length of Remaining Side "R"</th>
    <th>Is S > R</th>
</tr>
</thead>
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
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
<thead style="background-color: #6a9be8; color: white;">
<tr>
    <th>Longest Side</th>
    <th>Largest Angle</th>
    <th>Is this Side Opposite to this Angle?</th>
</tr>
</thead>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="longest_side" placeholder="Enter Longest Side" style="width: 90%;"></td>
    <td><input type="text" name="largest_angle" placeholder="Enter Largest Angle" style="width: 90%;"></td>
    <td><input type="text" name="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 90%;"></td>
</tr>
</table>

        `, 
        scalene : `<h3>Scalene Triangle Inference</h3>

        <h4>Table 1</h4>
        <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Length of Side AC</th>
            <th>Length of Side AF</th>
            <th>Length of Side CF</th>
        </tr>
        </thead>
        <tr style="background-color: #d9e1f2;">
            <td><input type="text" name="length_ac" placeholder="Enter AC" style="width: 90%;"></td>
            <td><input type="text" name="length_af" placeholder="Enter AF" style="width: 90%;"></td>
            <td><input type="text" name="length_cf" placeholder="Enter CF" style="width: 90%;"></td>
        </tr>
        </table>
        
        <h4>Table 2</h4>
        <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Measure of Angle ∠CAF</th>
            <th>Measure of Angle ∠ACF</th>
            <th>Measure of Angle ∠AFC</th>
        </tr>
        </thead>
        <tr style="background-color: #d9e1f2;">
            <td><input type="text" name="angle_caf" placeholder="Enter ∠CAF" style="width: 90%;"></td>
            <td><input type="text" name="angle_acf" placeholder="Enter ∠ACF" style="width: 90%;"></td>
            <td><input type="text" name="angle_afc" placeholder="Enter ∠AFC" style="width: 90%;"></td>
        </tr>
        </table>
        
        <h2>Scalene Triangle</h2>
        <ul>
        <li>Are any two sides equal? Ans- <input type="text" name="isosceles_sides_equal" placeholder="Yes/No" style="width: 50px;"> (note which two sides are equal: <input type="text" name="isosceles_sides_details" placeholder="Enter sides" style="width: 100px;">)</li>
        <li>Are the angles opposite to the equal sides equal to each other? Ans- <input type="text" name="isosceles_angles_equal" placeholder="Yes/No" style="width: 50px;"> (note the equal angles: <input type="text" name="isosceles_angles_details" placeholder="Enter angles" style="width: 100px;">)</li>
        </ul>
        
        <h4>Table 3</h4>
        <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Sum of Sides "S"</th>
            <th>Length of Remaining Side "R"</th>
            <th>Is S > R</th>
        </tr>
        </thead>
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
        <table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
        <thead style="background-color: #6a9be8; color: white;">
        <tr>
            <th>Longest Side</th>
            <th>Largest Angle</th>
            <th>Is this Side Opposite to this Angle?</th>
        </tr>
        </thead>
        <tr style="background-color: #d9e1f2;">
            <td><input type="text" name="longest_side" placeholder="Enter Longest Side" style="width: 90%;"></td>
            <td><input type="text" name="largest_angle" placeholder="Enter Largest Angle" style="width: 90%;"></td>
            <td><input type="text" name="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 90%;"></td>
        </tr>
        </table>
        
                `,            
        
    }, formStructure: {
      conclusion: "studentConclusion",
      fields: [
        // EQUILATERAL
        { length1: "length_ac", label1: "Length of Side AC", length2: "length_af", label2: "Length of Side AF", length3: "length_cf", label3: "Length of Side CF", subtype: "equilateral" },
        { angle1: "angle_caf", label1: "∠CAF", angle2: "angle_acf", label2: "∠ACF", angle3: "angle_afc", label3: "∠AFC", subtype: "equilateral" },
        { result: "is_ac_af_cf", label: "Are all sides equal?", subtype: "equilateral" },
        { result: "is_angles_equal", label: "Are all angles 60°?", subtype: "equilateral" },
    
        // ISOSCELES
        { length1: "length_ac", label1: "Length of Side AC", length2: "length_af", label2: "Length of Side AF", length3: "length_cf", label3: "Length of Side CF", subtype: "isosceles" },
        { angle1: "angle_caf", label1: "∠CAF", angle2: "angle_acf", label2: "∠ACF", angle3: "angle_afc", label3: "∠AFC", subtype: "isosceles" },
        { result: "isosceles_sides_equal", label: "Are any two sides equal?", subtype: "isosceles" },
        { result: "isosceles_sides_details", label: "Equal Sides", subtype: "isosceles" },
        { result: "isosceles_angles_equal", label: "Are opposite angles equal?", subtype: "isosceles" },
        { result: "isosceles_angles_details", label: "Equal Angles", subtype: "isosceles" },
        { sum: "sum_s_1", remaining: "remaining_side_1", result: "is_s_greater_r_1", label: "Check AC+AF > CF", subtype: "isosceles" },
        { sum: "sum_s_2", remaining: "remaining_side_2", result: "is_s_greater_r_2", label: "Check AC+CF > AF", subtype: "isosceles" },
        { sum: "sum_s_3", remaining: "remaining_side_3", result: "is_s_greater_r_3", label: "Check AF+CF > AC", subtype: "isosceles" },
        { side: "longest_side", angle: "largest_angle", result: "is_side_opposite_angle", label: "Is longest side opposite largest angle?", subtype: "isosceles" },
    
        // SCALENE — same structure as isosceles
        { length1: "length_ac", label1: "Length of Side AC", length2: "length_af", label2: "Length of Side AF", length3: "length_cf", label3: "Length of Side CF", subtype: "scalene" },
        { angle1: "angle_caf", label1: "∠CAF", angle2: "angle_acf", label2: "∠ACF", angle3: "angle_afc", label3: "∠AFC", subtype: "scalene" },
        { sum: "sum_s_1", remaining: "remaining_side_1", result: "is_s_greater_r_1", label: "Check AC+AF > CF", subtype: "scalene" },
        { sum: "sum_s_2", remaining: "remaining_side_2", result: "is_s_greater_r_2", label: "Check AC+CF > AF", subtype: "scalene" },
        { sum: "sum_s_3", remaining: "remaining_side_3", result: "is_s_greater_r_3", label: "Check AF+CF > AC", subtype: "scalene" },
        { side: "longest_side", angle: "largest_angle", result: "is_side_opposite_angle", label: "Is longest side opposite largest angle?", subtype: "scalene" }
      ]
    },
    
     },
    basicProportionalityTheorem: {
        theoremDefinition: "If the line segment divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
         canvasConfig: {
      autoloadShape: "triangle",
      triangles: [
        {
          type: "right",
          vertices: [
            { x: 200, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "obtuse",
          vertices: [
            { x: 300, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        },
        {
          type: "acute",
          vertices: [
            { x: 100, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "E", M2: "D", M3: "B" },
          showMidPoints: true,
          showMeasurements: false
        }
      ]
    },
         buttonSet: [

                {
              label: "Right Angle Triangle",
              type: "right",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="50" y1="50" x2="20" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="50" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="80" y1="80" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                `
                },
                  {
              label: "Acute Triangle",
              type: "acute",
              svg: `
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="40" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="40" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
              `
            },

                      {
              label: "Obtuse Triangle",
              type: "obtuse",
              svg: `
               <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
                  <line x1="20" y1="80" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="20" y1="80" x2="50" y2="20" stroke="#1E88E5" stroke-width="2"/>
                  <line x1="50" y1="20" x2="80" y2="80" stroke="#1E88E5" stroke-width="2"/>
                </svg>
                        `
            },
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
              style="width: 100%; height: 80px; resize: none;></textarea>
    
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
              style="width: 100%; height: 80px; resize: none;></textarea>
    
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
              style="width: 100%; height: 80px; resize: none;" ></textarea>
    
</div>
<!-- Submit Button -->
<div style="margin-top: 20px;">
    <button id="submitButton" style="background-color: #6a9be8; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
        Submit
    </button>
</div>  `,
        },formStructure: {
          conclusion: "studentConclusion",
          fields: [
            // ===== Table 1: Segment AC / BC =====
            { length1: "length_ac", label1: "Length of AC", length2: "length_bc", label2: "Length of BC", result: "ratio_a", type: "ratio", subtype: "right" },
            { length1: "length_ac", label1: "Length of AC", length2: "length_bc", label2: "Length of BC", result: "ratio_a", type: "ratio", subtype: "acute" },
            { length1: "length_ac", label1: "Length of AC", length2: "length_bc", label2: "Length of BC", result: "ratio_a", type: "ratio", subtype: "obtuse" },
        
            // ===== Table 2: Segment AD / DF =====
            { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ratio_b", type: "ratio", subtype: "right" },
            { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ratio_b", type: "ratio", subtype: "acute" },
            { length1: "length_ad", label1: "Length of AD", length2: "length_df", label2: "Length of DF", result: "ratio_b", type: "ratio", subtype: "obtuse" },
        
            // ===== Ratio Comparison =====
            { result: "is_a_equals_b", label: "Is ratio_a = ratio_b?", subtype: "right" },
            { result: "is_a_equals_b", label: "Is ratio_a = ratio_b?", subtype: "acute" },
            { result: "is_a_equals_b", label: "Is ratio_a = ratio_b?", subtype: "obtuse" },
        
            // ===== Table 3: Angle Comparisons =====
            { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", type: "angle", subtype: "right" },
            { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", type: "angle", subtype: "acute" },
            { angle1: "angle_abd", label1: "∠ABD", angle2: "angle_acf", label2: "∠ACF", result: "is_abd_acf", type: "angle", subtype: "obtuse" },
        
            { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", type: "angle", subtype: "right" },
            { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", type: "angle", subtype: "acute" },
            { angle1: "angle_adb", label1: "∠ADB", angle2: "angle_afc2", label2: "∠AFC", result: "is_adb_afc", type: "angle", subtype: "obtuse" }
          ]
        },
        
},
}
 export const pageFeatures = {
    'triangle_theorem_07.html': { enableProtractorSnapping: true },
    'parallel_lines_04.html' : { enableProtractorSnapping: true },
    'circlePage.html': { enableProtractorSnapping: false },
};

export const currentPage = location.pathname.split('/').pop(); // Get current page
export const currentPageFeatures = pageFeatures[currentPage] || {}; // Get features for the current page

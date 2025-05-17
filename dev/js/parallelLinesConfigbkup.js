export  const functionalityConfig = {

           
        verticallyOpposite: {
           
        theoremDefinition: "Vertically Opposite Angles theorem states that when two lines intersect each other, the vertically opposite angles are equal",
        canvasConfig: {
            
           
            points: [
                { x: 345, y: 100, label: "A", color: "red", radius: 5 },
                { x: 100, y: 100, label: "M", color: "red", radius: 5 },
                { x: 520, y: 100, label: "N", color: "red", radius: 5 },
              
                { x: 40, y: 320, label: "P", color: "red", radius: 5 },
              
                { x: 330, y: 320, label: "D", color: "red", radius: 5 },
                { x: 275, y: 320, label: "B", color: "red", radius: 5 },
                { x: 455, y: 320, label: "F", color: "red", radius: 5 },
                { x: 600, y: 320, label: "Q", color: "red", radius: 5 },
              
                { x: 250, y: 400, label: "C", color: "red", radius: 5 },
                { x: 325, y: 400, label: "E", color: "red", radius: 5 },
                { x: 496, y: 400, label: "G", color: "red", radius: 5 },
              
                { x: 100, y: 400, label: "S", color: "red", radius: 5 },
                { x: 600, y: 400, label: "T", color: "red", radius: 5 },
              
                { x: 225, y: 480, label: "W", color: "red", radius: 5 },
                { x: 322, y: 480, label: "V", color: "red", radius: 5 },
                { x: 540, y: 480, label: "U", color: "red", radius: 5 },
              ],
              

            // Lines drawn without labels
            lines: [
                // Parallel lines
                // Parallel lines
                { endA: { x: 40, y: 100 }, endB: { x: 600, y: 100 }, type: "parallel", color: "green", enableDrag: false },
                { endA: { x: 40, y: 320 }, endB: { x: 600, y: 320 }, type: "parallel", color: "green", enableDrag: false },


             // Transversals
            { endA: { x: 300, y: 20 }, endB: { x: 600, y: 600 }, type: "transversal", enableDrag: false },
            { endA: { x: 350, y: 20 }, endB: { x: 315, y: 600 }, type: "transversal", enableDrag: false },
            { endA: { x: 365, y: 20 }, endB: { x: 190, y: 600 }, type: "transversal", enableDrag: false },

            // Connecting lines
            { endA: { x: 40, y: 400 }, endB: { x: 600, y: 400 }, type: "connecting", color: "green", enableDrag: false },


               
            ]
        },
     leftSidebarContent: `
            
   <h3>Vertically Opposite Angles Steps</h3>
<ul>
    <li>Select a pair of intersecting lines – Line ST and AU.</li>
    <li>Identify the pair of vertically opposite angles at <strong>Vertex G</strong>:</li>
    <ul>
        <li>∠AGT and ∠EGU</li>
        <li>∠AGE and ∠TGU</li>
    </ul>
    <li>Place the protractor on point <strong>G</strong> and measure the angles.</li>
    <li>Note the reading in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity with the following intersecting pairs of lines:</li>
    <ul>
        <li>PQ and AW, Note readings in <strong>Table 2</strong>.</li>
        <li>AV and ST, Note readings in <strong>Table 3</strong>.</li>
    </ul>
</ul>



        `,
        rightSidebarContent: `
            
<h4>Verification - Vertically Opposite Angles</h4>
<table class="table">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 20%;">
  </colgroup>
  <tr>
    <th>Angle Measure</th>
    <th>Vertically Opposite</th>
    <th>Equality Check</th>
  </tr>

  <!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠AGT</span><br>
    <input type="number" id="angle1" name="angle1" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠EGU</span><br>
    <input type="number" id="angle2" name="angle2" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠AGE</span><br>
    <input type="number" id="angle3" name="angle3" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠TGU</span><br>
    <input type="number" id="angle4" name="angle4" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ABP</span><br>
    <input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠QBW</span><br>
    <input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ABQ</span><br>
    <input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠PBW</span><br>
    <input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠AEG</span><br>
    <input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠SEV</span><br>
    <input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠AES</span><br>
    <input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠TEV</span><br>
    <input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>`
      ,
      formStructure: {
        conclusion: "studentConclusion",
        fields: [
          {
            angle1: "angle1", label1: "∠AGT",
            angle2: "angle2", label2: "∠EGU",
            result: "is_angle1_angle2"
          },
          {
            angle1: "angle3", label1: "∠AGE",
            angle2: "angle4", label2: "∠TGU",
            result: "is_angle3_angle4"
          },
          {
            angle1: "angle5", label1: "∠ABP",
            angle2: "angle6", label2: "∠QBW",
            result: "is_angle5_angle6"
          },
          {
            angle1: "angle7", label1: "∠ABQ",
            angle2: "angle8", label2: "∠PBW",
            result: "is_angle7_angle8"
          },
          {
            angle1: "angle9", label1: "∠AEG",
            angle2: "angle10", label2: "∠SEV",
            result: "is_angle9_angle10"
          },
          {
            angle1: "angle11", label1: "∠AES",
            angle2: "angle12", label2: "∠TEV",
            result: "is_angle11_angle12"
          }
        ]
      }
      ,
},     
        
parallelProperties: {

        defaultButtonType: 'sin',
       
        theoremDefinitions: {
        'sin': "If two parallel line are intersected by a transversal, then each pair of ‘corresponding angles’ are equal.",
        'cos': "If two parallel line are intersected by a transversal, then each pair of ‘alternate interior angles’ are equal.",
        'tan': "If two parallel line are intersected by a transversal, then each pair of ‘interior angles on the same side of transversal’ are supplementary."
    },

    
        canvasConfig: {
            
           
          points: [
            { x: 345, y: 100, label: "A", color: "red", radius: 5 },
            { x: 100, y: 100, label: "M", color: "red", radius: 5 },
            { x: 520, y: 100, label: "N", color: "red", radius: 5 },
          
            { x: 40, y: 320, label: "P", color: "red", radius: 5 },
          
            { x: 330, y: 320, label: "D", color: "red", radius: 5 },
            { x: 275, y: 320, label: "B", color: "red", radius: 5 },
            { x: 455, y: 320, label: "F", color: "red", radius: 5 },
            { x: 600, y: 320, label: "Q", color: "red", radius: 5 },
          
            { x: 250, y: 400, label: "C", color: "red", radius: 5 },
            { x: 325, y: 400, label: "E", color: "red", radius: 5 },
            { x: 496, y: 400, label: "G", color: "red", radius: 5 },
          
            { x: 100, y: 400, label: "S", color: "red", radius: 5 },
            { x: 600, y: 400, label: "T", color: "red", radius: 5 },
          
            { x: 225, y: 480, label: "W", color: "red", radius: 5 },
            { x: 322, y: 480, label: "V", color: "red", radius: 5 },
            { x: 540, y: 480, label: "U", color: "red", radius: 5 },
          ],
          

        // Lines drawn without labels
        lines: [
            // Parallel lines
            // Parallel lines
            { endA: { x: 40, y: 100 }, endB: { x: 600, y: 100 }, type: "parallel", color: "green", enableDrag: false },
            { endA: { x: 40, y: 320 }, endB: { x: 600, y: 320 }, type: "parallel", color: "green", enableDrag: false },


         // Transversals
        { endA: { x: 300, y: 20 }, endB: { x: 600, y: 600 }, type: "transversal", enableDrag: false },
        { endA: { x: 350, y: 20 }, endB: { x: 315, y: 600 }, type: "transversal", enableDrag: false },
        { endA: { x: 365, y: 20 }, endB: { x: 190, y: 600 }, type: "transversal", enableDrag: false },

        // Connecting lines
        { endA: { x: 40, y: 400 }, endB: { x: 600, y: 400 }, type: "connecting", color: "green", enableDrag: false },


           
        ]
        },
        buttonSet: [
                {
      label: "Corresponding Angles",
      type: "sin",
      svg: `
        <svg viewBox="0 0 100 100" width="40" height="40" stroke="#1E88E5" fill="none" stroke-width="3">
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="70" x2="90" y2="70" />
          <line x1="30" y1="10" x2="70" y2="90" />
          <!-- Arcs for corresponding angles -->
          <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
          <path d="M30 70 A10 10 0 0 1 40 60" stroke-width="2"/>
        </svg>
      `
    },
      {
      label: "Alternate Angles",
      type: "cos",
      svg: `
        <svg viewBox="0 0 100 100" width="40" height="40" stroke="#1E88E5" fill="none" stroke-width="3">
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="70" x2="90" y2="70" />
          <line x1="30" y1="10" x2="70" y2="90" />
          <!-- Arcs for alternate angles -->
          <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
          <path d="M70 70 A10 10 0 0 1 60 60" stroke-width="2"/>
        </svg>
      `
    },
      {
      label: "Interior Angles",
      type: "tan",
      svg: `
        <svg viewBox="0 0 100 100" width="40" height="40" stroke="#1E88E5" fill="none" stroke-width="3">
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="70" x2="90" y2="70" />
          <line x1="30" y1="10" x2="70" y2="90" />
          <!-- Arcs on same side to represent interior angles -->
          <path d="M30 30 A10 10 0 0 1 40 40" stroke-width="2"/>
          <path d="M30 70 A10 10 0 0 1 40 60" stroke-width="2"/>
        </svg>
      `
    },
                
            ],
        

        leftSidebarContent: {
            
                sin : `
        
           
            <h3> Instructions - Corresponding Angles </h3> 
           
<ul>
    <li>Given – Lines <strong>PQ</strong> is parallel to <strong>ST</strong>.</li>
    <li>Select the transversal – Line <strong>AU</strong>.</li>
    <li>Identify the pair of corresponding angles at <strong>Vertex F and G</strong>:</li>
    <ul>
        <li>∠AFQ and ∠AGT</li>
        <li>∠AFD and ∠AGE</li>
    </ul>
    <li>Place the protractor on points <strong>F</strong> and <strong>G</strong> and measure the angles.</li>
    <li>Note the reading in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity with the following set of lines:</li>
    <ul>
        <li><strong>PQ || ST</strong> and transversal line <strong>AV</strong>, Note readings in <strong>Table 2</strong>.</li>
        <li><strong>MN || PQ</strong> and transversal line <strong>AW</strong>, Note readings in <strong>Table 3</strong>.</li>
    </ul>
</ul>

               
        `,

           cos : `
           
            <h3>Instructions - Alternate Angles </h3> 
<ul>
    <li>Given – Lines <strong>PQ</strong> is parallel to <strong>ST</strong>.</li>
    <li>Select the transversal – Line <strong>AU</strong>.</li>
    <li>Identify the pair of alternate interior angles at <strong>Vertex F and G</strong>:</li>
    <ul>
        <li>∠QFG and ∠FGE</li>
        <li>∠DFG and ∠FGT</li>
    </ul>
    <li>Place the protractor on points <strong>F</strong> and <strong>G</strong> and measure the angles.</li>
    <li>Note the reading in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity with the following set of lines:</li>
    <ul>
        <li><strong>PQ || ST</strong> and transversal line <strong>AV</strong>, Note readings in <strong>Table 2</strong>.</li>
        <li><strong>MN || PQ</strong> and transversal line <strong>AW</strong>, Note readings in <strong>Table 3</strong>.</li>
    </ul>
</ul>
            
            
        `, tan : `
           
            <h3>Instructions - Interior Angles  </h3>

<ul>
    <li>Given – Lines <strong>PQ</strong> is parallel to <strong>ST</strong>.</li>
    <li>Select the transversal – Line <strong>AU</strong>.</li>
    <li>Identify the pair of interior angles on the same side of the transversal at <strong>Vertex F and G</strong>:</li>
    <ul>
        <li>∠QFG and ∠FGT</li>
        <li>∠DFG and ∠FGE</li>
    </ul>
    <li>Place the protractor on points <strong>F</strong> and <strong>G</strong> and measure the angles.</li>
    <li>Note the reading in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity with the following set of lines:</li>
    <ul>
        <li><strong>PQ || ST</strong> and transversal line <strong>AV</strong>, Note readings in <strong>Table 2</strong>.</li>
        <li><strong>MN || PQ</strong> and transversal line <strong>AW</strong>, Note readings in <strong>Table 3</strong>.</li>
    </ul>
</ul>

            
            
        `, 

         
         },

        rightSidebarContent: {
        sin:  `
            <h3>Verification - Corresponding Angles</h3>
<table class="table">
  <colgroup>
    <col style="width: 20%;">
    <col style="width: 18%;">
    <col style="width: 22%;">
  </colgroup>

  <tr>
    <th>Angle Measure</th>
    <th>Corresponding Angle</th>
    <th>Equality Check</th>
  </tr>

  <!-- Table 1 -->
  <tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
  <td><span>∠AFQ</span><br>
    <input type="number" name="angle1" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠AGT</span><br>
    <input type="number" name="angle2" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span name="is_angle1_angle2"></span></td>
</tr>

  <tr style="background-color: #d9e1f2;">
  <td><span>∠AFD</span><br>
    <input type="number" name="angle3" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠AGE</span><br>
    <input type="number" name="angle4" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span name="is_angle3_angle4"></span></td>
</tr>

  <!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ADF</span><br>
    <input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠AEG</span><br>
    <input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠PDV</span><br>
    <input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠SEV</span><br>
    <input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>


  <!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠NAB</span><br>
    <input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠QBC</span><br>
    <input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠MAB</span><br>
    <input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠PBC</span><br>
    <input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 90%;"
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>

</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('parallelProperties', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('parallelProperties', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


              
        `,

        cos:  `
            <h3>Verification - Alternate Angles</h3>
<table class="table">
  <colgroup>
    <col style="width: 20%;">
    <col style="width: 18%;">
    <col style="width: 22%;">
  </colgroup>

  <tr>
    <th>Angle Measure</th>
    <th>Alternate Interior Angle</th>
    <th>Equality Check</th>
  </tr>

 <!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠QFG</span><br>
    <input type="number" name="angle1" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠FGE</span><br>
    <input type="number" name="angle2" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠DFG</span><br>
    <input type="number" name="angle3" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠FGT</span><br>
    <input type="number" name="angle4" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠PDE</span><br>
    <input type="number" name="angle5" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠DEG</span><br>
    <input type="number" name="angle6" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠FDE</span><br>
    <input type="number" name="angle7" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠DES</span><br>
    <input type="number" name="angle8" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠NAB</span><br>
    <input type="number" name="angle9" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠ABP</span><br>
    <input type="number" name="angle10" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠MAB</span><br>
    <input type="number" name="angle11" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠ABF</span><br>
    <input type="number" name="angle12" placeholder="Enter" style="width: 90%;" 
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>
</table>


<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('parallelProperties', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('parallelProperties', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


           
    `, tan : `
           
          <h3>Verification - Interior Angles</h3>
<table class="table">
  <colgroup>
    <col style="width: 20%;">
    <col style="width: 20%;">
    <col style="width: 20%;">
  </colgroup>

  <tr>
    <th>Angle Measure</th>
    <th>Corresponding Interior Angle</th>
    <th>Sum = ?</th>
  </tr>

  <!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠QFG</span><br>
    <input type="number" name="angle1" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠FGT</span><br>
    <input type="number" name="angle2" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠DFG</span><br>
    <input type="number" name="angle3" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠FGE</span><br>
    <input type="number" name="angle4" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠PDE</span><br>
    <input type="number" name="angle5" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠DES</span><br>
    <input type="number" name="angle6" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠FDE</span><br>
    <input type="number" name="angle7" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠DEG</span><br>
    <input type="number" name="angle8" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#d9e1f2;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠NAB</span><br>
    <input type="number" name="angle9" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠ABF</span><br>
    <input type="number" name="angle10" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠MAB</span><br>
    <input type="number" name="angle11" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠ABP</span><br>
    <input type="number" name="angle12" placeholder="Enter" style="width: 90%;"
      oninput="sumMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>
</table>


<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave('parallelProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('parallelProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

            
        `, 
},

  formStructure: {
    conclusion: "studentConclusion",
    fields: [
      // SIN
      { angle1: "angle1", label1: "∠AFQ", angle2: "angle2", label2: "∠AGT", result: "is_angle1_angle2", subtype: "sin" },
      { angle1: "angle3", label1: "∠AFD", angle2: "angle4", label2: "∠AGE", result: "is_angle3_angle4", subtype: "sin" },
      { angle1: "angle5", label1: "∠ADF", angle2: "angle6", label2: "∠AEG", result: "is_angle5_angle6", subtype: "sin" },
      { angle1: "angle7", label1: "∠PDV", angle2: "angle8", label2: "∠SEV", result: "is_angle7_angle8", subtype: "sin" },
      { angle1: "angle9", label1: "∠NAB", angle2: "angle10", label2: "∠QBC", result: "is_angle9_angle10", subtype: "sin" },
      { angle1: "angle11", label1: "∠MAB", angle2: "angle12", label2: "∠PBC", result: "is_angle11_angle12", subtype: "sin" },

      // COS
      { angle1: "angle1", label1: "∠QFG", angle2: "angle2", label2: "∠FGE", result: "is_angle1_angle2", subtype: "cos" },
      { angle1: "angle3", label1: "∠DFG", angle2: "angle4", label2: "∠FGT", result: "is_angle3_angle4", subtype: "cos" },
      { angle1: "angle5", label1: "∠PDE", angle2: "angle6", label2: "∠DEG", result: "is_angle5_angle6", subtype: "cos" },
      { angle1: "angle7", label1: "∠FDE", angle2: "angle8", label2: "∠DES", result: "is_angle7_angle8", subtype: "cos" },
      { angle1: "angle9", label1: "∠NAB", angle2: "angle10", label2: "∠ABP", result: "is_angle9_angle10", subtype: "cos" },
      { angle1: "angle11", label1: "∠MAB", angle2: "angle12", label2: "∠ABF", result: "is_angle11_angle12", subtype: "cos" },

      // TAN
      { angle1: "angle1", label1: "∠QFG", angle2: "angle2", label2: "∠FGT", result: "sum_qfg_fgt", subtype: "tan" },
      { angle1: "angle3", label1: "∠DFG", angle2: "angle4", label2: "∠FGE", result: "sum_dfg_fge", subtype: "tan" },
      { angle1: "angle5", label1: "∠PDE", angle2: "angle6", label2: "∠DES", result: "sum_pde_des", subtype: "tan" },
      { angle1: "angle7", label1: "∠FDE", angle2: "angle8", label2: "∠DEG", result: "sum_fde_deg", subtype: "tan" },
      { angle1: "angle9", label1: "∠NAB", angle2: "angle10", label2: "∠ABF", result: "sum_nab_abf", subtype: "tan" },
      { angle1: "angle11", label1: "∠MAB", angle2: "angle12", label2: "∠ABP", result: "sum_mab_abp", subtype: "tan" }
    ]
  }
},



   
    exteriorAngles: {
        defaultButtonType: 'sin',
        theoremDefinition: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
         canvasConfig: {
           
          points: [
            { x: 620, y: 400, label: "E", color: "black", radius: 5 },
            { x: 20,  y: 500, label: "F", color: "black", radius: 4, type: 'sin' },
            { x: 220, y: 500, label: "F", color: "black", radius: 5, type: 'cos' },
            { x: 260, y: 500, label: "F", color: "black", radius: 4, type: 'tan' },
        ],
        
        lines: [
            // Parallel lines
            { endA: { x: 520, y: 400 }, endB: { x: 620, y: 400 }, type: "parallel", color: "blue", enableDrag: false },
        ],
        
        triangles: [
            {
                type: 'sin',
                vertices: [
                    { x: 120, y: 400 },
                    { x: 520, y: 400 },
                    { x: 320, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
            {
                type: 'cos',
                vertices: [
                    { x: 220, y: 400 },
                    { x: 520, y: 400 },
                    { x: 220, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
            {
                type: 'tan',
                vertices: [
                    { x: 220, y: 400 },
                    { x: 520, y: 400 },
                    { x: 120, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
        ]
      },
         buttonSet: [
                 {
    type: "sin",
    label: "Acute Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Acute Angle">
        <!-- Short angle -->
        <line x1="20" y1="80" x2="50" y2="20" />
        <line x1="20" y1="80" x2="80" y2="80" />
        <path d="M30 80 A10 10 0 0 1 40 70" stroke="#1E88E5" stroke-width="2" fill="none"/>
      </svg>
    `
  },
  {
    type: "cos",
    label: "Right Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Right Angle">
        <!-- Right angle shape -->
        <line x1="20" y1="80" x2="20" y2="30" />
        <line x1="20" y1="80" x2="70" y2="80" />
        <line x1="20" y1="30" x2="70" y2="80" />
        <!-- Right angle indicator -->
        <path d="M20 70 L30 70 L30 80" stroke="#1E88E5" stroke-width="2" fill="none"/>
      </svg>
    `
  },
  {
    type: "tan",
    label: "Obtuse Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Obtuse Angle">
        <!-- Long angle -->
        <line x1="20" y1="80" x2="60" y2="20" />
        <line x1="20" y1="80" x2="80" y2="80" />
        <path d="M35 80 A20 20 0 0 1 65 60" stroke="#1E88E5" stroke-width="2" fill="none"/>
      </svg>
    `
  },
            ],
       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3> Instructions - Exterior Angles  </h3> 

<ul>
    <li>In <strong>ΔABC</strong>, extend the side <strong>BC</strong> towards point <strong>E</strong> to make an exterior angle – <strong>∠ACE</strong>.</li>
    <li>Identify the two interior opposite angles in <strong>ΔABC</strong>:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
    </ul>
    <li>Using the protractor, measure the three angles.</li>
    <li>Note the readings in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity by extending the side <strong>AB</strong> towards point <strong>F</strong>.</li>
    <li>Note the readings in <strong>Table 2</strong>.</li>
</ul>

               
        `,

           cos : `
           
          <h3>Instructions - Exterior Angles </h3>
<ul>
    <li>In <strong>ΔABC</strong>, extend the side <strong>BC</strong> towards point <strong>E</strong> to make an exterior angle – <strong>∠ACE</strong>.</li>
    <li>Identify the two interior opposite angles in <strong>ΔABC</strong>:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
    </ul>
    <li>Using the protractor, measure the three angles.</li>
    <li>Note the readings in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity by extending the side <strong>AB</strong> towards point <strong>F</strong>.</li>
    <li>Note the readings in <strong>Table 2</strong>.</li>
</ul>

            
            
        `, 

           tan : `
           
          <h3>Instructions - Exterior Angles </h3>
<ul>
    <li>In <strong>ΔABC</strong>, extend the side <strong>BC</strong> towards point <strong>E</strong> to make an exterior angle – <strong>∠ACE</strong>.</li>
    <li>Identify the two interior opposite angles in <strong>ΔABC</strong>:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
    </ul>
    <li>Using the protractor, measure the three angles.</li>
    <li>Note the readings in <strong>Table 1</strong>.</li>
</ul>

<h3>Extended Activity</h3>
<ul>
    <li>Do the same activity by extending the side <strong>AB</strong> towards point <strong>F</strong>.</li>
    <li>Note the readings in <strong>Table 2</strong>.</li>
</ul>

            
            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
             <h3>Verification - Exterior Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Measure 1</th>
            <th>Measure 2</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Exterior Angle</td>
            <td>
                <label for="ext_angle1">∠ACE:</label>
                <input type="number" id="ext_angle1" name="ext_angle1" placeholder="Enter ∠ACE" style="width: 90px"
                  oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                          compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
              </td>
              <td>
                <label for="ext_angle2">∠CBF:</label>
                <input type="number" id="ext_angle2" name="ext_angle2" placeholder="Enter ∠CBF" style="width: 90px"
                  oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                          compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
              </td>
        </tr>
        <tr>
            <td>Opposite Interior 1</td>
            <td>
                <label for="opp_int_angle_a_1">∠BAC:</label>
                <input type="number" id="opp_int_angle_a_1" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
                  oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                          compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
              </td>
              <td>
                <label for="opp_int_angle_b_1">∠ABC:</label>
                <input type="number" id="opp_int_angle_b_1" name="opp_int_angle_b_1" placeholder="Enter ∠ABC" style="width: 90px"
                  oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                          compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
               </td>
        </tr>
        <tr>
            <td>Opposite Interior 2</td>
           <td>
            <label for="opp_int_angle_a_2">∠ABC:</label>
            <input type="number" id="opp_int_angle_a_2" name="opp_int_angle_a_2" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                      compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
          </td>
          <td>
            <label for="opp_int_angle_b_2">∠ACB:</label>
            <input type="number" id="opp_int_angle_b_2" name="opp_int_angle_b_2" placeholder="Enter ∠ACB" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                      compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
          </td>
        </tr>
        <tr>
            <td>Sum of Opposite Interior Angles</td>
            <td><span id="sum_a1_a2">(calculated)</span></td>
            <td><span id="sum_b1_b2">(calculated)</span></td>
        </tr>
        
    </tbody>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 
   <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


               
        `,

           cos : `
           
            <h3>Verification - Exterior Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Measure 1</th>
            <th>Measure 2</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Exterior Angle</td>
            <td><label for="ext_angle1">∠ACE: </label><input type="number" id="ext_angle1" name="ext_angle1" placeholder="Enter ∠ACE" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2','ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td><label for="ext_angle2">∠CBF: </label> <input type="number" id="ext_angle2" name="ext_angle2" placeholder="Enter ∠CBF" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Opposite Interior 1</td>
            <td> <label for="opp_int_angle_a_1">∠BAC: </label> <input type="number" id="opp_int_angle_a_1" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td> <label for="opp_int_angle_b_1">∠ABC: </label><input type="number" id="opp_int_angle_b_1" name="opp_int_angle_b_1" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Opposite Interior 2</td>
            <td><label for="opp_int_angle_a_2">∠ABC: </label> <input type="number" id="opp_int_angle_a_2" name="opp_int_angle_a_2" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td><label for="opp_int_angle_b_2">∠ACB: </label> <input type="number" id="opp_int_angle_b_2" name="opp_int_angle_b_2" placeholder="Enter ∠ACB" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Sum of Opposite Interior Angles</td>
            <td><span id="sum_a1_a2">(calculated)</span></td>
            <td><span id="sum_b1_b2">(calculated)</span></td>
        </tr>
        
    </tbody>
</table>
            
  <!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
        
        `, 

           tan : `
           
            <h3>Verification - Exterior Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Measure 1</th>
            <th>Measure 2</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Exterior Angle</td>
            <td><label for="ext_angle1">∠ACE: </label><input type="number" id="ext_angle1" name="ext_angle1" placeholder="Enter ∠ACE" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2','ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td><label for="ext_angle2">∠CBF: </label> <input type="number" id="ext_angle2" name="ext_angle2" placeholder="Enter ∠CBF" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Opposite Interior 1</td>
            <td> <label for="opp_int_angle_a_1">∠BAC: </label> <input type="number" id="opp_int_angle_a_1" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td> <label for="opp_int_angle_b_1">∠ABC: </label><input type="number" id="opp_int_angle_b_1" name="opp_int_angle_b_1" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Opposite Interior 2</td>
            <td><label for="opp_int_angle_a_2">∠ABC: </label> <input type="number" id="opp_int_angle_a_2" name="opp_int_angle_a_2" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_a_1', 'opp_int_angle_a_2', 'sum_a1_a2', 'ext_angle1'); 
                       compareMeasures('ext_angle1', 'sum_a1_a2', 'is_ext_int1');">
            </td>
            <td><label for="opp_int_angle_b_2">∠ACB: </label> <input type="number" id="opp_int_angle_b_2" name="opp_int_angle_b_2" placeholder="Enter ∠ACB" style="width: 90px"
              oninput="sumMeasures('opp_int_angle_b_1', 'opp_int_angle_b_2', 'sum_b1_b2', 'ext_angle2'); 
                       compareMeasures('ext_angle2', 'sum_b1_b2', 'is_ext_int2');">
            </td>
        </tr>
        <tr>
            <td>Sum of Opposite Interior Angles</td>
            <td><span id="sum_a1_a2">(calculated)</span></td>
            <td><span id="sum_b1_b2">(calculated)</span></td>
        </tr>
        
    </tbody>
</table>
  
<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

            
        `,  



    },

    formStructure: {
      conclusion: "studentConclusion",
      fields: [
        // --- SIN subtype ---
        { ext: "ext_angle1", label: "∠ACE", int1: "opp_int_angle_a_1", int2: "opp_int_angle_a_2", sum: "sum_a1_a2", result: "is_ext_int1", subtype: "sin" },
        { ext: "ext_angle2", label: "∠CBF", int1: "opp_int_angle_b_1", int2: "opp_int_angle_b_2", sum: "sum_b1_b2", result: "is_ext_int2", subtype: "sin" },
    
        // --- COS subtype ---
        { ext: "ext_angle1", label: "∠ACE", int1: "opp_int_angle_a_1", int2: "opp_int_angle_a_2", sum: "sum_a1_a2", result: "is_ext_int1", subtype: "cos" },
        { ext: "ext_angle2", label: "∠CBF", int1: "opp_int_angle_b_1", int2: "opp_int_angle_b_2", sum: "sum_b1_b2", result: "is_ext_int2", subtype: "cos" },
    
        // --- TAN subtype ---
        { ext: "ext_angle1", label: "∠ACE", int1: "opp_int_angle_a_1", int2: "opp_int_angle_a_2", sum: "sum_a1_a2", result: "is_ext_int1", subtype: "tan" },
        { ext: "ext_angle2", label: "∠CBF", int1: "opp_int_angle_b_1", int2: "opp_int_angle_b_2", sum: "sum_b1_b2", result: "is_ext_int2", subtype: "tan" }
      ]
    }
    

},

angleSumProperties: {
        defaultButtonType: 'sin',
        theoremDefinition: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
         canvasConfig: {
           
          points: [
            { x: 620, y: 400, label: "E", color: "black", radius: 5 },
        ],
        
        lines: [
            // Parallel lines
            { endA: { x: 520, y: 400 }, endB: { x: 620, y: 400 }, type: "parallel", color: "blue", enableDrag: false },
        ],
        
        triangles: [
            {
                type: 'sin',
                vertices: [
                    { x: 120, y: 400 },
                    { x: 520, y: 400 },
                    { x: 320, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
            {
                type: 'cos',
                vertices: [
                    { x: 220, y: 400 },
                    { x: 520, y: 400 },
                    { x: 220, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
            {
                type: 'tan',
                vertices: [
                    { x: 220, y: 400 },
                    { x: 520, y: 400 },
                    { x: 120, y: 100 },
                ],
                labels: { A: 'B', B: 'C', C: 'A' },
                enableDrag: false,
                showMidpoints: false,
                showMeasurements: false,
            },
        ]
      },       
         buttonSet: [
                 {
    type: "sin",
    label: "Acute Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Acute Angle">
        <!-- Short angle -->
        <line x1="20" y1="80" x2="50" y2="20" />
        <line x1="20" y1="80" x2="80" y2="80" />
        <path d="M30 80 A10 10 0 0 1 40 70" stroke="#1E88E5" stroke-width="4" fill="none"/>
      </svg>
    `
  },
  {
    type: "cos",
    label: "Right Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Right Angle">
        <!-- Right angle shape -->
        <line x1="20" y1="80" x2="20" y2="30" />
        <line x1="20" y1="80" x2="70" y2="80" />
        <line x1="20" y1="30" x2="70" y2="80" />
        <!-- Right angle indicator -->
        <path d="M20 70 L30 70 L30 80" stroke="#1E88E5" stroke-width="4" fill="none"/>
      </svg>
    `
  },
  {
    type: "tan",
    label: "Obtuse Angle",
    svg: `
      <svg viewBox="0 0 100 100" fill="none" stroke="#1E88E5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" title="Obtuse Angle">
        <!-- Long angle -->
        <line x1="20" y1="80" x2="0" y2="20" />
        <line x1="20" y1="80" x2="80" y2="80" />
        <path d="M35 80 A20 20 0 0 1 65 60" stroke="#1E88E5" stroke-width="4" fill="none"/>
      </svg>
    `
  },
            ],
       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3>Instructions - Angle Sum Properties </h3>   

<ul>
    <li>In the given triangle ΔABC, using the protractor measure the interior angles:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
        <li>∠ACB</li>
    </ul>
    <li>Note the reading in Table 1.</li>
</ul>

               
        `,

           cos : `
           
           <h3>Instructions - Angle Sum Properties </h3>
<ul>
    <li>In the given triangle ΔABC, using the protractor measure the interior angles:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
        <li>∠ACB</li>
    </ul>
    <li>Note the reading in Table 1.</li>
</ul>

            
            
        `, 

           tan : `
           
          <h3>Instructions - Angle Sum Properties </h3>
<ul>
    <li>In the given triangle ΔABC, using the protractor measure the interior angles:</li>
    <ul>
        <li>∠BAC</li>
        <li>∠ABC</li>
        <li>∠ACB</li>
    </ul>
    <li>Note the reading in Table 1.</li>
</ul>

            
            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
            <h3>Verification for Properties of Triangles</h3>

    <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Angle Measure </th>
            
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Interior Angle ∠ABC </td>
           <td>  <input type="number" id="angle1" name="opp_int_angle_a_1" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">

            </td>   
        </tr>
        <tr>
            <td>Interior Angle ∠BAC </td>
            <td> <input type="number" id="angle2" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
           
        </tr>
        <tr>
            <td>Interior Angle ∠ACB</td>
            <td> <input type="number" id="angle3" name="opp_int_angle_a_2" placeholder="Enter ∠ACB" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
            
        </tr>
        <tr>
            <td>Sum of Interior Angles</td>
            <td><span id="result">(calculated)</span></td>
         
        </tr>
        
    </tbody>
</table>
        
<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

    
               
        `,

           cos : `
           
                        <h3>Verification for Properties of Triangles</h3>

    <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Angle Measure </th>
            
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Interior Angle ∠ABC </td>
           <td>  <input type="number" id="angle1" name="opp_int_angle_a_1" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">

            </td>   
        </tr>
        <tr>
            <td>Interior Angle ∠BAC </td>
            <td> <input type="number" id="angle2" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
           
        </tr>
        <tr>
            <td>Interior Angle ∠ACB</td>
            <td> <input type="number" id="angle3" name="opp_int_angle_a_2" placeholder="Enter ∠ACB" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
            
        </tr>
        <tr>
            <td>Sum of Interior Angles</td>
            <td><span id="result">(calculated)</span></td>
         
        </tr>
        
    </tbody>
</table>
    
<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

            
        `, 

           tan : `
           
                       <h3>Verification for Properties of Triangles</h3>

    <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
        <col style="width: 50%;">
        <col style="width: 25%;">
        
    </colgroup>
    <thead>
        <tr>
            <th>Angle Name</th>
            <th>Angle Measure </th>
            
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            <td>Interior Angle ∠ABC </td>
           <td>  <input type="number" id="angle1" name="opp_int_angle_a_1" placeholder="Enter ∠ABC" style="width: 90px"
              oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">

            </td>   
        </tr>
        <tr>
            <td>Interior Angle ∠BAC </td>
            <td> <input type="number" id="angle2" name="opp_int_angle_a_1" placeholder="Enter ∠BAC" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
           
        </tr>
        <tr>
            <td>Interior Angle ∠ACB</td>
            <td> <input type="number" id="angle3" name="opp_int_angle_a_2" placeholder="Enter ∠ACB" style="width: 90px"
               oninput="sumMeasures('angle1', 'angle2', 'result', 180, 'angle3'); ">
            </td>
            
        </tr>
        <tr>
            <td>Sum of Interior Angles</td>
            <td><span id="result">(calculated)</span></td>
         
        </tr>
        
    </tbody>
</table>
    
<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
</div>

<div style="margin-top: 15px;">
 <button id="save-btn" onclick="handleSave()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit()" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


        `,  
      }, // end of rightSidebarContent

      formStructure: {
        conclusion: "studentConclusion",
        fields: [
          // --- SIN subtype ---
          {
            angle1: "angle1", label1: "∠ABC",
            angle2: "angle2", label2: "∠BAC",
            angle3: "angle3", label3: "∠ACB",
            sum: "result",
            subtype: "sin"
          },
      
          // --- COS subtype ---
          {
            angle1: "angle1", label1: "∠ABC",
            angle2: "angle2", label2: "∠BAC",
            angle3: "angle3", label3: "∠ACB",
            sum: "result",
            subtype: "cos"
          },
      
          // --- TAN subtype ---
          {
            angle1: "angle1", label1: "∠ABC",
            angle2: "angle2", label2: "∠BAC",
            angle3: "angle3", label3: "∠ACB",
            sum: "result",
            subtype: "tan"
          }
        ]
      }
      
    }, // end of angleSumProperties
  } // end of functionalityConfig object

  // ✅ Proper export statement
 // export { functionalityConfig };
  
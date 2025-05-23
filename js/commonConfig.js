export  const functionalityConfig = {

           
    verticallyOpposite: {
    
    theoremTitle: "Vertically Opposite",
    defaultButtonType: 'sin',   
    theoremDefinition: "Vertically Opposite Angles theorem states that when two lines intersect each other, the vertically opposite angles are equal",
    canvasConfig: {
        
        showLabels: true ,
        points: [
            { x: 340, y: 200, label: "A", color: "red", radius: 5 },
            { x: 100, y: 200, label: "M", color: "red", radius: 5 },
            { x: 520, y: 200, label: "N", color: "red", radius: 5 },
          
            { x: 40, y: 320, label: "P", color: "red", radius: 5 },
          
            { x: 340, y: 320, label: "D", color: "red", radius: 5 },
            { x: 295, y: 320, label: "B", color: "red", radius: 5 },
            { x: 420, y: 320, label: "F", color: "red", radius: 5 },
            { x: 600, y: 320, label: "Q", color: "red", radius: 5 },
          
            { x: 265, y: 400, label: "C", color: "red", radius: 5 },
            { x: 340, y: 400, label: "E", color: "red", radius: 5 },
            { x: 470, y: 400, label: "G", color: "red", radius: 5 },
          
            { x: 100, y: 400, label: "S", color: "red", radius: 5 },
            { x: 600, y: 400, label: "T", color: "red", radius: 5 },
          
            { x: 236, y: 480, label: "W", color: "red", radius: 5 },
            { x: 340, y: 480, label: "V", color: "red", radius: 5 },
            { x: 520, y: 480, label: "U", color: "red", radius: 5 },
          ],
          
        arcs: [{
            vertex: { x: 420, y: 320 },
            pointA: { x: 405, y: 300 },
            pointB: { x: 440, y: 320 },
            scale: 0.65,
             color: 'red'
    },{
            vertex: { x: 470, y: 400 },
            pointA: { x: 458, y: 380 },
            pointB: { x: 510, y: 400 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 420, y: 320 },
            pointB: { x: 402, y: 305 },
            pointA: { x: 395, y: 320 },
            scale: 1.2,
             color: 'green'
    },{
            vertex: { x: 470, y: 400 },
            pointA: { x: 440, y: 400 },
            pointB: { x: 458, y: 380 },
            scale: 1.2,
             color: 'green'
    },{
            vertex: { x: 340, y: 320 },
            pointA: { x: 340, y: 300 },
            pointB: { x: 355, y: 320 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 340, y: 400 },
            pointA: { x: 340, y: 380 },
            pointB: { x: 345, y: 400 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 340, y: 320 },
            pointB: { x: 320, y: 320 },
            pointA: { x: 340, y: 340 },
            scale: 0.75,
             color: 'green'
    },{
            vertex: { x: 340, y: 400 },
            pointB: { x: 310, y: 400 },
            pointA: { x: 340, y: 420 },
            scale: 0.85,
             color: 'green'
    },{
            vertex: { x: 342, y: 200 },
            pointA: { x: 362, y: 200 },
            pointB: { x: 335, y: 220 },
            scale: 0.85,    
             color: 'red'
    },{
            vertex: { x: 300, y: 320 },
            pointA: { x: 320, y: 320 },
            pointB: { x: 290, y: 340 },
            scale: 0.95,
             color: 'red'
    },{
            vertex: { x: 340, y: 200 },
            pointB: { x: 325, y: 200 },
            pointA: { x: 332, y: 218 },
            scale: 0.85,
             color: 'green'
    },{
            vertex: { x: 300, y: 320 },
            pointB: { x: 280, y: 320 },
            pointA: { x: 290, y: 340 },
            scale: 0.95,
             color: 'green'
    }],
  
        // Lines drawn without labels
        lines: [
            // Parallel lines
            // Parallel lines
            { endA: { x: 40, y: 200 }, endB: { x: 600, y: 200 }, type: "parallel", color: "green", enableDrag: false },
            { endA: { x: 40, y: 320 }, endB: { x: 600, y: 320 }, type: "parallel", color: "green", enableDrag: false },


         // Transversals
        { endA: { x: 263, y: 80 }, endB: { x: 560, y: 540 }, type: "transversal", enableDrag: false },
        { endA: { x: 340, y: 80 }, endB: { x: 340, y: 540 }, type: "transversal", enableDrag: false },
        { endA: { x: 385, y: 80 }, endB: { x: 215, y: 540 }, type: "transversal", enableDrag: false },

        // Connecting lines
        { endA: { x: 40, y: 400 }, endB: { x: 600, y: 400 }, type: "connecting", color: "green", enableDrag: false },


           
        ]
    },
 leftSidebarContent: {
 
 sin : `
        

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

 

    `},
    rightSidebarContent: {
      sin: 
     `
<h3 id="sidebar-title">Verification - Opposite Angles</h3>        

<table class="table">
<colgroup>
<col style="width: 15%;">
<col style="width: 15%;">
<col style="width: 20%;">
</colgroup>

<thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Angle Measure</th>
    <th>Vertically Opposite</th>
    <th>Equality Check</th>
  </tr>
</thead>

<!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠AGT</span><br>
<input type="number" id="angle1" name="angle1" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
</td>
<td><span>∠EGU</span><br>
<input type="number" id="angle2" name="angle2" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
</td>
<td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠AGE</span><br>
<input type="number" id="angle3" name="angle3" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
</td>
<td><span>∠TGU</span><br>
<input type="number" id="angle4" name="angle4" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
</td>
<td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠ABP</span><br>
<input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
</td>
<td><span>∠QBW</span><br>
<input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
</td>
<td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠ABQ</span><br>
<input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
</td>
<td><span>∠PBW</span><br>
<input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
</td>
<td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠AEG</span><br>
<input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
</td>
<td><span>∠SEV</span><br>
<input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
</td>
<td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠AES</span><br>
<input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
</td>
<td><span>∠TEV</span><br>
<input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 60px;"
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
<button id="save-btn" onclick="handleSave('verticallyOpposite', 'sin')", style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
Save
</button>
<button id="submitButton" onclick="handleSubmit('verticallyOpposite', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
Submit
</button>
</div>` ,
} ,
  formStructure: {
    conclusion: "studentConclusion",
    
    fields: [{
      subtype : "sin",  
      angles: [
        { id: "angle1", label: "∠AGT" },
        { id: "angle2", label: "∠EGU" },
        { id: "angle3", label: "∠AGE" },
        { id: "angle4", label: "∠TGU" },
        { id: "angle5", label: "∠ABP" },
        { id: "angle6", label: "∠QBW" },
        { id: "angle7", label: "∠ABQ" },
        { id: "angle8", label: "∠PBW" },
        { id: "angle9", label: "∠AEG" },
        { id: "angle10", label: "∠SEV" },
        { id: "angle11", label: "∠AES" },
        { id: "angle12", label: "∠TEV" }
      ],
      results: [
        { id: "is_angle1_angle2", label: "∠AGT = ∠EGU", derivedFrom: ["angle1", "angle2"], type: "compare" },
        { id: "is_angle3_angle4", label: "∠AGE = ∠TGU", derivedFrom: ["angle3", "angle4"], type: "compare" },
        { id: "is_angle5_angle6", label: "∠ABP = ∠QBW", derivedFrom: ["angle5", "angle6"], type: "compare" },
        { id: "is_angle7_angle8", label: "∠ABQ = ∠PBW", derivedFrom: ["angle7", "angle8"], type: "compare" },
        { id: "is_angle9_angle10", label: "∠AEG = ∠SEVC", derivedFrom: ["angle9", "angle10"], type: "compare" },
        { id: "is_angle11_angle12", label: "∠AES = ∠TEV", derivedFrom: ["angle11", "angle12"], type: "compare" }
      ] 

    }
    ]
  },
},

parallelProperties: {

    theoremTitle: "Parallel Line Properties",
    defaultButtonType: 'sin',
   
    theoremDefinitions: {
    'sin': "If two parallel line are intersected by a transversal, then each pair of ‘corresponding angles’ are equal.",
    'cos': "If two parallel line are intersected by a transversal, then each pair of ‘alternate interior angles’ are equal.",
    'tan': "If two parallel line are intersected by a transversal, then each pair of ‘interior angles on the same side of transversal’ are supplementary."
},


    canvasConfig: {
        
      showLabels: true , 
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
     
       arcs: [{
            vertex: { x: 455, y: 320 },
            pointA: { x: 450, y: 305 },
            pointB: { x: 470, y: 320 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 496, y: 400 },
            pointA: { x: 492, y: 385 },
            pointB: { x: 510, y: 400 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 455, y: 320 },
            pointB: { x: 450, y: 305 },
            pointA: { x: 440, y: 320 },
            scale: 1.2,
             color: 'green'
    },{
            vertex: { x: 496, y: 400 },
            pointB: { x: 492, y: 385 },
            pointA: { x: 480, y: 400 },
            scale: 1.2,
             color: 'green'
    },{
            vertex: { x: 325, y: 320 },
            pointA: { x: 335, y: 300 },
            pointB: { x: 350, y: 320 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 322, y: 400 },
            pointA: { x: 330, y: 380 },
            pointB: { x: 345, y: 400 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 325, y: 320 },
            pointB: { x: 310, y: 320 },
            pointA: { x: 335, y: 340 },
            scale: 0.75,
             color: 'green'
    },{
            vertex: { x: 325, y: 405 },
            pointB: { x: 310, y: 400 },
            pointA: { x: 330, y: 420 },
            scale: 0.85,
             color: 'green'
    },{
            vertex: { x: 342, y: 100 },
            pointA: { x: 362, y: 100 },
            pointB: { x: 335, y: 120 },
            scale: 0.85,
             color: 'red'
    },{
            vertex: { x: 275, y: 320 },
            pointA: { x: 290, y: 320 },
            pointB: { x: 270, y: 340 },
            scale: 0.95,
             color: 'red'
    },{
            vertex: { x: 342, y: 100 },
            pointB: { x: 325, y: 100 },
            pointA: { x: 338, y: 118 },
            scale: 0.85,
             color: 'green'
    },{
            vertex: { x: 275, y: 320 },
            pointB: { x: 255, y: 320 },
            pointA: { x: 270, y: 340 },
            scale: 0.95,
             color: 'green'
    }],

    // Lines drawn without labels
    lines: [
        // Parallel lines
        // Parallel lines
        { endA: { x: 40, y: 100 }, endB: { x: 600, y: 100 }, type: "parallel", color: "green", enableDrag: false,  },
        { endA: { x: 40, y: 320 }, endB: { x: 600, y: 320 }, type: "parallel", color: "green", enableDrag: false },


     // Transversals
    { endA: { x: 305, y: 20 }, endB: { x: 600, y: 600 }, type: "transversal", enableDrag: false },
    { endA: { x: 350, y: 20 }, endB: { x: 315, y: 600 }, type: "transversal", enableDrag: false },
    { endA: { x: 370, y: 20 }, endB: { x: 190, y: 600 }, type: "transversal", enableDrag: false },

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
        <h3 id="sidebar-title">Verification - Corresponding Angles</h3>
<table class="table">
<colgroup>
<col style="width: 20%;">
<col style="width: 18%;">
<col style="width: 22%;">
</colgroup>


<thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Angle Measure</th>
    <th>Corresponding Angle</th>
    <th>Equality Check</th>
  </tr>
</thead>


<!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠AFQ</span><br>
<input type="number" id="angle1" name="angle1" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
</td>
<td><span>∠AGT</span><br>
<input type="number" id="angle2" name="angle2" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
</td>
<td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
<td><span>∠AFD</span><br>
<input type="number" id="angle3" name="angle3" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
</td>
<td><span>∠AGE</span><br>
<input type="number" id="angle4" name="angle4" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
</td>
<td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠ADF</span><br>
<input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
</td>
<td><span>∠AEG</span><br>
<input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
</td>
<td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
<td><span>∠PDV</span><br>
<input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
</td>
<td><span>∠SEV</span><br>
<input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
</td>
<td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>


<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
<td><span>∠NAB</span><br>
<input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
</td>
<td><span>∠QBC</span><br>
<input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
</td>
<td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
<td><span>∠MAB</span><br>
<input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 60px;"
  oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
</td>
<td><span>∠PBC</span><br>
<input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 60px;"
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
       <h3 id="sidebar-title">Verification - Alternate Angles</h3>
<table class="table">
<colgroup>
<col style="width: 20%;">
<col style="width: 18%;">
<col style="width: 22%;">
</colgroup>

<thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Angle Measure</th>
     <th>Alternate Angle</th>
    <th>Equality Check</th>
  </tr>
</thead>



<!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠QFG</span><br>
    <input type="number" id="angle1" name="angle1" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠FGE</span><br>
    <input type="number" id="angle2" name="angle2" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠DFG</span><br>
    <input type="number" id="angle3" name="angle3" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠FGT</span><br>
    <input type="number" id="angle4" name="angle4" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠PDE</span><br>
    <input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠DEG</span><br>
    <input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠FDE</span><br>
    <input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠DES</span><br>
    <input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠NAB</span><br>
    <input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠ABP</span><br>
    <input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠MAB</span><br>
    <input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠ABF</span><br>
    <input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 60px;" 
      oninput="compareMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
        style="width: 100%; height: 80px; resize: none;"></textarea>
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
       
      <h3 id="sidebar-title">Verification - Interior Angles</h3>
<table class="table">
<colgroup>
  <col style="width: 20%;">
  <col style="width: 20%;">
  <col style="width: 20%;">
</colgroup>

 
 <thead style="background-color:#6a9be8; color:white;">
  <tr>
    <th>Angle Measure</th>
    <th>Interior Angles</th>
    <th>Equality Check</th>
  </tr>
</thead>


<!-- Table 1 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠QFG</span><br>
    <input type="number" id="angle1" name="angle1" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span>∠FGT</span><br>
    <input type="number" id="angle2" name="angle2" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle1', 'angle2', 'is_angle1_angle2');">
  </td>
  <td><span id="is_angle1_angle2" name="is_angle1_angle2"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠DFG</span><br>
    <input type="number" id="angle3" name="angle3" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span>∠FGE</span><br>
    <input type="number" id="angle4" name="angle4" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle3', 'angle4', 'is_angle3_angle4');">
  </td>
  <td><span id="is_angle3_angle4" name="is_angle3_angle4"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠PDE</span><br>
    <input type="number" id="angle5" name="angle5" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span>∠DES</span><br>
    <input type="number" id="angle6" name="angle6" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle5', 'angle6', 'is_angle5_angle6');">
  </td>
  <td><span id="is_angle5_angle6" name="is_angle5_angle6"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠FDE</span><br>
    <input type="number" id="angle7" name="angle7" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span>∠DEG</span><br>
    <input type="number" id="angle8" name="angle8" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle7', 'angle8', 'is_angle7_angle8');">
  </td>
  <td><span id="is_angle7_angle8" name="is_angle7_angle8"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠NAB</span><br>
    <input type="number" id="angle9" name="angle9" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span>∠ABF</span><br>
    <input type="number" id="angle10" name="angle10" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle9', 'angle10', 'is_angle9_angle10');">
  </td>
  <td><span id="is_angle9_angle10" name="is_angle9_angle10"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠MAB</span><br>
    <input type="number" id="angle11" name="angle11" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span>∠ABP</span><br>
    <input type="number" id="angle12" name="angle12" placeholder="Enter" style="width: 60px;"
      oninput="sumMeasures('angle11', 'angle12', 'is_angle11_angle12');">
  </td>
  <td><span id="is_angle11_angle12" name="is_angle11_angle12"></span></td>
</tr>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
        style="width: 100%; height: 80px; resize: none;"></textarea>
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
    {
      subtype: "sin",
      angles: [
        { id: "angle1", label: "∠AFQ" },
        { id: "angle2", label: "∠AGT" },
        { id: "angle3", label: "∠AFD" },
        { id: "angle4", label: "∠AGE" },
        { id: "angle5", label: "∠ADF" },
        { id: "angle6", label: "∠AEG" },
        { id: "angle7", label: "∠PDV" },
        { id: "angle8", label: "∠SEV" },
        { id: "angle9", label: "∠NAB" },
        { id: "angle10", label: "∠QBC" },
        { id: "angle11", label: "∠MAB" },
        { id: "angle12", label: "∠PBC" }
      ],
      results: [
        { id: "is_angle1_angle2", label: "∠AFQ = ∠AGT", derivedFrom: ["angle1", "angle2"], type: "compare" },
        { id: "is_angle3_angle4", label: "∠AFD = ∠AGE", derivedFrom: ["angle3", "angle4"], type: "compare" },
        { id: "is_angle5_angle6", label: "∠ADF = ∠AEG", derivedFrom: ["angle5", "angle6"], type: "compare" },
        { id: "is_angle7_angle8", label: "∠PDV = ∠SEV", derivedFrom: ["angle7", "angle8"], type: "compare" },
        { id: "is_angle9_angle10", label: "∠NAB = ∠QBC", derivedFrom: ["angle9", "angle10"], type: "compare" },
        { id: "is_angle11_angle12", label: "∠MAB = ∠PBC", derivedFrom: ["angle11", "angle12"], type: "compare" }
      ]
    },
    {
      subtype: "cos",
      angles: [
        { id: "angle1", label: "∠QFG" },
        { id: "angle2", label: "∠FGE" },
        { id: "angle3", label: "∠DFG" },
        { id: "angle4", label: "∠FGT" },
        { id: "angle5", label: "∠PDE" },
        { id: "angle6", label: "∠DEG" },
        { id: "angle7", label: "∠FDE" },
        { id: "angle8", label: "∠DES" },
        { id: "angle9", label: "∠NAB" },
        { id: "angle10", label: "∠ABP" },
        { id: "angle11", label: "∠MAB" },
        { id: "angle12", label: "∠ABF" }
      ],
      results: [
        { id: "is_angle1_angle2", label: "∠QFG = ∠FGE", derivedFrom: ["angle1", "angle2"], type: "compare" },
        { id: "is_angle3_angle4", label: "∠DFG = ∠FGT", derivedFrom: ["angle3", "angle4"], type: "compare" },
        { id: "is_angle5_angle6", label: "∠PDE = ∠DEG", derivedFrom: ["angle5", "angle6"], type: "compare" },
        { id: "is_angle7_angle8", label: "∠FDE = ∠DES", derivedFrom: ["angle7", "angle8"], type: "compare" },
        { id: "is_angle9_angle10", label: "∠NAB = ∠ABP", derivedFrom: ["angle9", "angle10"], type: "compare" },
        { id: "is_angle11_angle12", label: "∠MAB = ∠ABF", derivedFrom: ["angle11", "angle12"], type: "compare" }
      ]
    },
    {
      subtype: "tan",
      angles: [
        { id: "angle1", label: "∠QFG" },
        { id: "angle2", label: "∠FGT" },
        { id: "angle3", label: "∠DFG" },
        { id: "angle4", label: "∠FGE" },
        { id: "angle5", label: "∠PDE" },
        { id: "angle6", label: "∠DES" },
        { id: "angle7", label: "∠FDE" },
        { id: "angle8", label: "∠DEG" },
        { id: "angle9", label: "∠NAB" },
        { id: "angle10", label: "∠ABF" },
        { id: "angle11", label: "∠MAB" },
        { id: "angle12", label: "∠ABP" }
      ],
      results: [
        { id: "is_angle1_angle2", label: "∠QFG + ∠FGT", derivedFrom: ["angle1", "angle2"], type: "sum" },
        { id: "is_angle3_angle4", label: "∠DFG + ∠FGE", derivedFrom: ["angle3", "angle4"], type: "sum" },
        { id: "is_angle5_angle6", label: "∠PDE + ∠DES", derivedFrom: ["angle5", "angle6"], type: "sum" },
        { id: "is_angle7_angle8", label: "∠FDE + ∠DEG", derivedFrom: ["angle7", "angle8"], type: "sum" },
        { id: "is_angle9_angle10", label: "∠NAB + ∠ABF", derivedFrom: ["angle9", "angle10"], type: "sum" },
        { id: "is_angle11_angle12", label: "∠MAB + ∠ABP", derivedFrom: ["angle11", "angle12"], type: "sum" }
      ]
    }
  ]
},

},
exteriorAngles: {
    theoremTitle: "Exterior Angles",
    defaultButtonType: 'sin',
    theoremDefinition: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
     canvasConfig: {
       
      points: [
        { x: 620, y: 400, label: "E", color: "black", radius: 5 },
        { x: 20,  y: 500, label: "F", color: "black", radius: 4, subtype: 'sin' },
        { x: 220, y: 500, label: "F", color: "black", radius: 5, subtype: 'cos' },
        { x: 260, y: 500, label: "F", color: "black", radius: 4, subtype: 'tan' },
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
       
        <h3 id="sidebar-title">Verification - Exterior Angles</h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>


 <thead style="background-color:#6a9be8; color:white;">
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
        <label for="angle1">∠ACE:</label>
        <input type="number" id="angle1" name="angle1" placeholder="Enter ∠ACE" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1',null, 'angle1'); ">
      </td>
      <td>
        <label for="angle2">∠CBF:</label>
        <input type="number" id="angle2" name="angle2" placeholder="Enter ∠CBF" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2',null,'angle2'); ">
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 1</td>
      <td>
        <label for="angle3">∠BAC:</label>
        <input type="number" id="angle3" name="angle3" placeholder="Enter ∠BAC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null,'angle1'); ">
                 
      </td>
      <td>
        <label for="angle5">∠ABC:</label>
        <input type="number" id="angle5" name="angle5" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                  
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 2</td>
      <td>
        <label for="angle4">∠ABC:</label>
        <input type="number" id="angle4" name="angle4" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null, 'angle1'); ">
                   
      </td>
      <td>
        <label for="angle6">∠ACB:</label>
        <input type="number" id="angle6" name="angle6" placeholder="Enter ∠ACB" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Sum of Opposite Interior Angles</td>
      <td><span id="result1">(calculated)</span></td>
      <td><span id="result2">(calculated)</span></td>
    </tr>
  </tbody>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
    style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('exteriorAngles', 'sin')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('exteriorAngles', 'sin')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>



           
    `,

       cos : `
       
         <h3 id="sidebar-title">Verification - Exterior Angles</h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <thead style="background-color:#6a9be8; color:white;">
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
        <label for="angle1">∠ACE:</label>
        <input type="number" id="angle1" name="angle1" placeholder="Enter ∠ACE" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null, 'angle1'); ">
                  
      </td>
      <td>
        <label for="angle2">∠CBF:</label>
        <input type="number" id="angle2" name="angle2" placeholder="Enter ∠CBF" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 1</td>
      <td>
        <label for="angle3">∠BAC:</label>
        <input type="number" id="angle3" name="angle3" placeholder="Enter ∠BAC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null,'angle1'); ">
                   
      </td>
      <td>
        <label for="angle5">∠ABC:</label>
        <input type="number" id="angle5" name="angle5" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                  
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 2</td>
      <td>
        <label for="angle4">∠ABC:</label>
        <input type="number" id="angle4" name="angle4" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null,'angle1'); ">
                  
      </td>
      <td>
        <label for="angle6">∠ACB:</label>
        <input type="number" id="angle6" name="angle6" placeholder="Enter ∠ACB" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Sum of Opposite Interior Angles</td>
      <td><span id="result1">(calculated)</span></td>
      <td><span id="result2">(calculated)</span></td>
    </tr>
  </tbody>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
    style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('exteriorAngles', 'cos')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('exteriorAngles', 'cos')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
    
    `, 

       tan : `
       
        <h3 id="sidebar-title">Verification - Exterior Angles</h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
   <thead style="background-color:#6a9be8; color:white;">
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
        <label for="angle1">∠ACE:</label>
        <input type="number" id="angle1" name="angle1" placeholder="Enter ∠ACE" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null,'angle1'); ">
                   
      </td>
      <td>
        <label for="angle2">∠CBF:</label>
        <input type="number" id="angle2" name="angle2" placeholder="Enter ∠CBF" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 1</td>
      <td>
        <label for="angle3">∠BAC:</label>
        <input type="number" id="angle3" name="angle3" placeholder="Enter ∠BAC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null, 'angle1'); ">
                   
      </td>
      <td>
        <label for="angle5">∠ABC:</label>
        <input type="number" id="angle5" name="angle5" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Opposite Interior 2</td>
      <td>
        <label for="angle4">∠ABC:</label>
        <input type="number" id="angle4" name="angle4" placeholder="Enter ∠ABC" style="width: 90px"
          oninput="sumMeasures('angle3', 'angle4', 'result1', null, 'angle1'); ">
                  
      </td>
      <td>
        <label for="angle6">∠ACB:</label>
        <input type="number" id="angle6" name="angle6" placeholder="Enter ∠ACB" style="width: 90px"
          oninput="sumMeasures('angle5', 'angle6', 'result2', null, 'angle2'); ">
                   
      </td>
    </tr>

    <tr>
      <td>Sum of Opposite Interior Angles</td>
      <td><span id="result1">(calculated)</span></td>
      <td><span id="result2">(calculated)</span></td>
    </tr>
  </tbody>
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
    style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('exteriorAngles', 'tan')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('exteriorAngles', 'tan')" 
    style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
        
    `,  



},

formStructure: {
  conclusion: "studentConclusion",
  fields: [
    {
      subtype: "sin",
      angles: [
        { id: "angle1", label: "∠ACE" },
        { id: "angle2", label: "∠CBF" },
        { id: "angle3", label: "∠BAC" },
        { id: "angle4", label: "∠ABC" },
        { id: "angle5", label: "∠ABC" },
        { id: "angle6", label: "∠ACB" }
      ],
      results: [
        { id: "result1", label: "Sum ∠BAC + ∠ABC", derivedFrom: ["angle3", "angle4"], type: "sum" },
        { id: "result2", label: "Sum ∠ABC + ∠ACB", derivedFrom: ["angle5", "angle6"], type: "sum" },
        { id: "is_ext_int1", label: "∠ACE = Sum of interior", derivedFrom: ["angle1", "result1"], type: "compare" },
        { id: "is_ext_int2", label: "∠CBF = Sum of interior", derivedFrom: ["angle2", "result2"], type: "compare" }
      ]
    },
    {
      subtype: "cos",
      angles: [
        { id: "angle1", label: "∠ACE" },
        { id: "angle2", label: "∠CBF" },
        { id: "angle3", label: "∠BAC" },
        { id: "angle4", label: "∠ABC" },
        { id: "angle5", label: "∠ABC" },
        { id: "angle6", label: "∠ACB" }
      ],
      results: [
        { id: "result1", label: "Sum ∠BAC + ∠ABC", derivedFrom: ["angle3", "angle4"], type: "sum" },
        { id: "result2", label: "Sum ∠ABC + ∠ACB", derivedFrom: ["angle5", "angle6"], type: "sum" },
        { id: "is_ext_int1", label: "∠ACE = Sum of interior", derivedFrom: ["angle1", "result1"], type: "compare" },
        { id: "is_ext_int2", label: "∠CBF = Sum of interior", derivedFrom: ["angle2", "result2"], type: "compare" }
      ]
    },
    {
      subtype: "tan",
      angles: [
        { id: "angle1", label: "∠ACE" },
        { id: "angle2", label: "∠CBF" },
        { id: "angle3", label: "∠BAC" },
        { id: "angle4", label: "∠ABC" },
        { id: "angle5", label: "∠ABC" },
        { id: "angle6", label: "∠ACB" }
      ],
      results: [
        { id: "result1", label: "Sum ∠BAC + ∠ABC", derivedFrom: ["angle3", "angle4"], type: "sum" },
        { id: "result2", label: "Sum ∠ABC + ∠ACB", derivedFrom: ["angle5", "angle6"], type: "sum" },
        { id: "is_ext_int1", label: "∠ACE = Sum of interior", derivedFrom: ["angle1", "result1"], type: "compare" },
        { id: "is_ext_int2", label: "∠CBF = Sum of interior", derivedFrom: ["angle2", "result2"], type: "compare" }
      ]
    }
  ]
},


},

angleSumProperties: {
    theoremTitle: "Angle Sum Properties", 
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
       
       <h3 id="sidebar-title">Verification for Properties of Triangles</h3>
<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
  <thead>
    <tr><th>Angle Name</th><th>Angle Measure</th></tr>
  </thead>
  <tbody style="background-color: #d9e1f2;">
    <tr>
      <td>Interior Angle ∠ABC</td>
      <td>
        <input type="number" id="angle1" name="angle1" placeholder="Enter ∠ABC" style="width: 60px"
            oninput="sumMeasures('angle1', 'angle2', 'result', 180, null, 'angle3'); "></td>
        <span id="check1"></span>
      </td>
    </tr>
    <tr>
      <td>Interior Angle ∠BAC</td>
      <td>
        <input type="number" id="angle2" name="angle2" placeholder="Enter ∠BAC" style="width: 60px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null, 'angle3'); "></td>
        <span id="check2"></span>
      </td>
    </tr>
    <tr>
      <td>Interior Angle ∠ACB</td>
      <td>
       <input type="number" id="angle3" name="angle3" placeholder="Enter ∠ACB" style="width: 60px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null, 'angle3'); "></td>
         <span id="check3"></span>
      </td>
    </tr>
    <tr>
      <td>Sum of Interior Angles</td>
      <td><span id="result">(calculated)</span></td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>


  <div style="margin-top: 15px;">
    <button id="save-btn" onclick="handleSave('angleSumProperties', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
    </button>
    <button id="submitButton" onclick="handleSubmit('angleSumProperties', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
    </button>
  </div>
           
    `,

       cos : `
       
                    
        <h3 id="sidebar-title">Verification for Properties of Triangles</h3>
  <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr><th>Angle Name</th><th>Angle Measure</th></tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
      <tr>
        <td>Interior Angle ∠ABC</td>
        <td><input type="number" id="angle1" name="angle1" placeholder="Enter ∠ABC" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null, 'angle3'); "></td>
      </tr>
      <tr>
        <td>Interior Angle ∠BAC</td>
        <td><input type="number" id="angle2" name="angle2" placeholder="Enter ∠BAC" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null,'angle3'); "></td>
      </tr>
      <tr>
        <td>Interior Angle ∠ACB</td>
        <td><input type="number" id="angle3" name="angle3" placeholder="Enter ∠ACB" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null,'angle3'); "></td>
      </tr>
      <tr>
        <td>Sum of Interior Angles</td>
        <td><span id="result">(calculated)</span></td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top: 15px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
  </div>

  <div style="margin-top: 15px;">
    <button id="save-btn" onclick="handleSave('angleSumProperties', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
    </button>
    <button id="submitButton" onclick="handleSubmit('angleSumProperties', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
    </button>
  </div>
        
    `, 

       tan : `
       
                   
        <h3 id="sidebar-title">Verification for Properties of Triangles</h3>
  <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr><th>Angle Name</th><th>Angle Measure</th></tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
      <tr>
        <td>Interior Angle ∠ABC</td>
        <td><input type="number" id="angle1" name="angle1" placeholder="Enter ∠ABC" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null. 'angle3')"; > </td>
      </tr>
      <tr>
        <td>Interior Angle ∠BAC</td>
        <td><input type="number" id="angle2" name="angle2" placeholder="Enter ∠BAC" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null,'angle3')"; > </td>
      </tr>
      <tr>
        <td>Interior Angle ∠ACB</td>
        <td><input type="number" id="angle3" name="angle3" placeholder="Enter ∠ACB" style="width: 90px"
        oninput="sumMeasures('angle1', 'angle2', 'result', 180, null,'angle3')"; > </td>
      </tr>
      <tr>
        <td>Sum of Interior Angles</td>
        <td><span id="result">(calculated)</span></td>
      </tr>
    </tbody>
  </table>

  <div style="margin-top: 15px;">
    <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
    <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"  ></textarea>
  </div>

  <div style="margin-top: 15px;">
    <button id="save-btn" onclick="handleSave('angleSumProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
    </button>
    <button id="submitButton" onclick="handleSubmit('angleSumProperties', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
    </button>
  </div>


    `,  
  }, // end of rightSidebarContent

  formStructure: {
  conclusion: "studentConclusion",
  fields: [
    {
      subtype: "sin",
      angles: [
        { id: "angle1", label: "∠ABC" },
        { id: "angle2", label: "∠BAC" },
        { id: "angle3", label: "∠ACB" }
      ],
      results: [
        {
          id: "result",
          label: "∠ABC + ∠BAC + ∠ACB",
          derivedFrom: ["angle1", "angle2", "angle3"],
          type: "sum"
        }
      ]
    },
    {
      subtype: "cos",
      angles: [
        { id: "angle1", label: "∠ABC" },
        { id: "angle2", label: "∠BAC" },
        { id: "angle3", label: "∠ACB" }
      ],
      results: [
        {
          id: "result",
          label: "∠ABC + ∠BAC + ∠ACB",
          derivedFrom: ["angle1", "angle2", "angle3"],
          type: "sum"
        }
      ]
    },
    {
      subtype: "tan",
      angles: [
        { id: "angle1", label: "∠ABC" },
        { id: "angle2", label: "∠BAC" },
        { id: "angle3", label: "∠ACB" }
      ],
      results: [
        {
          id: "result",
          label: "∠ABC + ∠BAC + ∠ACB",
          derivedFrom: ["angle1", "angle2", "angle3"],
          type: "sum"
        }
      ]
    }
  ]
},
},
    
    
    sineTheta: {
    theoremTitle: "Sine Theta",  
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
    // sin - 30°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 473.2, y: 200, label: 'E' },
                { x: 473.2, y: 300, label: 'A' }
              ],
               labels: { A: 'P', B: 'E', C: 'A' },
              showMidpoints: false,
              showMeasurements: false
            },
            // sin - 45°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 441.4, y: 158.6, label: 'R' },
                { x: 441.4, y: 300, label: 'Q' }
              ],
              labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
            },
            // sin - 60°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 400, y: 127, label: 'S' },
                { x: 400, y: 300, label: 'T' }
              ],
              labels: { A: 'P', B: 'S', C: 'T' },
              showMidpoints: false,
              showMeasurements: false
            },
            // cos - 5°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 499.2, y: 282.6, label: 'A' },
                { x: 499.2, y: 300, label: 'E' }
              ],
              labels: { A: 'P', B: 'A', C: 'E' },
              showMidpoints: false,
              showMeasurements: false
            },
            // cos - 85°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 317.4, y: 100.8, label: 'R' },
                { x: 317.4, y: 300, label: 'Q' }
              ],
             labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
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

    leftSidebarContent: {
        sin : 
    `
  
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

    `,
    cos :    `
  
   <h3>Instructions</h3>

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
},
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
            <td><input type="text" id="perpendicular-60" oninput="calculateSin(60)" /></td>
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
        <h3 id="sidebar-title">Verification Edge Angles:</h3>

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
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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

    theoremTitle: "Cosine Theta",
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
    // sin - 30°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 473.2, y: 200, label: 'E' },
                { x: 473.2, y: 300, label: 'A' }
              ],
               labels: { A: 'P', B: 'E', C: 'A' },
              showMidpoints: false,
              showMeasurements: false
            },
            // sin - 45°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 441.4, y: 158.6, label: 'R' },
                { x: 441.4, y: 300, label: 'Q' }
              ],
              labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
            },
            // sin - 60°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 400, y: 127, label: 'S' },
                { x: 400, y: 300, label: 'T' }
              ],
              labels: { A: 'P', B: 'S', C: 'T' },
              showMidpoints: false,
              showMeasurements: false
            },
            // cos - 5°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 499.2, y: 282.6, label: 'A' },
                { x: 499.2, y: 300, label: 'E' }
              ],
              labels: { A: 'P', B: 'A', C: 'E' },
              showMidpoints: false,
              showMeasurements: false
            },
            // cos - 85°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 317.4, y: 100.8, label: 'R' },
                { x: 317.4, y: 300, label: 'Q' }
              ],
             labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
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
    leftSidebarContent: {

        sin: `


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

    `,

cos: 
`
 <h3>Instructions</h3>
     
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
},
    
    rightSidebarContent: {
    sin:  `
        <h3 id="sidebar-title">Verification Regular Angles</h3>


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
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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
        <h3 id="sidebar-title">Verification Edge Angles </h3>

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
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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
    theoremTitle: "Trigonometric Ratios",
    theoremDefinition: "Trig. Ratios don’t change even if the length of the sides of the triangle changes.",
    defaultButtonType : 'sin',
    canvasConfig: {
        circle: [{ x: 300, y: 300 }, 200], // Circle center and radius

        triangles: [
  // radius = 200, angle = 45°
  {
    type: 'sin',
    vertices: [
      { x: 300, y: 300, label: 'P' },
      { x: 441.4, y: 158.6, label: 'R' },
      { x: 441.4, y: 300, label: 'Q' }
    ],
    labels: { A: 'P', B: 'R', C: 'Q' },
    showMidpoints: false,
    showMeasurements: false
  },

  // radius = 300, angle = 45°
  {
    type: 'sin',
    vertices: [
      { x: 300, y: 300, label: 'P' },
      { x: 512.1, y: 87.9, label: 'A' },
      { x: 512.1, y: 300, label: 'E' }
    ],
    labels: { A: 'P', B: 'A', C: 'E' },
    showMidpoints: false,
    showMeasurements: false
  },

  // radius = 200, angle = 60°
  {
    type: 'sin',
    vertices: [
      { x: 300, y: 300, label: 'P' },
      { x: 400.0, y: 127.0, label: 'S' },
      { x: 400.0, y: 300, label: 'T' }
    ],
    labels: { A: 'P', B: 'S', C: 'T' },
    showMidpoints: false,
    showMeasurements: false
  },

  // radius = 300, angle = 60°
  {
    type: 'sin',
    vertices: [
      { x: 300, y: 300, label: 'P' },
      { x: 450.0, y: 40.2, label: 'V' },
      { x: 450.0, y: 300, label: 'W' }
    ],
   labels: { A: 'P', B: 'V', C: 'W' },
    showMidpoints: false,
    showMeasurements: false
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
        
<h3 id="sidebar-title">Verification for Properties of Triangles</h3>

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


</div>

<div style="margin-top: 20px;">
<label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
<textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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
    theoremTitle: "Trigonometric Identities",
    defaultButtonType: 'sin',
    theoremDefinition: "Trigono Identities.",
    canvasConfig: {
        circle: [{ x: 300, y: 300 }, 200], // Circle center and radius

            triangles: [
            // sin: 30°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 473.2, y: 200, label: 'R' },
                { x: 473.2, y: 300, label: 'Q' }
              ],
              labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
            },

            // sin: 60°
            {
              type: 'sin',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 400, y: 127, label: 'S' },
                { x: 400, y: 300, label: 'T' }
              ],
              labels: { A: 'P', B: 'S', C: 'T' },
              showMidpoints: false,
              showMeasurements: false
            },

            // cos: 30°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 473.2, y: 200, label: 'R' },
                { x: 473.2, y: 300, label: 'Q' }
              ],
              labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
            },

            // cos: 60°
            {
              type: 'cos',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 400, y: 127, label: 'S' },
                { x: 400, y: 300, label: 'T' }
              ],
              labels: { A: 'P', B: 'S', C: 'T' },
              showMidpoints: false,
              showMeasurements: false
            },

            // tan: 30°
            {
              type: 'tan',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 473.2, y: 200, label: 'R' },
                { x: 473.2, y: 300, label: 'Q' }
              ],
              labels: { A: 'P', B: 'R', C: 'Q' },
              showMidpoints: false,
              showMeasurements: false
            },

            // tan: 60°
            {
              type: 'tan',
              vertices: [
                { x: 300, y: 300, label: 'P' },
                { x: 400, y: 127, label: 'S' },
                { x: 400, y: 300, label: 'T' }
              ],
              labels: { A: 'P', B: 'S', C: 'T' },
              showMidpoints: false,
              showMeasurements: false
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
          <h3>Instructions:</h3>
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
       
        <h3 id="sidebar-title">Verification for sin²θ + cos²θ = 1</h3> 
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
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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

       cos : `
       
        <h3 id="sidebar-title">Verification for 1 + tan²θ = sec²θ</h3>
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
          style="width: 100%; height: 80px; resize: none;" ></textarea>

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
       
        <h3 id="sidebar-title">Verification for cot²θ + 1 = cosec²θ</h3>
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
          style="width: 100%; height: 80px; resize: none;"></textarea>

</div>

<div style="margin-top: 15px;">
<button id="save-btn" onclick="handleSave('trigonoIdentities', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
Save
</button>
<button id="submitButton" onclick="handleSubmit('trigonoIdentities', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
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
  
},

    
    
    radiusTangent: {
        theoremTitle: "Radius Tangent",   
        theoremDefinition: "Tangent to a circle is perpendicular to the radius of the circle at the point of contact.",
        canvasConfig: {
            
            circle: [{ x: 300, y: 300 }, 200], 
           
            points: [
                { x: 300, y: 300, label: "O", color: "red", radius: 5 , subtype: "sin"},
                { x: 300, y: 100, label: "A", color: "red", radius: 5 , subtype: "sin"},
                { x: 440, y: 440, label: "B", color: "red", radius: 5 , subtype: "sin"},

                { x: 100, y: 300, label: "C", color: "red", radius: 5, subtype: "sin" },
               
                { x: 600, y: 100, label: "L", color: "red", radius: 5, subtype: "sin"},
                { x: 620, y: 260, label: "M", color: "red", radius: 5 ,subtype: "sin"},
                { x: 100, y: 600, label: "N", color: "red", radius: 5 , subtype: "sin"},

               
            ],

            // Lines drawn without labels
            lines: [
                // Parallel lines
                { endA: { x: 100, y: 300 }, endB: { x: 300, y: 300 }, type: "parallel",color: "red", enableDrag:false , subtype: "sin"  },
             
                { endA: { x: 300, y: 100 }, endB: { x: 300, y: 300 }, type: "parallel",color: "red", enableDrag:false ,subtype: "sin"   },

                // Transversals
                { endA: { x: 440, y: 440 }, endB: { x: 300, y: 300 }, type: "transversal", color: "red",enableDrag:false , subtype: "sin"  },
                { endA: { x: 300, y: 100 }, endB: { x: 600, y: 100 }, type: "transversal", color: "red",enableDrag:false , subtype: "sin" },
                { endA: { x: 100, y: 300 }, endB: { x: 100, y: 600 }, type: "transversal", color: "red",enableDrag:false , subtype: "sin"  },

                // Connecting lines
               
                { endA: { x: 440, y: 440 }, endB: { x: 620, y: 260 }, type: "connecting", color: "red", enableDrag:false ,   },

               
            ]
        },
     leftSidebarContent: `
            
   <h3>Radius Tangent Theorem </h3>
  <h2>Steps</h2>
    <ul>
        <li>Select a pair of tangent and radius – Line <strong>LA</strong> and <strong>AO</strong> respectively.</li>
        <li>Measure the angle at Point of contact <strong>A</strong>.</li>
        <li>∠LAO.</li>
        <li>Note the reading in the Table.</li>
    </ul>

    <h2>Extended Activity</h2>
    <ul>
        <li>Do the same activity with the pair of tangent and radius:</li>
        <ul>
            <li><strong>MB</strong> and <strong>BO</strong>, Note readings in Table.</li>
            <li><strong>NC</strong> and <strong>CO</strong>, Note readings in Table.</li>
        </ul>
    </ul>




        `,
        rightSidebarContent: `
            
    <h3 id="sidebar-title">Verification - Radius Tangent Theorem </h3>

    <h4>Table 1</h4>
<table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; text-align: center; font-family: Arial, sans-serif; font-size: 14px; width: 100%;">
  <thead style="background-color: #1f4e79; color: white;">
    <tr>
      <th>Reading</th>
      <th>Measure of Angle</th>
      <th>Is it perpendicular?</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #d9e1f2;">
      <td>1</td>
      <td>∠LAO</td>
      <td>Yes/No</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="text" name="angle_lao" placeholder="Enter ∠LAO" style="width: 60px;"></td>
      <td><input type="text" name="perpendicular1" placeholder="Yes/No" style="width: 60px;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>2</td>
      <td>∠MBO</td>
      <td>Yes/No</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="text" name="angle_mbo" placeholder="Enter ∠MBO" style="width: 60px;"></td>
      <td><input type="text" name="perpendicular2" placeholder="Yes/No" style="width: 60px;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>3</td>
      <td>∠NCO</td>
      <td>Yes/No</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="text" name="angle_nco" placeholder="Enter ∠NCO" style="width: 60px;"></td>
      <td><input type="text" name="perpendicular3" placeholder="Yes/No" style="width: 60px;"></td>
    </tr>
  </tbody>
</table>,

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('radiusTangent')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('radiusTangent')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div> `,

formStructure: {
  conclusion: "studentConclusion",
  fields: [
    {
      angle: "angle_lao", label: "∠LAO",
      isPerpendicular: "perpendicular1"
    },
    {
      angle: "angle_mbo", label: "∠MBO",
      isPerpendicular: "perpendicular2"
    },
    {
      angle: "angle_nco", label: "∠NCO",
      isPerpendicular: "perpendicular3"
    }
  ]
},
        
},
    twoTangents: {

        theoremTitle: "Two Tangents",

        defaultButtonType: 'sin',
       
        theoremDefinition: "This Theorem states that two tangent segments drawn to a circle from the same external point are equal in length.",

    
        canvasConfig: {
           showLabels: true , 
            circle: [{ x: 300, y: 300 }, 200],
          
            points: [
              { x: 300, y: 300, label: "O", color: "red", radius: 5, type: "regular" }, // Center

              
              // First set of tangents for "sin"
              { x: 300, y: 100, label: "A", color: "green", radius: 5, type: "tangent", subtype: "sin" },
              { x: 500, y: 300, label: "B", color: "green", radius: 5, type: "tangent", subtype: "sin" },
          
              // Second set of tangents for "cos"
              { x: 500, y: 300, label: "C", color: "green", radius: 5, type: "tangent", subtype: "cos" },
              { x: 300, y: 500, label: "D", color: "green", radius: 5, type: "tangent", subtype: "cos" },
          
              // Third set of tangents for "tan"
              { x: 440, y: 157.16, label: "E", color: "green", radius: 5, type: "tangent", subtype: "tan" },
              { x: 440, y: 442.84, label: "F", color: "green", radius: 5, type: "tangent", subtype: "tan" },
            ],
          
            externalPoints: {
              sin: { label: "L", color: "blue", radius: 5 },
              cos: { label: "M", color: "blue", radius: 5 },
              tan: { label: "N", color: "blue", radius: 5 },
            },
          
            lines: []
          },
          

        buttonSet: [

                {
      label: "Figure 1",
      type: "sin",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
          <line x1="50" y1="50" x2="15" y2="85" stroke="#1E88E5" stroke-width="2"/>
          <line x1="50" y1="50" x2="85" y2="85" stroke="#1E88E5" stroke-width="2"/>
          <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
        </svg>
        `
        },
          {
      label: "Figure 2",
      type: "cos",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <line x1="20" y1="30" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
          <line x1="80" y1="40" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
          <line x1="15" y1="75" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
          <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
          <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
        </svg>
      `
    },

              {
      label: "Figure 3",
      type: "tan",
      svg: `
       <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <line x1="50" y1="5" x2="20" y2="75" stroke="#1E88E5" stroke-width="2"/>
          <line x1="20" y1="75" x2="85" y2="85" stroke="#1E88E5" stroke-width="2"/>
          <line x1="85" y1="85" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
          <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
          <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
        </svg>
        `
    },

            
            ],
        

        leftSidebarContent:  `
        
           <h3> Instructions - Two Tangent Theorem </h3> 
           
            <ul>
                <li>Select a pair of tangents – Line <strong>LA</strong> and <strong>LB</strong> .</li>
                <li>Measure the lengths</li>
                <ul>
                    <li>LA</li>
                    <li>LB</li>
                </ul>
                <li>Note the reading in the **Table**.</li>
            </ul>   

            <h3>Extended Activity</h3>
            <ul>
                <li>Repeat the same activity with the following pairs of tangents:</li>
                <ul>
                    <li>MC and MD, Note readings in  <strong>Table</strong>.</li>
                    <li>NE and NF, Note readings in  <strong>Table</strong>.</li>
                </ul>
            </ul>
       
        `,
     

        rightSidebarContent: {
        sin:  `
             <h3 id="sidebar-title">Verification - Two Tangent Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of Length LA</th>
        <th>Measure of Length LB </th>
        <th>Is LA = LB ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>
        <input type="number" id="tangent_la" name="tangent_la" placeholder="Enter LA" style="width: 60px;"
               oninput="compareMeasures('tangent_la', 'tangent_lb', 'is_la_lb');">
      </td>
      <td>
        <input type="number" id="tangent_lb" name="tangent_lb" placeholder="Enter LB" style="width: 60px;"
               oninput="compareMeasures('tangent_la', 'tangent_lb', 'is_la_lb');">
      </td>
      <td>
        <span id="is_la_lb" name="is_la_lb"></span>
      </td>
    </tr>

        
</table>

<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('twoTangents', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('twoTangents', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
              
        `,

        cos:   `
             <h3 id="sidebar-title">Verification - Two Tangent Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
   
   <tr>
        <th>Measure of Length MC</th>
        <th>Measure of Length MD </th>
        <th>Is MC = MD ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="tangent_mc" placeholder="Enter MC" style="width: 60px;"
        oninput="compareMeasures('tangent_mc', 'tangent_md', 'is_mc_md'); ">
</td>
<td>
    <input type="number" name="tangent_md" placeholder="Enter MD" style="width: 60px;"
        oninput="compareMeasures('tangent_mc', 'tangent_md', 'is_mc_md');">
</td>
<td>
    <span name="is_mc_md"></span>
</td>

    </tr>

    
</table>


<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('twoTangents', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('twoTangents', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
              
              
        `, tan :  `
             <h3 id="sidebar-title">Verification - Two Tangent Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
   
       <tr>
        <th>Measure of Length NE</th>
        <th>Measure of Length NF </th>
        <th>Is NE = NF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="tangent_ne" placeholder="Enter NE" style="width: 60px;"
        oninput="compareMeasures('tangent_ne', 'tangent_nf', 'is_ne_nf'); ">
</td>
<td>
    <input type="number" name="tangent_nf" placeholder="Enter NF" style="width: 60px;"
        oninput="compareMeasures('tangent_ne', 'tangent_nf', 'is_ne_nf');">
</td>
<td>
    <span name="is_ne_nf"></span>
</td>

    </tr>
</table>


<!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('twoTangents', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('twoTangents', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
              
              
        `,
},
formStructure: {
  conclusion: "studentConclusion",
  fields: [
    {
      lengths: [{ id: "tangent_la" }, { id: "tangent_lb" }],
      results: [{ id: "is_la_lb" }],
      subtype: "sin"
    },
    {
      lengths: [{ id: "tangent_mc" }, { id: "tangent_md" }],
      results: [{ id: "is_mc_md" }],
      subtype: "cos"
    },
    {
      lengths: [{ id: "tangent_ne" }, { id: "tangent_nf" }],
      results: [{ id: "is_ne_nf" }],
      subtype: "tan"
    }
  ]
}


},
   
    subtendedAngles: {

        theoremTitle: "Subtended Theorem",
        defaultButtonType: 'sin',
        theoremDefinition: "The angle subtended by an arc at the center is double the angle subtended by the same arc at the circumference. The angles subtended by the same arc on the circumference are equal.",
         canvasConfig: {
      
    "circle": [{ "x": 300, "y": 300 }, 200],

"points": [
    // Common center
    { x: 300, y: 300, label: "O", color: "red", radius: 5, type: "regular" },

    // "sin" - First Figure: ∠COB = 60°
    { x: 180, y: 460, label: "C", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 420, y: 460, label: "B", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 300, y: 100, label: "A", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 400, y: 124, label: "D", color: "red", radius: 5, type: "subtended", subtype: "sin" },

    // "cos" - Second Figure: ∠COB = 100°
    { x: 124, y: 400, label: "C", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 476, y: 400, label: "B", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 300, y: 100, label: "A", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 140, y: 180, label: "D", color: "red", radius: 5, type: "subtended", subtype: "cos" },

    // "tan" - Special Case: ∠COB = 180°
    { x: 100, y: 300, label: "C", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 500, y: 300, label: "B", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 300, y: 100, label: "A", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 420, y: 140, label: "D", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 160, y: 440, label: "E", color: "red", radius: 5, type: "subtended", subtype: "tan" }
],

"lines": [
    // Figure "sin"
    { endA: { x: 300, y: 300 }, endB: { x: 180, y: 460 }, color: "green", subtype: "sin", enableDrag: false },
    { endA: { x: 300, y: 300 }, endB: { x: 420, y: 460 }, color: "green", subtype: "sin", enableDrag: false },

    { endA: { x: 300, y: 100 }, endB: { x: 180, y: 460 }, color: "green", subtype: "sin", enableDrag: false },
    { endA: { x: 300, y: 100 }, endB: { x: 420, y: 460 }, color: "green", subtype: "sin", enableDrag: false },

    { endA: { x: 400, y: 124 }, endB: { x: 180, y: 460 }, color: "green", subtype: "sin", enableDrag: false },
    { endA: { x: 400, y: 124 }, endB: { x: 420, y: 460 }, color: "green", subtype: "sin", enableDrag: false },

    // Figure "cos"
    { endA: { x: 300, y: 300 }, endB: { x: 124, y: 400 }, color: "green", subtype: "cos", enableDrag: false },
    { endA: { x: 300, y: 300 }, endB: { x: 476, y: 400 }, color: "green", subtype: "cos", enableDrag: false },

    { endA: { x: 300, y: 100 }, endB: { x: 126, y: 400 }, color: "green", subtype: "cos", enableDrag: false },
    { endA: { x: 300, y: 100 }, endB: { x: 474, y: 400 }, color: "green", subtype: "cos", enableDrag: false },

    { endA: { x: 140, y: 180 }, endB: { x: 126, y: 400 }, color: "green", subtype: "cos", enableDrag: false },
    { endA: { x: 140, y: 180 }, endB: { x: 474, y: 400 }, color: "green", subtype: "cos", enableDrag: false },

    // Figure "tan"
    { endA: { x: 300, y: 300 }, endB: { x: 100, y: 300 }, color: "green", subtype: "tan", enableDrag: false },
    { endA: { x: 300, y: 300 }, endB: { x: 500, y: 300 }, color: "green", subtype: "tan", enableDrag: false },

    { endA: { x: 300, y: 100 }, endB: { x: 100, y: 300 }, color: "green", subtype: "tan", enableDrag: false },
    { endA: { x: 300, y: 100 }, endB: { x: 500, y: 300 }, color: "green", subtype: "tan", enableDrag: false },

    { endA: { x: 420, y: 140 }, endB: { x: 100, y: 300 }, color: "green", subtype: "tan", enableDrag: false },
    { endA: { x: 420, y: 140 }, endB: { x: 500, y: 300 }, color: "green", subtype: "tan", enableDrag: false },

    { endA: { x: 160, y: 440 }, endB: { x: 100, y: 300 }, color: "green", subtype: "tan", enableDrag: false },
    { endA: { x: 160, y: 440 }, endB: { x: 500, y: 300 }, color: "green", subtype: "tan", enableDrag: false }
]


        },
        buttonSet: [

            {
  label: "Figure 1",
  type: "sin",
  svg: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
      <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
      <line x1="50" y1="50" x2="15" y2="85" stroke="#1E88E5" stroke-width="2"/>
      <line x1="50" y1="50" x2="85" y2="85" stroke="#1E88E5" stroke-width="2"/>
      <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
    </svg>
    `
    },
      {
  label: "Figure 2",
  type: "cos",
  svg: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
      <line x1="20" y1="30" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
      <line x1="80" y1="40" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
      <line x1="15" y1="75" x2="50" y2="50" stroke="#1E88E5" stroke-width="2"/>
      <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
      <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
    </svg>
  `
},

          {
  label: "Figure 3",
  type: "tan",
  svg: `
   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
      <line x1="50" y1="5" x2="20" y2="75" stroke="#1E88E5" stroke-width="2"/>
      <line x1="20" y1="75" x2="85" y2="85" stroke="#1E88E5" stroke-width="2"/>
      <line x1="85" y1="85" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
      <line x1="50" y1="50" x2="50" y2="5" stroke="#1E88E5" stroke-width="2"/>
      <circle cx="50" cy="50" r="2" fill="#1E88E5"/>
    </svg>
    `
},

        
        ],
       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3> Instructions - Subtended  Angles  </h3> 

<ul>
    <li><strong>Identify the angles subtended by the arc BC –</strong>
        <ul>
            <li><strong>a) Angles subtended on the Circumference</strong>
                <ul>
                    <li>∠BAC and ∠BDC.</li>
                </ul>
            </li>
            <li><strong>b) Angle subtended at the center</strong>
                <ul>
                    <li>∠BOC.</li>
                </ul>
            </li>
        </ul>
    </li>

    <li><strong>Verifying Part 1 –</strong>
        <ul>
            <li>Measure ∠BOC and note the reading in Table 1.</li>
            <li>Measure ∠BAC and note the reading in Table 1 and Table 2.</li>
        </ul>
    </li>

    <li><strong>Verifying Part 2 –</strong>
        <ul>
            <li>Measure the angle ∠BDC and note the reading in Table 2.</li>
        </ul>
    </li>
</ul>


               
        `,

           cos : `
           
         <h3> Instructions - Subtended  Angles  </h3> 

<ul>
    <li><strong>Identify the angles subtended by the arc BC –</strong>
        <ul>
            <li><strong>a) Angles subtended on the Circumference</strong>
                <ul>
                    <li>∠BAC and ∠BDC.</li>
                </ul>
            </li>
            <li><strong>b) Angle subtended at the center</strong>
                <ul>
                    <li>∠BOC.</li>
                </ul>
            </li>
        </ul>
    </li>

    <li><strong>Verifying Part 1 –</strong>
        <ul>
            <li>Measure ∠BOC and note the reading in Table 1.</li>
            <li>Measure ∠BAC and note the reading in Table 1 and Table 2.</li>
        </ul>
    </li>

    <li><strong>Verifying Part 2 –</strong>
        <ul>
            <li>Measure the angle ∠BDC and note the reading in Table 2.</li>
        </ul>
    </li>
</ul>

            
            
        `, 

           tan : `
           
          <h3>Instructions - Exterior Angles </h3>
<ul>
    <li><strong>Identify the angles subtended by the arc BC –</strong>
        <ul>
            <li><strong>a) Angles subtended on the Circumference</strong>
                <ul>
                    <li>∠BAC and ∠BDC.</li>
                </ul>
            </li>
            <li><strong>b) Angle subtended at the center</strong>
                <ul>
                    <li>∠BOC.</li>
                </ul>
            </li>
        </ul>
    </li>

    <li><strong>Verifying Part 1 –</strong>
        <ul>
            <li>Measure ∠BOC and note the reading in Table 1.</li>
            <li>Measure ∠BAC and note the reading in Table 1 and Table 2.</li>
        </ul>
    </li>

    <li><strong>Verifying Part 2 –</strong>
        
        <ul>
            <li><strong>Verifying –</strong> Angle subtended by a semicircle arc on the circumference on either side is 90°.</li>
            <li>Measure the angles ∠BDC and ∠BEC and note the readings in Table 2.</li>
        </ul>
    </li>
</ul>


            
            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
             <h3 id="sidebar-title">Verification - Subtended Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
       
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            
            <th>Measure 1</th>
            <th>Measure 2</th>
            <th>Comparison</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            
            <td><label for="sub_angle1">∠BAC: </label><input type="number" name="sub_angle1" placeholder="Enter ∠BAC" style="width: 90px;"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><label for="sub_angle2">∠BDC: </label><input type="number" name="sub_angle2" placeholder="Enter ∠BDC" style="width: 90px;"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><span name="is_bac_bdc">(calculated)</span></td>

        </tr>
         <tr>
            
            <td><label for="sub_angle3">∠BAC: </label><input type="number" name="sub_angle3" placeholder="Enter ∠BAC" style="width: 90px;"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'is_bac_boc');">
            </td>
            <td><label for="sub_angle4">∠BOC: </label><input type="number" name="sub_angle4" placeholder="Enter ∠BOC" style="width: 90px;"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'is_bac_boc');">
            </td>
            <td><span name="is_bac_boc">(calculated)</span></td>

        </tr>
        
        
        
    </tbody>
</table>

  <!-- Conclusion and Submit -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('subtendedAngles', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('subtendedAngles', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

               
        `,

           cos : `
           
            <h3 id="sidebar-title">Verification - Subtended Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
       
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            
            <th>Measure 1</th>
            <th>Measure 2</th>
            <th>Comparison</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            
            <td><label for="sub_angle1">∠BAC: </label><input type="number" name="sub_angle1" placeholder="Enter ∠BAC" style="width: 90px"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><label for="sub_angle2">∠BDC: </label> <input type="number" name="sub_angle2" placeholder="Enter ∠BDC" style="width: 90px"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><span name="is_bac_bdc">(calculated)</span></td>

        </tr>
         <tr>
            
            <td><label for="sub_angle3">∠BAC: </label><input type="number" name="sub_angle3" placeholder="Enter ∠BAC" style="width: 90px"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'is_bac_boc');">
            </td>
            <td><label for="sub_angle4">∠BOC: </label> <input type="number" name="sub_angle4" placeholder="Enter ∠BOC" style="width: 90px"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'is_bac_boc');">
            </td>
            <td><span name="is_bac_boc">(calculated)</span></td>

        </tr>
        
        
        
    </tbody>
</table>

<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('subtendedAngles', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('subtendedAngles', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
            
        `, 

           tan : `
           
            <h3 id="sidebar-title">Verification - Subtended Angles </h3>

<table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
    <colgroup>
       
        <col style="width: 25%;">
        <col style="width: 25%;">
        <col style="width: 25%;">
    </colgroup>
    <thead>
        <tr>
            
            <th>Measure 1</th>
            <th>Measure 2</th>
            <th>Comparison</th>
        </tr>
    </thead>
    <tbody style="background-color: #d9e1f2;">
        <tr>
            
            <td><label for="sub_angle1">∠BAC: </label><input type="number" name="sub_angle1" placeholder="Enter ∠BAC" style="width: 90px"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><label for="sub_angle2">∠BDC: </label> <input type="number" name="sub_angle2" placeholder="Enter ∠BDC" style="width: 90px"
              oninput= "compareMeasures('sub_angle1', 'sub_angle2', 'is_bac_bdc');">
            </td>
            <td><span name="is_bac_bdc">(calculated)</span></td>

        </tr>
         <tr>
            
            <td><label for="sub_angle3">∠BAC: </label><input type="number" name="sub_angle3" placeholder="Enter ∠BAC" style="width: 90px"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'sub_angle_equal', 90, 'sub_angle5');">
            </td>
            <td><label for="sub_angle4">∠BOC: </label> <input type="number" name="sub_angle4" placeholder="Enter ∠BOC" style="width: 90px"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'sub_angle_equal', 90, 'sub_angle5');">
            </td>
            <td><label for="sub_angle5">∠BEC: </label> <input type="number" name="sub_angle5" placeholder="Enter ∠BEC" style="width: 90px"
              oninput= "compareMeasures('sub_angle3', 'sub_angle4', 'sub_angle_equal', 90, 'sub_angle5');">
            </td>

        </tr>
        
        
        
    </tbody>
</table>

<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('subtendedAngles', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('subtendedAngles', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
            
        `, 



    },
    formStructure: {
        conclusion: "studentConclusion",
        fields: [
          // SIN subtype
          {
            angle1: "sub_angle1", label1: "∠BAC",
            angle2: "sub_angle2", label2: "∠BDC",
            result: "is_bac_bdc",
            subtype: "sin"
          },
          {
            angle1: "sub_angle3", label1: "∠BAC",
            angle2: "sub_angle4", label2: "∠BOC",
            result: "is_bac_boc",
            subtype: "sin"
          },
      
          // COS subtype
          {
            angle1: "sub_angle1", label1: "∠BAC",
            angle2: "sub_angle2", label2: "∠BDC",
            result: "is_bac_bdc",
            subtype: "cos"
          },
          {
            angle1: "sub_angle3", label1: "∠BAC",
            angle2: "sub_angle4", label2: "∠BOC",
            result: "is_bac_boc",
            subtype: "cos"
          },
      
          // TAN subtype
          {
            angle1: "sub_angle1", label1: "∠BAC",
            angle2: "sub_angle2", label2: "∠BDC",
            result: "is_bac_bdc",
            subtype: "tan"
          },
          {
            angle1: "sub_angle3", label1: "∠BAC",
            angle2: "sub_angle4", label2: "∠BOC",
            angle3: "sub_angle5", label3: "∠BEC",
            result: "sub_angle_equal",
            subtype: "tan"
          }
        ]
      },
      
},

alternateSegments: {
        theoremTitle: "Alternate Segment",
        defaultButtonType: 'sin',
        
        theoremDefinition: "The theorem states that for any circle, the angle formed between the tangent and the chord through the point of contact of the tangent is equal to the angle formed by the chord in the alternate segment",
         canvasConfig: {



  circle: [{ x: 300, y: 300 }, 200],

  points: [
    { x: 300, y: 300, label: "O", color: "red", radius: 5, type: "regular" },

    // "sin"
    { x: 124, y: 400, label: "C", color: "red", radius: 5, type: "alternate", subtype: "sin" },
    { x: 476, y: 400, label: "B", color: "red", radius: 5, type: "alternate", subtype: "sin" },
    { x: 300, y: 100, label: "A", color: "red", radius: 5, type: "alternate", subtype: "sin" },
    { x: 150, y: 100, label: "D", color: "red", radius: 5, type: "alternate", subtype: "sin" },

    // "cos"
    { x: 124, y: 400, label: "C", color: "red", radius: 5, type: "alternate", subtype: "cos" },
    { x: 476, y: 400, label: "B", color: "red", radius: 5, type: "alternate", subtype: "cos" },
    { x: 500, y: 280, label: "A", color: "red", radius: 5, type: "alternate", subtype: "cos" },
    { x: 490, y: 180, label: "D", color: "red", radius: 5, type: "alternate", subtype: "cos" },



    // "tan"
    { x: 140, y: 420, label: "C", color: "red", radius: 5, type: "alternate", subtype: "tan" },
    { x: 460, y: 420, label: "B", color: "red", radius: 5, type: "alternate", subtype: "tan" },
    { x: 140, y: 180, label: "A", color: "red", radius: 5, type: "alternate", subtype: "tan" },
    { x: 80, y: 260, label: "D", color: "red", radius: 5, type: "alternate", subtype: "tan" }
  ],

  
  lines: [
    // "sin"
    { endA: { x: 124, y: 400 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "sin" },
    { endA: { x: 124, y: 400 }, endB: { x: 300, y: 100 }, color: "red", subtype: "sin" },
    { endA: { x: 300, y: 100 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "sin" },

    // "cos"
    { endA: { x: 124, y: 400 }, endB: { x: 500, y: 280 }, color: "red", subtype: "cos" },
    { endA: { x: 476, y: 400 }, endB: { x: 500, y: 280 }, color: "blue", subtype: "cos" },
    { endA: { x: 124, y: 400 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "cos" },

    // "tan"
    { endA: { x: 140, y: 180 }, endB: { x: 460, y: 420 }, color: "blue", subtype: "tan" },
    { endA: { x: 140, y: 420 }, endB: { x: 140, y: 180 }, color: "red", subtype: "tan" },
    { endA: { x: 140, y: 420 }, endB: { x: 460, y: 420 }, color: "blue", subtype: "tan" }
  ],

  tangentLines: [
    {
      midpoint: { x: 300, y: 100, label: "A" },
      length: 300,
      color: "red",
      subtype: "sin"
    },
    {
      midpoint: { x: 499, y: 280, label: "A" },
      length: 200,
      color: "red",
      subtype: "cos"
    },
    {
      midpoint: { x: 140, y: 180, label: "A" },
      length: 200,
      color: "red",
      subtype: "tan"
    }
  ]
}

,
       

     buttonSet: [

                {
      label: "Figure 1",
      type: "sin",
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
      label: "Figure 2",
      type: "cos",
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
      label: "Figure 3",
      type: "tan",
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



       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3>Instructions - Angle Sum Properties </h3>   

<ul>
    <li><strong>Identify the Tangent and the Chord –</strong>
        <ul>
            <li>Tangent: AD</li>
            <li>Chord: AC</li>
        </ul>
    </li>

    <li><strong>Identify the angles made by the chord AC –</strong>
        <ul>
            <li><strong>a) With the Tangent</strong>
                <ul>
                    <li>∠CAD</li>
                </ul>
            </li>
            <li><strong>b) In the alternate segment</strong>
                <ul>
                    <li>∠ABC</li>
                </ul>
            </li>
        </ul>
    </li>

    <li><strong>Measure the angles and note the reading in the Table.</strong></li>
</ul>

               
        `,

           cos : `
           
           <h3>Instructions - Angle Sum Properties </h3>
<ul>
    <li><strong>Identify the Tangent and the Chord –</strong>
        <ul>
            <li>Tangent: AD</li>
            <li>Chord: AC</li>
        </ul>
    </li>

    <li><strong>Identify the angles made by the chord AC –</strong>
        <ul>
            <li><strong>a) With the Tangent</strong>
                <ul>
                    <li>∠CAD</li>
                </ul>
            </li>
            <li><strong>b) In the alternate segment</strong>
                <ul>
                    <li>∠ABC</li>
                </ul>
            </li>
        </ul>
    </li>

    <li><strong>Measure the angles and note the reading in the Table.</strong></li>
</ul>


            
            
        `, 

           tan : `
           
          <h3>Instructions - Angle Sum Properties </h3>
<ul>
    <li><strong>Identify the Tangent and the Chord –</strong>
        <ul>
            <li>Tangent: AD</li>
            <li>Chord: AC</li>
        </ul>
    </li>

    <li><strong>Identify the angles made by the chord AC –</strong>
        <ul>
            <li><strong>a) With the Tangent</strong>
                <ul>
                    <li>∠CAD</li>
                </ul>
            </li>
            <li><strong>b) In the alternate segment</strong>
                <ul>
                    <li>∠ABC</li>
                </ul>
            </li>
        </ul>
    </li>

        
    </li>
</ul>

            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
           <h3 id="sidebar-title">Verification - Alternate Segment Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠CAD</th>
        <th>Alternate Angle ∠ABC </th>
        <th>Is ∠CAD = ∠ABC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>
</table>
    </tr>
    <div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('alternateSegments', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('alternateSegments', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
               
        `,

           cos : `
           
                        <h3 id="sidebar-title">Verification - Alternate Segment Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠CAD</th>
        <th>Alternate Angle ∠ABC </th>
        <th>Is ∠CAD = ∠ABC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>

    </tr>
            </table>
     <div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('alternateSegments', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('alternateSegments', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>       
        `, 

           tan : `
           
                       <h3 id="sidebar-title">Verification - Alternate Segment Theorem </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠CAD</th>
        <th>Alternate Angle ∠ABC </th>
        <th>Is ∠CAD = ∠ABC = 45° ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc', 45); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 60px;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc', 45); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>

    </tr>
 </table>       
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
   <button id="save-btn" onclick="handleSave('alternateSegments', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('alternateSegments', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
        `,  
    },
    formStructure: {
        conclusion: "studentConclusion",
        fields: [
          // SIN subtype
          {
            angle1: "angle_cad", label1: "∠CAD",
            angle2: "angle_abc", label2: "∠ABC",
            result: "is_cad_abc",
            subtype: "sin"
          },
      
          // COS subtype
          {
            angle1: "angle_cad", label1: "∠CAD",
            angle2: "angle_abc", label2: "∠ABC",
            result: "is_cad_abc",
            subtype: "cos"
          },
      
          // TAN subtype
          {
            angle1: "angle_cad", label1: "∠CAD",
            angle2: "angle_abc", label2: "∠ABC",
            result: "is_cad_abc",
            subtype: "tan"
          }
        ]
      },
      

},

quadrilaterals: {
        theoremTitle: "Quadrilateral Theorem",
        defaultButtonType: 'sin',
        theoremDefinition: "In a cyclic quadrilateral, the sum of either pair of opposite angles is supplementary.If one side of a cyclic quadrilateral is extended then the exterior angle so produced is equal to the interior angle at the opposite vertex.",
         canvasConfig: {
    
            circle: [{ x: 300, y: 300 }, 200],

            points: [
              // Quadrilateral (Figure 1) - sin
              { x: 180, y: 140, label: "D", color: "red", radius: 5, type: "subtended", subtype: "sin" },
              { x: 460, y: 180, label: "A", color: "red", radius: 5, type: "subtended", subtype: "sin" },
              { x: 420, y: 460, label: "B", color: "red", radius: 5, type: "subtended", subtype: "sin" },
              { x: 220, y: 480, label: "C", color: "red", radius: 5, type: "subtended", subtype: "sin" },
              { x: 500, y: 450, label: "E", color: "blue", radius: 5, type: "external", subtype: "sin" },
            
              // Square (Figure 2) - cos
              { x: 159, y: 159, label: "C", color: "red", radius: 5, type: "subtended", subtype: "cos" },
              { x: 441, y: 159, label: "D", color: "red", radius: 5, type: "subtended", subtype: "cos" },
              { x: 441, y: 441, label: "A", color: "red", radius: 5, type: "subtended", subtype: "cos" },
              { x: 159, y: 441, label: "B", color: "red", radius: 5, type: "subtended", subtype: "cos" },
              { x: 159, y: 520, label: "E", color: "blue", radius: 5, type: "external", subtype: "cos" },
            
              // Trapezium (Figure 3) - tan
              { x: 200, y: 473, label: "A", color: "red", radius: 5, type: "subtended", subtype: "tan" },
              { x: 400, y: 473, label: "D", color: "red", radius: 5, type: "subtended", subtype: "tan" },
              { x: 450, y: 170, label: "C", color: "red", radius: 5, type: "subtended", subtype: "tan" },
              { x: 150, y: 170, label: "B", color: "red", radius: 5, type: "subtended", subtype: "tan" },
              { x: 80, y: 170, label: "E", color: "blue", radius: 5, type: "external", subtype: "tan" }
            ],
            
            lines: [
              // Quadrilateral (Figure 1) - sin
              { endA: { x: 180, y: 140 }, endB: { x: 460, y: 180 }, color: "blue", subtype: "sin" },
              { endA: { x: 460, y: 180 }, endB: { x: 420, y: 460 }, color: "blue", subtype: "sin" },
              { endA: { x: 420, y: 460 }, endB: { x: 220, y: 480 }, color: "blue", subtype: "sin" },
              { endA: { x: 220, y: 480 }, endB: { x: 180, y: 140 }, color: "blue", subtype: "sin" },
              { endA: { x: 220, y: 480 }, endB: { x: 500, y: 450 }, color: "blue", subtype: "sin" },
            
              // Square (Figure 2) - cos
              { endA: { x: 159, y: 159 }, endB: { x: 441, y: 159 }, color: "blue", subtype: "cos" },
              { endA: { x: 441, y: 159 }, endB: { x: 441, y: 441 }, color: "blue", subtype: "cos" },
              { endA: { x: 441, y: 441 }, endB: { x: 159, y: 441 }, color: "blue", subtype: "cos" },
              { endA: { x: 159, y: 441 }, endB: { x: 159, y: 159 }, color: "blue", subtype: "cos" },
              { endA: { x: 159, y: 441 }, endB: { x: 159, y: 520 }, color: "blue", subtype: "cos" },
            
              // Trapezium (Figure 3) - tan
              { endA: { x: 200, y: 473 }, endB: { x: 400, y: 473 }, color: "blue", subtype: "tan" },
              { endA: { x: 400, y: 473 }, endB: { x: 450, y: 170 }, color: "blue", subtype: "tan" },
              { endA: { x: 450, y: 170 }, endB: { x: 150, y: 170 }, color: "blue", subtype: "tan" },
              { endA: { x: 150, y: 170 }, endB: { x: 200, y: 473 }, color: "blue", subtype: "tan" },
              { endA: { x: 150, y: 170 }, endB: { x: 80, y: 170 }, color: "blue", subtype: "tan" }
            ]
        }          

,
          buttonSet: [

                {
      label: "Figure 1",
      type: "sin",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <polyline points="20,30 80,30 70,85 25,85 20,30"
                    stroke="#1E88E5" stroke-width="2" fill="none"/>
        </svg>
        `
        },
          {
      label: "Figure 2",
      type: "cos",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <rect x="25" y="25" width="50" height="50"
                stroke="#1E88E5" stroke-width="2" fill="none"/>
        </svg>
      `
    },

              {
      label: "Figure 3",
      type: "tan",
      svg: `
       <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1E88E5" stroke-width="2" fill="none"/>
          <polyline points="20,70 30,20 70,20 80,70 20,70"
                    stroke="#1E88E5" stroke-width="2" fill="none"/>
        </svg>
                `
    },

     ],
       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3>Instructions - Quadrilateral Theorem </h3>   

        <ul>
            <li><strong>Part 1 –</strong>
                <ul>
                    <li>Identify the pair of interior opposite angles of the cyclic quadrilateral ABCD –</li>
                    <ul>
                        <li><strong>Pair 1:</strong> ∠ABC and ∠ADC</li>
                        <li><strong>Pair 2:</strong> ∠BAD and ∠BCD</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 1.</li>
                </ul>
            </li>

            <li><strong>Part 2 –</strong>
                <ul>
                    <li>Identify the exterior angle and its interior opposite angle –</li>
                    <ul>
                        <li><strong>Exterior Angle:</strong> ∠ABE</li>
                        <li><strong>Interior Opposite Angle:</strong> ∠ADC</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 2.</li>
                </ul>
            </li>
        </ul>

               
        `,

           cos : `
           
           
            <h3>Instructions - Quadrilateral Theorem </h3>   

        <ul>
            <li><strong>Part 1 –</strong>
                <ul>
                    <li>Identify the pair of interior opposite angles of the cyclic quadrilateral ABCD –</li>
                    <ul>
                        <li><strong>Pair 1:</strong> ∠ABC and ∠ADC</li>
                        <li><strong>Pair 2:</strong> ∠BAD and ∠BCD</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 1.</li>
                </ul>
            </li>

            <li><strong>Part 2 –</strong>
                <ul>
                    <li>Identify the exterior angle and its interior opposite angle –</li>
                    <ul>
                        <li><strong>Exterior Angle:</strong> ∠ABE</li>
                        <li><strong>Interior Opposite Angle:</strong> ∠ADC</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 2.</li>
                </ul>
            </li>
        </ul>
        `, 

           tan : `
          
          <h3>Instructions - Quadrilateral Theorem </h3>      
        
         <ul>
            <li><strong>Part 1 –</strong>
                <ul>
                    <li>Identify the pair of interior opposite angles of the cyclic quadrilateral ABCD –</li>
                    <ul>
                        <li><strong>Pair 1:</strong> ∠ABC and ∠ADC</li>
                        <li><strong>Pair 2:</strong> ∠BAD and ∠BCD</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 1.</li>
                </ul>
            </li>

            <li><strong>Part 2 –</strong>
                <ul>
                    <li>Identify the exterior angle and its interior opposite angle –</li>
                    <ul>
                        <li><strong>Exterior Angle:</strong> ∠ABE</li>
                        <li><strong>Interior Opposite Angle:</strong> ∠ADC</li>
                    </ul>
                    <li>Measure the angles and note the reading in Table 2.</li>
                </ul>
            </li>
        </ul>


            
            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
           <h3 id="sidebar-title">Verification for Cyclic Quadrilaterals</h3>

<table class="table" style="width: 100%;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Angle 1</th>
      <th>Opposite Angle</th>
      <th>Angle + Opp = 180°?</th>
    </tr>
  </thead>
  <tbody>
    <!-- Row 1 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ABC<br>
          <input type="number" id="angle_abc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td>
        <label>∠ADC<br>
          <input type="number" id="angle_adc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td><span id="sum_abc_adc"></span></td>
    </tr>

    <!-- Row 2 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠BAD<br>
          <input type="number" id="angle_bad"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td>
        <label>∠BCD<br>
          <input type="number" id="angle_bcd"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td><span id="sum_bad_bcd"></span></td>
    </tr>

    <!-- Row 3 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ADC<br>
          <input type="number" name="angle_adcc"  style="width: 60px;"
            oninput="compareMeasures('angle_adcc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td>
        <label>∠ABE<br>
          <input type="number" name="angle_abe"  style="width: 60px;"
            oninput="compareMeasures('angle_adcc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td><span name="is_adc_abe"></span></td>
    </tr>
  </tbody>
</table>

<!-- Student Conclusion -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<!-- Save/Submit Buttons -->
<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('quadrilaterals', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('quadrilaterals', 'sin')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

    
               
        `,

           cos : `
           
           <h3 id="sidebar-title">Verification for Cyclic Quadrilaterals</h3>

<table class="table" style="width: 100%;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Angle 1</th>
      <th>Opposite Angle</th>
      <th>Angle + Opp = 180°?</th>
    </tr>
  </thead>
  <tbody>
    <!-- Row 1: ∠ABC + ∠ADC = 180 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ABC<br>
          <input type="number" id="angle_abc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td>
        <label>∠ADC<br>
          <input type="number" id="angle_adc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td><span id="sum_abc_adc"></span></td>
    </tr>

    <!-- Row 2: ∠BAD + ∠BCD = 180 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠BAD<br>
          <input type="number" id="angle_bad"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td>
        <label>∠BCD<br>
          <input type="number" id="angle_bcd"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td><span id="sum_bad_bcd"></span></td>
    </tr>

    <!-- Row 3: ∠ADC = ∠ABE -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ADC<br>
          <input type="number" name="angle_adc"  style="width: 60px;"
            oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td>
        <label>∠ABE<br>
          <input type="number" name="angle_abe"  style="width: 60px;"
            oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td><span name="is_adc_abe"></span></td>
    </tr>
  </tbody>
</table>

<!-- Student Conclusion -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<!-- Buttons -->
<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('quadrilaterals', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('quadrilaterals', 'cos')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        
            
        `, 

           tan : `
           
                       
 <h3 id="sidebar-title">Verification for Cyclic Quadrilaterals</h3>

<table class="table" style="width: 100%;">
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Angle 1</th>
      <th>Opposite Angle</th>
      <th>Angle + Opp = 180°?</th>
    </tr>
  </thead>
  <tbody>
    <!-- Row 1: ∠ABC + ∠ADC = 180 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ABC<br>
          <input type="number" id="angle_abc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td>
        <label>∠ADC<br>
          <input type="number" id="angle_adc"  style="width: 60px;"
            oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180);">
        </label>
      </td>
      <td><span id="sum_abc_adc"></span></td>
    </tr>

    <!-- Row 2: ∠BAD + ∠BCD = 180 -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠BAD<br>
          <input type="number" id="angle_bad"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td>
        <label>∠BCD<br>
          <input type="number" id="angle_bcd"  style="width: 60px;"
            oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
        </label>
      </td>
      <td><span id="sum_bad_bcd"></span></td>
    </tr>

    <!-- Row 3: ∠ADC = ∠ABE -->
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ADC<br>
          <input type="number" name="angle_adc"  style="width: 60px;"
            oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td>
        <label>∠ABE<br>
          <input type="number" name="angle_abe"  style="width: 60px;"
            oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
        </label>
      </td>
      <td><span name="is_adc_abe"></span></td>
    </tr>
  </tbody>
</table>

<!-- Student Conclusion -->
<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<!-- Save & Submit Buttons -->
<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('quadrilaterals', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('quadrilaterals', 'tan')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


        `,  
    },

    formStructure: {
        conclusion: "studentConclusion",
        fields: [
          // SIN subtype
          {
            angle1: "angle_abc", label1: "∠ABC",
            angle2: "angle_adc", label2: "∠ADC",
            result: "sum_abc_adc",
            subtype: "sin"
          },
          {
            angle1: "angle_bad", label1: "∠BAD",
            angle2: "angle_bcd", label2: "∠BCD",
            result: "sum_bad_bcd",
            subtype: "sin"
          },
          {
            angle1: "angle_adc", label1: "∠ADC",
            angle2: "angle_abe", label2: "∠ABE",
            result: "is_adc_abe",
            subtype: "sin"
          },
      
          // COS subtype
          {
            angle1: "angle_bad", label1: "∠BAD",
            angle2: "angle_bcd", label2: "∠BCD",
            result: "sum_bad_bcd",
            subtype: "cos"
          },
          {
            angle1: "angle_adc", label1: "∠ADC",
            angle2: "angle_abe", label2: "∠ABE",
            result: "is_adc_abe",
            subtype: "cos"
          },
      
          // TAN subtype
          {
            angle1: "angle_abc", label1: "∠ABC",
            angle2: "angle_adc", label2: "∠ADC",
            result: "sum_abc_adc",
            subtype: "tan"
          },
          {
            angle1: "angle_bad", label1: "∠BAD",
            angle2: "angle_bcd", label2: "∠BCD",
            result: "sum_bad_bcd",
            subtype: "tan"
          },
          {
            angle1: "angle_adc", label1: "∠ADC",
            angle2: "angle_abe", label2: "∠ABE",
            result: "is_adc_abe",
            subtype: "tan"
          }
        ]
      },
      
},

 
    midSegmentTheorem: {
        theoremTitle: "Midsegment Theorem",
        theoremDefinition: "If a line segment joins the midpoints of the two sides of a triangle, then the segment is parallel to third side and is of half its length.",
        defaultButtonType: 'right',
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
          
           <h3 id="sidebar-title">Right Angle Inference</h3>

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
    <input type="number" name="length_ab" id="length_ab" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_bc')[0]?.value) {
        compareMeasures('length_ab', 'length_bc', 'ans1');
        updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
      }">
  </td>
  <td><span>Length of BC</span><br>
    <input type="number" name="length_bc" id="length_bc" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_ab')[0]?.value) {
        compareMeasures('length_ab', 'length_bc', 'ans1');
        updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
      }">
  </td>
  <td><span name="ans1" id="ans1"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>Length of AD</span><br>
    <input type="number" name="length_ad" id="length_ad" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_df')[0]?.value) {
        compareMeasures('length_ad', 'length_df', 'ans2');
        updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
      }">
  </td>
  <td><span>Length of DF</span><br>
    <input type="number" name="length_df" id="length_df" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_ad')[0]?.value) {
        compareMeasures('length_ad', 'length_df', 'ans2');
        updateMessage('ans1', 'ans2', 'MessageArea1', 'B is mid-point of AC. D is mid-point of AF');
      }">
  </td>
  <td><span name="ans2" id="ans2"></span></td>
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
      <input type="number" name="length_bd" id="length_bd" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('length_cf')[0].value) {
          compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);
        }">
    </td>
    <td><span>Length of CF</span><br>
      <input type="number" name="length_cf" id="length_cf" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('length_bd')[0].value) {
          compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);
        }">
    </td>
    <td><span name="cf_div_2" id="cf_div_2"></span></td>
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
      <input type="number" name="angle_abd" id="angle_abd" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('angle_acf')[0].value) {
          compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');
          updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
        }">
    </td>
    <td><span>∠ACF</span><br>
      <input type="number" name="angle_acf" id="angle_acf" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('angle_abd')[0].value) {
          compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');
          updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
        }">
    </td>
    <td><span name="is_abd_acf" id="is_abd_acf"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠ADB</span><br>
      <input type="number" name="angle_adb" id="angle_adb" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('angle_afc2')[0].value) {
          compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');
          updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
        }">
    </td>
    <td><span>∠AFC</span><br>
      <input type="number" name="angle_afc2" id="angle_afc2" style="width: 60px;"
        oninput="if(this.value && document.getElementsByName('angle_adb')[0].value) {
          compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');
          updateMessage('is_abd_acf', 'is_adb_afc', 'messageArea2', 'BD is parallel to CF');
        }">
    </td>
    <td><span name="is_adb_afc" id="is_adb_afc"></span></td>
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
  <button id="submitButton" onclick="handleSubmit('midSegmentTheorem', 'right')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


        `,

    acute: 
        `
         

<!-- Combined Table -->
<table class="table" style="width: 100%;">
 <h3 id="sidebar-title">Acute Angle Inference</h3>
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
    <input type="number" name="length_ab" id="length_ab" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_bc')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1');">
  </td>
  <td><span>Length of BC</span><br>
    <input type="number" name="length_bc" id="length_bc" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_ab')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1');">
  </td>
  <td><span name="ans1" id="ans1"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>Length of AD</span><br>
    <input type="number" name="length_ad" id="length_ad" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_df')[0].value) compareMeasures('length_ad', 'length_df', 'ans2');">
  </td>
  <td><span>Length of DF</span><br>
    <input type="number" name="length_df" id="length_df" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_ad')[0].value) compareMeasures('length_ad', 'length_df', 'ans2');">
  </td>
  <td><span name="ans2" id="ans2"></span></td>
</tr>

<!-- Table 2 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>Length of BD</span><br>
    <input type="number" name="length_bd" id="length_bd" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_cf')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);">
  </td>
  <td><span>Length of CF</span><br>
    <input type="number" name="length_cf" id="length_cf" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('length_bd')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2);">
  </td>
  <td><span name="cf_div_2" id="cf_div_2"></span></td>
</tr>

<!-- Table 3 -->
<tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
<tr style="background-color: #d9e1f2;">
  <td><span>∠ABD</span><br>
    <input type="number" name="angle_abd" id="angle_abd" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('angle_acf')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
  </td>
  <td><span>∠ACF</span><br>
    <input type="number" name="angle_acf" id="angle_acf" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('angle_abd')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
  </td>
  <td><span name="is_abd_acf" id="is_abd_acf"></span></td>
</tr>

<tr style="background-color: #d9e1f2;">
  <td><span>∠ADB</span><br>
    <input type="number" name="angle_adb" id="angle_adb" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('angle_afc2')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
  </td>
  <td><span>∠AFC</span><br>
    <input type="number" name="angle_afc2" id="angle_afc2" style="width: 60px;"
      oninput="if (this.value && document.getElementsByName('angle_adb')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
  </td>
  <td><span name="is_adb_afc" id="is_adb_afc"></span></td>
</tr>
</table>

<!-- Conclusion and Submit -->
<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
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
    <h3 id="sidebar-title">Obtuse Angle Inference</h3>
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
        <input type="number" name="length_ab" id="length_ab" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_bc')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1')">
      </td>
      <td>Length of BC<br>
        <input type="number" name="length_bc" id="length_bc" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_ab')[0].value) compareMeasures('length_ab', 'length_bc', 'ans1')">
      </td>
      <td><span name="ans1" id="ans1"></span></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>Length of AD<br>
        <input type="number" name="length_ad" id="length_ad" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_df')[0].value) compareMeasures('length_ad', 'length_df', 'ans2')">
      </td>
      <td>Length of DF<br>
        <input type="number" name="length_df" id="length_df" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_ad')[0].value) compareMeasures('length_ad', 'length_df', 'ans2')">
      </td>
      <td><span name="ans2" id="ans2"></span></td>
    </tr>

    <!-- Table 2 -->
    <tr style="background-color:#e2efda;">
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>Length of BD<br>
        <input type="number" name="length_bd" id="length_bd" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_cf')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)">
      </td>
      <td>Length of CF<br>
        <input type="number" name="length_cf" id="length_cf" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('length_bd')[0].value) compareDividedMeasures('length_bd', 'length_cf', 'cf_div_2', 2)">
      </td>
      <td><span name="cf_div_2" id="cf_div_2"></span></td>
    </tr>

    <!-- Table 3 -->
    <tr style="background-color:#e2efda;">
      <td colspan="3"><strong>Table 3</strong></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>∠ABD<br>
        <input type="number" name="angle_abd" id="angle_abd" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('angle_acf')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td>∠ACF<br>
        <input type="number" name="angle_acf" id="angle_acf" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('angle_abd')[0].value) compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td><span name="is_abd_acf" id="is_abd_acf"></span></td>
    </tr>
    <tr style="background-color:#d9e1f2;">
      <td>∠ADB<br>
        <input type="number" name="angle_adb" id="angle_adb" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('angle_afc2')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td>∠AFC<br>
        <input type="number" name="angle_afc2" id="angle_afc2" style="width:60px;"
          oninput="if(this.value && document.getElementsByName('angle_adb')[0].value) compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td><span name="is_adb_afc" id="is_adb_afc"></span></td>
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
    // 🔹 RIGHT subtype
    {
      subtype: "right",
      lengths: [
        { id: "length_ab", label: "Length of AB" },
        { id: "length_bc", label: "Length of BC" }
      ],
      results: [{ id: "ans1", label: "Equality Check AB = BC" }]
    },
    {
      subtype: "right",
      lengths: [
        { id: "length_ad", label: "Length of AD" },
        { id: "length_df", label: "Length of DF" }
      ],
      results: [{ id: "ans2", label: "Equality Check AD = DF" }]
    },
    {
      subtype: "right",
      lengths: [
        { id: "length_bd", label: "Length of BD" },
        { id: "length_cf", label: "Length of CF" }
      ],
      results: [{ id: "cf_div_2", label: "BD = ½ CF?" }]
    },
    {
      subtype: "right",
      angles: [
        { id: "angle_abd", label: "∠ABD" },
        { id: "angle_acf", label: "∠ACF" }
      ],
      results: [{ id: "is_abd_acf", label: "∠ABD = ∠ACF?" }]
    },
    {
      subtype: "right",
      angles: [
        { id: "angle_adb", label: "∠ADB" },
        { id: "angle_afc2", label: "∠AFC" }
      ],
      results: [{ id: "is_adb_afc", label: "∠ADB = ∠AFC?" }]
    },

    // 🔹 ACUTE subtype
    {
      subtype: "acute",
      lengths: [
        { id: "length_ab", label: "Length of AB" },
        { id: "length_bc", label: "Length of BC" }
      ],
      results: [{ id: "ans1", label: "Equality Check AB = BC" }]
    },
    {
      subtype: "acute",
      lengths: [
        { id: "length_ad", label: "Length of AD" },
        { id: "length_df", label: "Length of DF" }
      ],
      results: [{ id: "ans2", label: "Equality Check AD = DF" }]
    },
    {
      subtype: "acute",
      lengths: [
        { id: "length_bd", label: "Length of BD" },
        { id: "length_cf", label: "Length of CF" }
      ],
      results: [{ id: "cf_div_2", label: "BD = ½ CF?" }]
    },
    {
      subtype: "acute",
      angles: [
        { id: "angle_abd", label: "∠ABD" },
        { id: "angle_acf", label: "∠ACF" }
      ],
      results: [{ id: "is_abd_acf", label: "∠ABD = ∠ACF?" }]
    },
    {
      subtype: "acute",
      angles: [
        { id: "angle_adb", label: "∠ADB" },
        { id: "angle_afc2", label: "∠AFC" }
      ],
      results: [{ id: "is_adb_afc", label: "∠ADB = ∠AFC?" }]
    },

    // 🔹 OBTUSE subtype
    {
      subtype: "obtuse",
      lengths: [
        { id: "length_ab", label: "Length of AB" },
        { id: "length_bc", label: "Length of BC" }
      ],
      results: [{ id: "ans1", label: "Equality Check AB = BC" }]
    },
    {
      subtype: "obtuse",
      lengths: [
        { id: "length_ad", label: "Length of AD" },
        { id: "length_df", label: "Length of DF" }
      ],
      results: [{ id: "ans2", label: "Equality Check AD = DF" }]
    },
    {
      subtype: "obtuse",
      lengths: [
        { id: "length_bd", label: "Length of BD" },
        { id: "length_cf", label: "Length of CF" }
      ],
      results: [{ id: "cf_div_2", label: "BD = ½ CF?" }]
    },
    {
      subtype: "obtuse",
      angles: [
        { id: "angle_abd", label: "∠ABD" },
        { id: "angle_acf", label: "∠ACF" }
      ],
      results: [{ id: "is_abd_acf", label: "∠ABD = ∠ACF?" }]
    },
    {
      subtype: "obtuse",
      angles: [
        { id: "angle_adb", label: "∠ADB" },
        { id: "angle_afc2", label: "∠AFC" }
      ],
      results: [{ id: "is_adb_afc", label: "∠ADB = ∠AFC?" }]
    }
  ]
}

    
    },

    angleBisectorTheorem: {

      theoremTitle: "Angle Bisector Theorem",
      theoremDefinition: "If a ray bisects an angle of a triangle, then it divides the opposite side of the triangle into segments proportional to the other two sides.",
      defaultButtonType: 'right',   
      canvasConfig: {
      autoloadShape: "triangle",
      points: [
              
              { x: 350, y: 400, label: "E", color: "red", radius: 5, type: "angleBisector", subtype: "right" },
              { x: 417.8, y: 400, label: "E", color: "red", radius: 5, type: "angleBisector", subtype: "obtuse" },
              { x: 294.2, y: 400, label: "E", color: "red", radius: 5, type: "angleBisector", subtype: "acute" },
          ],

    
      triangles: [
        {
          type: "right",
          vertices: [
            { x: 200, y: 400 },
            { x: 600, y: 400 },
            { x: 200, y: 100 }
          ],
          labels: { A: "C", B: "F", C: "A" },
          midpointLabels: { M1: "G", M2: "D", M3: "B" },
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
          midpointLabels: { M1: "G", M2: "D", M3: "B" },
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
          midpointLabels: { M1: "G", M2: "D", M3: "B" },
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
  right: ` <h3 id="sidebar-title">Right Angle Inference</h3>
<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center;">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 20%;">
  </colgroup>
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Measure of ∠CAE</th>
      <th>Measure of ∠FAE </th>
      <th>Is ∠CAE = ∠FAE ?</th>
    </tr>
  </thead>
  <tr style="background-color: #d9e1f2;">
    <td><input type="number" name="angle_cae" id="angle_cae" placeholder="Enter ∠CAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><input type="number" name="angle_fae" id="angle_fae" placeholder="Enter ∠FAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><span name="is_cae_fae" id="is_cae_fae"></span></td>
  </tr>
</table>

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
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" id="length_ce" placeholder="Enter CE" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" id="length_ef" placeholder="Enter EF" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" id="ratio_a" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 3</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" id="ratio_b" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" id="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('angleBisectorTheorem', 'right')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('angleBisectorTheorem', 'right')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
`,


       acute: ` <h3 id="sidebar-title">Acute Angle Inference</h3>

<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center;">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 20%;">
  </colgroup>
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Measure of ∠CAE</th>
      <th>Measure of ∠FAE </th>
      <th>Is ∠CAE = ∠FAE ?</th>
    </tr>
  </thead>
  <tr style="background-color: #d9e1f2;">
    <td><input type="number" name="angle_cae" id="angle_cae" placeholder="Enter ∠CAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><input type="number" name="angle_fae" id="angle_fae" placeholder="Enter ∠FAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><span name="is_cae_fae" id="is_cae_fae"></span></td>
  </tr>
</table>

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
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" id="length_ce" placeholder="Enter CE" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" id="length_ef" placeholder="Enter EF" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" id="ratio_a" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 3</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" id="ratio_b" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" id="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('angleBisectorTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('angleBisectorTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>


          `,

           obtuse: ` <h3 id="sidebar-title">Obtuse Angle Inference</h3>

<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center;">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 15%;">
    <col style="width: 20%;">
  </colgroup>
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Measure of ∠CAE</th>
      <th>Measure of ∠FAE </th>
      <th>Is ∠CAE = ∠FAE ?</th>
    </tr>
  </thead>
  <tr style="background-color: #d9e1f2;">
    <td><input type="number" name="angle_cae" id="angle_cae" placeholder="Enter ∠CAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><input type="number" name="angle_fae" id="angle_fae" placeholder="Enter ∠FAE" style="width: 60px;" oninput="compareMeasures('angle_cae', 'angle_fae', 'is_cae_fae')"></td>
    <td><span name="is_cae_fae" id="is_cae_fae"></span></td>
  </tr>
</table>

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
      <td colspan="3"><strong>Table 2</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of CE<br><input type="text" name="length_ce" id="length_ce" placeholder="Enter CE" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td>Length of EF<br><input type="text" name="length_ef" id="length_ef" placeholder="Enter EF" style="width: 60px;" oninput="calculateRatio('length_ce', 'length_ef', 'ratio_a')"></td>
      <td><input type="text" name="ratio_a" id="ratio_a" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>

    <tr style="background-color: #e2efda;">
      <td colspan="3"><strong>Table 3</strong></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>Length of AC<br><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td>Length of AF<br><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;" oninput="calculateRatio('length_ac', 'length_af', 'ratio_b')"></td>
      <td><input type="text" name="ratio_b" id="ratio_b" placeholder="Calculated Ratio" style="width: 60px;" readonly></td>
    </tr>
    <tr>
      <td colspan="3" style="text-align: left; padding-left: 10px; padding-top: 8px;">
        Is a = b? Ans: <input type="text" name="is_a_equals_b" id="is_a_equals_b" placeholder="Enter Yes/No" style="width: 150px;">
      </td>
    </tr>
  </tbody>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('angleBisectorTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('angleBisectorTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>
          `,
    },
    formStructure: {
  conclusion: "studentConclusion",
  fields: [
    // 🔹 RIGHT
    {
      subtype: "right",
      angles: [
        { id: "angle_cae", label: "∠CAE" },
        { id: "angle_fae", label: "∠FAE" }
      ],
      results: [{ id: "is_cae_fae", label: "∠CAE = ∠FAE?" }]
    },
    {
      subtype: "right",
      lengths: [
        { id: "length_ce", label: "Length of CE" },
        { id: "length_ef", label: "Length of EF" }
      ],
      results: [{ id: "ratio_a", label: "Ratio a = CE/EF" }]
    },
    {
      subtype: "right",
      lengths: [
        { id: "length_ac", label: "Length of AC" },
        { id: "length_af", label: "Length of AF" }
      ],
      results: [{ id: "ratio_b", label: "Ratio b = AC/AF" }]
    },
    {
      subtype: "right",
      results: [{ id: "is_a_equals_b", label: "Is a = b?" }]
    },

    // 🔹 ACUTE
    {
      subtype: "acute",
      angles: [
        { id: "angle_cae", label: "∠CAE" },
        { id: "angle_fae", label: "∠FAE" }
      ],
      results: [{ id: "is_cae_fae", label: "∠CAE = ∠FAE?" }]
    },
    {
      subtype: "acute",
      lengths: [
        { id: "length_ce", label: "Length of CE" },
        { id: "length_ef", label: "Length of EF" }
      ],
      results: [{ id: "ratio_a", label: "Ratio a = CE/EF" }]
    },
    {
      subtype: "acute",
      lengths: [
        { id: "length_ac", label: "Length of AC" },
        { id: "length_af", label: "Length of AF" }
      ],
      results: [{ id: "ratio_b", label: "Ratio b = AC/AF" }]
    },
    {
      subtype: "acute",
      results: [{ id: "is_a_equals_b", label: "Is a = b?" }]
    },

    // 🔹 OBTUSE
    {
      subtype: "obtuse",
      angles: [
        { id: "angle_cae", label: "∠CAE" },
        { id: "angle_fae", label: "∠FAE" }
      ],
      results: [{ id: "is_cae_fae", label: "∠CAE = ∠FAE?" }]
    },
    {
      subtype: "obtuse",
      lengths: [
        { id: "length_ce", label: "Length of CE" },
        { id: "length_ef", label: "Length of EF" }
      ],
      results: [{ id: "ratio_a", label: "Ratio a = CE/EF" }]
    },
    {
      subtype: "obtuse",
      lengths: [
        { id: "length_ac", label: "Length of AC" },
        { id: "length_af", label: "Length of AF" }
      ],
      results: [{ id: "ratio_b", label: "Ratio b = AC/AF" }]
    },
    {
      subtype: "obtuse",
      results: [{ id: "is_a_equals_b", label: "Is a = b?" }]
    }
  ]
}

  
    },

    propertiesOfTriangles: {
        theoremTitle : "Traingle Properties",
        theoremDefinition: "All three sides of an equilateral triangle are equal. \n Angle opposite to equal sides of an isosceles triangle are equal.",
        defaultButtonType: 'equilateral',
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
            <h3 id="sidebar-title">Instructions</h3>
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
     equilateral:
            `
          <h3 id="sidebar-title">Equilateral Triangle Inference</h3>

<!-- Table 1: Length Comparison -->
<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Length of Side AC</td>
      <td><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side AF</td>
      <td><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side CF</td>
      <td><input type="text" name="length_cf" id="length_cf" placeholder="Enter CF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Lengths Equal?</td>
      <td>
        <span id="is_equal_length">--</span>
        <button id="check-length" class="check-button" title="Check"
          onclick="compareFields(['length_ac', 'length_af', 'length_cf'], 'allEqual')">
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>

<!-- Table 2: Angle Comparison -->
<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Measure of ∠CAF</td>
      <td><input type="text" name="angle_caf" id="angle_caf" placeholder="Enter ∠CAF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠ACF</td>
      <td><input type="text" name="angle_acf" id="angle_acf" placeholder="Enter ∠ACF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠AFC</td>
      <td><input type="text" name="angle_afc" id="angle_afc" placeholder="Enter ∠AFC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Angles Equal?</td>
      <td>
        <span id="is_equal_angle">--</span>
        <button id="check-angle" class="check-button" title="Check"
          onclick="compareFields(['angle_caf', 'angle_acf', 'angle_afc'], 'allEqual')">
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>



  <div style="margin-top: 20px;">
      <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
      <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                style="width: 100%; height: 80px; resize: none;"></textarea>
    </div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('propertiesOfTriangles', 'equilateral')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('propertiesOfTriangles', 'equilateral')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

          `,
           
   isosceles :` <h3 id="sidebar-title">Isosceles Triangle Inference</h3>

<!-- Table 1: Length Comparison -->
<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Length of Side AC</td>
      <td><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side AF</td>
      <td><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side CF</td>
      <td><input type="text" name="length_cf" id="length_cf" placeholder="Enter CF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Any Two Sides Equal?</td>
      <td>
        <span id="is_equal_length">--</span>
        <button id="check-length" class="check-button" title="Check"
     onclick="compareFields(['length_ac', 'length_af', 'length_cf'], 'anyTwoEqual')">
  
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>

<!-- Table 2: Angle Comparison -->
<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Measure of ∠CAF</td>
      <td><input type="text" name="angle_caf" id="angle_caf" placeholder="Enter ∠CAF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠ACF</td>
      <td><input type="text" name="angle_acf" id="angle_acf" placeholder="Enter ∠ACF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠AFC</td>
      <td><input type="text" name="angle_afc" id="angle_afc" placeholder="Enter ∠AFC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Any Two Angles Equal?</td>
      <td>
        <span id="is_equal_angle">--</span>
        <button id="check-angle" class="check-button" title="Check"
   onclick="compareFields(['angle_caf', 'angle_acf', 'angle_afc'], 'anyTwoEqual')">
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>


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
    <td><input type="text" name="sum_s_1" placeholder="AC + AF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_1" placeholder="CF" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_1" placeholder="Yes" style="width: 60px;"></td>
</tr>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="sum_s_2" placeholder="AC + CF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_2" placeholder="AF" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_2" placeholder="Yes" style="width: 60px;"></td>
</tr>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="sum_s_3" placeholder="AF + CF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_3" placeholder="AC" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_3" placeholder="Yes" style="width: 60px;"></td>
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
    <td><input type="text" name="longest_side" placeholder="Enter Longest Side" style="width: 60px;"></td>
    <td><input type="text" name="largest_angle" placeholder="Enter Largest Angle" style="width: 60px;"></td>
    <td><input type="text" name="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 60px;"></td>
</tr>
</table>

<div style="margin-top: 20px;">
      <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
      <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
                style="width: 100%; height: 80px; resize: none;"></textarea>
    </div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('propertiesOfTriangles', 'isosceles')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('propertiesOfTriangles', 'isosceles')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        `, 
        scalene : `<h3 id="sidebar-title">Scalene Triangle Inference</h3>

       
<!-- Table 1: Length Comparison -->
<h4>Table 1</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Length of Side AC</td>
      <td><input type="text" name="length_ac" id="length_ac" placeholder="Enter AC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side AF</td>
      <td><input type="text" name="length_af" id="length_af" placeholder="Enter AF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Length of Side CF</td>
      <td><input type="text" name="length_cf" id="length_cf" placeholder="Enter CF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>All Sides Unequal?</td>
      <td>
        <span id="is_equal_length">--</span>
        <button id="check-length" class="check-button" title="Check"
         onclick="compareFields(['length_ac', 'length_af', 'length_cf'], 'allDifferent')">
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>

<!-- Table 2: Angle Comparison -->
<h4>Table 2</h4>
<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <tbody>
    <tr>
      <td>Measure of ∠CAF</td>
      <td><input type="text" name="angle_caf" id="angle_caf" placeholder="Enter ∠CAF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠ACF</td>
      <td><input type="text" name="angle_acf" id="angle_acf" placeholder="Enter ∠ACF" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>Measure of ∠AFC</td>
      <td><input type="text" name="angle_afc" id="angle_afc" placeholder="Enter ∠AFC" style="width: 60px;"></td>
    </tr>
    <tr>
      <td>All Angles Unequal?</td>
      <td>
        <span id="is_equal_angle">--</span>
        <button id="check-angle" class="check-button" title="Check"
          onclick="compareFields(['angle_caf', 'angle_acf', 'angle_afc'], 'allDifferent')">
          ✅
        </button>
      </td>
    </tr>
  </tbody>
</table>

<!-- Table 3: Triangle Inequality -->
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
    <td><input type="text" name="sum_s_1" id="sum_s_1" placeholder="AC + AF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_1" id="remaining_side_1" placeholder="CF" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_1" id="is_s_greater_r_1" placeholder="Yes" style="width: 60px;"></td>
</tr>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="sum_s_2" id="sum_s_2" placeholder="AC + CF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_2" id="remaining_side_2" placeholder="AF" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_2" id="is_s_greater_r_2" placeholder="Yes" style="width: 60px;"></td>
</tr>
<tr style="background-color: #d9e1f2;">
    <td><input type="text" name="sum_s_3" id="sum_s_3" placeholder="AF + CF" style="width: 60px;"></td>
    <td><input type="text" name="remaining_side_3" id="remaining_side_3" placeholder="AC" style="width: 60px;"></td>
    <td><input type="text" name="is_s_greater_r_3" id="is_s_greater_r_3" placeholder="Yes" style="width: 60px;"></td>
</tr>
</table>

<!-- Table 4: Longest Side vs Largest Angle -->
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
    <td><input type="text" name="longest_side" id="longest_side" placeholder="Enter Longest Side" style="width: 60px;"></td>
    <td><input type="text" name="largest_angle" id="largest_angle" placeholder="Enter Largest Angle" style="width: 60px;"></td>
    <td><input type="text" name="is_side_opposite_angle" id="is_side_opposite_angle" placeholder="Enter Yes/No" style="width: 60px;"></td>
</tr>
</table>

<!-- Conclusion -->
<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('propertiesOfTriangles', 'scalene')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('propertiesOfTriangles', 'scalene')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

        
                `,            
        
    }, formStructure: {
  conclusion: "studentConclusion",
  fields: [
    // === EQUILATERAL ===
    {
      lengths: [
        { id: "length_ac", label: "Length of Side AC" },
        { id: "length_af", label: "Length of Side AF" },
        { id: "length_cf", label: "Length of Side CF" }
      ],
      subtype: "equilateral"
    },
    {
      angles: [
        { id: "angle_caf", label: "∠CAF" },
        { id: "angle_acf", label: "∠ACF" },
        { id: "angle_afc", label: "∠AFC" }
      ],
      subtype: "equilateral"
    },
    {
      results: [
        { id: "is_ac_af_cf", label: "Are all sides equal?" },
        { id: "is_angles_equal", label: "Are all angles 60°?" }
      ],
      subtype: "equilateral"
    },

    // === ISOSCELES ===
    {
      lengths: [
        { id: "length_ac", label: "Length of Side AC" },
        { id: "length_af", label: "Length of Side AF" },
        { id: "length_cf", label: "Length of Side CF" }
      ],
      subtype: "isosceles"
    },
    {
      angles: [
        { id: "angle_caf", label: "∠CAF" },
        { id: "angle_acf", label: "∠ACF" },
        { id: "angle_afc", label: "∠AFC" }
      ],
      subtype: "isosceles"
    },
    {
      results: [
        { id: "isosceles_sides_equal", label: "Are any two sides equal?" },
        { id: "isosceles_sides_details", label: "Equal Sides" },
        { id: "isosceles_angles_equal", label: "Are opposite angles equal?" },
        { id: "isosceles_angles_details", label: "Equal Angles" }
      ],
      subtype: "isosceles"
    },
    {
      sumChecks: [
        {
          sum: "sum_s_1",
          remaining: "remaining_side_1",
          result: "is_s_greater_r_1",
          label: "Check AC+AF > CF"
        },
        {
          sum: "sum_s_2",
          remaining: "remaining_side_2",
          result: "is_s_greater_r_2",
          label: "Check AC+CF > AF"
        },
        {
          sum: "sum_s_3",
          remaining: "remaining_side_3",
          result: "is_s_greater_r_3",
          label: "Check AF+CF > AC"
        }
      ],
      subtype: "isosceles"
    },
    {
      relationCheck: {
        side: "longest_side",
        angle: "largest_angle",
        result: "is_side_opposite_angle",
        label: "Is longest side opposite largest angle?"
      },
      subtype: "isosceles"
    },

    // === SCALENE ===
    {
      lengths: [
        { id: "length_ac", label: "Length of Side AC" },
        { id: "length_af", label: "Length of Side AF" },
        { id: "length_cf", label: "Length of Side CF" }
      ],
      subtype: "scalene"
    },
    {
      angles: [
        { id: "angle_caf", label: "∠CAF" },
        { id: "angle_acf", label: "∠ACF" },
        { id: "angle_afc", label: "∠AFC" }
      ],
      subtype: "scalene"
    },
    {
      sumChecks: [
        {
          sum: "sum_s_1",
          remaining: "remaining_side_1",
          result: "is_s_greater_r_1",
          label: "Check AC+AF > CF"
        },
        {
          sum: "sum_s_2",
          remaining: "remaining_side_2",
          result: "is_s_greater_r_2",
          label: "Check AC+CF > AF"
        },
        {
          sum: "sum_s_3",
          remaining: "remaining_side_3",
          result: "is_s_greater_r_3",
          label: "Check AF+CF > AC"
        }
      ],
      subtype: "scalene"
    },
    {
      relationCheck: {
        side: "longest_side",
        angle: "largest_angle",
        result: "is_side_opposite_angle",
        label: "Is longest side opposite largest angle?"
      },
      subtype: "scalene"
    }
  ]
}

    
     },
    basicProportionalityTheorem: {
        theoremTitle: "Basic Proportionality",
        theoremDefinition: "If the line segment divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
        defaultButtonType: 'right',
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
            <h3 id="sidebar-title">Right Angle Triangle Inference</h3>

<table class="table" style="width: 100%; text-align: center; border-collapse: collapse;">
  <colgroup>
    <col style="width: 33%;">
    <col style="width: 33%;">
    <col style="width: 34%;">
  </colgroup>

  <!-- Unified Header Row -->
  <thead style="background-color: #6a9be8; color: white;">
    <tr>
      <th>Measurement 1</th>
      <th>Measurement 2</th>
      <th>Ratio / Equality</th>
    </tr>
  </thead>

  <tbody>
    <!-- Table 1 -->
    <tr><td colspan="3" style="text-align:left; background:#e2efd9;"><strong>Table 1</strong></td></tr>
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>Length of AC</label><br>
        <input type="text" name="length_ac" placeholder="Enter AC" style="width: 60px;" 
               oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
      </td>
      <td>
        <label>Length of BC</label><br>
        <input type="text" name="length_bc" placeholder="Enter BC" style="width: 60px;" 
               oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
      </td>
      <td>
        <input type="text" name="ratio_a" placeholder="Calculated" style="width: 60px;" readonly>
      </td>
    </tr>

    <!-- Table 2 -->
    <tr><td colspan="3" style="text-align:left; background:#e2efd9;"><strong>Table 2</strong></td></tr>
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>Length of AD</label><br>
        <input type="text" name="length_ad" placeholder="Enter AD" style="width: 60px;" 
               oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
      </td>
      <td>
        <label>Length of DF</label><br>
        <input type="text" name="length_df" placeholder="Enter DF" style="width: 60px;" 
               oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
      </td>
      <td>
        <input type="text" name="ratio_b" placeholder="Calculated" style="width: 60px;" readonly>
      </td>
    </tr>

    <!-- a = b? Answer -->
    <tr>
      <td colspan="2" style="text-align:right; padding-right: 10px;">
        Is a = b? Ans:
      </td>
      <td>
        <input type="text" name="is_a_equals_b" placeholder="Yes/No" style="width: 60px;">
      </td>
    </tr>

    <!-- Table 3 -->
    <tr><td colspan="3" style="text-align:left; background:#e2efd9;"><strong>Table 3</strong></td></tr>
    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ABD</label><br>
        <input type="number" name="angle_abd" placeholder="Enter ∠" style="width: 60px;" 
               oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td>
        <label>∠ACF</label><br>
        <input type="number" name="angle_acf" placeholder="Enter ∠" style="width: 60px;" 
               oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')">
      </td>
      <td>
        <span name="is_abd_acf"></span>
      </td>
    </tr>

    <tr style="background-color: #d9e1f2;">
      <td>
        <label>∠ADB</label><br>
        <input type="number" name="angle_adb" placeholder="Enter ∠" style="width: 60px;" 
               oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td>
        <label>∠AFC</label><br>
        <input type="number" name="angle_afc2" placeholder="Enter ∠" style="width: 60px;" 
               oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')">
      </td>
      <td>
        <span name="is_adb_afc"></span>
      </td>
    </tr>
  </tbody>
</table>

<!-- Student's Conclusion -->
<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<!-- Save / Submit Buttons -->
<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('basicProportionalityTheorem', 'right')" 
          style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('basicProportionalityTheorem', 'right')" 
          style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

    `,

        acute : `
            <h3 id="sidebar-title">Acute angle Triangle Inference </h3>
            

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
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 60px;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_bc" placeholder="Enter BC" style="width: 60px;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 60px;" readonly>
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
                <input type="text" name="length_ad" placeholder="Enter AD" style="width: 60px;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_df" placeholder="Enter DF" style="width: 60px;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 60px;" readonly>
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
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 60px;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 60px;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 60px;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 60px;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('basicProportionalityTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('basicProportionalityTheorem', 'acute')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>

    `,
        obtuse : `
            <h3 id="sidebar-title">Obtuse Angle Triangle Inference </h3>
            

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
                <input type="text" name="length_ac" placeholder="Enter AC" style="width: 60px;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="length_bc" placeholder="Enter BC" style="width: 60px;" 
                       oninput="calculateRatio('length_ac', 'length_bc', 'ratio_a')">
            </td>
            <td>
                <input type="text" name="ratio_a" placeholder="Calculated Ratio" style="width: 60px;" readonly>
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
                <input type="text" name="length_ad" placeholder="Enter AD" style="width: 60px;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="length_df" placeholder="Enter DF" style="width: 60px;" 
                       oninput="calculateRatio('length_ad', 'length_df', 'ratio_b')">
            </td>
            <td>
                <input type="text" name="ratio_b" placeholder="Calculated Ratio" style="width: 60px;" readonly>
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
        <td><input type="number" name="angle_abd" placeholder="Enter ∠ABD" style="width: 60px;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><input type="number" name="angle_acf" placeholder="Enter ∠ACC" style="width: 60px;" oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf')"></td>
        <td><span name ="is_abd_acf"></span> </td>
    </tr>
    <tr>
        <th>Measure of ∠ADB</th>
        <th>Measure of ∠AFC</th>
        <th>Is ∠ADB = ∠AFC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td><input type="number" name="angle_adb" placeholder="Enter ∠ADB" style="width: 60px;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><input type="number" name="angle_afc2" placeholder="Enter ∠AFC" style="width: 60px;" oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc')"></td>
        <td><span name="is_adb_afc"> </span> </td>
    </tr>
</table>

<div style="margin-top: 20px;">
  <label for="studentConclusion" style="font-weight: bold;">Student's Conclusion (50 words):</label>
  <textarea id="studentConclusion" name="studentConclusion" placeholder="Enter your conclusion here..." 
            style="width: 100%; height: 80px; resize: none;"></textarea>
</div>

<div id="summaryBlock" style="margin-top: 20px;"></div>

<div style="margin-top: 15px;">
  <button id="save-btn" onclick="handleSave('basicProportionalityTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Save
  </button>
  <button id="submitButton" onclick="handleSubmit('basicProportionalityTheorem', 'obtuse')" style="background-color: #6a9be8; color: white; border: none; padding: 10px 20px; cursor: pointer; font-size: 16px;">
    Submit
  </button>
</div>  
          `,
        },


        formStructure: {
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


} // end of functionalityConfig object

// ✅ Proper export statement
export const pageFeatures = {
    'triangle_theorem_07.html': { enableProtractorSnapping: true },
    'parallel_lines_04.html' : { enableProtractorSnapping: true },
    'circlePage.html': { enableProtractorSnapping: false },
};

export const currentPage = location.pathname.split('/').pop(); // Get current page
export const currentPageFeatures = pageFeatures[currentPage] || {}; // Get features for the current page


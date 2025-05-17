export  const functionalityConfig = {

        
    
    radiusTangent: {
           
        theoremDefinition: "Tangent to a circle is perpendicular to the radius of the circle at the point of contact.",
        canvasConfig: {
            
            circle: [{ x: 300, y: 300 }, 200], 
           
            points: [
                { x: 300, y: 300, label: "O", color: "red", radius: 5 },
                { x: 300, y: 100, label: "A", color: "red", radius: 5 },
                { x: 440, y: 440, label: "B", color: "red", radius: 5 },

                { x: 100, y: 300, label: "C", color: "red", radius: 5 },
               
                { x: 600, y: 100, label: "L", color: "red", radius: 5},
                { x: 620, y: 260, label: "M", color: "red", radius: 5},
                { x: 100, y: 600, label: "N", color: "red", radius: 5},

               
            ],

            // Lines drawn without labels
            lines: [
                // Parallel lines
                { endA: { x: 100, y: 300 }, endB: { x: 300, y: 300 }, type: "parallel",color: "green", enableDrag:false   },
             
                { endA: { x: 300, y: 100 }, endB: { x: 300, y: 300 }, type: "parallel",color: "green", enableDrag:false    },

                // Transversals
                { endA: { x: 440, y: 440 }, endB: { x: 300, y: 300 }, type: "transversal", color: "green",enableDrag:false   },
                { endA: { x: 300, y: 100 }, endB: { x: 600, y: 100 }, type: "transversal", color: "green",enableDrag:false  },
                { endA: { x: 100, y: 300 }, endB: { x: 100, y: 600 }, type: "transversal", color: "green",enableDrag:false   },

                // Connecting lines
               
                { endA: { x: 440, y: 440 }, endB: { x: 620, y: 260 }, type: "connecting", color: "green", enableDrag:false   },

               
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
            
    <h3>Verification - Radius Tangent Theorem </h3>

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
      <td><input type="text" name="angle_lao" placeholder="Enter ∠LAO" style="width: 90%;"></td>
      <td><input type="text" name="perpendicular1" placeholder="Yes/No" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>2</td>
      <td>∠MBO</td>
      <td>Yes/No</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="text" name="angle_mbo" placeholder="Enter ∠MBO" style="width: 90%;"></td>
      <td><input type="text" name="perpendicular2" placeholder="Yes/No" style="width: 90%;"></td>
    </tr>
    <tr style="background-color: #d9e1f2;">
      <td>3</td>
      <td>∠NCO</td>
      <td>Yes/No</td>
    </tr>
    <tr>
      <td></td>
      <td><input type="text" name="angle_nco" placeholder="Enter ∠NCO" style="width: 90%;"></td>
      <td><input type="text" name="perpendicular3" placeholder="Yes/No" style="width: 90%;"></td>
    </tr>
  </tbody>
</table>, `,

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

        defaultButtonType: 'sin',
       
        theoremDefinition: "This Theorem states that two tangent segments drawn to a circle from the same external point are equal in length.",

    
        canvasConfig: {
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
             <h3>Verification - Two Tangent Theorem </h3>

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
        <input type="number" name="tangent_la" placeholder="Enter LA" style="width: 90%;"
            oninput="compareMeasures('tangent_la', 'tangent_lb', 'is_la_lb'); ">
        </td>
        <td>
            <input type="number" name="tangent_lb" placeholder="Enter LB" style="width: 90%;"
                oninput="compareMeasures('tangent_la', 'tangent_lb', 'is_la_lb');">
        </td>
        <td>
            <span name="is_la_lb"></span>
        </td>

    </tr>
   
     
</table>
              
        `,

        cos:   `
             <h3>Verification - Two Tangent Theorem </h3>

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
    <input type="number" name="tangent_mc" placeholder="Enter MC" style="width: 90%;"
        oninput="compareMeasures('tangent_mc', 'tangent_md', 'is_mc_md'); ">
</td>
<td>
    <input type="number" name="tangent_md" placeholder="Enter MD" style="width: 90%;"
        oninput="compareMeasures('tangent_mc', 'tangent_md', 'is_mc_md');">
</td>
<td>
    <span name="is_mc_md"></span>
</td>

    </tr>

    
</table>
              
        `, tan :  `
             <h3>Verification - Two Tangent Theorem </h3>

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
    <input type="number" name="tangent_ne" placeholder="Enter NE" style="width: 90%;"
        oninput="compareMeasures('tangent_ne', 'tangent_nf', 'is_ne_nf'); ">
</td>
<td>
    <input type="number" name="tangent_nf" placeholder="Enter NF" style="width: 90%;"
        oninput="compareMeasures('tangent_ne', 'tangent_nf', 'is_ne_nf');">
</td>
<td>
    <span name="is_ne_nf"></span>
</td>

    </tr>
</table>
              
        `,
},
formStructure: {
    conclusion: "studentConclusion",
    fields: [
      // SIN subtype
      {
        length1: "tangent_la", label1: "LA",
        length2: "tangent_lb", label2: "LB",
        result: "is_la_lb",
        subtype: "sin"
      },
      // COS subtype
      {
        length1: "tangent_mc", label1: "MC",
        length2: "tangent_md", label2: "MD",
        result: "is_mc_md",
        subtype: "cos"
      },
      // TAN subtype
      {
        length1: "tangent_ne", label1: "NE",
        length2: "tangent_nf", label2: "NF",
        result: "is_ne_nf",
        subtype: "tan"
      }
    ]
  }
  

},
   
    subtendedAngles: {
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
           
             <h3>Verification - Subtended Angles </h3>

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



               
        `,

           cos : `
           
            <h3>Verification - Subtended Angles </h3>

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


            
        `, 

           tan : `
           
            <h3>Verification - Subtended Angles </h3>

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

  arcs: [
    // Arc at A for ∠DAC (top left arrow in image)
    {
      center: { x: 300, y: 100 },        // Point A
      start: { x: 150, y: 100 },         // Point D
      end: { x: 124, y: 400 },           // Point C
      radius: 30,
      color: "red",
      direction: "anticlockwise",
      subtype: "sin"
    },
    // Arc at O for ∠CÔB (bottom arc)
    {
      center: { x: 300, y: 300 },        // Point O
      start: { x: 124, y: 400 },         // Point C
      end: { x: 476, y: 400 },           // Point B
      radius: 40,
      color: "red",
      direction: "clockwise",
      subtype: "sin"
    }
  ],
  

  lines: [
    // "sin"
    { endA: { x: 124, y: 400 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "sin" },
    { endA: { x: 124, y: 400 }, endB: { x: 300, y: 100 }, color: "green", subtype: "sin" },
    { endA: { x: 300, y: 100 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "sin" },

    // "cos"
    { endA: { x: 124, y: 400 }, endB: { x: 500, y: 280 }, color: "green", subtype: "cos" },
    { endA: { x: 476, y: 400 }, endB: { x: 500, y: 280 }, color: "blue", subtype: "cos" },
    { endA: { x: 124, y: 400 }, endB: { x: 476, y: 400 }, color: "blue", subtype: "cos" },

    // "tan"
    { endA: { x: 140, y: 180 }, endB: { x: 460, y: 420 }, color: "blue", subtype: "tan" },
    { endA: { x: 140, y: 420 }, endB: { x: 140, y: 180 }, color: "green", subtype: "tan" },
    { endA: { x: 140, y: 420 }, endB: { x: 460, y: 420 }, color: "blue", subtype: "tan" }
  ],

  tangentLines: [
    {
      midpoint: { x: 300, y: 100, label: "A" },
      length: 300,
      color: "green",
      subtype: "sin"
    },
    {
      midpoint: { x: 500, y: 280, label: "A" },
      length: 200,
      color: "green",
      subtype: "cos"
    },
    {
      midpoint: { x: 140, y: 180, label: "A" },
      length: 200,
      color: "green",
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

        <ul>
            <li><strong>Verifying – If the chord is a diameter, then the alternate segment angles will always be 45°.</strong></li>
            <li>Measure the angle and note the readings in the Table.</li>
        </ul>
    </li>
</ul>

            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
           <h3>Verification - Alternate Segment Theorem </h3>

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
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>

    </tr>
    
               
        `,

           cos : `
           
                        <h3>Verification - Alternate Segment Theorem </h3>

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
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc'); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>

    </tr>
            
        `, 

           tan : `
           
                       <h3>Verification - Alternate Segment Theorem </h3>

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
    <input type="number" name="angle_cad" placeholder="Enter ∠CAD" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc', 45); ">
</td>
<td>
    <input type="number" name="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="compareMeasures('angle_cad', 'angle_abc', 'is_cad_abc', 45); ">
</td>
<td>
    <span name="is_cad_abc"></span>
</td>

    </tr>
        

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
           
            <h3>Verification for Cyclic Quadrilaterals</h3>

    <h4>Table </h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABC</th>
        <th>Interior Opposite ∠ADC </th>
        <th>Is ∠ABC + ∠ADC = 180?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" id="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <input type="number" id="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
         oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <span id="sum_abc_adc"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠BAD</th>
        <th>Interior Opposite ∠BCD</th>
        <th>Is ∠BAD + ∠BCD = 180 ?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_bad" placeholder="Enter ∠BAD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
</td>
<td>
    <input type="number" id="angle_bcd" placeholder="Enter ∠BCD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180); ">
</td>
<td>
    <span id="sum_bad_bcd"></span>
</td>

    </tr>

  <tr>
        <th>Measure of ∠ADC</th>
        <th>Exterior Opposite ∠ABE</th>
        <th>Is ∠ADC = ∠ABE?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <input type="number" name="angle_abe" placeholder="Enter ∠ABE" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <span name="is_adc_abe"></span>
</td>

    </tr>


</table>
        

    
               
        `,

           cos : `
           
                       
            <h3>Verification for Cyclic Quadrilaterals</h3>

    <h4>Table </h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABC</th>
        <th>Interior Opposite ∠ADC </th>
        <th>Is ∠ABC + ∠ADC = 180?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" id="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <input type="number" id="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
         oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <span id="sum_abc_adc"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠BAD</th>
        <th>Interior Opposite ∠BCD</th>
        <th>Is ∠BAD + ∠BCD = 180 ?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_bad" placeholder="Enter ∠BAD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
</td>
<td>
    <input type="number" id="angle_bcd" placeholder="Enter ∠BCD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180); ">
</td>
<td>
    <span id="sum_bad_bcd"></span>
</td>

    </tr>

  <tr>
        <th>Measure of ∠ADC</th>
        <th>Exterior Opposite ∠ABE</th>
        <th>Is ∠ADC = ∠ABE?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <input type="number" name="angle_ade" placeholder="Enter ∠ABE" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <span name="is_adc_abe"></span>
</td>

    </tr>


</table>
        
        
            
        `, 

           tan : `
           
                       
 <h3>Verification for Cyclic Quadrilaterals</h3>

    <h4>Table </h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABC</th>
        <th>Interior Opposite ∠ADC </th>
        <th>Is ∠ABC + ∠ADC = 180?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" id="angle_abc" placeholder="Enter ∠ABC" style="width: 90%;"
        oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <input type="number" id="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
         oninput="sumMeasures('angle_abc', 'angle_adc', 'sum_abc_adc', 180); ">
</td>
<td>
    <span id="sum_abc_adc"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠BAD</th>
        <th>Interior Opposite ∠BCD</th>
        <th>Is ∠BAD + ∠BCD = 180 ?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_bad" placeholder="Enter ∠BAD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180);">
</td>
<td>
    <input type="number" id="angle_bcd" placeholder="Enter ∠BCD" style="width: 90%;"
        oninput="sumMeasures('angle_bad', 'angle_bcd', 'sum_bad_bcd', 180); ">
</td>
<td>
    <span id="sum_bad_bcd"></span>
</td>

    </tr>

  <tr>
        <th>Measure of ∠ADC</th>
        <th>Exterior Opposite ∠ABE</th>
        <th>Is ∠ADC = ∠ABE?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adc" placeholder="Enter ∠ADC" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <input type="number" name="angle_abe" placeholder="Enter ∠ABE" style="width: 90%;"
        oninput="compareMeasures('angle_adc', 'angle_abe', 'is_adc_abe');">
</td>
<td>
    <span name="is_adc_abe"></span>
</td>

    </tr>


</table>
        
        

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
}
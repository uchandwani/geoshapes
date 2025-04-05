export  const functionalityConfig = {

        
    
        sineTheta: {
           
        theoremDefinition: "Tangent to a circle is perpendicular to the radius of the circle at the point of contact.",
        canvasConfig: {
            
            circle: [{ x: 400, y: 400 }, 200], 
           
            points: [
                { x: 400, y: 400, label: "O", color: "red", radius: 5 },
                { x: 400, y: 200, label: "A", color: "red", radius: 5 },
                { x: 540, y: 540, label: "B", color: "red", radius: 5 },

                { x: 200, y: 400, label: "C", color: "red", radius: 5 },
               
                { x: 700, y: 200, label: "L", color: "red", radius: 5},
                { x: 720, y: 360, label: "M", color: "red", radius: 5},
                { x: 200, y: 700, label: "N", color: "red", radius: 5},

               
            ],

            // Lines drawn without labels
            lines: [
                // Parallel lines
                { endA: { x: 200, y: 400 }, endB: { x: 400, y: 400 }, type: "parallel",color: "green", enableDrag:false   },
             
                { endA: { x: 400, y: 200 }, endB: { x: 400, y: 400 }, type: "parallel",color: "green", enableDrag:false    },

                // Transversals
                { endA: { x: 540, y: 540 }, endB: { x: 400, y: 400 }, type: "transversal", color: "green",enableDrag:false   },
                { endA: { x: 400, y: 200 }, endB: { x: 700, y: 200 }, type: "transversal", color: "green",enableDrag:false  },
                { endA: { x: 200, y: 400 }, endB: { x: 200, y: 700 }, type: "transversal", color: "green",enableDrag:false   },

                // Connecting lines
               
                { endA: { x: 540, y: 540 }, endB: { x: 720, y: 360 }, type: "connecting", color: "green", enableDrag:false   },

               
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
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠AFQ</th>
        <th>Corresponding ∠AGT </th>
        <th>Is ∠AFQ = ∠AGT ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_afq" placeholder="Enter ∠AFQ" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt'); ">
</td>
<td>
    <input type="number" name="angle_agt" placeholder="Enter ∠AGT" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt'); ">
</td>
<td>
    <span name="is_afq_agt"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠AFD</th>
        <th>Corresponding ∠AGE</th>
        <th>Is ∠AFD = ∠AGE ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_afd" placeholder="Enter ∠AFD" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age'); ">
</td>
<td>
    <input type="number" name="angle_age" placeholder="Enter ∠AGE" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age'); ">
</td>
<td>
    <span name="is_afd_age"></span>
</td>

    </tr>
</table>


    <h3>Verification - Vertically Opposite Angles </h3>

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
    cosineTheta: {

        defaultButtonType: 'sin',
       
        theoremDefinition: "This Theorem states that two tangent segments drawn to a circle from the same external point are equal in length.",

    
        canvasConfig : {

      
            circle: [{ x: 400, y: 400 }, 200],

            points: [
            { x: 400, y: 400, label: "O", color: "red", radius: 5, type: "regular" }, // Center

            // First set of tangents for "sin"
            { x: 400, y: 200, label: "A", color: "green", radius: 5, type: "tangent", subtype: "sin" },
            { x: 600, y: 400, label: "B", color: "green", radius: 5, type: "tangent", subtype: "sin" },

            // Second set of tangents for "cos"
            { x: 600, y: 400, label: "C", color: "green", radius: 5, type: "tangent", subtype: "cos" },
            { x: 400, y: 600, label: "D", color: "green", radius: 5, type: "tangent", subtype: "cos" },

            // Third set of tangents for "tan"
            { x: 560, y: 280, label: "E", color: "green", radius: 5, type: "tangent", subtype: "tan" },
            { x: 560, y: 520, label: "F", color: "green", radius: 5, type: "tangent", subtype: "tan" },
            ],

            externalPoints: {
                sin: { label: "L", color: "blue", radius: 5 },
                cos: { label: "M", color: "blue", radius: 5 },
                tan: { label: "N", color: "blue", radius: 5 },
            },
          
            lines: []
        },

        buttonSet: [
                { label: "Figure 1", type: "sin" },
                { label: "Figure 2", type: "cos" },
                { label: "Figure 3", type: "tan" },
                
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
}},
   
    subtendedAngles: {
        defaultButtonType: 'sin',
        theoremDefinition: "The angle subtended by an arc at the center is double the angle subtended by the same arc at the circumference. The angles subtended by the same arc on the circumference are equal.The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
         canvasConfig: {
      
    "circle": [{ "x": 400, "y": 400 }, 200],

    "points": [
        // Common center
        { x: 400, y: 400, label: "O", color: "red", radius: 5, type: "regular" },

        // "sin" - First Figure: ∠COB = 60°
       
        { x: 280, y: 560, label: "C", color: "red", radius: 5, type: "subtended", subtype: "sin" },
        { x: 520, y: 560, label: "B", color: "red", radius: 5, type: "subtended", subtype: "sin" },
        { x: 400, y: 200, label: "A", color: "red", radius: 5, type: "subtended", subtype: "sin" },
        { x: 500, y: 224, label: "D", color: "red", radius: 5, type: "subtended", subtype: "sin" },

        // "cos" - Second Figure: ∠COB = 100°
        { x: 224, y: 500, label: "C", color: "red", radius: 5, type: "subtended", subtype: "cos" },
        { x: 576, y: 500, label: "B", color: "red", radius: 5, type: "subtended", subtype: "cos" },
        { x: 400, y: 200, label: "A", color: "red", radius: 5, type: "subtended", subtype: "cos" },
        { x: 240, y: 280, label: "D", color: "red", radius: 5, type: "subtended", subtype: "cos" },

        // "tan" - Special Case: ∠COB = 180°
        { x: 200, y: 400, label: "C", color: "red", radius: 5, type: "subtended", subtype: "tan" },
        { x: 600, y: 400, label: "B", color: "red", radius: 5, type: "subtended", subtype: "tan" },
        { x: 400, y: 200, label: "A", color: "red", radius: 5, type: "subtended", subtype: "tan" },
        { x: 520, y: 240, label: "D", color: "red", radius: 5, type: "subtended", subtype: "tan" },
        { x: 260, y: 540, label: "E", color: "red", radius: 5, type: "subtended", subtype: "tan" }
    ],


    "lines": [
        // Figure "sin"
        {  endA: { x: 400, y: 400 }, endB: { x: 280, y: 560 },color: "green", subtype: "sin",enableDrag:false },
        {  endA: { x: 400, y: 400 }, endB: { x: 520, y: 560 },color: "green", subtype: "sin",enableDrag:false },

        {  endA: { x: 400, y: 200 }, endB: { x: 280, y: 560 },color: "green", subtype: "sin",enableDrag:false },
        {  endA: { x: 400, y: 200 }, endB: { x: 520, y: 560 },color: "green", subtype: "sin",enableDrag:false },

        {  endA: { x: 500, y: 224 }, endB: { x: 280, y: 560 },color: "green", subtype: "sin",enableDrag:false },
        {  endA: { x: 500, y: 224 }, endB: { x: 520, y: 560 },color: "green", subtype: "sin",enableDrag:false },


        {  endA: { x: 400, y: 400 }, endB: { x: 224, y: 500 },color: "green", subtype: "cos",enableDrag:false },
        {  endA: { x: 400, y: 400 }, endB: { x: 576, y: 500 },color: "green", subtype: "cos",enableDrag:false },

        {  endA: { x: 400, y: 200 }, endB: { x: 226, y: 500 },color: "green", subtype: "cos",enableDrag:false },
        {  endA: { x: 400, y: 200 }, endB: { x: 574, y: 500 },color: "green", subtype: "cos",enableDrag:false },

        {  endA: { x: 240, y: 280 }, endB: { x: 226, y: 500 },color: "green", subtype: "cos",enableDrag:false },
        {  endA: { x: 240, y: 280 }, endB: { x: 574, y: 500 },color: "green", subtype: "cos",enableDrag:false },


        {  endA: { x: 400, y: 400 }, endB: { x: 200, y: 400 },color: "green", subtype: "tan",enableDrag:false },
        {  endA: { x: 400, y: 400 }, endB: { x: 600, y: 400 },color: "green", subtype: "tan",enableDrag:false },

        {  endA: { x: 400, y: 200 }, endB: { x: 200, y: 400 },color: "green", subtype: "tan",enableDrag:false },
        {  endA: { x: 400, y: 200 }, endB: { x: 600, y: 400 },color: "green", subtype: "tan",enableDrag:false },

        {  endA: { x: 520, y: 240 }, endB: { x: 200, y: 400 },color: "green", subtype: "tan",enableDrag:false },
        {  endA: { x: 520, y: 240 }, endB: { x: 600, y: 400 },color: "green", subtype: "tan",enableDrag:false },

        {  endA: { x: 260, y: 540 }, endB: { x: 200, y: 400 },color: "green", subtype: "tan",enableDrag:false },
        {  endA: { x: 260, y: 540 }, endB: { x: 600, y: 400 },color: "green", subtype: "tan",enableDrag:false },

        
      
        ]


        },
         buttonSet: [
                { label: "Figure 1", type: "sin" },
                { label: "Figure 2", type: "cos" },
                { label: "Figure 3", type: "tan" },
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

},

alternateSegments: {
        defaultButtonType: 'sin',
        theoremDefinition: "The theorem states that for any circle, the angle formed between the tangent and the chord through the point of contact of the tangent is equal to the angle formed by the chord in the alternate segment",
         canvasConfig: {
    
          circle: [{ x: 400, y: 400 }, 200],

          points: [
            { x: 400, y: 400, label: "O", color: "red", radius: 5, type: "regular" },

            // "sin" - First Figure: ∠ABC = ∠CAD = 30°
            { x: 224, y: 500, label: "C", color: "red", radius: 5, type: "alternate", subtype: "sin" },
            { x: 576, y: 500, label: "B", color: "red", radius: 5, type: "alternate", subtype: "sin" },
            { x: 400, y: 200, label: "A", color: "red", radius: 5, type: "alternate", subtype: "sin" },
            { x: 250, y: 200, label: "D", color: "red", radius: 5, type: "alternate", subtype: "sin" },

            // "cos" - Second Figure: ∠ABC = ∠CAD = 120°
            { x: 224, y: 500, label: "C", color: "red", radius: 5, type: "alternate", subtype: "cos" },
            { x: 576, y: 500, label: "B", color: "red", radius: 5, type: "alternate", subtype: "cos" },
            { x: 600, y: 380, label: "A", color: "red", radius: 5, type: "alternate", subtype: "cos" },
            { x: 590, y: 280, label: "D", color: "red", radius: 5, type: "alternate", subtype: "cos" },

            // "tan" - Special Case: ∠ABC = ∠CAD = 45°
            { x: 240, y: 520, label: "C", color: "red", radius: 5, type: "alternate", subtype: "tan" },
            { x: 560, y: 520, label: "B", color: "red", radius: 5, type: "alternate", subtype: "tan" },
            { x: 240, y: 280, label: "A", color: "red", radius: 5, type: "alternate", subtype: "tan" },
            { x: 180, y: 360, label: "D", color: "red", radius: 5, type: "alternate", subtype: "tan" }
          ],

          lines: [
            // Figure "sin"
            { endA: { x: 224, y: 500 }, endB: { x: 576, y: 500 }, color: "blue", subtype: "sin" },
            { endA: { x: 224, y: 500 }, endB: { x: 400, y: 200 }, color: "green", subtype: "sin" },
            { endA: { x: 400, y: 200 }, endB: { x: 576, y: 500 }, color: "blue", subtype: "sin" },
          

            // Figure "cos"
            { endA: { x: 224, y: 500 }, endB: { x: 600, y: 380 }, color: "green", subtype: "cos" },
            { endA: { x: 576, y: 500 }, endB: { x: 600, y: 380 }, color: "blue", subtype: "cos" },
            { endA: { x: 224, y: 500 }, endB: { x: 576, y: 500 }, color: "blue", subtype: "cos" },
           

            // Figure "tan"
            { endA: { x: 240, y: 280 }, endB: { x: 560, y: 520 }, color: "blue", subtype: "tan" },
            { endA: { x: 240, y: 520 }, endB: { x: 240, y: 280 }, color: "green", subtype: "tan" },
            { endA: { x: 240, y: 520 }, endB: { x: 560, y: 520 }, color: "blue", subtype: "tan" },
           
          ],

 
  tangentLines: [
    {
      midpoint: { x: 400, y: 200, label: "A" },  // ✅ Explicit midpoint label
      length: 300,  // Extend equally on both sides
      color: "green",
      subtype: "sin"
    },
    {
      midpoint: { x: 600, y: 380, label: "A" },  // ✅ Explicit midpoint label
      length: 200,  // Extend equally on both sides
      color: "green",
      subtype: "cos"
    },
    {
      midpoint: { x: 240, y: 280, label: "A" },  // ✅ Explicit midpoint label
      length: 200,
      color: "green",
      subtype: "tan"
    }
  ]
}
,
         buttonSet: [
                { label: "Figure 1", type: "sin" },
                { label: "Figure 2", type: "cos" },
                { label: "Figure 3", type: "tan" },
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
},

quadrilaterals: {
        defaultButtonType: 'sin',
        theoremDefinition: "The theorem states that for any circle, the angle formed between the tangent and the chord through the point of contact of the tangent is equal to the angle formed by the chord in the alternate segment",
         canvasConfig: {
    
         circle: [{ x: 400, y: 400 }, 200],

  points: [
    // Quadrilateral (Figure 1) - sin
    { x: 280, y: 240, label: "D", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 560, y: 280, label: "A", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 520, y: 560, label: "B", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 320, y: 580, label: "C", color: "red", radius: 5, type: "subtended", subtype: "sin" },
    { x: 600, y: 550, label: "E", color: "blue", radius: 5, type: "external", subtype: "sin" },

    // Square (Figure 2) - cos
    { x: 259, y: 259, label: "C", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 541, y: 259, label: "D", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 541, y: 541, label: "A", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 259, y: 541, label: "B", color: "red", radius: 5, type: "subtended", subtype: "cos" },
    { x: 259, y: 620, label: "E", color: "blue", radius: 5, type: "external", subtype: "cos" },

    // Trapezium (Figure 3) - tan
    { x: 300, y: 573, label: "A", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 500, y: 573, label: "D", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 550, y: 270, label: "C", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 250, y: 270, label: "B", color: "red", radius: 5, type: "subtended", subtype: "tan" },
    { x: 180, y: 270, label: "E", color: "blue", radius: 5, type: "external", subtype: "tan" }
  ],

  lines: [
    // Quadrilateral (Figure 1) - sin
    { endA: { x: 280, y: 240 }, endB: { x: 560, y: 280 }, color: "blue", subtype: "sin" },
    { endA: { x: 560, y: 280 }, endB: { x: 520, y: 560 }, color: "blue", subtype: "sin" },
    { endA: { x: 520, y: 560 }, endB: { x: 320, y: 580 }, color: "blue", subtype: "sin" },
    { endA: { x: 320, y: 580 }, endB: { x: 280, y: 240 }, color: "blue", subtype: "sin" },
    { endA: { x: 320, y: 580 }, endB: { x: 600, y: 550 }, color: "blue", subtype: "sin" },

    // Square (Figure 2) - cos
    { endA: { x: 259, y: 259 }, endB: { x: 541, y: 259 }, color: "blue", subtype: "cos" },
    { endA: { x: 541, y: 259 }, endB: { x: 541, y: 541 }, color: "blue", subtype: "cos" },
    { endA: { x: 541, y: 541 }, endB: { x: 259, y: 541 }, color: "blue", subtype: "cos" },
    { endA: { x: 259, y: 541 }, endB: { x: 259, y: 259 }, color: "blue", subtype: "cos" },
    { endA: { x: 259, y: 541 }, endB: { x: 259, y: 620 }, color: "blue", subtype: "cos" },

    // Trapezium (Figure 3) - tan
    { endA: { x: 300, y: 573 }, endB: { x: 500, y: 573 }, color: "blue", subtype: "tan" },
    { endA: { x: 500, y: 573 }, endB: { x: 550, y: 270 }, color: "blue", subtype: "tan" },
    { endA: { x: 550, y: 270 }, endB: { x: 250, y: 270 }, color: "blue", subtype: "tan" },
    { endA: { x: 250, y: 270 }, endB: { x: 300, y: 573 }, color: "blue", subtype: "tan" },
    { endA: { x: 250, y: 270 }, endB: { x: 180, y: 270 }, color: "blue", subtype: "tan" }
  ]

,

}

,
         buttonSet: [
                { label: "Figure 1", type: "sin" },
                { label: "Figure 2", type: "cos" },
                { label: "Figure 3", type: "tan" },
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
},
}
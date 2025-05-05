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
  <tr><th colspan="3" style="text-align:left; background:#6a9be8;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠AGT</span><br>
      <input type="number" name="angle_abd" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
    </td>
    <td><span>∠EGU</span><br>
      <input type="number" name="angle_acf" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
    </td>
    <td><span name="is_abd_acf"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠AGE</span><br>
      <input type="number" name="angle_adb" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
    </td>
    <td><span>∠TGU</span><br>
      <input type="number" name="angle_afc2" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
    </td>
    <td><span name="is_adb_afc"></span></td>
  </tr>

  <!-- Table 2 -->
  <tr><th colspan="3" style="text-align:left; background:#6a9be8; ">Table 2</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠ABP</span><br>
      <input type="number" name="angle_abp" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abp', 'angle_qbw', 'is_abp_qbw');">
    </td>
    <td><span>∠QBW</span><br>
      <input type="number" name="angle_qbw" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abp', 'angle_qbw', 'is_abp_qbw');">
    </td>
    <td><span name="is_abp_qbw"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠ABQ</span><br>
      <input type="number" name="angle_abq" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abq', 'angle_pbw', 'is_abq_pbw');">
    </td>
    <td><span>∠PBW</span><br>
      <input type="number" name="angle_pbw" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abq', 'angle_pbw', 'is_abq_pbw');">
    </td>
    <td><span name="is_abq_pbw"></span></td>
  </tr>

  <!-- Table 3 -->
  <tr><th colspan="3" style="text-align:left; background:#6a9be8;">Table 3</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠AEG</span><br>
      <input type="number" name="angle_aeg" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_aeg', 'angle_sev', 'is_aeg_sev');">
    </td>
    <td><span>∠SEV</span><br>
      <input type="number" name="angle_sev" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_aeg', 'angle_sev', 'is_aeg_sev');">
    </td>
    <td><span name="is_aeg_sev"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠AES</span><br>
      <input type="number" name="angle_aes" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_aes', 'angle_tev', 'is_aes_tev');">
    </td>
    <td><span>∠TEV</span><br>
      <input type="number" name="angle_tev" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_aes', 'angle_tev', 'is_aes_tev');">
    </td>
    <td><span name="is_aes_tev"></span></td>
  </tr>
</table>



        `,
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
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠AFQ</span><br>
      <input type="number" id="angle_afq" name="angle_afq" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt');">
    </td>
    <td><span>∠AGT</span><br>
      <input type="number" id="angle_agt" name="angle_agt" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt');">
    </td>
    <td><span id="is_afq_agt" name="is_afq_agt"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠AFD</span><br>
      <input type="number" id="angle_afd" name="angle_afd" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age');">
    </td>
    <td><span>∠AGE</span><br>
      <input type="number" id="angle_age" name="angle_age" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age');">
    </td>
    <td><span id="is_afd_age" name="is_afd_age"></span></td>
  </tr>

  <!-- Table 2 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠ADF</span><br>
      <input type="number" id="angle_adf" name="angle_adf" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adf', 'angle_aeg', 'is_adf_aeg');">
    </td>
    <td><span>∠AEG</span><br>
      <input type="number" id="angle_aeg" name="angle_aeg" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adf', 'angle_aeg', 'is_adf_aeg');">
    </td>
    <td><span id="is_adf_aeg" name="is_adf_aeg"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠PDV</span><br>
      <input type="number" id="angle_pdv" name="angle_pdv" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_pdv', 'angle_sev', 'is_pdv_sev');">
    </td>
    <td><span>∠SEV</span><br>
      <input type="number" id="angle_sev" name="angle_sev" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_pdv', 'angle_sev', 'is_pdv_sev');">
    </td>
    <td><span id="is_pdv_sev" name="is_pdv_sev"></span></td>
  </tr>

  <!-- Table 3 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠NAB</span><br>
      <input type="number" id="angle_nab" name="angle_nab" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_qbc', 'is_nab_qbc');">
    </td>
    <td><span>∠QBC</span><br>
      <input type="number" id="angle_qbc" name="angle_qbc" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_qbc', 'is_nab_qbc');">
    </td>
    <td><span id="is_nab_qbc" name="is_nab_qbc"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠MAB</span><br>
      <input type="number" id="angle_mab" name="angle_mab" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_pbc', 'is_mab_pbc');">
    </td>
    <td><span>∠PBC</span><br>
      <input type="number" id="angle_pbc" name="angle_pbc" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_pbc', 'is_mab_pbc');">
    </td>
    <td><span id="is_mab_pbc" name="is_mab_pbc"></span></td>
  </tr>
</table>


              
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
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠QFG</span><br>
      <input type="number" name="angle_abd" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
    </td>
    <td><span>∠FGE</span><br>
      <input type="number" name="angle_acf" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
    </td>
    <td><span name="is_abd_acf"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠DFG</span><br>
      <input type="number" name="angle_adb" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
    </td>
    <td><span>∠FGT</span><br>
      <input type="number" name="angle_afc2" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
    </td>
    <td><span name="is_adb_afc"></span></td>
  </tr>

  <!-- Table 2 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠PDE</span><br>
      <input type="number" name="angle_pde" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_pde', 'angle_deg', 'is_pde_deg');">
    </td>
    <td><span>∠DEG</span><br>
      <input type="number" name="angle_deg" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_pde', 'angle_deg', 'is_pde_deg');">
    </td>
    <td><span name="is_pde_deg"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠FDE</span><br>
      <input type="number" name="angle_fde" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_fde', 'angle_des', 'is_fde_des');">
    </td>
    <td><span>∠DES</span><br>
      <input type="number" name="angle_des" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_fde', 'angle_des', 'is_fde_des');">
    </td>
    <td><span name="is_fde_des"></span></td>
  </tr>

  <!-- Table 3 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠NAB</span><br>
      <input type="number" name="angle_nab" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_abp', 'is_nab_abp');">
    </td>
    <td><span>∠ABP</span><br>
      <input type="number" name="angle_abp" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_abp', 'is_nab_abp');">
    </td>
    <td><span name="is_nab_abp"></span></td>
  </tr>

  <tr style="background-color: #d9e1f2;">
    <td><span>∠MAB</span><br>
      <input type="number" name="angle_mab" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_abf', 'is_mab_abf');">
    </td>
    <td><span>∠ABF</span><br>
      <input type="number" name="angle_abf" placeholder="Enter" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_abf', 'is_mab_abf');">
    </td>
    <td><span name="is_mab_abf"></span></td>
  </tr>
</table>



           
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
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 1</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠QFG</span><br>
      <input type="number" name="angle_qfg" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_qfg', 'angle_fgt', 'sum_qfg_fgt');">
    </td>
    <td><span>∠FGT</span><br>
      <input type="number" name="angle_fgt" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_qfg', 'angle_fgt', 'sum_qfg_fgt');">
    </td>
    <td><span name="sum_qfg_fgt"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠DFG</span><br>
      <input type="number" name="angle_dfg" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_dfg', 'angle_fge', 'sum_dfg_fge');">
    </td>
    <td><span>∠FGE</span><br>
      <input type="number" name="angle_fge" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_dfg', 'angle_fge', 'sum_dfg_fge');">
    </td>
    <td><span name="sum_dfg_fge"></span></td>
  </tr>

  <!-- Table 2 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 2</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠PDE</span><br>
      <input type="number" name="angle_pde" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_pde', 'angle_des', 'sum_pde_des');">
    </td>
    <td><span>∠DES</span><br>
      <input type="number" name="angle_des" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_pde', 'angle_des', 'sum_pde_des');">
    </td>
    <td><span name="sum_pde_des"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠FDE</span><br>
      <input type="number" name="angle_fde" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_fde', 'angle_deg', 'sum_fde_deg');">
    </td>
    <td><span>∠DEG</span><br>
      <input type="number" name="angle_deg" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_fde', 'angle_deg', 'sum_fde_deg');">
    </td>
    <td><span name="sum_fde_deg"></span></td>
  </tr>

  <!-- Table 3 -->
  <tr><th colspan="3" style="text-align:left; background:#e2efd9;">Table 3</th></tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠NAB</span><br>
      <input type="number" name="angle_nab" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_nab', 'angle_abf', 'sum_nab_abf');">
    </td>
    <td><span>∠ABF</span><br>
      <input type="number" name="angle_abf" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_nab', 'angle_abf', 'sum_nab_abf');">
    </td>
    <td><span name="sum_nab_abf"></span></td>
  </tr>
  <tr style="background-color: #d9e1f2;">
    <td><span>∠MAB</span><br>
      <input type="number" name="angle_mab" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_mab', 'angle_abp', 'sum_mab_abp');">
    </td>
    <td><span>∠ABP</span><br>
      <input type="number" name="angle_abp" placeholder="Enter" style="width: 90%;"
        oninput="sumMeasures('angle_mab', 'angle_abp', 'sum_mab_abp');">
    </td>
    <td><span name="sum_mab_abp"></span></td>
  </tr>
</table>

            
        `, 
}},
   
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
            
            
        `,  



    },

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
        

        `,  
    },
},
}
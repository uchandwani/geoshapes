export  const functionalityConfig = {

        
    
        sineTheta: {
           
        theoremDefinition: "Vertically Opposite Angles theorem states that when two lines intersect each other, the vertically opposite angles are equal",
        canvasConfig: {
            
           
            points: [
                { x: 445, y: 200, label: "A", color: "red", radius: 5 },
                { x: 200, y: 200, label: "M", color: "red", radius: 5 },
                { x: 620, y: 200, label: "N", color: "red", radius: 5 },

                { x: 140, y: 420, label: "P", color: "red", radius: 5 },
               
                { x: 430, y: 420, label: "D", color: "red", radius: 5},
                { x: 375, y: 420, label: "B", color: "red", radius: 5},
                { x: 555, y: 420, label: "F", color: "red", radius: 5},
                { x: 700, y: 420, label: "Q", color: "red", radius: 5},

                { x: 350, y: 500, label: "C", color: "red", radius: 5},
                { x: 425, y: 500, label: "E", color: "red", radius: 5},
                { x: 596    , y: 500, label: "G", color: "red", radius: 5},

                { x: 200, y: 500, label: "S", color: "red", radius: 5},
                { x: 700, y: 500, label: "T", color: "red", radius: 5},
                
                { x: 325, y: 580, label: "W", color: "red", radius: 5},
                { x: 422, y: 580, label: "V", color: "red", radius: 5},
                { x: 640, y: 580, label: "U", color: "red", radius: 5},
            ],

            // Lines drawn without labels
            lines: [
                // Parallel lines
                { endA: { x: 100, y: 200 }, endB: { x: 700, y: 200 }, type: "parallel",color: "green", enableDrag:false   },
             
                { endA: { x: 140, y: 420 }, endB: { x: 700, y: 420 }, type: "parallel",color: "green", enableDrag:false    },

                // Transversals
                { endA: { x: 380, y: 80 }, endB: { x: 700, y: 700 }, type: "transversal", enableDrag:false   },
                { endA: { x: 450, y: 80 }, endB: { x: 415, y: 700 }, type: "transversal", enableDrag:false  },
                { endA: { x: 480, y: 80 }, endB: { x: 290, y: 700 }, type: "transversal", enableDrag:false   },

                // Connecting lines
               
                { endA: { x: 140, y: 500 }, endB: { x: 700, y: 500 }, type: "connecting", color: "green", enableDrag:false   },

               
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
            
    <h3>Verification - Vertically Opposite Angles </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠AGT</th>
        <th>Vertically Opposite ∠EGU </th>
        <th>Is ∠AGT = ∠EGU ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_abd" placeholder="Enter ∠AGT" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf'); ">
</td>
<td>
    <input type="number" name="angle_acf" placeholder="Enter ∠EGU" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
</td>
<td>
    <span name="is_abd_acf"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠AGE</th>
        <th>Vertically Opposite ∠TGU</th>
        <th>Is ∠AGE = ∠TGU ?</th>
    </tr>   
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adb" placeholder="Enter ∠AGE" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc');">
</td>
<td>
    <input type="number" name="angle_afc2" placeholder="Enter ∠TGU" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc'); ">
</td>
<td>
    <span name="is_adb_afc"></span>
</td>

    </tr>
</table>

 <h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 15%;">
        <col style="width: 15%;">
        <col style="width: 20%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ABP</th>
        <th>Measure of ∠QBW </th>
        <th>Is ∠ABP = ∠QBW ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_abp" placeholder="Enter ∠ABP" style="width: 90%;"
        oninput="compareMeasures('angle_abp', 'angle_qbw', 'is_abp_qbw');">
</td>
<td>
    <input type="number" name="angle_qbw" placeholder="Enter ∠QBW" style="width: 90%;"
        oninput="compareMeasures('angle_abp', 'angle_qbw', 'is_abp_qbw');">
</td>
<td>
    <span name="is_abp_qbw"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠ABQ</th>
        <th>Vertically Opposite ∠PBW</th>
        <th>Is ∠ABQ = ∠PBW ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_abq" placeholder="Enter ∠ABQ" style="width: 90%;"
        oninput="compareMeasures('angle_abq', 'angle_pbw', 'is_abq_pbw');">
</td>
<td>
    <input type="number" name="angle_pbw" placeholder="Enter ∠PBW" style="width: 90%;"
        oninput="compareMeasures('angle_abq', 'angle_pbw', 'is_abq_pbw');">
</td>
<td>
    <span name="is_abq_pbw"></span>
</td>

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
        <th>Measure of ∠AEG</th>
        <th>Vertically Opposite ∠SEV </th>
        <th>Is ∠AEG = ∠SEV ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_aeg" placeholder="Enter ∠AEG" style="width: 90%;"
        oninput="compareMeasures('angle_aeg', 'angle_sev', 'is_aeg_sev');">
</td>
<td>
    <input type="number" name="angle_sev" placeholder="Enter ∠SEV" style="width: 90%;"
        oninput="compareMeasures('angle_aeg', 'angle_sev', 'is_aeg_sev');">
</td>
<td>
    <span name="is_aeg_sev"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠AES</th>
        <th>Vertically Opposite ∠TEV</th>
        <th>Is ∠AES = ∠TEV ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_aes" placeholder="Enter ∠AES" style="width: 90%;"
        oninput="compareMeasures('angle_aes', 'angle_tev', 'is_aes_tev');">
</td>
<td>
    <input type="number" name="angle_tev" placeholder="Enter ∠TEV" style="width: 90%;"
        oninput="compareMeasures('angle_aes', 'angle_tev', 'is_aes_tev');">
</td>
<td>
    <span name="is_aes_tev"></span>
</td>

    </tr>
</table>


        `,
},
    cosineTheta: {

        defaultButtonType: 'sin',
       
        theoremDefinitions: {
        'sin': "If two parallel line are intersected by a transversal, then each pair of ‘corresponding angles’ are equal.",
        'cos': "If two parallel line are intersected by a transversal, then each pair of ‘alternate interior angles’ are equal.",
        'tan': "If two parallel line are intersected by a transversal, then each pair of ‘interior angles on the same side of transversal’ are supplementary."
    },

    
        canvasConfig: {
            
           
            points: [
                { x: 445, y: 200, label: "A", color: "red", radius: 5},
                { x: 200, y: 200, label: "M", color: "red", radius: 5},
                { x: 620, y: 200, label: "N", color: "red", radius: 5},

                { x: 140, y: 420, label: "P", color: "red", radius: 5},
               
                { x: 430, y: 420, label: "D", color: "red", radius: 5},
                { x: 375, y: 420, label: "B", color: "red", radius: 5},
                { x: 555, y: 420, label: "F", color: "red", radius: 5},
                { x: 700, y: 420, label: "Q", color: "red", radius: 5},

                { x: 350, y: 500, label: "C", color: "red", radius: 5},
                { x: 425, y: 500, label: "E", color: "red", radius: 5},
                { x: 596    , y: 500, label: "G", color: "red", radius: 5},

                { x: 200, y: 500, label: "S", color: "red", radius: 5},
                { x: 700, y: 500, label: "T", color: "red", radius: 5},
                
                { x: 325, y: 580, label: "W", color: "red", radius: 5},
                { x: 422, y: 580, label: "V", color: "red", radius: 5},
                { x: 640, y: 580, label: "U", color: "red", radius: 5},
            ],

            // Lines drawn without labels
            lines: [
                // Parallel lines
                { endA: { x: 100, y: 200 }, endB: { x: 700, y: 200 }, type: "parallel",color: "green", enableDrag:false  },
             
                { endA: { x: 140, y: 420 }, endB: { x: 700, y: 420 }, type: "parallel",color: "green",enableDrag:false   },

                // Transversals
                { endA: { x: 380, y: 80 }, endB: { x: 700, y: 700 }, type: "transversal", enableDrag:false  },
                { endA: { x: 450, y: 80 }, endB: { x: 415, y: 700 }, type: "transversal", enableDrag:false  },
                { endA: { x: 480, y: 80 }, endB: { x: 290, y: 700 }, type: "transversal", enableDrag:false  },

                // Connecting lines
               
                { endA: { x: 140, y: 500 }, endB: { x: 700, y: 500 }, type: "connecting", color: "green" ,enableDrag:false },

               
            ]
        },
        buttonSet: [
                { label: "Corresponding Angles", type: "sin" },
                { label: "Alternate Angles", type: "cos" },
                { label: "Interior Angles", type: "tan" },
                
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
             <h3>Verification - Correponding Angles </h3>

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
    <input type="number" id ="angle_afq" name="angle_afq" placeholder="Enter ∠AFQ" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt'); ">
</td>
<td>
    <input type="number" id ="angle_agt" name="angle_agt" placeholder="Enter ∠AGT" style="width: 90%;"
        oninput="compareMeasures('angle_afq', 'angle_agt', 'is_afq_agt'); ">
</td>
<td>
    <span id="is_afq_agt" name="is_afq_agt"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠AFD</th>
        <th>Corresponding ∠AGE</th>
        <th>Is ∠AFD = ∠AGE ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_afd" name="angle_afd" placeholder="Enter ∠AFD" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age'); ">
</td>
<td>
    <input type="number" id="angle_age" name="angle_age" placeholder="Enter ∠AGE" style="width: 90%;"
        oninput="compareMeasures('angle_afd', 'angle_age', 'is_afd_age'); ">
</td>
<td>
    <span id="is_afd_age" name="is_afd_age"></span>
</td>

    </tr>
</table>

 <h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠ADF</th>
        <th>Corresponding ∠AEG </th>
        <th>Is ∠ADF = ∠AEG ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" id ="angle_adf" name="angle_adf" placeholder="Enter ∠ADF" style="width: 90%;"
        oninput="compareMeasures('angle_adf', 'angle_aeg', 'is_adf_aeg');">
</td>
<td>
    <input type="number" id="angle_aeg" name="angle_aeg" placeholder="Enter ∠AEG" style="width: 90%;"
        oninput="compareMeasures('angle_adf', 'angle_aeg', 'is_adf_aeg');">
</td>
<td>
    <span id="is_adf_aeg" name="is_adf_aeg"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠PDV</th>
        <th>Corresponding ∠SEV</th>
        <th>Is ∠PDV = ∠SEV ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_pdv" name="angle_pdv" placeholder="Enter ∠PDV" style="width: 90%;"
        oninput="compareMeasures('angle_pdv', 'angle_sev', 'is_pdv_sev');">
</td>
<td>
    <input type="number" id="angle_sev"  name="angle_sev" placeholder="Enter ∠SEV" style="width: 90%;"
        oninput="compareMeasures('angle_pdv', 'angle_sev', 'is_pdv_sev');">
</td>
<td>
    <span id="is_pdv_sev" name="is_pdv_sev"></span>
</td>

    </tr>
</table>

 <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠NAB</th>
        <th>Corresponding ∠QBC </th>
        <th>Is ∠NAB = ∠QBC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" id="angle_nab" name="angle_nab" placeholder="Enter ∠NAB" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_qbc', 'is_nab_qbc'); ">
</td>
<td>
    <input type="number" id="angle_qbc" name="angle_qbc" placeholder="Enter ∠QBC" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_qbc', 'is_nab_qbc');">
</td>
<td>
    <span id="is_nab_qbc" name="is_nab_qbc"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠MAB</th>
        <th>Corresponding ∠PBC</th>
        <th>Is ∠MAB = ∠PBC ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" id="angle_mab" name="angle_mab" placeholder="Enter ∠MAB" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_pbc', 'is_mab_pbc'); ">
</td>
<td>
    <input type="number" id="angle_pbc" name="angle_pbc" placeholder="Enter ∠PBC" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_pbc', 'is_mab_pbc');">
</td>
<td>
    <span id="is_mab_pbc" name="is_mab_pbc"></span>
</td>

    </tr>
</table>


              
        `,

        cos:  `
            <h3>Verification - Alternate Angles </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠QFG</th>
        <th>Alternate Interior ∠FGE </th>
        <th>Is ∠QFG = ∠FGE ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_abd" placeholder="Enter ∠QFG" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf');">
</td>
<td>
    <input type="number" name="angle_acf" placeholder="Enter ∠FGE" style="width: 90%;"
        oninput="compareMeasures('angle_abd', 'angle_acf', 'is_abd_acf'); ">
</td>
<td>
    <span name="is_abd_acf"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠DFG</th>
        <th>Alternate Interior ∠FGT</th>
        <th>Is ∠DFG = ∠FGT ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_adb" placeholder="Enter ∠DFG" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc'); ">
</td>
<td>
    <input type="number" name="angle_afc2" placeholder="Enter ∠FGT" style="width: 90%;"
        oninput="compareMeasures('angle_adb', 'angle_afc2', 'is_adb_afc'); ">
</td>   
<td>
    <span name="is_adb_afc"></span>
</td>

    </tr>
</table>

 <h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠PDE</th>
        <th>Alternate Interior ∠DEG </th>
        <th>Is ∠PDE = ∠DEG ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_pde" placeholder="Enter ∠PDE" style="width: 90%;"
        oninput="compareMeasures('angle_pde', 'angle_deg', 'is_pde_deg');">
</td>
<td>
    <input type="number" name="angle_deg" placeholder="Enter ∠DEG" style="width: 90%;"
        oninput="compareMeasures('angle_pde', 'angle_deg', 'is_pde_deg');">
</td>
<td>
    <span name="is_pde_deg"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠FDE </th>
        <th>Alternate Interior ∠DES</th>
        <th>Is ∠FDE = ∠DES ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_fde" placeholder="Enter ∠FDE" style="width: 90%;"
        oninput="compareMeasures('angle_fde', 'angle_des', 'is_fde_des'); ">
</td>
<td>
    <input type="number" name="angle_des" placeholder="Enter ∠DES" style="width: 90%;"
        oninput="compareMeasures('angle_fde', 'angle_des', 'is_fde_des');">
</td>
<td>
    <span name="is_fde_des"></span>
</td>

    </tr>
</table>

 <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠NAB</th>
        <th>Alternate Interior ∠ABP </th>
        <th>Is ∠NAB = ∠ABP ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_nab" placeholder="Enter ∠NAB" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_abp', 'is_nab_abp'); ">
</td>
<td>
    <input type="number" name="angle_abp" placeholder="Enter ∠ABP" style="width: 90%;"
        oninput="compareMeasures('angle_nab', 'angle_abp', 'is_nab_abp'); ">
</td>
<td>
    <span name="is_nab_abp"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠MAB</th>
        <th>Alternate Interior ∠ABF</th>
        <th>Is ∠MAB = ∠ABF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_mab" placeholder="Enter ∠MAB" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_abf', 'is_mab_abf'); ">
</td>
<td>
    <input type="number" name="angle_abf" placeholder="Enter ∠ABF" style="width: 90%;"
        oninput="compareMeasures('angle_mab', 'angle_abf', 'is_mab_abf'); ">
</td>
<td>
    <span name="is_mab_abf"></span>
</td>

    </tr>
</table>


           
    `, tan : `
           
           <h3>Verification - Interior Angles </h3>

    <h4>Table 1</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠QFG</th>
        <th>Corresponding Interior ∠FGT </th>
        <th> ∠QFG + ∠FGT ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_qfg" placeholder="Enter ∠QFG" style="width: 90%;"
        oninput="sumMeasures('angle_qfg', 'angle_fgt', 'sum_qfg_fgt'); ">
</td>
<td>
    <input type="number" name="angle_fgt" placeholder="Enter ∠FGT" style="width: 90%;"
        oninput="sumMeasures('angle_qfg', 'angle_fgt', 'sum_qfg_fgt');">
</td>
<td>
    <span name="sum_qfg_fgt"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠DFG</th>
        <th>Corresponding Interior ∠FGE</th>
        <th> ∠DFG + ∠FGE ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_dfg" placeholder="Enter ∠DFG" style="width: 90%;"
        oninput="sumMeasures('angle_dfg', 'angle_fge', 'sum_dfg_fge');">
</td>
<td>
    <input type="number" name="angle_fge" placeholder="Enter ∠FGE" style="width: 90%;"
        oninput="sumMeasures('angle_dfg', 'angle_fge', 'sum_dfg_fge');">
</td>   
<td>
    <span name="sum_dfg_fge"></span>
</td>

    </tr>
</table>

 <h4>Table 2</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠PDE</th>
        <th>Corresponding Interior ∠DES </th>
        <th> ∠PDE + ∠DES ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_pde" placeholder="Enter ∠PDE" style="width: 90%;"
        oninput="sumMeasures('angle_pde', 'angle_des', 'sum_pde_des'); ">
</td>
<td>
    <input type="number" name="angle_des" placeholder="Enter ∠DES" style="width: 90%;"
        oninput="sumMeasures('angle_pde', 'angle_des', 'sum_pde_des'); ">
</td>
<td>
    <span name="sum_pde_des"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠FDE </th>
        <th>Corresponding Interior ∠DEG</th>
        <th> ∠FDE + ∠DEG ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_fde" placeholder="Enter ∠FDE" style="width: 90%;"
        oninput="sumMeasures('angle_fde', 'angle_deg', 'sum_fde_deg');">
</td>
<td>
    <input type="number" name="angle_deg" placeholder="Enter ∠DEG" style="width: 90%;"
        oninput="sumMeasures('angle_fde', 'angle_deg', 'sum_fde_deg');">
</td>
<td>
    <span name="sum_fde_deg"></span>
</td>

    </tr>
</table>

 <h4>Table 3</h4>
<table class="table">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 18%;">
        <col style="width: 22%;">
    </colgroup>
    <tr>
        <th>Measure of ∠NAB</th>
        <th>Corresponding Interior ∠ABF </th>
        <th> ∠NAB + ∠ABF ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
       <td>
    <input type="number" name="angle_nab" placeholder="Enter ∠NAB" style="width: 90%;"
        oninput="sumMeasures('angle_nab', 'angle_abf', 'sum_nab_abf'); ">
</td>
<td>
    <input type="number" name="angle_abf" placeholder="Enter ∠ABF" style="width: 90%;"
        oninput="sumMeasures('angle_nab', 'angle_abf', 'sum_nab_abf'); ">
</td>
<td>
    <span name="sum_nab_abf"></span>
</td>

    </tr>
    <tr>
        <th>Measure of ∠MAB</th>
        <th>Corresponding Interior ∠ABP</th>
        <th> ∠MAB + ∠ABP ?</th>
    </tr>
    <tr style="background-color: #d9e1f2;">
        <td>
    <input type="number" name="angle_mab" placeholder="Enter ∠MAB" style="width: 90%;"
        oninput="sumMeasures('angle_mab', 'angle_abp', 'sum_mab_abp'); ">
</td>
<td>
    <input type="number" name="angle_abp" placeholder="Enter ∠ABP" style="width: 90%;"
        oninput="sumMeasures('angle_mab', 'angle_abp', 'sum_mab_abp'); ">
</td>
<td>
    <span name="sum_mab_abp"></span>
</td>

    </tr>
</table>
            
            
        `, 
}},
   
    trigonoIdentities: {
        defaultButtonType: 'sin',
        theoremDefinition: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
         canvasConfig: {
           
        points: [
            { x: 700, y: 500, label: "E", color: "black", radius: 5},
            { x: 100, y: 600, label: "F", color: "black", radius: 4, type: 'sin' },
            { x: 300, y: 600, label: "F", color: "black", radius: 5, type: 'cos' },

            { x: 340, y: 600, label: "F", color: "black", radius: 4, type: 'tan' },
      
        ],

       lines: [
                // Parallel lines
                { endA: { x: 600, y: 500 }, endB: { x: 700, y: 500 }, type: "parallel",color: "blue", enableDrag: false  },

                ],

        triangles: [
                {   type:'sin',
                   
                vertices: [
                    { x: 200, y: 500 },
                    { x: 600, y: 500 },
                    { x: 400, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                enableDrag:false,              
                showMidpoints: false,
                showMeasurements: false,
                },
                
               
                {   type:'cos',
                     vertices: [
                    { x: 300, y: 500 },
                    { x: 600, y: 500 },
                    { x: 300, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                enableDrag:false,             
                showMidpoints: false,
                showMeasurements: false,
                },

                {   type:'tan',
                     vertices: [
                    { x: 300, y: 500 },
                    { x: 600, y: 500 },
                    { x: 200, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                enableDrag:false,             
                showMidpoints: false,
                showMeasurements: false,
                },
            ]
        
        },
         buttonSet: [
                { label: "Acute Angle", type: "sin" },
                { label: "Right Angle", type: "cos" },
                { label: "Obtuse Angle", type: "tan" },
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

trigonoRatios: {
        defaultButtonType: 'sin',
        theoremDefinition: "The exterior angle of a triangle is equal to the sum of its two interior opposite angles",
         canvasConfig: {
           
        points: [
            { x: 700, y: 500, label: "E", color: "black", radius: 5},
            
      
        ],

       lines: [
                // Parallel lines
                { endA: { x: 600, y: 500 }, endB: { x: 700, y: 500 }, type: "parallel",color: "blue", enableDrag:false   },

                ],

        triangles: [
                {   type:'sin',
                   
                vertices: [
                    { x: 200, y: 500 },
                    { x: 600, y: 500 },
                    { x: 400, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                              
                showMidpoints: false,
                showMeasurements: false,
                enableDrag:false,
                },
                
               
                {   type:'cos',
                     vertices: [
                    { x: 300, y: 500 },
                    { x: 600, y: 500 },
                    { x: 300, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                enableDrag:false,              
                showMidpoints: false,
                showMeasurements: false,
                },

                {   type:'tan',
                     vertices: [
                    { x: 300, y: 500 },
                    { x: 600, y: 500 },
                    { x: 200, y: 200 },
                ],
            
                labels: { A: 'B', B: 'C', C: 'A' }, // Custom vertex labels
                enableDrag:false,              
                showMidpoints: false,
                showMeasurements: false,
                },
            ]
        
        },
         buttonSet: [
                { label: "Acute Angle", type: "sin" },
                { label: "Right Angle", type: "cos" },
                { label: "Obtuse Angle", type: "tan" },
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
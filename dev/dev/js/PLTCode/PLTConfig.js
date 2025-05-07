export  const functionalityConfig = {

        
    
        sineTheta: {
           
        theoremDefinition: "Theorem A",
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
        
    }, leftSidebarContent: `
            
    <h3>Instruction for A Theorem </h3>


        `,
        rightSidebarContent: `
            
    <h3>Verification for A Theorem </h3>


        `,
},
    cosineTheta: {

        defaultButtonType: 'sin',
        theoremDefinition: "Theorem B",
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
                { label: "B1", type: "sin" },
                { label: "B2", type: "cos" },
                { label: "B3", type: "tan" },
                
            ],
        

        leftSidebarContent: {
            
                sin : `
        
           
            <h3> Instrutctions Theorem B1 </h3> 
               
        `,

           cos : `
           
            <h3>Instructions Theorem B2 </h3>
            
            
        `, tan : `
           
            <h3>Instructions Theorem B3 </h3>
            
            
        `, 

         
         },

        rightSidebarContent: {
        sin:  `
            <h3>Verification B1</h3>


              
        `,

        cos:  `
            <h3>Verification B2 </h3>

           
    `, tan : `
           
            <h3>Verification B3 </h3>
            
            
        `, 
}},
   
    trigonoIdentities: {
        defaultButtonType: 'sin',
        theoremDefinition: "Theorem D",
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
                { label: "D1", type: "sin" },
                { label: "D2", type: "cos" },
                { label: "D3", type: "tan" },
            ],
       
        leftSidebarContent: {
            
                sin : `
        
           
            <h3> Instrutctions Theorem D1 </h3> 
               
        `,

           cos : `
           
            <h3>Instructions Theorem D2 </h3>
            
            
        `, 

           tan : `
           
            <h3>Instructions Theorem D3 </h3>
            
            
        `,  

         },
        
        rightSidebarContent: {
            sin : `
           
            <h3>Verification D1 </h3> 
               
        `,

           cos : `
           
            <h3>Verification for D2 </h3>
            
            
        `, 

           tan : `
           
            <h3>Verification for D3 </h3>
            
            
        `,  



    },
}
}
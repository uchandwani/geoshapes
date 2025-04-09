        import { Triangle } from '../shapes/Triangle.js';
        import { canvasManager } from '../shapes/CanvasManager.js';
        import { functionalityConfig } from './functionalityConfig.js';
        import { pageFeatures  } from './functionalityConfig.js';
        import { switchFunctionality } from './eventHandlers.js';
        import { attachNavBarListeners } from './eventHandlers.js';
        import { handleTriangleType } from './eventHandlers.js';
        import {Line} from '../shapes/Lines.js';
        import {Protractor} from '../shapes/Protractor.js';
        import {updateRightSidebar} from './eventHandlers.js';

            
        document.addEventListener('DOMContentLoaded', () => {
            console.log("Triangle Theorem Page Loaded");

            const defaultFunctionality = 'midSegmentTheorem';
            const defaultSubClassification = 'right';
            const buttons = document.querySelectorAll('.nav-icon-btn');




            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const link = button.getAttribute('data-link');
                    if (link) {
                        window.open(link, '_self'); // Change '_self' to '_blank' for a new tab
                    }
                });
            });

             console.log("Calling switchFunctionality with" , defaultFunctionality);
              switchFunctionality(defaultFunctionality);

            // Initialize right sidebar with the default sub-classification
            updateRightSidebar(defaultFunctionality, defaultSubClassification);

            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();

            console.log('Canvas Element:', canvas);
            console.log('Canvas Context:', ctx);

            // Check CanvasManager initialization
            console.log('CanvasManager:', canvasManager);
            canvas.width = rect.width;
            canvas.height = rect.height;

            console.log('Adjusted Canvas Dimensions:', canvas.width, canvas.height); 

            attachNavBarListeners(); // Set up listeners for nav buttons
            switchFunctionality('midSegmentTheorem');

            // Set the default triangle type to "Right Angle Triangle"
            handleTriangleType('midSegmentTheorem','right');

         /*    console.log("The functionality config is", pageFeatures.enableProtractorSnapping) ;
            if (pageFeatures.enableProtractorSnapping) {
                console.log("The page enables snap vertex functionality");
            
            } */
        });
            // TrianglePage.js

        // Function to compare two measures (e.g., lengths or angles)
           export function compareMeasures(input1Name, input2Name, resultName) {
            console.log("Inside compare Measures");
            const input1 = document.getElementsByName(input1Name)[0];
            const input2 = document.getElementsByName(input2Name)[0];
            const result = document.getElementsByName(resultName)[0];

            if (input1.value && input2.value) {
                const match = parseFloat(input1.value) === parseFloat(input2.value);
                result.textContent = match ? "Yes" : "No";
                // Change background color
                input1.style.backgroundColor = match ? "lightgreen" : "lightcoral";
                input2.style.backgroundColor = match ? "lightgreen" : "lightcoral";
            } else {
                result.textContent = ""; // Clear the content if values are not entered
                input1.style.backgroundColor = ""; // Reset to default
                input2.style.backgroundColor = ""; // Reset to default
            }
        }

        export function compareDividedMeasures(input1Name, input2Name, resultName, divisor) {
            const input1 = document.getElementsByName(input1Name)[0];
            const input2 = document.getElementsByName(input2Name)[0];
            const result = document.getElementsByName(resultName)[0];

            if (input1.value && input2.value) {
                const value1 = parseFloat(input1.value);
                const value2 = parseFloat(input2.value) / divisor;

                // Handle floating-point precision with a tolerance
                const tolerance = 0.001; // Adjust as needed
                const match = Math.abs(value1 - value2) <= tolerance;

                result.textContent = match ? "Yes" : "No";

                // Change background color
                input1.style.backgroundColor = match ? "lightgreen" : "lightcoral";
                input2.style.backgroundColor = match ? "lightgreen" : "lightcoral";
            } else {
                result.textContent = ""; // Clear the content if values are not entered
                input1.style.backgroundColor = ""; // Reset to default
                input2.style.backgroundColor = ""; // Reset to default
            }
        }

        export function addSpecificPoints(points, ctx) {
            if (!points || !Array.isArray(points)) {
                console.error("Invalid points array provided.");
                return;
            }

            points.forEach(({ x, y, label, color, radius }) => {
                const point = new Point(x, y, label, color, radius);
                point.draw(ctx, true, false); // Show label, no coordinates
            });
        }


        export function updateMessage(ans1Name, ans2Name, messageAreaId, successMessage) {
            const ans1 = document.getElementsByName(ans1Name)[0]?.textContent.trim();
            const ans2 = document.getElementsByName(ans2Name)[0]?.textContent.trim();
            const messageArea = document.getElementById(messageAreaId);

            if (!messageArea) {
                console.error(`Element with id "${messageAreaId}" not found.`);
                return;
            }

            if (ans1 === "Yes" && ans2 === "Yes") {
                messageArea.textContent = successMessage ;
            
        }
        }

        export function calculateRatio(input1Name, input2Name, resultName) {
            const input1 = document.getElementsByName(input1Name)[0].value;
            const input2 = document.getElementsByName(input2Name)[0].value;
            const result = document.getElementsByName(resultName)[0];

            if (input1 && input2 && parseFloat(input2) !== 0) {
                const ratio = parseFloat(input1) / parseFloat(input2);
                result.value = ratio.toFixed(2); // Limit to 2 decimal places
            } else {
                result.value = ""; // Clear the content if inputs are invalid
            }
        }





            /* document.getElementById("submitButton").addEventListener("click", function() {
                 document.getElementById("conclusionMessage").style.display = "block";  
            }); */


            // Check geoshapes array
           // console.log('Geoshapes Array:', geoshapes);

            // Check current mode
           // console.log('Current Mode:', mode);


            
            
           
            // Auto-load the first functionality (e.g., Triangle Theorem) on page load
            

         /*   const rightAngleButton = document.getElementById('right-angle-button');
            const acuteAngleButton = document.getElementById('acute-angle-button');
            const obtuseAngleButton = document.getElementById('obtuse-angle-button');

            if (rightAngleButton) {
                rightAngleButton.addEventListener('click', () => loadTriangle('rightAngle'));
            } else {
                console.error('Right Angle Button is not found');
            }

            if (acuteAngleButton) {
                acuteAngleButton.addEventListener('click', () => loadTriangle('acute'));
            } else {
                console.error('Acute Angle Button is not found');
            }

            if (obtuseAngleButton) {
                obtuseAngleButton.addEventListener('click', () => loadTriangle('obtuse'));
            } else {
                console.error('Obtuse Angle Button is not found');
            }
        */
           
          //  setupEventHandlers(ctx, canvas);
          //  loadTriangle('default');
            // Draw a default triangle on page load
           //drawDefaultTriangle(ctx, canvas);


        // Function to draw the default triangle on page load
        function drawDefaultTriangle(ctx, canvas) {
            console.log("Drawing default triangle on load...");

            // Define vertices for the triangle
            const p1 = { x: 200, y: 500 };
            const p2 = { x: 600, y: 500 };
            const p3 = { x: 400, y: 200 };

            // Create a triangle and set properties
            const triangle = new Triangle(p1, p2, p3);
            triangle.setVertexLabels({ A: 'C', B: 'A', C: 'F' });
            triangle.setMidpointLabels({ M1: 'E', M2: 'D', M3: 'B' }); // Custom midpoint labels
            triangle.setShowMeasurements(false);
            triangle.setShowLabels(true);

            // Add triangle to canvas manager and render it
            canvasManager.addShape(triangle);
            canvasManager.render();

            console.log("Default triangle drawn.");
        }


        function loadTriangle(type) {
            console.log(`Loading ${type} triangle`);

            // Define vertices and labels for different triangle types
            const triangleConfig = {
                rightAngle: {
                    vertices: [
                        { x: 200, y: 500 },
                        { x: 600, y: 500 },
                        { x: 200, y: 200 },
                    ],
                    vertexLabels: { A: 'C', B: 'A', C: 'F' },
                    midpointLabels: { M1: ' ', M2: 'D', M3: 'B' },
                },
                acute: {
                    vertices: [
                         { x: 200, y: 500 },
                        { x: 600, y: 500 },
                        { x: 300, y: 200 },
                    ],
                    vertexLabels: { A: 'C', B: 'A', C: 'F' },
                    midpointLabels: { M1: ' ', M2: 'D', M3: 'B' },
                },
                obtuse: {
                    vertices: [
                         { x: 200, y: 500 },
                        { x: 600, y: 500 },
                        { x: 100, y: 200 },
                    ],
                    vertexLabels: { A: 'C', B: 'A', C: 'F' },
                    midpointLabels:{ M1: ' ', M2: 'D', M3: 'B' },
                },
                default: {
                    vertices: [
                        { x: 200, y: 500 },
                        { x: 600, y: 500 },
                        { x: 200, y: 200 },
                    ],
                    vertexLabels: { A: 'C', B: 'A', C: 'F' },
                    midpointLabels: { M1: ' ', M2: 'D', M3: 'B' },
                },
            };

            // Get configuration for the selected type
            const config = triangleConfig[type];

            if (!config) {
                console.error(`Invalid triangle type: ${type}`);
                return;
            }

            // Clear the existing canvas
            canvasManager.clear();

            // Create and add the new triangle
            const triangle = new Triangle(
                config.vertices[0],
                config.vertices[1],
                config.vertices[2]
            );

            // Set custom labels
            triangle.setVertexLabels(config.vertexLabels);

            if (functionalityKey === "basicProportionalityTheorem") {
                // Define specific points
                const pointsToDraw = [
                    { x: 350, y: 400, label: "P1", color: "red", radius: 5 },
                    { x: 600, y: 300, label: "P2", color: "blue", radius: 5 },
                    { x: 450, y: 450, label: "P3", color: "green", radius: 5 },
                ];

                // Draw specific points
                console.log("The context information is",ctx);
                addSpecificPoints(pointsToDraw, ctx);
            }
            triangle.setMidpointLabels(config.midpointLabels);

            // Set properties
            triangle.setShowMeasurements(false);
            triangle.setShowLabels(true);

            canvasManager.addShape(triangle);
            canvasManager.render();

            console.log(`${type} triangle drawn.`);
        }



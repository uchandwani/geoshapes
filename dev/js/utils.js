export function compareMeasures(input1Name, input2Name, resultName) {
    const input1 = document.getElementById(input1Name) || document.getElementsByName(input1Name)[0];
    const input2 = document.getElementById(input2Name) || document.getElementsByName(input2Name)[0];
    const result = document.getElementById(resultName) || document.getElementsByName(resultName)[0];
  
    if (!input1 || !input2 || !result) {
      console.warn("⚠️ Element not found", { input1, input2, result });
      return;
    }
  
    const val1 = input1.value?.trim() || input1.textContent?.trim();
    const val2 = input2.value?.trim() || input2.textContent?.trim();
  
    if (val1 !== "" && val2 !== "") {
      const match = parseFloat(val1) === parseFloat(val2);
      result.textContent = match ? "Yes" : "No";
  
      if (input1.tagName === "INPUT") {
        input1.style.backgroundColor = match ? "lightgreen" : "lightcoral";
      }
      if (input2.tagName === "INPUT") {
        input2.style.backgroundColor = match ? "lightgreen" : "lightcoral";
      }
    } else {
      result.textContent = "";
      if (input1.tagName === "INPUT") input1.style.backgroundColor = "";
      if (input2.tagName === "INPUT") input2.style.backgroundColor = "";
    }
  }
  
  

  export function sumMeasures(input1Name, input2Name, resultId, expectedSum = null, comparisonInputName = null) {
    const input1 = document.getElementsByName(input1Name)[0];
    const input2 = document.getElementsByName(input2Name)[0];
    const resultSpan = document.getElementById(resultId);
  
    // Optional: compare sum with a third input (like in triangle sum checks)
    const comparisonInput = comparisonInputName ? document.getElementsByName(comparisonInputName)[0] : null;
  
    if (!input1 || !input2 || !resultSpan) {
      console.warn("⚠️ Required input or result element not found", { input1, input2, resultSpan });
      return;
    }
  
    const val1 = input1.value.trim();
    const val2 = input2.value.trim();
  
    // Exit early if either field is empty
    if (val1 === "" || val2 === "") {
      resultSpan.textContent = "";
      input1.style.backgroundColor = "";
      input2.style.backgroundColor = "";
      return;
    }
  
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
  
    // Exit early if invalid numbers
    if (isNaN(num1) || isNaN(num2)) {
      resultSpan.textContent = "";
      input1.style.backgroundColor = "";
      input2.style.backgroundColor = "";
      return;
    }
  
    const sum = num1 + num2;
    resultSpan.textContent = sum;
  
    let isCorrect = true;
  
    if (expectedSum !== null) {
      isCorrect = sum === expectedSum;
    } else if (comparisonInput) {
      const targetVal = parseFloat(comparisonInput.value.trim());
      isCorrect = !isNaN(targetVal) && sum === targetVal;
    }
  
    // Apply coloring only when both inputs are present and check is meaningful
    const color = isCorrect ? "lightgreen" : "lightcoral";
    input1.style.backgroundColor = color;
    input2.style.backgroundColor = color;
  
    // Optional: also highlight the comparison input if used
    if (comparisonInput) {
      comparisonInput.style.backgroundColor = color;
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
  
      export function toFraction(decValue) {
          const epsilon = 0.01; // Margin of error for comparison
  
          console.log("The decValue is:", decValue);
  
          if (Math.abs(decValue - 0.50) < epsilon) {
              console.log("Matched 0.50");
              return "1/2";
          } else if (Math.abs(decValue - 0.7071) < epsilon) {
              console.log("Matched 0.7071");
              return "√2/2";
          } else if (Math.abs(decValue - 0.86602) < epsilon) {
              console.log("Matched 0.86602");
              return "√3/2";
           } else if (Math.abs(decValue - 0.5773) < epsilon) {
              console.log("Matched 0.5773");
              return "√3/3";
  
          } else if (Math.abs(decValue - 1.732) < epsilon) {
              
              return "√3";
          } else if (Math.abs(decValue - .3333) < epsilon) {
              
              return "1/3";
          } else if (Math.abs(decValue - 3.99) < epsilon) {
              
              return "4";
          } else if (Math.abs(decValue - 1.34) < epsilon) {
              
              return "4/3";    
          
         } else {
              console.log("No match, returning original value");
              return Math.round(decValue); // Ensure consistent precision for other decimals
          }
      }
  
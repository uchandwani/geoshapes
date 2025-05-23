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
  
  

 export function sumMeasures(input1Name, input2Name, resultId, expectedSum = null, comparisonInputName = null, input3Name = null) {
  const input1 = document.getElementsByName(input1Name)[0];
  const input2 = document.getElementsByName(input2Name)[0];
  const input3 = input3Name ? document.getElementsByName(input3Name)[0] : null;
  const resultSpan = document.getElementById(resultId);
  const comparisonInput = comparisonInputName ? document.getElementsByName(comparisonInputName)[0] : null;

  if (!input1 || !input2 || !resultSpan) {
    console.warn("⚠️ Required input or result element not found", { input1, input2, input3, resultSpan });
    return;
  }

  const num1 = parseFloat(input1.value.trim()) || 0;
  const num2 = parseFloat(input2.value.trim()) || 0;
  const num3 = input3 ? parseFloat(input3.value.trim()) || 0 : 0;

  const sum = num1 + num2 + num3;
  resultSpan.textContent = sum;

  let isCorrect = true;
  let target = expectedSum;

  if (comparisonInput) {
    const targetVal = parseFloat(comparisonInput.value.trim());
    if (!isNaN(targetVal)) target = targetVal;
  }

  if (target != null) {
    isCorrect = (sum === target);
  }

  const color = isCorrect ? "lightgreen" : "lightcoral";
  input1.style.backgroundColor = color;
  input2.style.backgroundColor = color;
  if (input3) input3.style.backgroundColor = color;
  if (comparisonInput) comparisonInput.style.backgroundColor = color;
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

      /**
 * Compare 2 or 3 fields with optional absolute or percentage tolerance.
 * @param {string[]} fieldNames - Input field names to compare.
 * @param {string} mode - 'allEqual', 'anyTwoEqual', or 'allDifferent'.
 * @param {object} options - Optional: { tolerance: 0.5, percent: false }
 *        If percent=true, tolerance is treated as a percentage of the average.
 */
export function compareFields(fieldNames, mode = "allEqual", options = {}) {
  const inputs = fieldNames.map(name => document.getElementsByName(name)[0]);
  if (inputs.some(input => !input)) {
    console.warn("❌ One or more input fields not found.", inputs);
    return;
  }

  const values = inputs.map(input => input.value.trim());
  if (values.some(val => val === "")) {
    inputs.forEach(input => input.style.backgroundColor = "");
    return;
  }

  const numbers = values.map(parseFloat);
  if (numbers.some(num => isNaN(num))) {
    inputs.forEach(input => input.style.backgroundColor = "");
    return;
  }

  const { tolerance = 0, percent = false } = options;

  const getTolerance = (a, b) => {
    if (!percent) return tolerance;
    const avg = (a + b) / 2;
    return (tolerance / 100) * avg;
  };

  const nearlyEqual = (a, b) => Math.abs(a - b) <= getTolerance(a, b);

  const [a, b, c] = numbers;
  let conditionMet = false;

  switch (mode) {
    case "allEqual":
      conditionMet = nearlyEqual(a, b) && nearlyEqual(b, c);
      break;
    case "anyTwoEqual":
      conditionMet = nearlyEqual(a, b) || nearlyEqual(a, c) || nearlyEqual(b, c);
      break;
    case "allDifferent":
      conditionMet = !nearlyEqual(a, b) && !nearlyEqual(a, c) && !nearlyEqual(b, c);
      break;
    default:
      console.error("❌ Unknown comparison mode:", mode);
      return;
  }

  const color = conditionMet ? "lightgreen" : "lightcoral";
  inputs.forEach(input => input.style.backgroundColor = color);
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
  
// Imports
import { updatePageTitle } from './header.js';
import { switchFunctionality } from './commonEventHandlers.js';
import { canvasManager } from '../shapes/CanvasManager.js';
import { Line } from '../shapes/Lines.js';
import { Point } from '../shapes/Points.js';
import { Triangle } from '../shapes/Triangle.js';
import { Circle } from '../shapes/Circle.js';
import { handleSubmit, handleSave } from './formUtils.js';

// ✅ Load default triangle theorem
document.addEventListener("DOMContentLoaded", () => {
  console.log("📘 Triangle Page Loaded");
  updatePageTitle();
  switchFunctionality('midSegmentTheorem', 'right'); // Default
});

// ✅ Handle navigation trigger
window.addEventListener("nav-select", (e) => {
  const { functionalityKey, subtype } = e.detail;
  console.log("📥 Received nav-select:", functionalityKey, subtype);
  switchFunctionality(functionalityKey, subtype);
});

// ========== Utility Functions (for now, will be modularized later) ==========

export function compareMeasures(input1Name, input2Name, resultName) {
  console.log("Inside compareMeasures", input1Name, input2Name, resultName);

  const input1 = document.getElementsByName(input1Name)[0];
  const input2 = document.getElementsByName(input2Name)[0];
  const result = document.getElementsByName(resultName)[0] || document.getElementById(resultName);

  if (!input1 || !input2 || !result) {
    console.error("❌ Element not found", { input1, input2, result });
    return;
  }

  const val1 = input1.value.trim();
  const val2 = input2.value.trim();

  if (val1 !== "" && val2 !== "") {
    const match = parseFloat(val1) === parseFloat(val2);
    result.textContent = match ? "Yes" : "No";
    input1.style.backgroundColor = match ? "lightgreen" : "lightcoral";
    input2.style.backgroundColor = match ? "lightgreen" : "lightcoral";
  } else {
    result.textContent = "";
    input1.style.backgroundColor = "";
    input2.style.backgroundColor = "";
  }
}

export function compareDividedMeasures(input1Name, input2Name, resultName, divisor) {
  const input1 = document.getElementsByName(input1Name)[0];
  const input2 = document.getElementsByName(input2Name)[0];
  const result = document.getElementsByName(resultName)[0];

  if (input1.value && input2.value) {
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value) / divisor;
    const tolerance = 0.001;
    const match = Math.abs(value1 - value2) <= tolerance;
    result.textContent = match ? "Yes" : "No";
    input1.style.backgroundColor = match ? "lightgreen" : "lightcoral";
    input2.style.backgroundColor = match ? "lightgreen" : "lightcoral";
  } else {
    result.textContent = "";
    input1.style.backgroundColor = "";
    input2.style.backgroundColor = "";
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
    messageArea.textContent = successMessage;
  }
}

export function calculateRatio(input1Name, input2Name, resultName) {
  const input1 = document.getElementsByName(input1Name)[0].value;
  const input2 = document.getElementsByName(input2Name)[0].value;
  const result = document.getElementsByName(resultName)[0];
  if (input1 && input2 && parseFloat(input2) !== 0) {
    const ratio = parseFloat(input1) / parseFloat(input2);
    result.value = ratio.toFixed(2);
  } else {
    result.value = "";
  }
}

export function toFraction(decValue) {
  const epsilon = 0.01;
  if (Math.abs(decValue - 0.50) < epsilon) return "1/2";
  if (Math.abs(decValue - 0.7071) < epsilon) return "√2/2";
  if (Math.abs(decValue - 0.86602) < epsilon) return "√3/2";
  if (Math.abs(decValue - 0.5773) < epsilon) return "√3/3";
  if (Math.abs(decValue - 1.732) < epsilon) return "√3";
  if (Math.abs(decValue - 0.3333) < epsilon) return "1/3";
  if (Math.abs(decValue - 3.99) < epsilon) return "4";
  if (Math.abs(decValue - 1.34) < epsilon) return "4/3";
  return Math.round(decValue);
}

export function sumMeasures(input1Id, input2Id, resultId, target, input3Id = null) {
  const input1 = document.getElementById(input1Id);
  const input2 = document.getElementById(input2Id);
  const input3 = input3Id ? document.getElementById(input3Id) : null;
  const result = document.getElementById(resultId);

  if (!input1 || !input2 || !result) {
    console.error("❌ Error: One or more elements not found!", { input1, input2, input3, result });
    return;
  }

  const value1 = parseFloat(input1.value) || 0;
  const value2 = parseFloat(input2.value) || 0;
  const value3 = input3 ? parseFloat(input3.value) || 0 : 0;
  const sum = value1 + value2 + value3;

  result.textContent = sum;

  let targetValue;
  if (typeof target === "number") {
    targetValue = target;
  } else {
    const targetElement = document.getElementById(target);
    targetValue = targetElement ? parseFloat(targetElement.value) || null : null;
  }

  if (targetValue !== null) {
    updateInputStyles([input1, input2, input3].filter(Boolean), sum === targetValue);
  } else {
    resetInputStyles([input1, input2, input3].filter(Boolean), result);
  }
}

function updateInputStyles(inputs, condition) {
  const color = condition ? "lightgreen" : "lightcoral";
  inputs.forEach(input => input.style.backgroundColor = color);
}

function resetInputStyles(inputs, result) {
  inputs.forEach(input => input.style.backgroundColor = "");
  result.textContent = "";
}

export function showTab(tabId) {
  const dynamicDiv = document.getElementById('dynamic-buttons');
  dynamicDiv.style.display = tabId === 'verify' ? 'block' : 'none';
}

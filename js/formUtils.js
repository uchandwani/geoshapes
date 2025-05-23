import { functionalityConfig } from './commonConfig.js';
import { getElapsedSeconds, clearTracking } from './timer.js';

import { saveProgress, loadProgress, loadSavedProgress } from './progress.js';

// ✅ Save form values to Firestore
import { db } from './firebase-init.js';
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";


function getApplicableFields(formStructure, subtype) {
  if (!formStructure || !formStructure.fields) return [];

  // Case 1: subtype is explicitly provided
  if (subtype !== null && subtype !== undefined) {
    const subtypeFields = formStructure.fields.filter(f => f.subtype === subtype);
    if (subtypeFields.length > 0) return subtypeFields;
  }

  // Case 2: fallback to fields with no subtype
  return formStructure.fields.filter(f => !f.subtype);
}


export async function handleSubmit(topicId, subtype) {
  const response = collectFormResponses(topicId, subtype);
  if (!response) return;

  const uid = localStorage.getItem("uid");
  if (!uid) {
    console.error("❌ UID not found in localStorage");
    return;
  }

  const timeTaken = getElapsedSeconds();
  const docId = `${uid}_${topicId}_${subtype}`;
  const docRef = doc(db, "progress", docId);

  const payload = {
    ...response, // 🔄 flatten response
    uid,
    topicId,
    subtopicId: subtype,
    timeTaken,     
    status: "submitted",
    updatedAt: new Date().toISOString()
  };

  console.log("📨 Final response before submit:", payload);
  clearTracking();

  try {
    await setDoc(docRef, payload);
    console.log("✅ Form submitted:", docId);
    alert("Submission successful!");
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Error while submitting. Please try again.");
  }
}

window.handleSubmit = handleSubmit;


export async function handleSave(passedTopicId, passedSubtype) {
  const topicId = passedTopicId || window.currentFunctionalityKey;
  const subtype = passedSubtype || window.currentSubtype;

  if (!topicId || !subtype) {
    console.warn("⚠️ Missing topicId or subtype:", { topicId, subtype });
    return;
  }

  const uid = localStorage.getItem("uid");
  if (!uid) {
    console.error("❌ UID not found in localStorage");
    return;
  }

  const userName = localStorage.getItem("userName") || "Unknown User";
  console.log("🧠 Retrieved userName for save:", userName);

  const response = collectFormResponses(topicId, subtype);
  if (!response) return;

  const docId = `${uid}_${topicId}_${subtype}`;
  const docRef = doc(db, "progress", docId);

  const timeTaken = getElapsedSeconds();

  const payload = {
    ...response,
    uid,
    userName,               // ✅ add username
    topicId,
    subtopicId: subtype,
    timeTaken,
    status: "saved",
    updatedAt: new Date().toISOString(),
  };

  console.log("📦 Final save payload:", payload);

  try {
    await setDoc(docRef, payload);
    console.log("✅ Progress saved:", docId);
  } catch (error) {
    console.error("❌ Error saving progress:", error);
  }
}

window.handleSave = handleSave;


export function resolveFormStructure(topicId, subtopicId) {
    const topicConfig = functionalityConfig[topicId];
  
    if (!topicConfig) {
      console.warn(`⚠️ Unknown topic: ${topicId}`);
      return null;
    }
  
    const rawStructure = topicConfig.formStructure;
  
    if (!rawStructure || !Array.isArray(rawStructure.fields)) {
      console.warn(`⚠️ Invalid or missing formStructure in config for topic: ${topicId}`);
      return null;
    }
  
    // Filter fields by subtopic (or allow all if no subtypes)
    const fieldsForSubtype = rawStructure.fields.filter(f => {
      return !f.subtype || f.subtype === subtopicId;
    });
  
    return {
      conclusion: rawStructure.conclusion || "studentConclusion",
      fields: fieldsForSubtype
    };
  }

  
// formUtils.js (Refactored)

export function collectFormResponses(topicId, subtype) {
  console.log("🧩 Function CFR called", topicId, subtype);

  const config = functionalityConfig[topicId];
  if (!config) {
    console.warn(`⚠️ Unknown topic: ${topicId}`);
    return null;
  }

  const formStructure = config.formStructure;
  if (!formStructure || !formStructure.fields) {
    console.warn(`⚠️ No formStructure found for topic: ${topicId}`);
    return null;
  }

  const response = {};
  const fieldBlocks = formStructure.fields.filter(f => {
    if (!('subtype' in f)) return true; // default block
    return f.subtype === subtype || f.subtype === null;
  });

  console.log("🔍 Matching field blocks found:", fieldBlocks.length, fieldBlocks);
  if (fieldBlocks.length === 0) {
    console.warn(`⚠️ No field block found for subtype: ${subtype}`);
    return null;
  }

  fieldBlocks.forEach(field => {
    field.angles?.forEach(({ id }) => {
      const el = document.getElementById(id);
      const val = el?.value;
      console.log(`🔧 [Angle] ${id}: found=${!!el}, value=${val}`);
      if (val !== undefined) response[id] = val;
    });

    field.lengths?.forEach(({ id }) => {
      const el = document.getElementById(id);
      const val = el?.value;
      console.log(`📏 [Length] ${id}: found=${!!el}, value=${val}`);
      if (val !== undefined) response[id] = val;
    });

    field.results?.forEach(({ id }) => {
      const el = document.getElementById(id);
      const val = el?.value || el?.innerText;
      console.log(`🔎 [Result] ${id}: found=${!!el}, value=${val}`);
      if (val !== undefined) response[id] = val;
    });
  });

  // 📌 Add conclusion if present
  if (formStructure.conclusion) {
    const el = document.getElementById(formStructure.conclusion);
    const val = el?.value;
    console.log(`📝 [Conclusion] ${formStructure.conclusion}: value=${val}`);
    if (val !== undefined) response[formStructure.conclusion] = val;
  }

  console.log("📦 Final response before save:", response);
  return response;
}



function collectAdditionalFields(field, response) {
  const extraFields = [
    'sum_s_1', 'remaining_side_1', 'is_s_greater_r_1',
    'sum_s_2', 'remaining_side_2', 'is_s_greater_r_2',
    'sum_s_3', 'remaining_side_3', 'is_s_greater_r_3',
    'longest_side', 'largest_angle', 'is_side_opposite_angle'
  ];

  extraFields.forEach(key => {
    const fieldName = field[key];
    if (fieldName && !response.hasOwnProperty(fieldName)) {
      const input = document.querySelector(`[name="\${fieldName}"]`);
      if (input) {
        response[fieldName] = input.value || "";
      } else {
        console.warn(`⚠️ Input not found for: \${fieldName}`);
      }
    }
  });
}

export function populateFieldsFromResponse(response, fieldNames = []) {
  fieldNames.forEach(name => {
    const input = document.querySelector(`[name="\${name}"]`);
    if (input && response[name] !== undefined) {
      input.value = response[name];
    } else {
      console.warn(`⚠️ Skipping missing input or value for: \${name}`);
    }
  });
}

  
  
  export function generateSummaryBlock(topicId, subtype, response) {
    console.log("📦 generateSummaryBlock:", { topicId, subtype, response });
  
    const block = document.getElementById("summaryBlock");
    if (!block) {
      console.warn("⚠️ No #summaryBlock found in DOM. Skipping summary rendering.");
      return;
    }
  
    const fields = Object.entries(response)
      .filter(([key]) => !["uid", "topicId", "subtopicId", "status", "updatedAt"].includes(key))
      .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
      .join("");
  
    block.innerHTML = `
      <h4>Submission Summary</h4>
      <table class="table table-bordered table-sm">
        <thead><tr><th>Field</th><th>Value</th></tr></thead>
        <tbody>${fields}</tbody>
      </table>
    `;
  }

  export function disableFormInputs() {
    const allInputs = document.querySelectorAll('input, textarea, select, button');
  
    allInputs.forEach(el => {
      if (el.tagName === 'BUTTON') {
        // Hide save/submit buttons
        if (el.id === 'save-btn' || el.id === 'submitButton') {
          el.style.display = 'none';
        }
      } else {
        el.disabled = true;
      }
    });
  }
  
  
  
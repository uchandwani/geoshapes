import { db } from "./firebase-init.js";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {updateRightSidebar} from './parallelLinesEventHandlers.js';
import {switchFunctionality, updateRightSidebarAfterSubmit} from './commonEventHandlers.js';
import {generateSummaryBlock, disableFormInputs } from './formUtils.js';

/**
 * Save or update a user's progress.
 */
export async function saveProgress(uid, topicId, subtype, status, responses) {
  const docId = `${uid}_${topicId}_${subtype}`;
  const docRef = doc(db, "progress", docId);
  const payload = {
    uid,
    topicId,
    subtopicId: subtype || null,
    status,
    updatedAt: serverTimestamp()
  };

  if (responses && Object.keys(responses).length > 0) {
    payload.responses = responses; // <- this part MUST exist
  }

  await setDoc(docRef, payload);
  console.log("Progress saved:", docId);
}


/**
 * Get progress status for a given user/topic/subtopic.
 * Returns: "not_started", "in_progress", or "completed"
 */
export async function getProgress(uid, topicId, subtopicId) {
  const docId = `${uid}_${topicId}_${subtopicId}`;
  if (!docId) {
    console.warn("⛔ docId is undefined in progress.js line 91");
    return;
  }
  
  const ref = doc(db, "progress", docId);
  try {
    console.log("📥 [Line 39] About to fetch document:", ref);
    if (!ref || !ref.path) {
      console.error("❌ Invalid document reference at line 39", ref);
      return;
    }
    const snapshot = await getDoc(ref);
    if (snapshot.exists()) {
      return snapshot.data().status;
    } else {
      return "not_started";
    }
  } catch (error) {
    console.error("Error fetching progress:", error);
    return "not_started";
  }
}

// ✅ Add this to progress.js
export async function loadProgress(uid, topicId, subtype) {
  console.log("📥 Loading progress for:", { uid, topicId, subtype });
  debugger;
  try {
    const status = await getProgressStatus(uid, topicId, subtype);
    const docId = `${uid}_${topicId}_${subtype}`;
    const docRef = doc(db, "progress", docId);

    if (status === "submitted" || status === "saved") {
      const savedData = await loadSavedProgress(uid, topicId, subtype);
      console.log("📦 Loaded saved progress:", savedData);

      await updateRightSidebar(topicId, subtype);
      updateRightSidebarAfterSubmit(
        topicId,
        subtype,
        savedData
      );

      if (status === "submitted") {
        console.log("The form status submitted, calling markSidebarAsSubmitted");
        markSidebarAsSubmitted();
        disableFormInputs(); // 🔒 Make form read-only
      }
    } else {
      console.log("📝 No prior progress. Loading fresh form.");
      await updateRightSidebar(topicId, subtype);
      await saveProgress(uid, topicId, subtype, "in-progress", {});
    }
  } catch (error) {
    console.error("❌ Error in loadProgress:", error);
  }
}

        
function markSidebarAsSubmitted() {
  const titleEl = document.getElementById("sidebar-title");
  if (!titleEl) return;

  // Prevent duplicate icons
  if (titleEl.querySelector('.submitted-icon')) return;

  const icon = document.createElement("span");
  icon.innerHTML = `
    <svg class="submitted-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4CAF50"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 6px; vertical-align: middle;">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;
  titleEl.appendChild(icon);
}
        



export async function getProgressStatus(uid, topicId, subtype) {
  const docId = `${uid}_${topicId}_${subtype}`;
  const docRef = doc(db, "progress", docId);
  console.log("📥 [Line 39] About to fetch document:", docRef);
      if (!docRef || !docRef.path) {
      console.error("❌ Invalid document reference at line 39", docRef);
    return;
}
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;

  return docSnap.data()?.status || null;
}


export async function loadSavedProgress(uid, topicId, subtype) {
  const docId = `${uid}_${topicId}_${subtype}`;
  const docRef = doc(db, "progress", docId);
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : null;
}

  
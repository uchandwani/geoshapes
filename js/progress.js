import { db } from "./firebase-init.js";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {updateRightSidebarAfterSubmit, updateRightSidebar,generateSummaryBlock, switchFunctionality} from './parallelLinesEventHandlers.js'

/**
 * Save or update a user's progress.
 */
export async function saveProgress(uid, topicId, subtopicId, status ="not started") {
  console.log("📌 The values are:", { uid, topicId, subtopicId, status });

  const docId = `${uid}_${topicId}_${subtopicId}`;
  if (!docId) {
    console.warn("⛔ docId is undefined in progress.js line 91");
    return;
  }
  
  const ref = doc(db, "progress", docId);
  try {
    await setDoc(ref, {
      uid,
      topicId,
      subtopicId,
      status,
      updatedAt: serverTimestamp()
    });
    console.log(`Progress saved: ${docId}`);
  } catch (error) {
    console.error("Error saving progress:", error);
  }
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
  console.log("📥 Loading submitted progress...");
  const docId = `${uid}_${topicId}_${subtype}`;
  if (!docId) {
    console.warn("⛔ docId is undefined in progress.js line 56");
    return null;
  }
  
  const docRef = doc(db, "progress", docId);

  try {

      console.log("📥 [Line 39] About to fetch document:", docRef);
      if (!docRef || !docRef.path) {
        console.error("❌ Invalid document reference at line 39", docRef);
        return;
      }


    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const savedData = docSnap.data();
      console.log("📦 Loaded saved progress:", savedData);

      if (savedData.status === "submitted") {
        generateSummaryBlock({
          topicId,
          subtype,
          responses: savedData.responses,
        });
      } else if (savedData.status === "saved") {
        updateRightSidebarAfterSubmit({
          topicId,
          subtype,
          responses: savedData.responses,
        });
      } else {
        console.log("ℹ️ Status is not submitted or saved. Showing fresh form.");
      }
    } else {
      console.log("📝 No submission yet, loading fresh form...");
    }
  } catch (error) {
    console.error("❌ Error loading progress:", error);
  }
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

  
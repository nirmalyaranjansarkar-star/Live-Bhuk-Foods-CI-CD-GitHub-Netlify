// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Instructions to get these values:
// 1. Go to Firebase Console > Project Overview > Project Settings (Gear Icon)
// 2. Scroll down to "Your apps" > Select "Web" (</>)
// 3. Copy the 'firebaseConfig' object values below

const firebaseConfig = {
  // TODO: Replace these placeholders with your actual config from Firebase Console
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "bhuk-foods-e54d4.firebaseapp.com",
  projectId: "bhuk-foods-e54d4",
  storageBucket: "bhuk-foods-e54d4.appspot.com",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID"
};

// Initialize Firebase (Modular)
const app = initializeApp(firebaseConfig);

// Export services for use in components
export const storage = getStorage(app); 
export const db = getFirestore(app);

export default app;

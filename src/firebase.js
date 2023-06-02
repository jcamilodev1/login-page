import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5mDTlqnPu-XP78VSblZ6Kmc8AOm7RA8U",
  authDomain: "prueba-user-efaf0.firebaseapp.com",
  projectId: "prueba-user-efaf0",
  storageBucket: "prueba-user-efaf0.appspot.com",
  messagingSenderId: "461373980126",
  appId: "1:461373980126:web:194e6418d1f8f001a5b14f",
  measurementId: "G-V13D4VHZT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
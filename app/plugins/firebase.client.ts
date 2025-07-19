import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin((nuxtApp) => {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDMSr6UE0du0m-RgeKqnG5r8nqBn0pEDj4",
    authDomain: "feliya-attendance.firebaseapp.com",
    projectId: "feliya-attendance",
    storageBucket: "feliya-attendance.firebasestorage.app",
    messagingSenderId: "357844545242",
    appId: "1:357844545242:web:8ea9c33b30363a499d3fe3",
    measurementId: "G-BP3V5LQGSP",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
});

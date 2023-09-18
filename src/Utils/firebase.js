// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk5RsS5LNRd02LiomPGyteN_hodc-iXe0",
  authDomain: "netflix-4eccf.firebaseapp.com",
  projectId: "netflix-4eccf",
  storageBucket: "netflix-4eccf.appspot.com",
  messagingSenderId: "573170094097",
  appId: "1:573170094097:web:4484e7719b40f8166ca1b0",
  measurementId: "G-XE1CWY017Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
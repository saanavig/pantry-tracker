import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNmYgWmXdpLajJfOy0OHS14SU_wyfJaSE",
  authDomain: "pantry-tracker-a6525.firebaseapp.com",
  projectId: "pantry-tracker-a6525",
  storageBucket: "pantry-tracker-a6525.appspot.com",
  messagingSenderId: "467881995969",
  appId: "1:467881995969:web:1b34f43de58a3319e1ae40",
  measurementId: "G-H0Y86S70W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
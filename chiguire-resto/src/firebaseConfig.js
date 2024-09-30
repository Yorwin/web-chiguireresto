// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIBcntTCcTrOEJdQO4RZ2wTnWz0v4mtaI",
  authDomain: "sistema-reservas-chiguire.firebaseapp.com",
  projectId: "sistema-reservas-chiguire",
  storageBucket: "sistema-reservas-chiguire.appspot.com",
  messagingSenderId: "644623242675",
  appId: "1:644623242675:web:de6f25e6e2ae90ac2f67c6",
  measurementId: "G-HGBRNQ11RF"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar FireStore

const db = getFirestore(app);

//Función para inicializar Analytics. 

let analytics;

function initializeAnalytics() {
  if (!analytics) {
    analytics = getAnalytics(app);
  }
}

if (localStorage.getItem('cookies-aceptadas') === 'true') {
  initializeAnalytics();
}

//Exponiendo la función al ambito global. 

window.initializeAnalytics = initializeAnalytics;

export { db };

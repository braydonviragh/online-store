// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDCLDg-EB93et86O8PI5r9WKFQH8bhVAP0",
    authDomain: "challenge-de109.firebaseapp.com",
    databaseURL: "https://challenge-de109.firebaseio.com",
    projectId: "challenge-de109",
    storageBucket: "challenge-de109.appspot.com",
    messagingSenderId: "901408273058",
    appId: "1:901408273058:web:3bbeaeea64d2d8089fddfb",
    measurementId: "G-13N2H42QSD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
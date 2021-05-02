import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjZufdaa55L8B6_reFQ_GllzUkSw6FVgQ",
  authDomain: "disneyplus-vaibhav.firebaseapp.com",
  projectId: "disneyplus-vaibhav",
  storageBucket: "disneyplus-vaibhav.appspot.com",
  messagingSenderId: "126829060778",
  appId: "1:126829060778:web:05ced485a71590145326d3",
  measurementId: "G-YQ362NP0YR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage };
export default db;

import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCNxD0ZU54Gx9RE8yQ5-nGw_lMUnSTxNOY",
    authDomain: "react-journal-67576.firebaseapp.com",
    projectId: "react-journal-67576",
    storageBucket: "react-journal-67576.appspot.com",
    messagingSenderId: "1027970452393",
    appId: "1:1027970452393:web:28a64fd33d62de3e3292b8",
    measurementId: "G-JPMF2XHJP2"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
}
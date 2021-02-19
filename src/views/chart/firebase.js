import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCnKJe8dKzyDdDYVc6s5vIwwctE6AtEMSs",
    authDomain: "tracking-fruit.firebaseapp.com",
    databaseURL: "https://tracking-fruit-default-rtdb.firebaseio.com",
    projectId: "tracking-fruit",
    storageBucket: "tracking-fruit.appspot.com",
    messagingSenderId: "1051793416392",
    appId: "1:1051793416392:web:4fbff30841e5f6548485fd",
    measurementId: "G-4RS285PQEN"
  };
// Initialize Firebase
const otherProject = firebase.initializeApp(firebaseConfig, "caculator");

const db = otherProject.database();
const storage = otherProject.storage();
export { db, storage };

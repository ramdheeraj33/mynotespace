import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// import database from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrACeTItL6iTAvjDSqY6QEzyIQxblYvJ0",
  authDomain: "mynotespace-7fffb.firebaseapp.com",
  projectId: "mynotespace-7fffb",
  storageBucket:"mynotespace-7fffb.appspot.com",
  messagingSenderId: "567164203428",
  appId: "1:567164203428:web:4ae3ade479e20eef78d131",
  measurementId: "G-J0VPYH64XC"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref().set({
//   name: "kelay",
// });

export { firebase, googleAuthProvider, database };

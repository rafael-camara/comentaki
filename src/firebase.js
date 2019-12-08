import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5pUgKwVSkTqRsiDaMoDotPmXKOylSDxw",
  authDomain: "comentaki-07app.firebaseapp.com",
  databaseURL: "https://comentaki-07app.firebaseio.com",
  projectId: "comentaki-07app",
  storageBucket: "comentaki-07app.appspot.com",
  messagingSenderId: "954272098521",
  appId: "1:954272098521:web:055ba490ab0197aa1ab6c8"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

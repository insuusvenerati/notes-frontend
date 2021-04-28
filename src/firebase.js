import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "notes-102aa.firebaseapp.com",
  databaseURL: "https://notes-102aa.firebaseio.com",
  projectId: "notes-102aa",
  storageBucket: "notes-102aa.appspot.com",
  messagingSenderId: "108467448536",
  appId: "1:108467448536:web:97624481c910f177e205ad",
};
// Add your Firebase credentials
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

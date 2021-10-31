import firebase from "firebase/compat/app";
import { initializeApp, getApps } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: "notes-102aa.firebaseapp.com",
  databaseURL: "https://notes-102aa.firebaseio.com",
  projectId: "notes-102aa",
  storageBucket: "notes-102aa.appspot.com",
  messagingSenderId: "108467448536",
  appId: "1:108467448536:web:97624481c910f177e205ad",
};

let firebaseApp;

if (!getApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
}


export { firebaseApp };

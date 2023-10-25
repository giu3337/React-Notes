import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB70vBOa89XS7hHUcEFZFtlk8DaAG8IV4k",
  authDomain: "react-notes-488df.firebaseapp.com",
  projectId: "react-notes-488df",
  storageBucket: "react-notes-488df.appspot.com",
  messagingSenderId: "91101028310",
  appId: "1:91101028310:web:e54e42e8c229bd47430e77"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
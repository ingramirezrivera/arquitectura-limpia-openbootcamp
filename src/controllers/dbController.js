//BASE DE DATOS EN FIRE STORE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc,getDocs,collection, getFirestore } from "firebase/firestore";
import { notes } from "./frontControllers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNHDRiuaGOQdDBepqOP3MLW-iws9htvxw",
  authDomain: "notes-app-1ad76.firebaseapp.com",
  projectId: "notes-app-1ad76",
  storageBucket: "notes-app-1ad76.appspot.com",
  messagingSenderId: "320237441416",
  appId: "1:320237441416:web:a0e1f856497f5063336a3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getNotesFromDB = async () => {
    const querySnapShot = await getDocs(collection(db, "notes"));
    const notes = querySnapShot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    return notes;
}



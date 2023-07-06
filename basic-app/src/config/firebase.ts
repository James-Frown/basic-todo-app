import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "A",
    authDomain: "cm",
    projectId: "c",
    storageBucket: "c",
    messagingSenderId: "2",
    appId: "1",
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// get firebase db
export const db = getFirestore(app);
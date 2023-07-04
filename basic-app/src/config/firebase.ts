import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "EK0U",
    authDomain: "fireapp.com",
    projectId: "se",
    storageBucket: "appt.com",
    messagingSenderId: "8077",
    appId: "4984"
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
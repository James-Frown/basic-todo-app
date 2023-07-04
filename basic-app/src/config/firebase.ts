import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "EKUlE20U",
    authDomain: "firebaseapp.com",
    projectId: "wise",
    storageBucket: "appspot.com",
    messagingSenderId: "801677",
    appId: "498a84"
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAku5Y8TgIT9hj-KzFksWmBFsnEKUlE20U",
    authDomain: "code-wise.firebaseapp.com",
    projectId: "code-wise",
    storageBucket: "code-wise.appspot.com",
    messagingSenderId: "279065801677",
    appId: "1:279065801677:web:82681403b1dbf384498a84"
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import "dotenv";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: dotenv.apiKey,
    authDomain: dotenv.authDomain,
    projectId: dotenv.projectId,
    storageBucket: dotenv.storageBucket,
    messagingSenderId: dotenv.messagingSenderId,
    appId: dotenv.appId
};

// init firebase
const app = initializeApp(firebaseConfig);

// get firebase auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
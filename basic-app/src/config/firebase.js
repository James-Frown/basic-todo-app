import { initializeApp } from "firebase/app";
import { auth } from "firebase/auth";
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = auth(app);
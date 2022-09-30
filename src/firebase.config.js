import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeUM3kRTdEHnDrnKZHKOePcvgJJ60Ut2U",
    authDomain: "house-marketplace-app-4d4a2.firebaseapp.com",
    projectId: "house-marketplace-app-4d4a2",
    storageBucket: "house-marketplace-app-4d4a2.appspot.com",
    messagingSenderId: "674566401343",
    appId: "1:674566401343:web:4ae987e9fa3efc4b64f78a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


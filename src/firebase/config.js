// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER,
    appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yapısının referansını uygulamaya çağır
export const auth = getAuth(app);

// google sağlayıcının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);
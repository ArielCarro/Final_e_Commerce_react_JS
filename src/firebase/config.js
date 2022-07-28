
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtiDfoacl9KQSlJRSePqtZ5LNyIR9NYxI",
  authDomain: "e-commerce-carro.firebaseapp.com",
  projectId: "e-commerce-carro",
  storageBucket: "e-commerce-carro.appspot.com",
  messagingSenderId: "935973350582",
  appId: "1:935973350582:web:104861b931461a94280a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () =>{
    return app
}
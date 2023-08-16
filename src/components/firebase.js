import { initializeApp } from "firebase/app";
import { firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRX2RfoyEgTcxxE1iABlsF-nx4EIjeMGg",
    authDomain: "animaldonation-83efe.firebaseapp.com",
    projectId: "animaldonation-83efe",
    storageBucket: "animaldonation-83efe.appspot.com",
    messagingSenderId: "331565292523",
    appId: "1:331565292523:web:cf2fc61e5e4bf7ed80d7ae",
};

export const app = initializeApp(firebaseConfig);
export const db = firestore();
    
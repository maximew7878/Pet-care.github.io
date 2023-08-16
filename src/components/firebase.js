import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.apikey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const storage = getStorage(app);

export const reference = (name, url) => {
    return ref(storage, `${name}/${url}`);
};

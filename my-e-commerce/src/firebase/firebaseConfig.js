import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBA16K2cbc6g-kunvI-CFzabyrjZ6pcwWA",
  authDomain: "fc-1992-react.firebaseapp.com",
  projectId: "fc-1992-react",
  storageBucket: "fc-1992-react.appspot.com",
  messagingSenderId: "450101014118",
  appId: "1:450101014118:web:0a0c785186ff39bc4f87a7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




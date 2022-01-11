import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "@firebase/firestore"

 const app = initializeApp({
    apiKey: "AIzaSyB-T4jv7cso_DPumQhSQXxpA9m5Gf2Crl0",
  authDomain: "react-chat-81c3b.firebaseapp.com",
  projectId: "react-chat-81c3b",
  storageBucket: "react-chat-81c3b.appspot.com",
  messagingSenderId: "218432286935",
  appId: "1:218432286935:web:2c93af390591fefee4c092"}
)

export const auth = getAuth(app);

export const db  =  getFirestore(app);




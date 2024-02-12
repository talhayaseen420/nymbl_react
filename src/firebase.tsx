import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKZpKVRNZ1R8xew5PuddsEjiloJrPdsIc",
  authDomain: "hospital-management-1d2be.firebaseapp.com",
  projectId: "hospital-management-1d2be",
  storageBucket: "hospital-management-1d2be.appspot.com",
  messagingSenderId: "955835488416",
  appId: "1:955835488416:web:edb2de5b2dcff6618a51c5"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
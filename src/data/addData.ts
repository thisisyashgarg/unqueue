import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbf2VhleTZS_ma0c2gK_jl0ojoCF_CCaA",
  authDomain: "unqueue-548b5.firebaseapp.com",
  databaseURL: "https://unqueue-548b5-default-rtdb.firebaseio.com",
  projectId: "unqueue-548b5",
  storageBucket: "unqueue-548b5.appspot.com",
  messagingSenderId: "673597937174",
  appId: "1:673597937174:web:75c4d771d61a5ceefa4737",
  measurementId: "G-8QC6X19KM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function addData() {
  await setDoc(doc(db, "qid"), {
    name: "Hospital",
    qid: "HOS1234",
  });

  const cityRef = doc(db, "qid");
  setDoc(cityRef, { capital: true }, { merge: true });

  await setDoc(doc(db, "qid"), {
    name: "Hospital",
    qid: "HOS1234",
  });
}

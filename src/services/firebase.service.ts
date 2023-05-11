import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config";
import { doc, setDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig.config);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);




// Add a new document in collection "cities"
const addData = async () => await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});


export default { addData }
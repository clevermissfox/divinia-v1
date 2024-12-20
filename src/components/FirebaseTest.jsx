import { useEffect } from "react";
import { app, auth, db } from "../config/firebaseClient";
import { addDoc, collection } from "firebase/firestore";

export default function FirebaseTest() {
  useEffect(() => {
    async function verifyConnection() {
      try {
        const docRef = await addDoc(collection(db, "test_collection"), {
          message: "Test connection",
        });
        // console.log("document written with ID: ", docRef.id);
        // console.log("Connected to Firebase project: ", app.options.projectId);
        // console.log("auth: ", auth);
        return true;
      } catch (err) {
        console.error("Error connecting to Firebase: ", err.message);
        return false;
      }
    }
    verifyConnection();
  }, []);

  return <p>Firebase Test</p>;
}

import { useEffect, useRef } from "react";
import { app, auth, db } from "../config/firebaseClient";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

export default function FirebaseTest() {
  const hasEffectRun = useRef(false);
  useEffect(() => {
    async function verifyConnection() {
      if (hasEffectRun.current) return;
      hasEffectRun.current = true;
      try {
        const docRef = await addDoc(collection(db, "test_collection"), {
          message: "Test connection",
          createdAt: new Date(),
        });
        console.log("document written with ID: ", docRef.id);
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

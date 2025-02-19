import { app, db, auth } from "../config/firebaseClient";
import { setDoc, doc } from "firebase/firestore";
async function updateFirebaseWithZodiacData(signName, signOptions) {
  console.log(`Attempting to update ${signName}`);
  try {
    const docRef = doc(db, "zodiac_signs", signName);
    await setDoc(docRef, { options: signOptions });
    console.log(`Document for ${signName} added or updated successfully!`);
  } catch (err) {
    console.error("Error in updateSignInFirebase", err.message, err.code);
  }
}

export { updateFirebaseWithZodiacData };

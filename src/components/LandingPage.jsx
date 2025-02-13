import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebaseClient";

export default function LandingPage() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      //handle successful sign-in  auth state changed so conditional rendering in App.jsx brings me to the choices stage
    } catch (err) {
      console.error("Error signing in with Google: ", err.message);
      alert("Error signing in with google");
    }
  };
  return (
    <>
      <h1 className="uppercase body-weight ls-1">Divinia</h1>
      <p>Where Choice Meets Destiny</p>
      <div className="row gap-1 jc-cen margin-bs-1">
        <button onClick={signInWithGoogle} className="btn btn-secondary ">
          <i className="fab fa-google" aria-hidden="true"></i> Continue with
          Google
        </button>

        <button className="btn btn-primary row gap-quarter ai-cen">
          <i className="fas fa-envelope" aria-hidden="true"></i>
          Create Account
        </button>
      </div>
    </>
  );
}

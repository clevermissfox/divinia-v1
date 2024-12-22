import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebaseClient";
import { useState } from "react";

export default function AuthForm({ isSignUp = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  {
    /* toggle password character visibility */
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  {
    /* Handle user sign in */
  }
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Error signing in, please try again");
    }
  };
  {
    /* Handle new user sign up */
  }
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
    } catch (error) {
      console.error("Error signing up:", error);
      setError("Error signing up, please try again");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignUp) {
        await handleSignUp();
      } else {
        await handleSignIn();
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setError("Error submitting form, please try again");
    }
  };

  return (
    <form className="form-auth grid gap-1" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="email" className="small">
          Enter your Email
        </label>
        <div className="input-wrapper margin-bs-quarter padding-half br-default">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="diviniaapp@gmail.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="password" className="small">
          Enter your password
        </label>
        <div className="input-wrapper row gap-1 margin-bs-quarter padding-half br-default">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setShowPassword(false)}
            placeholder={showPassword ? "password" : "*******"}
            autoComplete={isSignUp ? "new-password" : "current-password"}
          />
          <button
            onClick={togglePasswordVisibility}
            className="margin-is-auto"
            aria-label="Toggle Password Visibility"
            type="button"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash" aria-hidden="true"></i> // Icon when showing password
            ) : (
              <i className="fas fa-eye" aria-hidden="true"></i> // Icon when hiding password
            )}
          </button>
        </div>
      </div>
      <button type="submit" className="btn btn-submit">
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
      {error && <p className="small margin-bs-1">{error}</p>}
    </form>
  );
}

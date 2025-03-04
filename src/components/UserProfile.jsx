import { useEffect, useRef, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseClient";
import getZodiacSign from "../utiliFunctions/getZodiacSign";

export default function UserProfile({ auth }) {
  const [userData, setUserData] = useState({});
  const pobInputRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");
      const [year, month, day] = userData.dob.split("-");
      const sign = getZodiacSign(parseInt(month), parseInt(day));

      await setDoc(
        doc(db, "users", user.uid),
        {
          ...userData,
          sign,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
      console.log(userData);
    } catch (err) {
      alert(
        "Error: please refresh the page and try again. If problem persists, contact us at diviniaapp@gmail.com"
      );
      console.error(
        "There was a problem in handleSubmit; Error saving profile",
        err.message
      );
    }
  };

  // grab the user data from firebase if it exists and populate the form for easy editing
  useEffect(() => {
    const loadUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData({
          displayName: data.displayName || "",
          dob: data.dob || "",
          genderIdentity: data.genderIdentity || "hidden",
          tob: data.timeOfBirth || "",
          pob: data.pob || "",
          pobFormatted: data.pobFormatted || "",
        });
      }
    };

    loadUserData();
  }, [auth.currentUser]);

  // style the google autocomplete dropdown
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .pac-container {
        background-color: #1f1f1f !important;
        color: #ffffff !important;
      }
      .pac-item {
        background-color: #242424 !important;
        color: #ffffff !important;

        & .pac-item-query {color: inherit;}
      }
      .pac-item:hover {
        background-color: #333333 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // load the google maps script and append it but its async so its not loading right away
  // const loadGoogleMapsScript = async () => {
  //   if (!window.google) {
  //     const script = document.createElement("script");
  //     script.src = `https://maps.googleapis.com/maps/api/js?key=${
  //       import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  //     }&libraries=places`;
  //     script.async = true;
  //     script.defer = true;
  //     document.body.appendChild(script);

  //     // Cleanup function
  //     return () => {
  //       if (script.parentNode) {
  //         script.parentNode.removeChild(script);
  //       }
  //       // Optionally, you might want to clean up the google object
  //       delete window.google;
  //     };
  //   } else {
  //     initializeAutocomplete();
  //     return () => {}; // Return empty cleanup function if script was already loaded
  //   }
  // };

  const loadGoogleMapsScript = async () => {
    if (window.google) return;

    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = resolve;
      script.onerror = reject;

      document.body.appendChild(script);

      // Cleanup function
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        delete window.google;
      };
    });
  };

  const initializeAutocomplete = () => {
    if (window.google && pobInputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        pobInputRef.current,
        {
          fields: ["name", "formatted_address", "geometry"],
          minLength: 3,
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          setUserData((prevData) => ({
            ...prevData,
            pob: place.name || place.formatted_address,
            pobFormatted: place.formatted_address,
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          }));
        }
      });
    }
  };

  // when place of birth input it focused, load the google maps script
  const handlePobFocus = async () => {
    try {
      await loadGoogleMapsScript();
      initializeAutocomplete();
    } catch (error) {
      console.error("Autocomplete failed:", error);
    }
  };

  return (
    <>
      <form
        id="form-user_profile"
        className="form-user_profile"
        autoComplete="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form-group">
          {/* dont forget an image input for their avatar */}
          <label htmlFor="user_profile-display_name">Display Name</label>
          <input
            type="text"
            id="user_profile-display_name"
            name="display_name"
            placeholder="Aurora"
            autoComplete="nickname"
            required={true}
            aria-required={true}
            value={userData.displayName || ""} // Provide a default value
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                displayName: e.target.value.trim(),
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_profile-gender_identity">Gender Identity</label>
          <div className="custom-select">
            <select
              id="user_profile-gender_identity"
              name="gender_identity"
              value={userData.genderIdentity}
              data-hasvalue={
                userData.genderIdentity && userData.genderIdentity !== "hidden"
                  ? "true"
                  : "false"
              }
              required={true}
              aria-required={true}
              onChange={(e) => {
                if (e.target.value !== "hidden") {
                  setUserData((prevData) => ({
                    ...prevData,
                    genderIdentity: e.target.value,
                  }));
                  e.target.setCustomValidity("");
                } else {
                  e.target.setCustomValidity("Please select a gender identity");
                }
                e.target.reportValidity();
              }}
            >
              <option value="hidden" hidden>
                Select Gender Identity
              </option>
              {[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "nonbinary", label: "Non-Binary" },
                { value: "other", label: "Other" },
                { value: "undisclosed", label: "Prefer Not To Answer" },
              ].map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="user_profile-dob">Date of Birth</label>
          <input
            type="date"
            id="user_profile-dob"
            name="dob"
            max={today}
            required={true}
            aria-required={true}
            autoComplete="bday"
            value={userData.dob || ""}
            data-hasvalue={
              userData.dob && userData.dob !== "" ? "true" : "false"
            }
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                dob: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_profile-tob">Time of Birth</label>
          <input
            type="time"
            id="user_profile-tob"
            name="tob"
            step="1"
            value={userData.tob || ""}
            data-hasvalue={
              userData.tob && userData.tob !== "" ? "true" : "false"
            }
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                tob: e.target.value,
              }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_profile-pob">Place of Birth</label>

          <input
            ref={pobInputRef}
            type="text"
            id="user_profile-pob"
            placeholder="Location, address or coordinates"
            aria-label="Enter your location of birth by address, city/state or province/country, or enter coordinates"
            value={userData.pob || ""}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                pob: e.target.value,
              }))
            }
            onFocus={handlePobFocus}
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Save Profile
        </button>
      </form>
    </>
  );
}

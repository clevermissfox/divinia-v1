import { useEffect, useRef, useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const pobInputRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
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
  }, [window.google]);

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

  return (
    <>
      <form id="form-user_profile" className="form-user_profile">
        <div className="form-group">
          <label htmlFor="user_profile-display_name">Display Name</label>
          <input
            type="text"
            id="user_profile-display_name"
            name="display_name"
            placeholder="Aurora"
            required={true}
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
          <fieldset>
            <legend>Gender Identity</legend>
            {[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "nonbinary", label: "Non-Binary" },
              { value: "other", label: "Other" },
              { value: "undisclosed", label: "Prefer Not To Answer" },
            ].map(({ value, label }) => (
              <div key={value}>
                <label
                  htmlFor={`user_profile-gender_identity-${value}`}
                  className="margin-ie-half"
                >
                  {label}
                </label>
                <input
                  type="radio"
                  id={`user_profile-gender_identity-${value}`}
                  name="gender_identity"
                  value={value}
                  checked={userData.genderIdentity === value}
                  onChange={(e) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      genderIdentity: e.target.value,
                    }))
                  }
                />
              </div>
            ))}
          </fieldset>
        </div>
        <div className="form-group">
          <label htmlFor="user_profile-dob">Date of Birth</label>
          <input
            type="date"
            id="user_profile-dob"
            name="dob"
            max={today}
            required
            value={userData.dob || ""}
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
            value={userData.timeOfBirth || ""}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                timeOfBirth: e.target.value,
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
          />
        </div>
      </form>
    </>
  );
}

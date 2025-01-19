import { useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <form id="form-user_profile">
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
          <label>Gender Identity</label>
          <fieldset>
            {[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "nonbinary", label: "Non-Binary" },
              { value: "other", label: "Other" },
              { value: "undisclosed", label: "Prefer Not To Answer" },
            ].map(({ value, label }) => (
              <div key={value}>
                <label htmlFor={`user_profile-gender_identity-${value}`}>
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
            value={userData.timeOfBirth || ""}
            onChange={(e) =>
              setUserData((prevData) => ({
                ...prevData,
                timeOfBirth: e.target.value,
              }))
            }
          />
        </div>
        {/*place of birth ; zip or postal code ? */}
      </form>
    </>
  );
}

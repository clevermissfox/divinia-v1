import { useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState({});
  const [birthLocationOption, setBirthLocationOption] = useState("postal");
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <form id="form-user_profile" className="grid gap-1">
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
        <div className="form-group">
          <label>Place of Birth</label>
          <fieldset>
            {[
              { value: "postal", label: "Postal/Zip Code" },
              {
                value: "city",
                label: "City, State/Province, Country or Address",
              },
              { value: "coordinates", label: "Coordinates" },
            ].map(({ value, label }) => (
              <div key={value}>
                <label htmlFor={`user_profile-pob_options-${value}`}>
                  {label}
                </label>
                <input
                  type="radio"
                  id={`user_profile-pob_options-${value}`}
                  name="pob-options"
                  value={value}
                  checked={birthLocationOption === value}
                  onChange={() => setBirthLocationOption(value)}
                />
              </div>
            ))}
          </fieldset>
        </div>
        <div className="form-group">
          {birthLocationOption === "postal" && (
            <input
              type="text"
              placeholder="Postal/Zip Code"
              value={userData.pobPostal || ""}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  pobPostal: e.target.value,
                }))
              }
            />
          )}

          {birthLocationOption === "city" && (
            <>
              <label htmlFor="user_profile-pob-city">
                Enter the City, State/Province, and Country OR the Address you
                were born
              </label>
              <input
                type="text"
                id="user_profile-pob-city"
                placeholder="City, State, Country or Address"
                value={userData.pobCity || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    pobCity: e.target.value,
                  }))
                }
              />
            </>
          )}

          {birthLocationOption === "coordinates" && (
            <>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Latitude"
                aria-label="Enter the Latitude of your Place of Birth"
                value={userData.pobLatitude || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    pobLatitude: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Longitude"
                aria-label="Enter the Longitude of your Place of Birth"
                value={userData.pobLongitude || ""}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    pobLongitude: e.target.value,
                  }))
                }
              />
            </>
          )}
        </div>
      </form>
    </>
  );
}

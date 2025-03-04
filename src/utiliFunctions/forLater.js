// in the userProfile, set the avatar image upload
{
  /* <input
  type="file"
  id="user_profile-photo"
  accept="image/*"
  onChange={handlePhotoUpload}
  className="btn btn-photo-upload"
/>

<img
id="photo-preview"
src={userData.photoURL || "/default-avatar.png"}
alt="User profile photo"
className="profile-photo-preview"
/> */
}
// Add loading state
const [isUploading, setIsUploading] = useState(false);

const handlePhotoUpload = async (e) => {
  setIsUploading(true);
  const file = e.target.files[0];
  if (!file) return;

  try {
    // Upload to Firebase Storage
    const uploadTask = uploadBytesResumable(
      ref(storage, `user_photos/${auth.currentUser.uid}`),
      file
    );

    await uploadTask;
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    // Update state
    setUserData((prev) => ({
      ...prev,
      photoURL: downloadURL,
    }));

    // Optional: Display preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = document.getElementById("photo-preview");
      if (preview) preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } catch (error) {
    console.error("Upload failed:", error);
    alert("Failed to upload photo");
  } finally {
    setIsUploading(false);
  }
};

// In the handleSubmit function
await setDoc(
  doc(db, "users", user.uid),
  {
    ...userData,
    //add this line
    photoURL: userData.photoURL,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  },
  { merge: true }
);

// update security rules and sync them with firebase deploy
//   rules_version = '2';
//   service firebase.storage {
//     match /b/{bucket}/o {
//       match /user_photos/{userId}/{allPaths=**} {
//         allow read, write: if request.auth != null && request.auth.uid == userId;
//       }
//     }
//   }

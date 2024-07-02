import React, { useState } from 'react';
import "../Styles/ProfilePictureUpload.css"


const ProfilePictureUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="profile-picture-upload">
      <h2>Upload Profile Picture</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Profile" className="profile-picture" />}
    </div>
  );
};

export default ProfilePictureUpload;

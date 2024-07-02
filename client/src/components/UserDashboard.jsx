import React from 'react';
import ProfilePictureUpload from './ProfilePictureUpload';
import '../Styles/UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <ProfilePictureUpload />
      {/* Add more sections like user information, settings, etc. */}
    </div>
  );
};

export default UserDashboard;

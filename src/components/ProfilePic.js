import React from "react";
import profileURL from "../assets/profilePhoto.jpeg";

const ProfilePic = () => {
  return (
    <div>
      <img
        className="w-32 h-32 object-contain p-3 rounded-full"
        src={profileURL}
      ></img>
    </div>
  );
};

export default ProfilePic;

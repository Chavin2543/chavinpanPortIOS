import React from "react";
import profilePhoto from "../assets/profilePhoto.jpeg";

const Card = () => {
  return (
    <div className="flex flex-row object-contain">
      <img className="w-28 h-28 rounded-full" src={profilePhoto} />
    </div>
  );
};

export default Card;

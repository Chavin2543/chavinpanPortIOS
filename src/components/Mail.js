import React from "react";
import mailIcon from "../assets/mail.png";

const Mail = ({ handleMailButton, isMailOn }) => {
  return (
    <div className="flex flex-col h-185 w-278 object-contain bg-terminal-body rounded-xl">
      <div>
        <div className="w-full h-8 bg-terminal-header rounded-t-xl">
          <button
            className="w-3 h-3 rounded-full tablet:bg-terminal-button mobile:bg-gray-200  active:opacity-50 transition ease-in-out mx-2 mt-2"
            onClick={handleMailButton}
          ></button>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-white mt-5">
          <img src={mailIcon} className="w-58 h-58"></img>
          <div className="text-m font-bold">chavin@panicharoen.com</div>
          <div className="text-xs">+66827047606</div>
        </div>
      </div>
    </div>
  );
};

export default Mail;

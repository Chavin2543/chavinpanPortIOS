import React from "react";
import mailIcon from "../assets/mail.png";
import terminalIcon from "../assets/terminal.png";
import pageIcon from "../assets/page.png";

const Dock = ({ handleMailButton, handlePageButton, handleTerminalButton }) => {
  return (
    <div className="flex flex-row justify-evenly w-195 h-68 rounded-xl bg-dock-color">
      <button
        onClick={handlePageButton}
        className={"active:scale-125 transition ease-in-out"}
      >
        <img src={pageIcon} className="w-58 h-58 hover:animate-bounce"></img>
      </button>
      <button
        onClick={handleTerminalButton}
        className={"active:scale-125 transition ease-in-out"}
      >
        <img
          src={terminalIcon}
          className="w-58 h-58 hover:animate-bounce"
        ></img>
      </button>
      <button
        onClick={handleMailButton}
        className={"active:scale-125 transition ease-in-out"}
      >
        <img src={mailIcon} className="w-58 h-58 hover:animate-bounce"></img>
      </button>
    </div>
  );
};
export default Dock;

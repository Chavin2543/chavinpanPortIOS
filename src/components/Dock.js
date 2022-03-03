import React from "react";
import mailIcon from "../assets/mail.png";
import terminalIcon from "../assets/terminal.png";
import pageIcon from "../assets/page.png";

const Dock = ({
  handleMailButton,
  handlePageButton,
  handleTerminalButton,
  isPageOn,
  isTerminalOn,
  isMailOn,
}) => {
  return (
    <div className="flex flex-row justify-evenly w-195 h-73 rounded-xl bg-dock-color">
      <button
        onClick={handlePageButton}
        className={
          "active:scale-125 transition ease-in-out flex flex-col justify-center items-center"
        }
      >
        <img src={pageIcon} className="w-58 h-58 hover:animate-bounce"></img>
        {isPageOn ? <div className="h-1 w-1 bg-slate-100"></div> : <div></div>}
      </button>
      <button
        onClick={handleTerminalButton}
        className={
          "active:scale-125 transition ease-in-out flex flex-col justify-center items-center"
        }
      >
        <img
          src={terminalIcon}
          className="w-58 h-58 hover:animate-bounce"
        ></img>
        {isTerminalOn ? (
          <div className="h-1 w-1 bg-slate-100"></div>
        ) : (
          <div></div>
        )}
      </button>
      <button
        onClick={handleMailButton}
        className={
          "active:scale-125 transition ease-in-out flex flex-col justify-center items-center"
        }
      >
        <img src={mailIcon} className="w-58 h-58 hover:animate-bounce"></img>
        {isMailOn ? <div className="h-1 w-1 bg-slate-100"></div> : <div></div>}
      </button>
    </div>
  );
};
export default Dock;

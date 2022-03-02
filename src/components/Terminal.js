import React from "react";

const Terminal = ({ handleTerminalButton }) => {
  return (
    <div className="h-343 w-309 bg-terminal-body bg-cover rounded-xl">
      <div className="flex flex-row w-309 h-9 rounded-t-xl bg-terminal-header items-center px-4">
        <button
          className="w-3 h-3 rounded-full bg-terminal-button active:opacity-50 transition ease-in-out"
          onClick={handleTerminalButton}
        ></button>
        <div className="text-white text-sm px-3">
          chavinpanicharoen -- -zsh -- 80x24
        </div>
      </div>
    </div>
  );
};

export default Terminal;

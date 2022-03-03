import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Terminal = ({ handleTerminalButton, isTerminalOn }) => {
  let player = React.createRef();
  return (
    <div className="relative h-343 w-309 bg-terminal-body bg-cover rounded-xl">
      <div className="flex flex-row w-309 h-9 rounded-t-xl bg-terminal-header items-center px-4">
        <button
          className="w-3 h-3 rounded-full tablet:bg-terminal-button mobile:bg-gray-200 active:opacity-50 transition ease-in-out"
          onClick={handleTerminalButton}
        ></button>
        <div className="text-white text-sm px-3">
          chavinpanicharoen -- -zsh -- 80x24
        </div>
      </div>
      <div className="relative hover:scale-150 transition ease-in-out">
        <Player
          ref={player}
          autoplay={true}
          loop={true}
          controls={true}
          src="https://assets6.lottiefiles.com/packages/lf20_wloxwco0.json"
          style={{ height: "300px", width: "300px" }}
        >
          <div className="w-full absolute bottom-6">
            <div className="w-full -mt-32 flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-purple-600 font-bold text-4xl drop-shadow-3xl">
              <a href="https://github.com/Chavin2543?tab=repositories">
                View my code
              </a>
            </div>
          </div>
        </Player>
      </div>
    </div>
  );
};

export default Terminal;

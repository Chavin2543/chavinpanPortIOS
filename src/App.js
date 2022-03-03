import { useState } from "react";
import React from "react";
import "./App.css";
import Dock from "./components/Dock";
import Header from "./components/Header";
import ProfilePic from "./components/ProfilePic";
import { Transition } from "react-transition-group";
import Terminal from "./components/Terminal";
import Draggable from "react-draggable";
import Page from "./components/Page";
import Mail from "./components/Mail";
import { Player } from "@lottiefiles/react-lottie-player";

const App = () => {
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPageOn, setIsPageOn] = useState(false);
  const [isTerminalOn, setIsTerminalOn] = useState(false);
  const [isMailOn, setIsMailOn] = useState(false);
  let player = React.createRef();

  const [transitionState, setTransitionState] = useState(false);
  const transitions = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, display: "none" },
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
      );
      console.log("FUCK");
    }
  };

  const handleTextChange = (password) => {
    setPassword(password);
    console.log(password);
    if (password == "Loongallday") {
      setIsLoggingIn(false);
      setIsLoggedIn(true);
      setTransitionState(true);
    }
  };

  const handlePageButton = () => {
    if (isPageOn) {
      setIsPageOn(false);
    } else {
      setIsPageOn(true);
    }
  };

  const handleTerminalButton = () => {
    if (isTerminalOn) {
      setIsTerminalOn(false);
    } else {
      setIsTerminalOn(true);
    }
  };

  const handleMailButton = () => {
    if (isMailOn) {
      setIsMailOn(false);
    } else {
      setIsMailOn(true);
    }
  };

  return (
    <div className="absolute bg-hero-section w-screen h-screen bg-cover -z-20">
      <div className="top-0 absolute">
        <Header />
      </div>
      <div>
        <div className="flex items-center w-screen justify-center">
          <Transition in={isTerminalOn} timeout={200}>
            {(state) => (
              <Draggable>
                <div
                  className="absolute top-1/3 z-10"
                  style={{
                    transition: `opacity ${200}ms ease-in-out`,
                    opacity: 0,
                    ...transitions[state],
                  }}
                >
                  <Terminal
                    handleTerminalButton={handleTerminalButton}
                    isTerminalOn={isTerminalOn}
                  />
                </div>
              </Draggable>
            )}
          </Transition>

          <Transition in={isPageOn} timeout={200}>
            {(state) => (
              <Draggable>
                <div
                  className="absolute z-20 top-52"
                  style={{
                    transition: `opacity ${200}ms ease-in-out`,
                    opacity: 0,
                    ...transitions[state],
                  }}
                >
                  <Page
                    handlePageButton={handlePageButton}
                    isPageOn={isPageOn}
                  />
                </div>
              </Draggable>
            )}
          </Transition>

          <Transition in={isMailOn} timeout={200}>
            {(state) => (
              <Draggable>
                <div
                  className="absolute z-30 top-52"
                  style={{
                    transition: `opacity ${200}ms ease-in-out`,
                    opacity: 0,
                    ...transitions[state],
                  }}
                >
                  <Mail
                    handleMailButton={handleMailButton}
                    isMailOn={isMailOn}
                  />
                </div>
              </Draggable>
            )}
          </Transition>
        </div>
      </div>
      <div>
        <Transition in={isLoggingIn} timeout={200}>
          {(state) => (
            <div
              className="flex flex-col items-center justify-center h-screen transition ease-in-out"
              style={{
                transition: `opacity ${200}ms ease-in-out`,
                opacity: 0,
                ...transitions[state],
              }}
            >
              <a className="text-center text-white text-3xl font-semibold">
                Welcome
              </a>
              <ProfilePic className="p-4"></ProfilePic>
              <form>
                <input
                  type="text"
                  name="password"
                  onKeyDown={(e) => handleKeyDown(e)}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="bg-input-color rounded-xl w-218 h-28 px-2 focus:outline-none"
                />
              </form>
            </div>
          )}
        </Transition>

        <div className="flex flex-col items-center justify-center">
          <div className="absolute bottom-6">
            <Transition in={isLoggedIn} timeout={200}>
              {(state) => (
                <div
                  style={{
                    transition: `opacity ${200}ms ease-in-out`,
                    opacity: 0,
                    ...transitions[state],
                  }}
                >
                  <Dock
                    isMailOn={isMailOn}
                    isPageOn={isPageOn}
                    isTerminalOn={isTerminalOn}
                    handleMailButton={handleMailButton}
                    handlePageButton={handlePageButton}
                    handleTerminalButton={handleTerminalButton}
                  ></Dock>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

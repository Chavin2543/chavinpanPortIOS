import { useState } from "react";
import "./App.css";
import herobackground from "./assets/monterey.jpg";
import Card from "./components/Card";
import Dock from "./components/Dock";
import Header from "./components/Header";
import ProfilePic from "./components/ProfilePic";
import { Transition } from "react-transition-group";
import Terminal from "./components/Terminal";

const App = () => {
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPageOn, setIsPageOn] = useState(false);
  const [isTerminalOn, setIsTerminalOn] = useState(false);
  const [isMailOn, setIsMailOn] = useState(false);

  const [transitionState, setTransitionState] = useState(false);
  const transitions = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, display: "none" },
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
    <div className="absolute bg-hero-section w-screen h-screen bg-cover">
      <div className="top-0 absolute">
        <Header />
      </div>
      <div className="absolute top-1/3">
        <div className="flex items-center w-screen justify-center">
          <Transition in={isTerminalOn} timeout={200}>
            {(state) => (
              <div
                style={{
                  transition: `opacity ${200}ms ease-in-out`,
                  opacity: 0,
                  ...transitions[state],
                }}
              >
                <Terminal handleTerminalButton={handleTerminalButton} />
              </div>
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
              <input
                type="text"
                name="password"
                onChange={(e) => handleTextChange(e.target.value)}
                className="bg-input-color rounded-xl w-218 h-28"
              />
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

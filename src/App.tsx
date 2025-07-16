import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Music from "./components/Music";
import Live from "./components/Live";
import About from "./components/About";
import AudioPlayer from "./components/AudioPlayer";
import "./styles/App.css";
import ReactGA from "react-ga4";

const audioSrc = "audio/swellbox-mix.mp3";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-765CYMN8SG");
  }, []);

  return (
    <div>
      <Router>
        <div className="app-container">
          <div className="sidebar">
            <h1>Wilma Hultén</h1>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >                 
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/music" 
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >
                    Music
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/live" 
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >
                    Live 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/live" element={<Live/>} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>

      <div>
        <AudioPlayer audioSrc={audioSrc} />
      </div>
    </div>
  );
}

export default App;

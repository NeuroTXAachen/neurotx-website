import "./App.css";
import { CgDarkMode } from "react-icons/cg";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Learn from "./pages/Learn";
import Home from "./pages";
import Impressum from "./pages/Impressum";
import Error404 from "./pages/Error404";
import CookieConsent from "react-cookie-consent";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`${theme}`}>
      {/* <div className="floating-icon">
        <CgDarkMode onClick={toggleTheme} />
      </div> */}
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/policy" element={<Impressum />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
      <CookieConsent
        style={{
          backgroundColor: "#ffff",
          color: "#040142",
        }}
        debug={false}
        enableDeclineButton
        flipButtons
        buttonStyle={{
          background: "#fff",
          width: "fit-content",
          color: "#040142",
          fontSize: "16px",
          fontWeight: "bolder",
          padding: "4px 20px",
          border: "2px solid #040142",
        }}
        declineButtonStyle={{
          width: "fit-content",
          padding: "4px 20px",
          fontSize: "16px",
          background: "#fff",
          color: "#040142",
          fontWeight: "bolder",
          border: "2px solid #040142",
        }}
        buttonText={"Accept"}
        declineButtonText={"Reject"}
        dec
      >
        We use cookies to ensure that we give you the best experience on our
        website. If you continue to use this site, we will assume that you
        accept our use of cookies. For more information, please read our{" "}
        <a href="/policy">impressum</a>.
      </CookieConsent>
    </div>
  );
}

export default App;

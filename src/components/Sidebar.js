import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../assets/css/media.css";
import "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";

function Sidebar() {
  const [lightMode, setLightMode] = useState(false);

  const handleThemeButtonClick = () => {
    setLightMode(!lightMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <div className={`main-content ${lightMode ? "light-mode" : ""}`}>
      <div className="controls">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `control ${isActive ? "active-btn" : ""}`
          }
        >
          <i className="fas fa-home"></i>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `control ${isActive ? "active-btn" : ""}`
          }
        >
          <i className="fas fa-user"></i>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `control ${isActive ? "active-btn" : ""}`
          }
        >
          <i className="fas fa-briefcase"></i>
        </NavLink>

        <NavLink
          to="/education"
          className={({ isActive }) =>
            `control ${isActive ? "active-btn" : ""}`
          }
        >
          <i className="fas fa-user-graduate"></i>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `control ${isActive ? "active-btn" : ""}`
          }
        >
          <i className="fas fa-envelope-open"></i>
        </NavLink>

      </div>

      <div className="theme-btn" onClick={handleThemeButtonClick}>
        <i className="fas fa-adjust"></i>
      </div>
    </div>
  );
}

export default Sidebar;

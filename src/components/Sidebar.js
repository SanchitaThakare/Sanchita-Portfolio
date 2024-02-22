import React, { useState } from 'react';
import  "./../assets/css/media.css";
import './../assets/css/styles.css';
import "./../assets/css/themestyles.css";

import {theme  } from "./theme";

function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');
    const [lightMode, setLightMode] = useState(false);
  
    const handleButtonClick = (sectionId) => {
      setActiveSection(sectionId);
    };
  
    const handleThemeButtonClick = () => {
      setLightMode(!lightMode);
      document.body.classList.toggle("light-mode");
    };
  
    

  return (
<React.Fragment>
    <div className={`main-content ${lightMode ? 'light-mode' : ''}`}>
    <div className="controls">
        <div
          className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
          data-id="home"
          onClick={() => handleButtonClick('home')}
        >
         <a href='/' ><i className="fas fa-home"></i></a>
        </div>
        <div
          className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
          data-id="about"
          onClick={() => handleButtonClick('about')}
        >
        <a href='/about'> <i className="fas fa-user"></i></a> 
        </div>
        <div
          className={`control ${activeSection === 'portfolio' ? 'active-btn' : ''}`}
          data-id="portfolio"
          onClick={() => handleButtonClick('portfolio')}
        >
          <a href='/projects'><i className="fas fa-briefcase"></i></a>
        </div>
        <div
          className={`control ${activeSection === 'blogs' ? 'active-btn' : ''}`}
          data-id="blogs"
          onClick={() => handleButtonClick('blogs')}
        >
         <a href='/education'><i className="fas fa-user-graduate"></i></a>
        </div>
        <div
          className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
          data-id="contact"
          onClick={() => handleButtonClick('contact')}
        >
          <a href='/contact'><i className="fas fa-envelope-open"></i></a>
        </div>
      </div>
      <div className="theme-btn" onClick={handleThemeButtonClick}>
        <i className="fas fa-adjust"></i>
      </div>
      <script src={theme}></script>

    </div>
</React.Fragment>

    
  )
}

export default Sidebar;
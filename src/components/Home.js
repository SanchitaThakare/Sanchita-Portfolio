import React, { useState } from 'react';
import  "./../assets/css/media.css";
import  "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"
import downloadpdffile  from "./../assets/document/sanchita_resume.pdf";
import sanchitaimg from './../assets/images/sanchita.jpg';

import Sidebar from './Sidebar';
// import {theme  } from "./components/theme";




function Home() {

    const [activeSection, setActiveSection] = useState('home');
    const [lightMode, setLightMode] = useState(false);
  
    const handleButtonClick = (sectionId) => {
      setActiveSection(sectionId);
    };
  
    const handleThemeButtonClick = () => {
      setLightMode(!lightMode);
      document.body.classList.toggle("light-mode");
    };


    const downloadPDF = () => {
      
        const link = document.createElement('a');
        link.href = './../assets/document/sanchita_resume.pdf';
        link.download = 'your-cv-file-name';
        link.click();
      };


  return (

  <React.Fragment>
     <div className={`main-content ${lightMode ? 'light-mode' : ''}`}>
    <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                <img src={sanchitaimg} alt="" />
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                Hi, I'm <span>Sanchita Deepak Thakare</span><br/>
                    A  Web Developer.
                </h1>
                <p>
              I'm a React JS Developer with experience in Frontend Development. 
              My passion lies in crafting complex web applications using React frameworks, 
              and I thrive in Agile development environments.
            </p>
                <div class="btn-con">
                    <a href={downloadpdffile} class="main-btn"  download="Sanchita_Thakare.pdf">
                        <span class="btn-text" >Download CV</span>
                        <span class="btn-icon" onClick={downloadPDF}><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
    
    <Sidebar/>
    </div>
  </React.Fragment>

    
  )
}

export default Home;
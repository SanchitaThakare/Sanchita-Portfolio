import React, { useState } from 'react';
import  "./../assets/css/media.css";
import  "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"
import downloadpdffile  from "./../assets/document/sanchita_resume.pdf";
import port1 from './../assets/images/port1.jpg';
import port2 from './../assets/images/port2.jpg';
import port3 from './../assets/images/port3.jpg';
import Sidebar from './Sidebar';
// import {theme  } from "./components/theme";


function Projects() {

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
    <main>
    <section className="container active" id="portfolio">
            <div className="main-title">
                <h2>My <span>Portfolio</span><span className="bg-text">My Work</span></h2>
            </div>
            <p className="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div className="portfolios">
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port1} alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3> Mutual Fund Calculator</h3>
                        <div className="icons">
                            <a href="https://github.com/SanchitaThakare/Liquid-MF-Calculator.git" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port2} alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Sanchita Portfolio</h3>
                        <div className="icons">
                            <a href="https://github.com/SanchitaThakare/Sanchita-Portfolio.git" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="image">
                        <img src={port3} alt=""/>
                    </div>
                    <div className="hover-items">
                        <h3>Redux Demo</h3>
                        <div className="icons">
                            <a href="https://github.com/SanchitaThakare/Redux-Demo.git" className="icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    </main>
    <Sidebar/>
    </div>
  </React.Fragment>

    
  )
}

export default Projects;
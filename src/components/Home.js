import React, { useState } from 'react';
import "./../assets/css/media.css";
import "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"
import downloadpdffile from "./../assets/document/Sanchita Thakare Resume.pdf";
import sanchitaimg from './../assets/images/sanchita2.jpeg';
import Sidebar from './Sidebar';

function Home() {

  const [lightMode, setLightMode] = useState(false);


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
                Hi, I'm <span>Sanchita Deepak Thakare</span>
              </h1>
              <h2>Frontend Developer | React.js | Next.js | BFSI</h2>
              <p>
                Frontend Developer with 3.8+ years of experience building scalable,
                enterprise-grade web & mobile applications using React.js, Next.js
                and modern JavaScript.
              </p>
              <div class="btn-con">
                <a href={downloadpdffile} class="main-btn" download="Sanchita_Thakare.pdf">
                  <span class="btn-text" >Download CV</span>
                  <span class="btn-icon" onClick={downloadPDF}><i class="fas fa-download"></i></span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <Sidebar />
      </div>
    </React.Fragment>


  )
}

export default Home;
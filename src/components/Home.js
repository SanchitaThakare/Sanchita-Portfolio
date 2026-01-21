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
        <header className="container header active" id="home">
          <div className="header-content">
            <div className="left-header">
              <div className="h-shape"></div>
              <div className="image">
                <img src={sanchitaimg} alt="" />
              </div>
            </div>
            <div className="right-header">
              <h1 className="name">
                Hi, I'm <span>Sanchita Deepak Thakare</span>
              </h1>
              <h2>Frontend Developer | React.js | Next.js | BFSI</h2>
              <p>
                Frontend Developer with 3.8+ years of experience building scalable,
                enterprise-grade web & mobile applications using React.js, Next.js
                and modern JavaScript.
              </p>
              <div className="btn-con">
                <a href={downloadpdffile} className="main-btn" download="Sanchita_Thakare.pdf">
                  <span className="btn-text" >Download CV</span>
                  <span className="btn-icon" onClick={downloadPDF}><i className="fas fa-download"></i></span>
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
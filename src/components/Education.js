import React, { useState } from 'react';
import "./../assets/css/media.css";
import "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"


import Sidebar from './Sidebar';
// import {theme  } from "./components/theme";




function Education() {

  const [activeSection, setActiveSection] = useState('portfolio');
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
        <main>
          <section className="container active" id="portfolio">
            <div className="main-title">
              <h2>
                My <span>Education</span>
                <span className="bg-text">My Education</span>
              </h2>
            </div>
            <br /><br /><br />

            {/* Replace the placeholder images with actual image paths */}

            <div class="timeline">
              <div class="col-12 timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                  {/* <FaBriefcase/> */}
                </div>
                <p class="tl-duration">2020 - 2022</p>
                <h5>M.Sc (Computer Science)<span> - Mumbai Univercity</span></h5>
                <p>
                  K.M.C. College Khopoli.
                </p>
              </div>
              <div class="col-12 timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                  {/* <FaBriefcase/> */}
                </div>
                <p class="tl-duration">2017 - 2020</p>
                <h5> B.Sc (Computer Science)<span> - Mumbai University</span></h5>
                <p>
                  K.M.C College Khopoli.
                </p>
              </div>
              <div class="col-12 timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                  {/* <FaBriefcase/> */}
                </div>
                <p class="tl-duration">2013 - 2015</p>
                <h5>H.S.C<span> - Maharashtra State Board</span></h5>
                <p>
                  N.V.M. Junior College Neral.
                </p>
              </div>
              <div class=" col-12 timeline-item">
                <div class="tl-icon">
                  <i class="fas fa-briefcase"></i>
                  {/* <FaBriefcase/> */}
                </div>
                <p class="tl-duration">2011 - 2012</p>
                <h5>S.S.C<span> - Maharashtra State Board </span></h5>
                <p>
                  Neral Vidya Mandir Neral</p><br/><br/>
              </div>
            </div>
          </section>
        </main>
        <Sidebar />
        <div className="theme-btn" onClick={handleThemeButtonClick}>
          <i className="fas fa-adjust"></i>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Education;
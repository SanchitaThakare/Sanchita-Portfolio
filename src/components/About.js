import React, { useState } from 'react';
import "./../assets/css/media.css";
import "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"
import downloadpdffile from "./../assets/document/Sanchita Thakare Resume.pdf";


import Sidebar from './Sidebar';
// import {theme  } from "./components/theme";




function About() {

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
                    <section class="container about active" id="about">
                        <div class="main-title">
                            <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
                        </div>
                        <div class="about-container">
                            <div class="left-about">
                                <h4>Information About Me</h4>
                                <p>
                                    Hello! I'm a passionate React JS developer with over 2+ years of experience in creating web applications.
                                    I thrive on turning ideas into interactive and responsive user interfaces.
                                    My expertise lies in front-end development using modern web technologies.

                                </p>
                                <div class="btn-con">
                                    <a href={downloadpdffile} class="main-btn">
                                        <span class="btn-text">Download CV</span>
                                        <span class="btn-icon" onClick={downloadPDF}><i class="fas fa-download"></i></span>
                                    </a>
                                </div>
                            </div>
                            <div class="right-about">
                                <div class="about-item">
                                    <div class="abt-text">
                                        <p class="large-text">5+</p>
                                        <p class="small-text">Projects <br /> Completed</p>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="abt-text">
                                        <p class="large-text">2.5+</p>
                                        <p class="small-text">Years of <br /> experience</p>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="abt-text">
                                        <p class="large-text">3+</p>
                                        <p class="small-text">Happy <br /> Clients</p>
                                    </div>
                                </div>
                                <div class="about-item">
                                    <div class="abt-text">
                                        <p class="large-text">3+</p>
                                        <p class="small-text">Individual <br /> Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-stats">
                            <h4 class="stat-title">My Skills</h4>
                            <div class="progress-bars">
                                <div class="progress-bar">
                                    <p class="prog-title">html</p>
                                    <div class="progress-con">
                                        <p class="prog-text">80%</p>
                                        <div class="progress">
                                            <span class="html"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">css</p>
                                    <div class="progress-con">
                                        <p class="prog-text">95%</p>
                                        <div class="progress">
                                            <span class="css"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">javascript</p>
                                    <div class="progress-con">
                                        <p class="prog-text">75%</p>
                                        <div class="progress">
                                            <span class="js"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Bootstrap</p>
                                    <div class="progress-con">
                                        <p class="prog-text">75%</p>
                                        <div class="progress">
                                            <span class="js"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">ReactJS</p>
                                    <div class="progress-con">
                                        <p class="prog-text">75%</p>
                                        <div class="progress">
                                            <span class="react"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">NodeJS</p>
                                    <div class="progress-con">
                                        <p class="prog-text">60%</p>
                                        <div class="progress">
                                            <span class="node"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Redux</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">MongoDb</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">JQuery</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">ExpressJS</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Material UI</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">API INTEGRATION</p>
                                    <div class="progress-con">
                                        <p class="prog-text">80%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Git Hub</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Cross-Plateform Development</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <p class="prog-title">Figma</p>
                                    <div class="progress-con">
                                        <p class="prog-text">65%</p>
                                        <div class="progress">
                                            <span class="python"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="stat-title">My Timeline</h4>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="tl-icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <p class="tl-duration">February 2022 - October 2023</p>
                                <h5>Web Developer<span> - Sublime Technocorp Pvt Ltd.</span></h5>
                                <p>
                                    Worked on developing responsive and user-friendly web applications using ReactJS and NodeJS.
                                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                                </p>
                            </div>
                            <div class="timeline-item">
                                <div class="tl-icon">
                                    <i class="fas fa-briefcase"></i>
                                </div>
                                <p class="tl-duration">February 2022 - May 2022</p>
                                <h5>Web Development Internship (React.js)<span> - Sublime Technocorp Pvt Ltd.</span></h5>
                                <p>
                                    web applications using ReactJS
                                </p><br /><br />
                            </div>


                        </div>
                    </section>
                </main>
                <Sidebar />
            </div>
        </React.Fragment>


    )
}

export default About;
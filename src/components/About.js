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
                    <section className="container about active" id="about">
                        <div className="main-title">
                            <h2>About <span>me</span><span className="bg-text">my stats</span></h2>
                        </div>
                        <div className="about-container">
                            <div className="left-about">
                                <h4>Professional Summary</h4>
                                <p>
                                    Frontend Developer with <b>3.8+ years</b> of experience specializing
                                    in <b>React.js, Next.js, Redux,JavaScript and TypeScript</b>.
                                    <br /><br />
                                    Experienced in building enterprise-grade web and mobile applications
                                    for <b>BFSI, Banking, and Healthcare</b> domains with a strong focus on
                                    performance optimization, reusable components, and secure REST API integration.
                                    <br /><br />
                                    <b>Immediate Joiner | Mumbai / Thane / Remote</b>
                                </p>
                                <div className="btn-con">
                                    <a href={downloadpdffile} className="main-btn" download>
                                        <span className="btn-text">Download Resume</span>
                                        <span className="btn-icon">
                                            <i className="fas fa-download"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="right-about">
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">8+</p>
                                        <p className="small-text">Projects <br /> Completed</p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">3.8+</p>
                                        <p className="small-text">Years of <br /> experience</p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">3+</p>
                                        <p className="small-text">Happy <br /> Clients</p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="abt-text">
                                        <p className="large-text">3+</p>
                                        <p className="small-text">Individual <br /> Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-stats">
                            <h4 className="stat-title">My Skills</h4>
                            <div className="progress-bars">
                                <div className="progress-bar">
                                    <p className="prog-title">html</p>
                                    <div className="progress-con">
                                        <p className="prog-text">80%</p>
                                        <div className="progress">
                                            <span className="html"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">css</p>
                                    <div className="progress-con">
                                        <p className="prog-text">95%</p>
                                        <div className="progress">
                                            <span className="css"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">javascript</p>
                                    <div className="progress-con">
                                        <p className="prog-text">75%</p>
                                        <div className="progress">
                                            <span className="js"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Bootstrap</p>
                                    <div className="progress-con">
                                        <p className="prog-text">75%</p>
                                        <div className="progress">
                                            <span className="js"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">ReactJS</p>
                                    <div className="progress-con">
                                        <p className="prog-text">75%</p>
                                        <div className="progress">
                                            <span className="react"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">NodeJS</p>
                                    <div className="progress-con">
                                        <p className="prog-text">60%</p>
                                        <div className="progress">
                                            <span className="node"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Redux</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">MongoDb</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">JQuery</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">ExpressJS</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Material UI</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">API INTEGRATION</p>
                                    <div className="progress-con">
                                        <p className="prog-text">80%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Git Hub</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Cross-Plateform Development</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-bar">
                                    <p className="prog-title">Figma</p>
                                    <div className="progress-con">
                                        <p className="prog-text">65%</p>
                                        <div className="progress">
                                            <span className="python"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="stat-title">My Timeline</h4>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">Sep 2024 – Dec 2025</p>
                                <h5>Frontend Developer <span>-Neural IT Pvt Ltd</span></h5>
                                <p>Enterprise React & Next.js banking applications.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">Dec 2023 – Sep 2024</p>
                                <h5>React JS UI Developer <span>-End Point IT Services</span></h5>
                                <p>BFSI & HRMS web and mobile applications.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">February 2022 - October 2023</p>
                                <h5>Web Developer<span> - Sublime Technocorp Pvt Ltd.</span></h5>
                                <p>
                                    Worked on developing responsive and user-friendly web applications using ReactJS and NodeJS.
                                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                                </p>
                            </div>
                            <div className="timeline-item">
                                <div className="tl-icon">
                                    <i className="fas fa-briefcase"></i>
                                </div>
                                <p className="tl-duration">February 2022 - May 2022</p>
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
import React, { useState } from 'react';
import "./../assets/css/media.css";
import "./../assets/css/styles.css";
import "./../assets/css/themestyles.css";
import "./../assets/css/styles.css.map"
import downloadpdffile from "./../assets/document/Sanchita Thakare Resume.pdf";
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
                <main>
                    <section className="container contact active " id="contact">
                        <div className="contact-container">
                            <div className="main-title">
                                <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
                            </div>
                            <div className="contact-content-con">
                                <div className="left-contact">
                                    <h4>Contact me here</h4>
                                    <p>

                                    </p>
                                    <div className="contact-info">
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span>Location:</span>
                                            </div>
                                            <p>
                                                Navi Mumbai, Maharashtra
                                            </p>
                                        </div>
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                                <span>Email</span>
                                            </div>
                                            <p>
                                                <span>: sanchitathakare9@gmail.com</span>
                                            </p>
                                        </div>
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fas fa-user-graduate"></i>
                                                <span>Education</span>
                                            </div>
                                            <p>
                                                <span>: Master Of Computer Science</span>
                                            </p>
                                        </div>
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fas fa-user-graduate"></i>
                                                <span>Mobile Number</span>
                                            </div>
                                            <p>
                                                <span>: +91 9623577014</span>
                                            </p>
                                        </div>
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fas fa-globe-africa"></i>
                                                <span>Languages</span>
                                            </div>
                                            <p>
                                                <span>:  English, Hindi, Marathi</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-icons">
                                        <div className="contact-icon">


                                            <a href="https://github.com/SanchitaThakare" target="_blank">
                                                <i className="fab fa-github"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/sanchita-thakare-197a691a9/" target="_blank">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-contact">
                                    <form action="" className="contact-form">
                                        <div className="input-control">
                                            <input type="text" required placeholder="YOUR NAME" />
                                        </div>
                                        <div className="input-control ">
                                            <input type="email" required placeholder="YOUR EMAIL" />
                                        </div>
                                        <div className="input-control">
                                            <input type="text" required placeholder="ENTER SUBJECT" />
                                        </div>
                                        <div className="input-control">
                                            <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                                        </div>
                                        <div className="submit-btn">
                                            <a href={downloadpdffile} className="main-btn">
                                                <span className="btn-text">Download CV</span>
                                                <span className="btn-icon" onClick={downloadPDF}><i className="fas fa-download"></i></span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
                <Sidebar />
            </div>
        </React.Fragment>


    )
}

export default Home;
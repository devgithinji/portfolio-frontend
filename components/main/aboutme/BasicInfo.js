import React from 'react';
import Link from "next/link";
import {FaDownload} from "react-icons/fa";

const BasicInfo = () => {
    return (
        <div className="tab-content basic-info">
            <div className="about-me-banner">
                <img src="/images/abt-me.png" className="img" alt="dennis githinji"/>
            </div>
            <div className="about-me-content">
                <h2 className="sub-title">About Me</h2>
                <h1 className="title">I'm Dennis Githinji</h1>
                <p className="section-text">
                    A modern Software Developer, holding a B.Sc. in Software Engineering, with more than 3 years
                    of
                    hands-on extensive experience in web and mobile applications' development, adept in bringing
                    forth expertise in design, development, installation and maintenance of software.
                </p>
                <h2 className="card-title">Skills</h2>
                <ul className="skills-list">
                    <li>
                        <span>Backend</span>: Java (Spring boot), node js (express js , nest js)
                    </li>
                    <li>
                        <span>Frontend</span>: React js (Next js), Vue js
                    </li>
                    <li>
                        <span>Databases</span>: Relational (MySQL, PostgresSQL), Non-relational(mongo db)
                    </li>
                    <li>
                        <span>Additional skills</span>: Microservices, Cloud services (AWS)
                    </li>
                </ul>
                <Link href="components/main/aboutme" className="btn btn-accent">
                    Download Resume
                    <FaDownload/>
                </Link>
            </div>
        </div>
    );
};

export default BasicInfo;
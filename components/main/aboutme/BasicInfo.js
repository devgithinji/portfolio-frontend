import React from 'react';
import Link from "next/link";
import {FaDownload} from "react-icons/fa";

const BasicInfo = ({profile}) => {
    const {resume, personalStatement, skills} = profile;
    return (
        <div className="tab-content basic-info">
            <div className="about-me-banner">
                <img src="/images/about-me.png" className="img" alt="dennis githinji"/>
            </div>
            <div className="about-me-content">
                <h2 className="sub-title">About Me</h2>
                <h1 className="title">I'm Dennis Githinji</h1>
                <p className="section-text">{personalStatement}</p>
                <h2 className="card-title">Skills</h2>
                <div className="skills-list">
                    {skills.map((skill, index) => {
                        const [area, skills] = skill.split(":");
                        return (
                            <div className="skill" key={index}>
                                <div className="skill-header">
                                    <div className="skill-icon"></div>
                                    <span>{area}</span>
                                </div>
                                <div className="skill-content">
                                    {skills}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link href={resume} className="btn btn-accent">
                    Download Resume
                    <FaDownload/>
                </Link>
            </div>
        </div>
    );
};

export default BasicInfo;
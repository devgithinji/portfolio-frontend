import React, {useState} from 'react';
import {FaUser, FaUserGraduate, FaBriefcase, FaDownload} from "react-icons/fa";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Work from "./Work";

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('aboutme');

    const changeTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <section className="section about-me" id="aboutme">
            <div className="container">
                <div className="tabs">
                    <div className={activeTab === 'aboutme' ? 'tab-link active' : 'tab-link'}
                         onClick={() => changeTab('aboutme')}>
                        <div className="tab-icon">
                            <FaUser/>
                        </div>
                        <span className="tab-label">About Me</span>
                    </div>
                    <div className={activeTab === 'education' ? 'tab-link active' : 'tab-link'}
                         onClick={() => changeTab('education')}>
                        <div className="tab-icon">
                            <FaUserGraduate/>
                        </div>
                        <span className="tab-label">Education</span>
                    </div>
                    <div className={activeTab === 'work' ? 'tab-link active' : 'tab-link'}
                         onClick={() => changeTab('work')}>
                        <div className="tab-icon">
                            <FaBriefcase/>
                        </div>
                        <span className="tab-label">Work</span>
                    </div>
                </div>
                {activeTab === 'aboutme' && <BasicInfo/>}
                {activeTab === 'education' && <Education/>}
                {activeTab === 'work' && <Work/>}
            </div>

        </section>
    );
};

export default AboutMe;
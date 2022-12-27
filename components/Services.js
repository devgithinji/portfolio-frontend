import React from 'react';
import {FaGlobe, FaMobile, FaQuestionCircle} from "react-icons/fa";

const Services = () => {
    return (
        <div className="section services" id="services">
            <div className="container">
                <h2 className="sub-title">Services</h2>
                <h1 className="title">What I do best</h1>
                <div className="services-list">
                    <div className="service">
                        <div className="service-icon">
                            <FaGlobe/>
                        </div>
                        <h3 className="card-title">Web development</h3>
                        <p>Development, Design, maintaining and upgrading of all custom websites to high-end web
                            applications using the latest technologies </p>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaMobile/>
                        </div>
                        <h3 className="card-title">Mobile App Development</h3>
                        <p>Development of all kinds of mobile applications from hybrid, native and cross-platform
                            applications</p>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <FaQuestionCircle/>
                        </div>
                        <h3 className="card-title">IT Consulting</h3>
                        <p>General enquiries pertaining architectural design, development, maintenance, deployment or
                            procurement of software</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
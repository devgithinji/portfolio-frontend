import React from 'react';

const Work = () => {
    return (
        <div className="tab-content work">
            <div className="title-section">
                <h2 className="sub-title">Work</h2>
                <h1 className="title">My Job History</h1>
            </div>
            <div className="work-list">
                <div className="work-list-item card">
                    <div className="card-label">
                        Dec 2021 - Aug 2022
                    </div>
                    <div className="card-info">
                        <h4 className="card-title">Cytonn Investments</h4>
                        <h5 className="card-sub-title">Software Developer</h5>
                        <p>
                            I was enrolled in the Cytonn technologies team for a full stack development
                            internship
                            position
                            which involved more of training to familiarize with the tech stack and development
                            practices used
                            in the team
                        </p>
                        <h5 className="card-sub-title">Achievements</h5>
                        <ul className="skills-list">
                            <li>Design of landing pages used in the real estate systems</li>
                            <li>Maintenance of the Investments web application</li>
                            <li>Participation in the daily team meetings</li>
                            <li>Conducting code peer reviews with my team members</li>
                        </ul>
                    </div>
                </div>
                <div className="work-list-item card">
                    <div className="card-label">
                        <span>May 2019 - Sep 2019</span>
                    </div>
                    <div className="card-info">
                        <h4 className="card-title">Techchimp Solutions</h4>
                        <h5 className="card-sub-title">Internship</h5>
                        <p>
                            I was enrolled in the Techchimp solutions team where i was actively involved more in
                            mobile
                            applications development
                        </p>
                        <h5 className="card-sub-title">Achievements</h5>
                        <ul className="skills-list">
                            <li>
                                Design and Development of a mobile application for an Antenna monitor project
                                using
                                the
                                native Java
                            </li>
                            <li>Documentation of the applications that were in active development by the team
                            </li>
                            <li>Participation in the daily team meetings</li>
                            <li>Support of the existing systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
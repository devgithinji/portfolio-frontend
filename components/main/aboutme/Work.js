import React from 'react';

const Work = ({jobs}) => {
    return (
        <div className="tab-content work">
            <div className="title-section">
                <h2 className="sub-title">Work</h2>
                <h1 className="title">My Job History</h1>
            </div>
            <div className="work-list">
                {jobs && jobs.map(job => {
                    const {id, institution, title, description, durationRange, achievementsList} = job;
                    return (
                        <div key={id} className="work-list-item card">
                            <div className="card-label">
                                {durationRange}
                            </div>
                            <div className="card-info">
                                <h4 className="card-title">{institution}</h4>
                                <h5 className="card-sub-title">{title}</h5>
                                <p>{description}</p>
                                <h5 className="card-sub-title">Achievements</h5>
                                <ul className="work-skills-list">
                                    {achievementsList.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Work;
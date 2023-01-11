import React from 'react';

const Education = ({schools}) => {
    return (
        <div className="tab-content education" id="school">
            <div className="title-section">
                <h2 className="sub-title">Education</h2>
                <h1 className="title">My Schooling Journey</h1>
            </div>
            <div className="education-list">
                {schools && schools.map(school => {
                    const {id, institution, level, qualification, award, durationRange} = school
                    return (
                        <div key={id} className="card education-list-item">
                            <div className="card-label">
                                {level}
                                <span>{durationRange}</span>
                            </div>
                            <div className="card-info">
                                <h4 className="card-title">{institution}</h4>
                                <p>{qualification}</p>
                                <p className="score">{award}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Education;
import React from 'react';

const Education = () => {
    return (
        <div className="tab-content" id="school">
            <div className="title-section">
                <h2 className="sub-title">Education</h2>
                <h1 className="title">My Schooling Journey</h1>
            </div>
            <div className="education-list">
                <div className="card education-list-item">
                    <div className="card-label">
                        University
                        <span>2016 - 2020</span>
                    </div>
                    <div className="card-info">
                        <h4 className="card-title">Kisii University</h4>
                        <p>B.Sc. Software Engineering</p>
                        <p className="score">2nd Class Upper Division</p>
                    </div>
                </div>
                <div className="card education-list-item">
                    <div className="card-label">
                        High School
                        <span>2012 - 2015</span>
                    </div>
                    <div className="card-info">
                        <h4 className="card-title">Meru School</h4>
                        <p>Kenya Certificate of Secondary Education (K.C.S.E)</p>
                        <p className="score">A- Mean grade (75/84) points</p>
                    </div>
                </div>
                <div className="card education-list-item">
                    <div className="card-label">
                        Primary School
                        <span>2004 - 2011</span>
                    </div>
                    <div className="card-info">
                        <h4 className="card-title">Limuru Town Pri School</h4>
                        <p>Kenya Certificate of Primary Education (K.C.P.E)</p>
                        <p className="score">395/500 points</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
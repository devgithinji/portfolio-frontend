import React from 'react';
import {FaFile, FaFileCode, FaUsers} from "react-icons/fa";

const HomeStats = () => {
    return (
        <div className="admin-section">
            <div className="stat-items-list">
                <div className="stat-item card">
                    <FaUsers className="stat-item-icon"/>
                    <div className="stat-info">
                        <h1 className="card-title">Monthly Visits</h1>
                        <span>40</span>
                    </div>
                </div>
                <div className="stat-item card">
                    <FaFile className="stat-item-icon"/>
                    <div className="stat-info">
                        <h1 className="card-title">Blogs</h1>
                        <span>45</span>
                    </div>
                </div>
                <div className="stat-item card">
                    <FaFileCode className="stat-item-icon"/>
                    <div className="stat-info">
                        <h1 className="card-title">Projects</h1>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeStats;
import React from 'react';
import Link from "next/link";

const ProjectsList = () => {
    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/projects/add-project" className="admin-btn admin-btn-accent">
                    Add Project
                </Link>
            </div>
            <div className="admin-project-items">
                <div className="admin-project-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Project Title</h1>
                    <p className="link"><span>git link: </span>http://localhost:3000</p>
                    <p className="link"><span>project link: </span>http://localhost:3000</p>
                    <div className="admin-project-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-project-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Project Title</h1>
                    <p className="link"><span>git link: </span>http://localhost:3000</p>
                    <p className="link"><span>project link: </span>http://localhost:3000</p>
                    <div className="admin-project-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-project-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Project Title</h1>
                    <p className="link"><span>git link: </span>http://localhost:3000</p>
                    <p className="link"><span>project link: </span>http://localhost:3000</p>
                    <div className="admin-project-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-project-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Project Title</h1>
                    <p className="link"><span>git link: </span>http://localhost:3000</p>
                    <p className="link"><span>project link: </span>http://localhost:3000</p>
                    <div className="admin-project-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
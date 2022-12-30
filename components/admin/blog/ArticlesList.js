import React from 'react';
import Link from "next/link";

const ProjectsList = () => {
    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/blog/add-article" className="admin-btn admin-btn-accent">
                    Add Article
                </Link>
            </div>
            <div className="admin-article-items">
                <div className="admin-article-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Blog Title</h1>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span className="article-tag">spring boot</span>
                    <div className="admin-article-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-article-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Blog Title</h1>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span className="article-tag">spring boot</span>
                    <div className="admin-article-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-article-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Blog Title</h1>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span className="article-tag">spring boot</span>
                    <div className="admin-article-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-article-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Blog Title</h1>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span className="article-tag">spring boot</span>
                    <div className="admin-article-item-action-btns">
                        <button className="admin-btn admin-btn-accent">edit</button>
                        <button className="admin-btn admin-btn-accent">publish</button>
                        <button className="admin-btn admin-btn-danger">delete</button>
                    </div>
                </div>
                <div className="admin-article-item card">
                    <h1 className="card-sub-title"><span>Title: </span>Blog Title</h1>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </p>
                    <span className="article-tag">spring boot</span>
                    <div className="admin-article-item-action-btns">
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
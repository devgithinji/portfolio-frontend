import React from 'react';
import Link from "next/link";
import {FaEye, FaGithub} from "react-icons/fa";

const AllProjects = () => {
    return (
        <section className="projects-section">
            <div className="container">
                <div className="project-item card">
                    <div className="image-holder">
                        <img src="/images/project-one.png" className="img" alt="project one"/>
                    </div>
                    <div className="project-content">
                        <div className="tags">
                            <div className="tag">
                                Spring Boot
                            </div>
                            <div className="tag">
                                React
                            </div>
                        </div>
                        <h1 className="card-title">Project One</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores ducimus facilis
                            incidunt minus, molestias nam quia quo ratione vel!</p>
                        <div className="project-links">
                            <Link href="" className="button-link">
                                Project
                                <FaEye/>
                            </Link>
                            <Link href="" className="button-link">
                                Repo
                                <FaGithub/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-item card">
                    <div className="image-holder">
                        <img src="/images/project-one.png" className="img" alt="project one"/>
                    </div>
                    <div className="project-content">
                        <div className="tags">
                            <div className="tag">
                                Spring Boot
                            </div>
                            <div className="tag">
                                React
                            </div>
                        </div>
                        <h1 className="card-title">Project One</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores ducimus facilis
                            incidunt minus, molestias nam quia quo ratione vel!</p>
                        <div className="project-links">
                            <Link href="" className="button-link">
                                Project
                                <FaEye/>
                            </Link>
                            <Link href="" className="button-link">
                                 Repo
                                <FaGithub/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="project-item card">
                    <div className="image-holder">
                        <img src="/images/project-one.png" className="img" alt="project one"/>
                    </div>
                    <div className="project-content">
                        <div className="tags">
                            <div className="tag">
                                Spring Boot
                            </div>
                            <div className="tag">
                                React
                            </div>
                        </div>
                        <h1 className="card-title">Project One</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores ducimus facilis
                            incidunt minus, molestias nam quia quo ratione vel!</p>
                        <div className="project-links">
                            <Link href="" className="button-link">
                                Project
                                <FaEye/>
                            </Link>
                            <Link href="" className="button-link">
                                Repo
                                <FaGithub/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
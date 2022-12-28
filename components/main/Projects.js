import React from 'react';
import {FaGithub, FaLink, FaArrowRight} from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="sub-title">Projects</h2>
                <h1 className="title">Have a feel of what i do</h1>
                <div className="projects-list">
                    <div className="project">
                        <img src="/images/project-one.png" className="img" alt="project one"/>
                        <div className="project-info">
                            <h3 className="card-title">Barber Shop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet, corporis debitis
                                dicta ipsum nam nihil nisi quo reprehenderit sit.</p>
                            <div className="project-btns">
                                <div className="project-btn">
                                    <FaGithub/>
                                </div>
                                <div className="project-btn outline">
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="/images/project-two.png" className="img" alt="project two"/>
                        <div className="project-info">
                            <h3 className="card-title">Agency Website</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet, corporis debitis
                                dicta
                                ipsum
                                nam nihil nisi quo reprehenderit sit.</p>
                            <div className="project-btns">
                                <div className="project-btn">
                                    <FaGithub/>
                                </div>
                                <div className="project-btn outline">
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <img src="/images/project-three.png" className="img" alt="project three"/>
                        <div className="project-info">
                            <h3 className="card-title">Fitlife Gym Website</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet, corporis debitis
                                dicta
                                ipsum
                                nam nihil nisi quo reprehenderit sit.</p>
                            <div className="project-btns">
                                <div className="project-btn">
                                    <FaGithub/>
                                </div>
                                <div className="project-btn outline">
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/pages/projects" className="btn btn-accent">
                    View All
                    <FaArrowRight/>
                </Link>
            </div>
        </section>
    );
};

export default Projects;
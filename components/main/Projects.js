import React from 'react';
import {FaGithub, FaLink, FaArrowRight} from "react-icons/fa";
import Link from "next/link";

const Projects = ({projects}) => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="sub-title">Projects</h2>
                <h1 className="title">Have a feel of what i do</h1>
                <div className="projects-list">
                    {projects && projects.map(project => {
                        const {id, name, description, siteLink, repoLink, image, tags} = project
                        return (
                            <div key={id} className="project">
                                <img src={image} className="img" alt="project one"/>
                                <div className="project-info">
                                    <h3 className="card-title">{name}</h3>
                                    <p>{description}</p>
                                    <div className="project-btns">
                                        <Link href={repoLink} className="project-btn">
                                            <FaGithub/>
                                        </Link>
                                        <Link href={siteLink} className="project-btn outline">
                                            <FaLink/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
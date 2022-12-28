import React from 'react';
import ClientSideLayout from "../components/ClientSideLayout";
import Hero from "../components/projects/Hero";
import Navigation from "../components/general/Navigation";
import AllProjects from "../components/projects/AllProjects";

const Projects = () => {
    return (
        <ClientSideLayout>
            <Hero/>
            <Navigation>
                <div className="nav-item active">
                    All
                </div>
                <div className="nav-item">
                    Microservices
                </div>
                <div className="nav-item">
                    Java
                </div>
                <div className="nav-item">
                    Spring Boot
                </div>
                <div className="nav-item">
                    Spring Security
                </div>
                <div className="nav-item">
                    Hibernate
                </div>
            </Navigation>
            <AllProjects/>
        </ClientSideLayout>
    );
};

export default Projects;
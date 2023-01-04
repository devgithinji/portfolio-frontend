import React from 'react';
import ClientSideLayout from "../components/ClientSideLayout";
import Hero from "../components/projects/Hero";
import Navigation from "../components/general/Navigation";
import AllProjects from "../components/projects/AllProjects";
import Head from "next/head";

const Projects = () => {
    return (
       <>
           <Head>
               <title>Dennis Githinji | Projects</title>
               <meta name="description" content="Dennis Githinji Projects"/>
               <meta name="author" content="Dennis Githinji"/>
               <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
               <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
           </Head>
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
       </>
    );
};

export default Projects;
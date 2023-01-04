import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import Navigation from "../../components/general/Navigation";
import AllBlogs from "../../components/blog/AllBlogs";
import OtherBlogs from "../../components/blog/OtherBlogs";
import Head from "next/head";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Blog</title>
                <meta name="description" content="Dennis Githinji Blog"/>
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
                <AllBlogs/>
                <OtherBlogs/>
            </ClientSideLayout>
        </>
    );
};

export default Blog;
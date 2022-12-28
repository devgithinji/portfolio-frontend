import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import Navigation from "../../components/general/Navigation";
import AllBlogs from "../../components/blog/AllBlogs";
import OtherBlogs from "../../components/blog/OtherBlogs";

const Blog = () => {
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
            <AllBlogs/>
            <OtherBlogs/>
        </ClientSideLayout>
    );
};

export default Blog;
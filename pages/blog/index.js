import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import Navigation from "../../components/blog/Navigation";
import AllBlogs from "../../components/blog/AllBlogs";
import OtherBlogs from "../../components/blog/OtherBlogs";

const Blog = () => {
    return (
        <ClientSideLayout>
            <Hero/>
            <Navigation/>
            <AllBlogs/>
            <OtherBlogs/>
        </ClientSideLayout>
    );
};

export default Blog;
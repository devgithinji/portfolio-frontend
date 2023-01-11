import React from 'react';
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import Blog from "../../pages/blog";
import BlogItem from "../general/BlogItem";

const Blogs = ({posts}) => {
    return (
        <section className="section blogs" id="blogs">
            <div className="container">
                <h2 className="sub-title">Blog</h2>
                <h1 className="title">Let's Get techy</h1>
                <div className="blog-list">
                    {posts && posts.map(post => <BlogItem key={post.id} {...post}/>)}
                </div>
                <Link href="components#" className="btn btn-accent">
                    View All
                    <FaArrowRight/>
                </Link>
            </div>
        </section>
    );
};

export default Blogs;
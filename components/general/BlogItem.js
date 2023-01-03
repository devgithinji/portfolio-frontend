import React from 'react';
import Link from "next/link";

const BlogItem = () => {
    return (
        <Link href="/blog/slug" className="blog">
            <div className="blog-img">
                <img src="/images/blog-one.png" className="img" alt="blog one"/>
                <div className="date-posted">24th Jun 2022</div>
            </div>
            <div className="blog-content">
                <h3 className="card-title">Java Microservices</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi dolores.</p>
                <span className="card-sub-title">Read More</span>
            </div>
        </Link>
    );
};

export default BlogItem;
import React from 'react';
import BlogItem from "../general/BlogItem";

const AllBlogs = ({posts, totalPages, pageNo}) => {
    return (
        <section className="blog-section all-blogs">
            <div className="container">
                {posts && posts.map(post => <BlogItem key={post.id} {...post}/>)}
            </div>
        </section>
    );
};

export default AllBlogs;
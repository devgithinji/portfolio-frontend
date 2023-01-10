import React from 'react';
import Link from "next/link";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkCodeBlocks from "remark-code-blocks";

const BlogItem = ({id, createdAt, title, slug, content, image, blogUrl, bogId, tag, shortTitle = false}) => {
    return (
        <Link href={`/blog/${slug}`} className="blog">
            <div className="blog-img">
                <img src={image} className="img" alt="blog one"/>
                <div className="date-posted">{moment(createdAt, "YYYY-MM-DD").format("Do MMM YYYY")}</div>
            </div>
            <div className="blog-content">
                <h3 className="card-title">{title}</h3>
                <span className="card-sub-title">Read More</span>
            </div>
        </Link>
    );
};

export default BlogItem;
import React from 'react';
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import remarkGfm from 'remark-gfm'

const ArticleContent = ({id, createdAt, title, slug, content, blogUrl, blogId, published, tag}) => {

    return (
        <div className="section article-section">
            <div className="container">
                <h1 className="title article-title">{title}</h1>
                <div className="category-label">{tag.name}</div>
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}/>
                <Link href='' className="live-link">Read on Dev.To Blog</Link>
                <span className="published-date">Published on: {createdAt}</span>
            </div>
        </div>
    );
};

export default ArticleContent;
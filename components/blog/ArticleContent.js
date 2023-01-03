import React from 'react';
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import remarkGfm from 'remark-gfm'

const ArticleContent = () => {
    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
    return (
        <div className="section article-section">
            <div className="container">
                <h1 className="title article-title">Post Title</h1>
                <div className="category-label">spring boot</div>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
                <Link href='' className="live-link">Read on Dev.To Blog</Link>
                <span className="published-date">Published on: 22nd may 2023</span>
            </div>
        </div>
    );
};

export default ArticleContent;
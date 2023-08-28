import React from 'react';
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkCodeBlocks from 'remark-code-blocks'
import moment from "moment/moment";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {prism as style} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const ArticleContent = ({id, createdAt, title, slug, content, blogUrl, blogId, published, tag}) => {

    return (
        <div className="section article-section">
            <div className="container">
                <h1 className="title article-title">{title}</h1>
                <div className="category-label">{tag.name}</div>
                <ReactMarkdown
                    children={content}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={style}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                    remarkPlugins={[remarkGfm, remarkHtml, remarkCodeBlocks]}/>
                {/*<Link href='' className="live-link">Read on Dev.To Blog</Link>*/}
                <span
                    className="published-date">Published on: {moment(createdAt, "YYYY MM dd").format("Do MMM YYYY")}</span>
            </div>
        </div>
    );
};

export default ArticleContent;

import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import OtherBlogs from "../../components/blog/OtherBlogs";
import ArticleContent from "../../components/blog/ArticleContent";

const ArticlePage = () => {
    return (
        <ClientSideLayout>
            <Hero/>
            <ArticleContent/>
            <OtherBlogs/>
        </ClientSideLayout>
    );
};

export default ArticlePage;
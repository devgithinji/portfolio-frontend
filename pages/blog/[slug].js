import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import OtherBlogs from "../../components/blog/OtherBlogs";
import ArticleContent from "../../components/blog/ArticleContent";
import Head from "next/head";

const ArticlePage = () => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Article</title>
                <meta name="description" content="Dennis Githinji Article"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout>
                <Hero/>
                <ArticleContent/>
                <OtherBlogs/>
            </ClientSideLayout>
        </>
    );
};

export default ArticlePage;
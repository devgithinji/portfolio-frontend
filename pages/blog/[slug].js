import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import OtherBlogs from "../../components/blog/OtherBlogs";
import ArticleContent from "../../components/blog/ArticleContent";
import Head from "next/head";
import axiosInstance from "../../utils/axios-instance";

const ArticlePage = ({post,randomPosts}) => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Article</title>
                <meta name="description" content="Dennis Githinji Article"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout post={post}>
                <Hero/>
                <ArticleContent {...post}/>
                <OtherBlogs randomPosts={randomPosts}/>
            </ClientSideLayout>
        </>
    );
};

export const getServerSideProps = async context => {

    const slug = context.query.slug

    const {data} = await axiosInstance.get(`/posts/${slug}`);
    const {data: randomPosts} = await axiosInstance.get('/posts/random');


    return {
        props: {post: data, randomPosts},
    }
};


export default ArticlePage;
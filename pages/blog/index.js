import React, {useEffect, useState} from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import Navigation from "../../components/general/Navigation";
import AllBlogs from "../../components/blog/AllBlogs";
import OtherBlogs from "../../components/blog/OtherBlogs";
import Head from "next/head";
import axiosInstance from "../../utils/axios-instance";

const Blog = ({posts, pageNo, totalPages, categories}) => {

    return (
        <>
            <Head>
                <title>Dennis Githinji | Blog</title>
                <meta name="description" content="Dennis Githinji Blog"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout categories={categories} totalPages={totalPages} pageNo={pageNo} posts={posts}>
                <Hero/>
                <Navigation categories={categories}/>
                <AllBlogs posts={posts} totalPages={totalPages} pageNo={pageNo}/>
                <OtherBlogs/>
            </ClientSideLayout>
        </>
    );
};

export const getServerSideProps = async context => {

    const {data: {posts, pageNo, totalPages}} = await axiosInstance.get('/posts');
    const {data: categories} = await axiosInstance.get('/category');
    console.log(categories)

    return {
        props: {posts, pageNo, totalPages, categories},
    }
};

export default Blog;
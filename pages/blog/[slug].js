import React from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import OtherBlogs from "../../components/blog/OtherBlogs";
import ArticleContent from "../../components/blog/ArticleContent";
import Head from "next/head";
import axiosInstance from "../../utils/axios-instance";

const ArticlePage = ({post, randomPosts}) => {
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

    try {
        const [postDataResponse, randomPostsResponse] = await Promise.all([
            axiosInstance.get(`/posts/${slug}`),
            axiosInstance.get('/posts/random')
        ]);
        const post = postDataResponse.data;
        const randomPosts = randomPostsResponse.data;

        return {
            props: {post, randomPosts}
        };
    } catch (error) {
        console.error("Error fetching data:", error);

        if (error.response && error.response.status === 404) {
            return {
                notFound: true // Return a 404 page
            };
        }

        // Return a 500 error page
        return {
            redirect: {
                destination: '/500', // Replace with the actual path to your 500 error page
                permanent: false,
            }
        };
    }
};


export default ArticlePage;

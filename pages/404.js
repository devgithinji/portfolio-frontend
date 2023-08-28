import React from 'react';
import Error from "../components/error/Error";
import Head from "next/head";

const NotFoundPage = () => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Page Not Found</title>
                <meta name="description" content="Page not Found"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>

            <Error message='page not found'/>
        </>
    )
};

export default NotFoundPage;

import React from 'react';
import Error from "../components/error/Error";
import Head from "next/head";

const NotFoundPage = () => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Error</title>
                <meta name="description" content="Something went wrong"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>

            <Error message='something went wrong!'/>
        </>
    )
};

export default NotFoundPage;

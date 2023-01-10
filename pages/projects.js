import React from 'react';
import ClientSideLayout from "../components/ClientSideLayout";
import Hero from "../components/projects/Hero";
import Navigation from "../components/general/Navigation";
import AllProjects from "../components/projects/AllProjects";
import Head from "next/head";
import axiosInstance from "../utils/axios-instance";

const Projects = ({categories}) => {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Projects</title>
                <meta name="description" content="Dennis Githinji Projects"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout>
                <Hero/>
                <Navigation categories={categories}/>
                <AllProjects/>
            </ClientSideLayout>
        </>
    );
};

export const getServerSideProps = async context => {

    const {data: categories} = await axiosInstance.get('/category');

    return {
        props: {categories},
    }
};

export default Projects;
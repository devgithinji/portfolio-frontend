import Head from 'next/head'
import Hero from "../components/main/Hero";
import AboutMe from "../components/main/aboutme/AboutMe";
import Services from "../components/main/Services";
import Projects from "../components/main/Projects";
import Blogs from "../components/main/Blogs";
import ContactMe from "../components/ContactMe";
import ClientSideLayout from "../components/ClientSideLayout";
import axiosInstance from "../utils/axios-instance";
import Script from "next/script";

export default function Home({posts, projects, profile, schools, jobs}) {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Portfolio</title>
                <meta name="description" content="Dennis Githinji Software Developer Portfolio"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
                <link rel="preload" href="/images/hero-banner.png" as="image"/>
                <link rel="preload" href="/images/about-me.png" as="image"/>
            </Head>
            <ClientSideLayout>
                <Hero profile={profile}/>
                <AboutMe jobs={jobs} schools={schools} profile={profile}/>
                <Services/>
                <Projects projects={projects}/>
                <Blogs posts={posts}/>
                <ContactMe/>
            </ClientSideLayout>
        </>
    )
}

export const getServerSideProps = async context => {

    const [postsResponse, projectsResponse, profileResponse, educationResponse, jobsResponse] = await Promise.all([
        axiosInstance.get(`/posts/random?limit=3`),
        axiosInstance.get(`/projects/random?limit=3`),
        axiosInstance.get('/profile'),
        axiosInstance.get('/education-history'),
        axiosInstance.get('/job-history')
    ]);

    const {data: posts} = postsResponse;
    const {data: projects} = projectsResponse;
    const {data: profile} = profileResponse;
    const {data: schools} = educationResponse;
    const {data: jobs} = jobsResponse;

    return {
        props: {posts, projects, profile, schools, jobs},
    }
};

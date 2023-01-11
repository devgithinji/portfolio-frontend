import Head from 'next/head'
import Hero from "../components/main/Hero";
import AboutMe from "../components/main/aboutme/AboutMe";
import Services from "../components/main/Services";
import Projects from "../components/main/Projects";
import Blogs from "../components/main/Blogs";
import ContactMe from "../components/ContactMe";
import ClientSideLayout from "../components/ClientSideLayout";
import axiosInstance from "../utils/axios-instance";

export default function Home({posts, projects}) {
    return (
        <>
            <Head>
                <title>Dennis Githinji | Portfolio</title>
                <meta name="description" content="Dennis Githinji Software Developer Portfolio"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout>
                <Hero/>
                <AboutMe/>
                <Services/>
                <Projects projects={projects}/>
                <Blogs posts={posts}/>
                <ContactMe/>
            </ClientSideLayout>
        </>
    )
}

export const getServerSideProps = async context => {

    const [firstResponse, secondResponse] = await Promise.all([
        axiosInstance.get(`/posts/random?limit=3`),
        axiosInstance.get(`/projects/random?limit=3`)
    ]);

    const {data: posts} = firstResponse;
    const {data: projects} = secondResponse;

    return {
        props: {posts, projects},
    }
};

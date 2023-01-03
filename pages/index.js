import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Hero from "../components/main/Hero";
import AboutMe from "../components/main/aboutme/AboutMe";
import Services from "../components/main/Services";
import Projects from "../components/main/Projects";
import Blogs from "../components/main/Blogs";
import ContactMe from "../components/ContactMe";
import ClientSideLayout from "../components/ClientSideLayout";

export default function Home() {
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
                <Projects/>
                <Blogs/>
                <ContactMe/>
            </ClientSideLayout>
        </>
    )
}

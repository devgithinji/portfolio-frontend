import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import ContactMe from "../components/ContactMe";
import ClientSideLayout from "../components/ClientSideLayout";

export default function Home() {
    return (
        <ClientSideLayout>
            <Hero/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <Blogs/>
            <ContactMe/>
        </ClientSideLayout>
    )
}

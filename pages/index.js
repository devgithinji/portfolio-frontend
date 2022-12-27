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
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <AboutMe/>
                <Services/>
                <Projects/>
                <Blogs/>
                <ContactMe/>
            </main>
            <BackToTop/>
            <Footer/>
        </>
    )
}

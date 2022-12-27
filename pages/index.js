import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/aboutme/AboutMe";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <AboutMe/>
            </main>
        </>
    )
}

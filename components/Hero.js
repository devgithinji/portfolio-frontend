import React from 'react';
import Link from "next/link";
import {FaFacebook, FaFileDownload, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Hero = () => {
    return (
        <section className="section hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hello I'm <br/> Dennis Githinji
                    </h1>
                    <p className="hero-subtitle">FullStack Software Engineer</p>
                    <Link href="/" className="btn btn-accent">
                        Download Resume
                        <FaFileDownload/>
                    </Link>
                    <div className="social-icons">
                        <Link href="components/hero" className="social-link">
                            <FaFacebook/>
                        </Link>
                        <Link href="components/hero" className="social-link">
                            <FaTwitter/>
                        </Link>
                        <Link href="components/hero" className="social-link">
                            <FaLinkedinIn/>
                        </Link>
                        <Link href="components/hero" className="social-link">
                            <FaGithub/>
                        </Link>
                    </div>
                </div>
                <div className="hero-banner">
                    <img src="/images/hero-banner.png" alt="hero banner" className="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
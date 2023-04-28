import React from 'react';
import Link from "next/link";
import {FaFileDownload} from "react-icons/fa";
import SocialIcons from "./SocialIcons";

const Hero = ({profile}) => {
    const {resume, personalStatement, skills} = profile;
    return (
        <section className="section hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hello I'm <br/> Dennis Githinji
                    </h1>
                    <p className="hero-subtitle">FullStack Software Engineer</p>
                    <Link href={resume} className="btn btn-accent">
                        Download Resume
                        <FaFileDownload/>
                    </Link>
                    <SocialIcons/>
                </div>
                <div className="hero-banner">
                    <img src="/images/hero-banner.webp" alt="hero banner" className="img"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
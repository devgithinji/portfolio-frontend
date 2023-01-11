import React from 'react';
import Link from "next/link";
import {FaBitbucket, FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <Link href="https://twitter.com/DennisWakahia" className="social-link">
                <FaTwitter/>
            </Link>
            <Link href="https://www.linkedin.com/in/dennis-githinji" className="social-link">
                <FaLinkedinIn/>
            </Link>
            <Link href="https://github.com/devgithinji" className="social-link">
                <FaGithub/>
            </Link>
            <Link href="https://bitbucket.org/devgithinji" className="social-link">
                <FaBitbucket/>
            </Link>
        </div>
    );
};

export default SocialIcons;
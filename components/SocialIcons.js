import React from 'react';
import Link from "next/link";
import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <Link href="" className="social-link">
                <FaFacebook/>
            </Link>
            <Link href="" className="social-link">
                <FaTwitter/>
            </Link>
            <Link href="" className="social-link">
                <FaLinkedinIn/>
            </Link>
            <Link href="" className="social-link">
                <FaGithub/>
            </Link>
        </div>
    );
};

export default SocialIcons;
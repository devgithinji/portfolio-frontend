import React from 'react';
import Link from "next/link";
import SocialIcons from "./main/SocialIcons";

const Footer = () => {
    return (
        <footer className="section footer">
            <div className="container">
                <SocialIcons/>
                <div className="copyright-text">
                    <p>Copyright &copy; {new Date().getFullYear()}</p>
                    <span className="divider">|</span>
                    <span>Built By Dennis</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
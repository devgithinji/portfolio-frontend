import React, {useEffect, useState} from 'react';
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
    const [isOpenNavOpen, setNavOpen] = useState(false)
    const [isHeaderFixed, setHeaderFixed] = useState(false)

    const headerFixedFunc = () => {
        if (window.scrollY >= 80) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFixedFunc)
        return () => window.removeEventListener("scroll", headerFixedFunc)
    }, [])


    return (
        <header className={isHeaderFixed ? 'header fixed' : 'header'}>
            <div className="container">
                <Link href="/" className="logo">
                    Dennis.
                </Link>
                <nav className={isOpenNavOpen ? 'navbar active' : 'navbar'}>
                    <ul className="navbar-list">
                        <li>
                            <Link href="/" className="navbar-link active" data-nav-link>Home</Link>
                        </li>
                        <li>
                            <Link href="/#aboutme" className="navbar-link" data-nav-link>About Me</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="navbar-link" data-nav-link>Services</Link>
                        </li>
                        <li>
                            <Link href="/pages/projects" className="navbar-link" data-nav-link>Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="navbar-link" data-nav-link>Blog</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="navbar-link" data-nav-link>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link href="/#contact" className="btn btn-accent">
                    Hire Me
                    <FaArrowRight/>
                </Link>
                <button className="nav-open-btn" onClick={() => setNavOpen(!isOpenNavOpen)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
import React, {useEffect, useState} from 'react';
import {FaArrowRight} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
    const [isOpenNavOpen, setNavOpen] = useState(false)
    const [isHeaderFixed, setHeaderFixed] = useState(false)
    const router = useRouter();
    const [activePath, setActivePath] = useState(router.asPath)



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

    useEffect(() => {
        setActivePath(router.asPath)
        // router.events.on('hashChangeStart', onHashChangeStart);
        // router.events.on('routeChangeComplete', onRouteChange)
        //
        // return () => {
        //     router.events.off('hashChangeStart', onHashChangeStart)
        //     router.events.off('routeChangeComplete', onRouteChange)
        // }
    }, [router.asPath])

    // const onHashChangeStart = (url) => {
    //     setNavOpen(false)
    //     setActivePath(url)
    // }
    //
    // const onRouteChange = (url) => {
    //     setActivePath(url)
    //     setNavOpen(false)
    // }


    return (
        <header className={isHeaderFixed ? 'header fixed' : 'header'}>
            <div className="container">
                <Link href="/" className="logo">
                    Dennis.
                </Link>
                <nav className={isOpenNavOpen ? 'navbar active' : 'navbar'}>
                    <ul className="navbar-list">
                        <li>
                            <Link href="/"
                                  className={activePath === '/' ? 'navbar-link active' : 'navbar-link'}>Home</Link>
                        </li>
                        <li>
                            <Link href="/#aboutme"
                                  className={activePath === '/#aboutme' ? 'navbar-link active' : 'navbar-link'}>About
                                Me</Link>
                        </li>
                        <li>
                            <Link href="/#services"
                                  className={activePath === '/#services' ? 'navbar-link active' : 'navbar-link'}>Services</Link>
                        </li>
                        <li>
                            <Link href="/projects"
                                  className={activePath === '/projects' ? 'navbar-link active' : 'navbar-link'}>Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog"
                                  className={activePath === '/blog' ? 'navbar-link active' : 'navbar-link'}>Blog</Link>
                        </li>
                        <li>
                            <Link href="/#contact"
                                  className={activePath === '/#contact' ? 'navbar-link active' : 'navbar-link'}>Contact</Link>
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

import Head from 'next/head'
import Image from 'next/image'
import {FaBars, FaArrowRight, FaTimes} from "react-icons/fa"
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <a href="#" className="logo">Dennis</a>
                    <nav className="navbar">
                        <FaTimes/>
                    </nav>
                    <ul className="navbar-list">
                        <li>
                            <Link href="/" className="navbar-link">Home</Link>
                        </li>
                        <li>
                            <Link href="/#aboout-me" className="navbar-link">About Me</Link>
                        </li>
                        <li>
                            <Link href="/#services" className="navbar-link">Services</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="navbar-link">Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="navbar-link">Blog</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="navbar-link">Contact</Link>
                        </li>
                    </ul>
                    <Link href="/contact" clasName="btn btn-accent">
                        Hire Me
                        <FaArrowRight/>
                    </Link>
                    <button class="nav-open-btn">
                        <FaBars/>
                    </button>
                </div>
            </header>
        </>
    )
}

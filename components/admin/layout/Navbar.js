import React from 'react';
import {FaBriefcase, FaCog, FaFile, FaFileCode, FaHome, FaTimes, FaUserGraduate} from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar = ({isNavActive, setNavActive}) => {
    const router = useRouter();

    return (
        <aside className={isNavActive ? 'admin-nav active' : 'admin-nav'}>
            <div className="branding">
                <h1 className="title">Admin</h1>
                <div className="close-btn" onClick={() => setNavActive(false)}>
                    <FaTimes/>
                </div>
            </div>
            <div className="links">
                <Link href="/admin" className={router.pathname === "/admin" ? 'nav-link active' : 'nav-link'}>
                    <FaHome className="link-icon"/> Dashboard
                </Link>
                <Link href="/admin/projects" className={router.pathname === "/admin/projects" ? 'nav-link active' : 'nav-link'}>
                    <FaFileCode className="link-icon"/> Projects
                </Link>
                <Link href="/admin/blog" className={router.pathname === "/admin/blog" ? 'nav-link active' : 'nav-link'}>
                    <FaFile className="link-icon"/> Blogs
                </Link>
                <Link href="/admin/education" className={router.pathname === "/admin/education" ? 'nav-link active' : 'nav-link'}>
                    <FaUserGraduate className="link-icon"/> Education
                </Link>
                <Link href="/admin/work" className={router.pathname === "/admin/work" ? 'nav-link active' : 'nav-link'}>
                    <FaBriefcase className="link-icon"/> Work
                </Link>
                <Link href="/admin/settings" className={router.pathname === "/admin/settings" ? 'nav-link active' : 'nav-link'}>
                    <FaCog className="link-icon"/> Settings
                </Link>
            </div>
        </aside>
    );
};

export default Navbar;
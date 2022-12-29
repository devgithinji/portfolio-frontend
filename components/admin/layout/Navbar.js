import React from 'react';
import {FaCog, FaFile, FaFileCode, FaHome, FaTimes} from "react-icons/fa";
import Link from "next/link";

const Navbar = ({isNavActive, setNavActive}) => {
    return (
        <aside className={isNavActive ? 'admin-nav active' : 'admin-nav'}>
            <div className="branding">
                <h1 className="title">Admin</h1>
                <div className="close-btn" onClick={() => setNavActive(false)}>
                    <FaTimes/>
                </div>
            </div>
            <div className="links">
                <Link href="" className="nav-link active">
                    <FaHome className="link-icon"/> Dashboard
                </Link>
                <Link href="" className="nav-link">
                    <FaFileCode className="link-icon"/> Projects
                </Link>
                <Link href="" className="nav-link">
                    <FaFile className="link-icon"/> Blogs
                </Link>
                <Link href="" className="nav-link">
                    <FaCog className="link-icon"/> Settings
                </Link>
            </div>
        </aside>
    );
};

export default Navbar;
import React, {useState} from 'react';
import {
    FaBars,
    FaCaretDown,
    FaUser,
    FaPowerOff,
    FaLock,
    FaCaretUp,
    FaTimes,
    FaHome,
    FaFileCode,
    FaFile, FaCog
} from "react-icons/fa";
import Link from "next/link";

const Index = () => {
    const [isNavActive, setNavActive] = useState(false);
    const [isDropDownActive, setDropDownActive] = useState(false);
    const showNav = () => {
        setNavActive(!isNavActive)
    }

    const showDropDown = () => {
        setDropDownActive(!isDropDownActive)
    }

    return (<>
        <header className="admin-header">
            <div className="container">
                <button onClick={() => setNavActive(true)}>
                    <FaBars/>
                </button>
                <div className="account">
                    <div className="account-btn" onClick={showDropDown}>
                        Dennis
                        {isDropDownActive ? <FaCaretUp/> : <FaCaretDown/>}
                    </div>
                    <div className={isDropDownActive ? 'account-dropdown active' : 'account-dropdown'}>
                        <Link href="" className="account-dropdown-link">
                            <span className="dropdown-icon">
                                <FaUser/>
                            </span>
                            Profile
                        </Link>
                        <Link href="" className="account-dropdown-link">
                            <span className="dropdown-icon">
                                <FaLock/>
                            </span>
                            Change Password
                        </Link>
                        <Link href="" className="account-dropdown-link">
                            <span className="dropdown-icon">
                                <FaPowerOff/>
                            </span>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </header>
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
        <div className="admin-content">
            content
            <footer className="admin-footer">
                built by dennis
            </footer>
        </div>

    </>);
};

export default Index;
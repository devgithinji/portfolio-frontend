import React, {useEffect, useState} from 'react';
import {FaCaretUp} from "react-icons/fa";
import Link from "next/link";

const BackToTop = () => {
    const [isBackToTopActive, setBackToTopActive] = useState(false)

    const headerFixedFunc = () => {
        if (window.scrollY >= 80) {
            setBackToTopActive(true);
        } else {
            setBackToTopActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFixedFunc)
        return () => window.removeEventListener("scroll", headerFixedFunc)
    }, [])

    return (
        <Link href="#top" className={isBackToTopActive ? 'back-top-btn active' : 'back-top-btn'}>
            <FaCaretUp/>
        </Link>
    );
};

export default BackToTop;
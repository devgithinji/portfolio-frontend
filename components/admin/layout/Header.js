import React, {useState} from 'react';
import {FaBars, FaCaretDown, FaCaretUp, FaLock, FaPowerOff, FaUser} from "react-icons/fa";
import Link from "next/link";
import DropDown from "./DropDown";

const Header = ({setNavActive}) => {
    const [isDropDownActive, setDropDownActive] = useState(false);
    const showDropDown = () => {
        setDropDownActive(!isDropDownActive)
    }

    return (
        <header className="admin-header">
            <button className="open-nav-btn" onClick={() => setNavActive(true)}>
                <FaBars/>
            </button>
            <div className="account">
                <div className="account-btn" onClick={showDropDown}>
                    Dennis
                    {isDropDownActive ? <FaCaretUp/> : <FaCaretDown/>}
                </div>
                <DropDown isDropDownActive={isDropDownActive} setDropDownActive={setDropDownActive}/>
            </div>
        </header>
    );
};

export default Header;
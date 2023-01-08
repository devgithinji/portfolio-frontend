import React, {useEffect, useState} from 'react';
import {FaBars, FaCaretDown, FaCaretUp} from "react-icons/fa";
import DropDown from "./DropDown";
import {useAppContext} from "../../../context/appContext";

const Header = ({setNavActive}) => {
    const {user} = useAppContext();
    const [activeUser, setActiveUser] = useState(null)
    const [isDropDownActive, setDropDownActive] = useState(false);

    useEffect(()=>{
        if(user){
            setActiveUser(user);
        }
    },[user])
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
                    {activeUser && activeUser.first_name}
                    {isDropDownActive ? <FaCaretUp/> : <FaCaretDown/>}
                </div>
                <DropDown isDropDownActive={isDropDownActive} setDropDownActive={setDropDownActive}/>
            </div>
        </header>
    );
};

export default Header;
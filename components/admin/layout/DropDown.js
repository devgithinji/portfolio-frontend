import React, {useEffect} from 'react';
import Link from "next/link";
import {FaLock, FaPowerOff, FaUser} from "react-icons/fa";
import {useAppContext} from "../../../context/appContext";

const DropDown = ({isDropDownActive, setDropDownActive}) => {

    const {logoutUser} = useAppContext();


    return (
        <div className={isDropDownActive ? 'account-dropdown active' : 'account-dropdown'}
             onMouseLeave={() => setDropDownActive(false)}>
            <Link href="/admin/profile" className="account-dropdown-link">
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
            <div onClick={logoutUser} className="account-dropdown-link">
                            <span className="dropdown-icon">
                                <FaPowerOff/>
                            </span>
                Logout
            </div>
        </div>
    );
};

export default DropDown;
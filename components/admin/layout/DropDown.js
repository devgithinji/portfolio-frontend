import React, {useEffect} from 'react';
import Link from "next/link";
import {FaLock, FaPowerOff, FaUser} from "react-icons/fa";

const DropDown = ({isDropDownActive, setDropDownActive}) => {


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
            <Link href="" className="account-dropdown-link">
                            <span className="dropdown-icon">
                                <FaPowerOff/>
                            </span>
                Logout
            </Link>
        </div>
    );
};

export default DropDown;
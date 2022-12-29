import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";

const AdminLayout = ({children}) => {
    const [isNavActive, setNavActive] = useState(false);

    useEffect(() => {
        document.body.classList.add('admin-body');
    }, [])


    return (
        <>
            <Header setNavActive={setNavActive}/>
            <Navbar isNavActive={isNavActive} setNavActive={setNavActive}/>
            <BodyContent>
                {children}
            </BodyContent>
        </>
    );
};

export default AdminLayout;
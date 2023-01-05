import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";

const AdminLayout = ({children}) => {
    const [isNavActive, setNavActive] = useState(false);
    const {user} = useAppContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/admin/login')
        }
    }, [user])

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
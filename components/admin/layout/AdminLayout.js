import React, {useEffect, useState} from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import BodyContent from "./BodyContent";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";
import Head from "next/head";

const AdminLayout = ({children}) => {
    const [isNavActive, setNavActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAppContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/admin/login')
        }else {
            setIsLoading(false);
        }
    }, [user])

    useEffect(() => {
        document.body.classList.add('admin-body');
        document.body.classList.remove('error-body');
    }, [])


    if(!isLoading && user){
        return (
            <>
                <Head>
                    <title>Dennis Githinji | Admin</title>
                    <meta name="description" content="Dennis Githinji Software Developer Portfolio"/>
                    <meta name="author" content="Dennis Githinji"/>
                    <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                    <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
                </Head>
                <Header setNavActive={setNavActive}/>
                <Navbar isNavActive={isNavActive} setNavActive={setNavActive}/>
                <BodyContent>
                    {children}
                </BodyContent>
            </>
        );
    }

};

export default AdminLayout;
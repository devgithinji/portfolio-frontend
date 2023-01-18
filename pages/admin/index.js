import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";
import HomeStats from "../../components/admin/home/HomeStats";
import Head from "next/head";

const Index = () => {

    const breadCrumbData = {
        pageName: 'DashBoard',
        links: [
            {
                name: 'Admin Home',
                isPresent: true
            }
        ]
    }

    return (
        <>
            <Head>
                <title>Dennis Githinji | Admin</title>
                <meta name="description" content="Dennis Githinji Software Developer Portfolio"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <AdminLayout>
                <BreadCrumbs {...breadCrumbData}/>
                <HomeStats/>
            </AdminLayout>
        </>
    );
};

export default Index;
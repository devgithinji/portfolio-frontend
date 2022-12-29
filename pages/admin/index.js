import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";
import HomeStats from "../../components/admin/home/HomeStats";

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
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <HomeStats/>
        </AdminLayout>
    );
};

export default Index;
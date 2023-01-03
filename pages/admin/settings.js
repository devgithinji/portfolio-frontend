import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";
import Categories from "../../components/admin/settings/Categories";

const Settings = () => {
    const breadCrumbData = {
        pageName: 'Settings',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'Settings',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <Categories/>
        </AdminLayout>
    );
};

export default Settings;
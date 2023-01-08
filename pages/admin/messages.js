import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";

const Messages = () => {
    const breadCrumbData = {
        pageName: 'Messages',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'Messages',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
        </AdminLayout>
    );
};

export default Messages;
import React from 'react';
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AdminLayout from "../../../components/admin/layout/AdminLayout";

const Work = () => {
    const breadCrumbData = {
        pageName: 'Work',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'Work',
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

export default Work;
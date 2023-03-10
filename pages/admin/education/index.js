import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import SchoolsList from "../../../components/admin/education/SchoolsList";

const Education = () => {
    const breadCrumbData = {
        pageName: 'Education',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'Education',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <SchoolsList/>
        </AdminLayout>
    );
};

export default Education;
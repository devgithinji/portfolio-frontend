import React from 'react';
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import WorkList from "../../../components/admin/work/WorkList";

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
            <WorkList/>
        </AdminLayout>
    );
};

export default Work;
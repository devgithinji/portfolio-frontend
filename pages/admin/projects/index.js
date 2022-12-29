import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import ProjectsList from "../../../components/admin/projects/ProjectsList";


const Index = () => {
    const breadCrumbData = {
        pageName: 'Projects',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'All Projects',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <ProjectsList/>
        </AdminLayout>
    );
};

export default Index;
import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AddProjectForm from "../../../components/admin/projects/AddProjectForm";

const EditProject = () => {
    const breadCrumbData = {
        pageName: 'Edit Project',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'Projects',
                url: '/admin/projects',
                isPresent: false
            },
            {
                name: 'Edit Project',
                isPresent: true
            }
        ]
    }

    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <AddProjectForm/>
        </AdminLayout>
    );
};

export default EditProject;
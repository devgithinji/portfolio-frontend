import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AddProjectForm from "../../../components/admin/projects/AddProjectForm";

const AddProject = () => {
    const breadCrumbData = {
        pageName: 'Add Project',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'Projects',
                url: '/admin/projects',
                isPresent: false
            },
            {
                name: 'Add Project',
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

export default AddProject;
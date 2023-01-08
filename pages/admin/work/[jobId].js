import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AddJobForm from "../../../components/admin/work/AddJobForm";

const AddJob = () => {
    const breadCrumbData = {
        pageName: 'Add Job',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'Jobs',
                url: '/admin/work',
                isPresent: false
            },
            {
                name: 'Add Job',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <AddJobForm/>
        </AdminLayout>
    );
};

export default AddJob;
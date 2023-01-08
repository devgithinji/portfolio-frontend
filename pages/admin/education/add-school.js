import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AddSchoolForm from "../../../components/admin/education/AddSchoolForm";

const AddSchool = () => {
    const breadCrumbData = {
        pageName: 'Add School',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'Schools',
                url: '/admin/education',
                isPresent: false
            },
            {
                name: 'Add School',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <AddSchoolForm/>
        </AdminLayout>
    );
};

export default AddSchool;
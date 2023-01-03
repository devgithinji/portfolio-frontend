import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";
import ProfileForm from "../../components/admin/profile/ProfileForm";

const Profile = () => {
    const breadCrumbData = {
        pageName: 'Profile',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'Profile',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <ProfileForm/>
        </AdminLayout>
    );
};

export default Profile;
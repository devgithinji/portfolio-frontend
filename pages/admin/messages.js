import React from 'react';
import AdminLayout from "../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../components/admin/layout/BreadCrumbs";
import MessagesList from "../../components/admin/messages/MessagesList";

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
            <MessagesList/>
        </AdminLayout>
    );
};

export default Messages;
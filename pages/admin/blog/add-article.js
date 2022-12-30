import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import AddArticleForm from "../../../components/admin/blog/AddArticleForm";

const AddArticle = () => {

    const breadCrumbData = {
        pageName: 'Add Article',
        links: [
            {
                name: 'Home',
                url: '/',
                isPresent: false
            },
            {
                name: 'Articles',
                url: '/admin/blog',
                isPresent: false
            },
            {
                name: 'Add Article',
                isPresent: true
            }
        ]
    }

    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <AddArticleForm/>
        </AdminLayout>
    );
};

export default AddArticle;
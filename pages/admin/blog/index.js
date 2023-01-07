import React from 'react';
import AdminLayout from "../../../components/admin/layout/AdminLayout";
import BreadCrumbs from "../../../components/admin/layout/BreadCrumbs";
import ArticlesList from "../../../components/admin/blog/ArticlesList";



const Index = () => {
    const breadCrumbData = {
        pageName: 'Articles',
        links: [
            {
                name: 'Home',
                url: '/admin',
                isPresent: false
            },
            {
                name: 'All Articles',
                isPresent: true
            }
        ]
    }
    return (
        <AdminLayout>
            <BreadCrumbs {...breadCrumbData}/>
            <ArticlesList/>
        </AdminLayout>
    );
};

export default Index;
import React, {useEffect, useState} from 'react';
import ClientSideLayout from "../components/ClientSideLayout";
import Hero from "../components/projects/Hero";
import Navigation from "../components/general/Navigation";
import AllProjects from "../components/projects/AllProjects";
import Head from "next/head";
import axiosInstance from "../utils/axios-instance";

const Projects = ({categories, projects, pageNo, pageSize, totalPages}) => {
    const [newProjects, setProjects] = useState([])
    const [newTotalPages, setTotalPages] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setProjects(projects)
        setTotalPages(totalPages)
        setCurrentPage(pageNo)
    }, [])


    const navItemClick = async (category) => {
        setCurrentPage(0)
        const {name} = category;

        const {
            data
        } = await axiosInstance.get(`/projects?pageNo=${currentPage}&category=${name}`)

        const {projects: currentProjects, totalPages: currentTotalPages, pageNo} = data;

        setActiveCategory(name)
        setProjects(currentProjects)
        setTotalPages(currentTotalPages)
        setCurrentPage(pageNo)
    }

    const pageChange = async ({selected}) => {

        let url = `/projects?pageNo=${selected}&category=${activeCategory}`;

        const {
            data
        } = await axiosInstance.get(url)

        const {projects: currentProjects, totalPages: currentTotalPages, pageNo} = data;

        setProjects(currentProjects)
        setTotalPages(currentTotalPages)
        setCurrentPage(pageNo)
    }

    return (
        <>
            <Head>
                <title>Dennis Githinji | Projects</title>
                <meta name="description" content="Dennis Githinji Projects"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout>
                <Hero/>
                <Navigation
                    categories={categories}
                    activeCategory={activeCategory}
                    itemClick={navItemClick}
                />
                <AllProjects
                    projects={newProjects}
                    pageChange={pageChange}
                    pageNo={currentPage}
                    totalPages={newTotalPages}
                />
            </ClientSideLayout>
        </>
    );
};

export const getServerSideProps = async context => {

    const [firstResponse, secondResponse] = await Promise.all([
        await axiosInstance.get('/category'),
        await axiosInstance.get('/projects')
    ]);

    const {data: categories} = firstResponse;
    const {data: projectsRes} = secondResponse;

    return {
        props: {categories, ...projectsRes},
    }
};

export default Projects;
import React, {useEffect, useState} from 'react';
import ClientSideLayout from "../../components/ClientSideLayout";
import Hero from "../../components/blog/Hero";
import Navigation from "../../components/general/Navigation";
import AllBlogs from "../../components/blog/AllBlogs";
import OtherBlogs from "../../components/blog/OtherBlogs";
import Head from "next/head";
import axiosInstance from "../../utils/axios-instance";

const Blog = ({posts, pageNo, totalPages, categories, randomPosts}) => {
    const [newPosts, setPosts] = useState([])
    const [newTotalPages, setTotalPages] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(0)
    const [keyWord, setSearchKey] = useState('');
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setPosts(posts)
        setTotalPages(totalPages)
        setCurrentPage(pageNo)
    }, [])

    const searchArticle = async () => {
        if (keyWord.trim() !== '' && keyWord.trim() !== null) {
            const {
                data
            } = await axiosInstance.get(`/posts?keyWord=${keyWord}`)
            const {posts: currentPosts, totalPages: currentTotalPages, pageNo} = data;

            console.log(currentPosts)

            setActiveCategory('All')
            setCurrentPage(pageNo)
            setPosts(currentPosts)
            setTotalPages(currentTotalPages)
        }
    }

    const navItemClick = async (category) => {
        setCurrentPage(0)
        setSearchKey('')
        const {name} = category;

        const {
            data
        } = await axiosInstance.get(`/posts?pageNo=0&category=${name}`)

        const {posts: currentPosts, totalPages: currentTotalPages, pageNo} = data;

        setActiveCategory(name)
        setPosts(currentPosts)
        setTotalPages(currentTotalPages)
        setCurrentPage(pageNo)
    }

    const pageChange = async (selected) => {

        let url = `/posts?pageNo=${selected - 1}&keyWord=${keyWord}&category=${activeCategory}`;

        const {
            data
        } = await axiosInstance.get(url)

        const {posts: currentPosts, totalPages: currentTotalPages, pageNo} = data;

        setPosts(currentPosts)
        setTotalPages(currentTotalPages)
        setCurrentPage(pageNo)
    }

    return (
        <>
            <Head>
                <title>Dennis Githinji | Blog</title>
                <meta name="description" content="Dennis Githinji Blog"/>
                <meta name="author" content="Dennis Githinji"/>
                <meta name="keywords" content="Dennis, Githinji, Software Engineer, Java, JavaScript, React, Node Js"/>
                <link rel="icon" type="image/x-icon" href="/images/dennis-githinji.png"/>
            </Head>
            <ClientSideLayout>
                <Hero keyword={keyWord} setKeyWord={setSearchKey} searchArticle={searchArticle}/>
                <Navigation categories={categories} itemClick={navItemClick} activeCategory={activeCategory}/>
                <AllBlogs posts={newPosts} totalPages={newTotalPages} pageNo={currentPage} pageChange={pageChange}/>
                <OtherBlogs randomPosts={randomPosts}/>
            </ClientSideLayout>
        </>
    );
};

export const getServerSideProps = async context => {

    const [responseOne, responseTwo, responseThree] = await Promise.all([
        await axiosInstance.get('/posts'),
        await axiosInstance.get('/category'),
        await axiosInstance.get('/posts/random')
    ])

    const {data: {posts, pageNo, totalPages}} = responseOne;
    const {data: categories} = responseTwo;
    const {data: randomPosts} = responseThree

    return {
        props: {posts, pageNo, totalPages, categories, randomPosts},
    }
};

export default Blog;

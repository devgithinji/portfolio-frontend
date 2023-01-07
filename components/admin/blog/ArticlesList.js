import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppContext} from "../../../context/appContext";

const ProjectsList = () => {
    const {getPosts, posts} = useAppContext();

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/blog/add-article" className="admin-btn admin-btn-accent">
                    Add Article
                </Link>
            </div>
            <div className="admin-list-items">
                {
                    posts.map((post, index) => {
                        return (
                            <div className="admin-article-item card" key={post.id}>
                                <h1 className="card-sub-title"><span>Title: </span>{post.title}</h1>
                                <p>
                                    <span>Description: </span>
                                    {post.content?.substring(0, 20)}
                                </p>
                                <span className="article-tag">{post.tag.name}</span>
                                <div className="admin-article-item-action-btns">
                                    <Link href={`/admin/blog/${post.id}`} className="admin-btn admin-btn-accent">edit</Link>
                                    <button className="admin-btn admin-btn-accent">publish</button>
                                    <button className="admin-btn admin-btn-danger">delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="card table-list">
                <div className="admin-table">
                    <table>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map((post, index) => {
                            return (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td>{post.title}</td>
                                    <td>{post.tag.name}</td>
                                    <td>{post.content?.substring(0, 20)}</td>
                                    <td>
                                        <div className="table-action-btns">
                                            <Link href={`/admin/blog/${post.id}`} className="admin-btn admin-btn-accent">edit</Link>
                                            <button className="admin-btn admin-btn-accent">publish</button>
                                            <button className="admin-btn admin-btn-danger">delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
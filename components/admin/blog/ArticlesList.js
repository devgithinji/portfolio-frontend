import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppContext} from "../../../context/appContext";
import {confirmAlert} from 'react-confirm-alert';
import ReactPaginate from "react-paginate";

const ProjectsList = () => {
    const {getPosts, posts, deletePost, postsPage, postsPageSize, postsTotalPages} = useAppContext();

    useEffect(() => {
        getPosts();
    }, [])

    const deletePst = (postId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete post?',
            closeOnClickOutside: true,
            closeOnEscape: true,
            overlayClassName: "custom-overlay",
            buttons: [
                {
                    label: 'No'
                },
                {
                    label: 'Delete',
                    onClick: () => deletePost(postId)
                }
            ]
        });
    };

    const handlePageClick = ({selected}) => {
        getPosts(selected)
    }


    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/blog/add-article" className="admin-btn admin-btn-accent">
                    Add Article
                </Link>
            </div>
            <div className="admin-list-items">
                {
                    posts.length > 0 ? posts.map((post, index) => {
                        return (
                            <div className="admin-article-item card" key={post.id}>
                                <h1 className="card-sub-title"><span>Title: </span>{post.title}</h1>
                                <p>
                                    <span>Description: </span>
                                    {post.content?.substring(0, 20)}
                                </p>
                                <span className="article-tag">{post.tag.name}</span>
                                <div className="admin-article-item-action-btns">
                                    <Link href={`/admin/blog/${post.id}`}
                                          className="admin-btn admin-btn-accent">edit</Link>
                                    <button className="admin-btn admin-btn-accent">publish</button>
                                    <button className="admin-btn admin-btn-danger">delete</button>
                                </div>
                            </div>
                        )
                    }) : <div className="card" style={{textAlign: 'center', paddingBlock: '10px'}}>No posts found</div>
                }
            </div>
            <div className="card table-list">
                <div className="admin-table">
                    {posts.length > 0 ? (
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
                                                <Link href={`/admin/blog/${post.id}`}
                                                      className="admin-btn admin-btn-accent">edit</Link>
                                                <button className="admin-btn admin-btn-accent">publish</button>
                                                <button className="admin-btn admin-btn-danger"
                                                        onClick={() => deletePst(post.id)}>delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    ) : <div style={{textAlign: 'center'}}>No posts found</div>}
                </div>
            </div>
            <div className="admin-section">
                {postsTotalPages && (
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        pageCount={postsTotalPages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName={"navigationButtons"}
                        previousLinkClassName={"previousButton"}
                        nextLinkClassName={"nextButton"}
                        disabledClassName={"navigationDisabled"}
                        activeClassName={"navigationActive"}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectsList;
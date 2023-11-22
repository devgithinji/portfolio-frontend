import React from 'react';
import BlogItem from "../general/BlogItem";
import {FaSadCry} from "react-icons/fa";
import ResponsivePagination from "react-responsive-pagination";

const AllBlogs = ({posts, totalPages, pageNo, pageChange}) => {
    return (
        <section className="blog-section all-blogs">
            {posts.length > 0 ?
                (
                    <div className="container">
                        {posts.map(post => <BlogItem key={post.id} {...post}/>)}
                    </div>
                )
                : <div className="not-found">No Articles found <FaSadCry className='not-found-icon'/></div>
            }

            <div style={{paddingBlock: '20px', marginTop: '20px', width: '90vw', marginInline: 'auto'}}>
                {totalPages > 0 && (
                    <ResponsivePagination
                        total={totalPages}
                        current={pageNo + 1}
                        onPageChange={pageChange}
                        className="my-pagination"
                        pageItemClassName="pagination-item"
                        pageLinkClassName="pagination-link"
                        activeItemClassName="active-pagination-item"
                        disabledItemClassName="disabled-pagination-item"
                        navClassName="nav-item"
                    />
                )}
            </div>
        </section>
    );
};

export default AllBlogs;

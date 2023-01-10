import React from 'react';
import BlogItem from "../general/BlogItem";
import ReactPaginate from "react-paginate";
import {FaSadCry} from "react-icons/fa";

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

            <div style={{paddingBlock: '20px'}}>
                {totalPages > 0 && (
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={pageChange}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        forcePage={pageNo}
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
        </section>
    );
};

export default AllBlogs;
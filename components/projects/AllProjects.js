import React from 'react';
import Link from "next/link";
import {FaEye, FaGithub, FaSadCry} from "react-icons/fa";
import ReactPaginate from "react-paginate";

const AllProjects = ({projects, pageNo, totalPages, pageChange}) => {
    return (
        <section className="projects-section">
            {projects && projects.length > 0 ? (
                <div className="container">
                    {projects && projects.map(project => {
                        const {id, name, description, siteLink, repoLink, image, tags} = project
                        return (
                            <div key={id} className="project-item card">
                                <div className="image-holder">
                                    <img src={image} className="img" alt="project one"/>
                                </div>
                                <div className="project-content">
                                    <div className="tags">
                                        {tags.map(tag => {
                                            return (
                                                <div key={tag.id} className="tag">
                                                    {tag.name}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <h1 className="card-title">{name}</h1>
                                    <p>{description}</p>
                                    <div className="project-links">
                                        {siteLink !== 'empty' && (
                                            <Link href={siteLink} className="button-link" target="_blank">
                                                Project
                                                <FaEye/>
                                            </Link>
                                        )}
                                        <Link href={repoLink} className="button-link" target="_blank">
                                            Repo
                                            <FaGithub/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : <div className="not-found" style={{height: "auto"}}>No Projects found <FaSadCry className='not-found-icon'/></div>
            }
            <div style={{paddingBlock: '20px',marginTop: '20px'}}>
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

export default AllProjects;
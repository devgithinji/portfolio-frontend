import React from 'react';
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

const Blogs = () => {
    return (
        <section className="section blogs" id="blogs">
            <div className="container">
                <h2 className="sub-title">Blog</h2>
                <h1 className="title">Let's Get techy</h1>
                <div className="blog-list">
                    <Link href="" className="blog">
                        <div className="blog-img">
                            <img src="/images/blog-one.png" className="img" alt="blog one"/>
                            <div className="date-posted">24th Jun 2022</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="card-title">Java Microservices</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi dolores.</p>
                            <span  className="card-sub-title">Read More</span>
                        </div>
                    </Link>
                    <Link href="" className="blog">
                        <div className="blog-img">
                            <img src="/images/blog-two.png" className="img" alt="blog two"/>
                            <div className="date-posted">3rd Mar 2022</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="card-title">Next Js</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi dolores.</p>
                            <span className="card-sub-title">Read More</span>
                        </div>
                    </Link>
                    <Link href="" className="blog">
                        <div className="blog-img">
                            <img src="/images/blog-three.png" className="img" alt="blog three"/>
                            <div className="date-posted">7th Jun 2022</div>
                        </div>
                        <div className="blog-content">
                            <h3 className="card-title">Angular Templates</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque commodi dolores,
                                eveniet.</p>
                            <span className="card-sub-title">Read More</span>
                        </div>
                    </Link>
                </div>
                <Link href="#" className="btn btn-accent">
                    View All
                    <FaArrowRight/>
                </Link>
            </div>
        </section>
    );
};

export default Blogs;
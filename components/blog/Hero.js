import React from 'react';
import {FaSearch} from "react-icons/fa";


const Hero = () => {
    return (
        <section className="section blog-hero">
            <div className="container">
                <h1 className="title">Lets Get Techy</h1>
                <div className="search">
                    <input type="search" className="form-input" placeholder="Search here"/>
                    <button className="search-btn">
                        <FaSearch/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
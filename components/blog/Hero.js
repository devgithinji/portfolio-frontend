import React from 'react';
import {FaSearch} from "react-icons/fa";


const Hero = ({keyword, setKeyWord, searchArticle}) => {
    return (
        <section className="section blog-hero">
            <div className="container">
                <h1 className="title">Lets Get Techy</h1>
                <div className="search">
                    <input type="search" value={keyword} className="form-input" placeholder="Search here"
                           onChange={e => setKeyWord(e.target.value)}/>
                    <button className="search-btn" onClick={searchArticle}>
                        <FaSearch/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
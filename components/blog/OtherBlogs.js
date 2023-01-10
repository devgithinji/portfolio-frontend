import React from 'react';
import Slider from 'react-slick'
import BlogItem from "../general/BlogItem";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "green"}}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "block", background: "red"}}
            onClick={onClick}
        />
    );
}

const OtherBlogs = ({randomPosts}) => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    return (
        <section className="blog-section other-blogs">
            <div className="container">
                <h1 className="title">Articles you may like</h1>
                <div>
                    <Slider {...settings}>
                        {randomPosts && randomPosts.map(post => <BlogItem key={post.id} {...post} shortTitle="true"/>)}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default OtherBlogs;
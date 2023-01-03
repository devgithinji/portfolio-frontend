import React from 'react';
import {FaEdit, FaPencilAlt, FaTrash} from "react-icons/fa";

const Categories = () => {
    return (
        <div className="admin-container admin-section card categories-section">
            <h2 className="card-title">Categories</h2>
            <button className="admin-btn admin-btn-accent add-cat-btn">Add Category</button>
            <div className="categories-list">
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
                <div className="category-item">
                    spring boot
                    <div className="cat-btn">
                        <FaPencilAlt/>
                    </div>
                    <div className="cat-btn cat-danger">
                        <FaTrash/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
import React, {useEffect, useState} from 'react';
import {FaEdit, FaPencilAlt, FaTrash} from "react-icons/fa";
import {useAppContext} from "../../../context/appContext";
import {confirmAlert} from "react-confirm-alert";
import FormInput from "../general/FormInput";
import CategoryEditModal from "./CategoryEditModal";
import CategoryAddModal from "./CategoryAddModal";

const Categories = () => {
    const {getCategories, categories, deleteCategory, updateCategory, errors, addCategory} = useAppContext();

    useEffect(() => {
        getCategories();
    }, [])

    const addCat = () => {
        confirmAlert({
            overlayClassName: "custom-overlay",
            customUI: ({onClose}) => {
                return <CategoryAddModal onClose={onClose} errors={errors} addCategory={addCategory}/>
            }
        });
    }

    const deleteCat = (catId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete category?',
            closeOnClickOutside: true,
            closeOnEscape: true,
            overlayClassName: "custom-overlay",
            buttons: [
                {
                    label: 'Delete',
                    onClick: () => deleteCategory(catId)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    const editCat = (cat) => {
        confirmAlert({
            overlayClassName: "custom-overlay",
            customUI: ({onClose}) => {
                return <CategoryEditModal onClose={onClose} category={cat} errors={errors}
                                          updateCategory={updateCategory}/>
            }
        });
    }

    return (
        <div className="admin-container admin-section card categories-section">
            <h2 className="card-title">Categories</h2>
            <button className="admin-btn admin-btn-accent add-cat-btn" onClick={addCat}>Add Category</button>
            <div className="categories-list">
                {categories && categories.map(cat => {
                    return (
                        <div key={cat.id} className="category-item">
                            {cat.name}
                            <div className="cat-btn" onClick={() => editCat(cat)}>
                                <FaPencilAlt/>
                            </div>
                            <div className="cat-btn cat-danger" onClick={() => deleteCat(cat.id)}>
                                <FaTrash/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Categories;
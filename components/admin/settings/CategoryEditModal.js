import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";


const CategoryEditModal = ({onClose, category, errors, updateCategory}) => {
    const [editCategory, setEditCategory] = useState('')

    useEffect(() => {
        setEditCategory(category.name)
    }, [category])

    const updateCat = async () => {
        const data = await updateCategory({name: editCategory}, category.id)
        if (data) {
            onClose();
            setEditCategory('')
        }
    }

    return (
        <div className='edit-category-modal'>
            <h1>Update Category?</h1>
            <FormInput value={editCategory} setValue={setEditCategory} placeholder='Category Name'
                       id='category'
                       name='Category'
                       error={errors.category}/>
            <div className="category-modal-btns">
                <button onClick={onClose} className="admin-btn admin-btn-accent">Cancel</button>
                <button className="admin-btn admin-btn-accent" onClick={updateCat}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default CategoryEditModal;
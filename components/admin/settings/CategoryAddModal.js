import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";


const CategoryAddModal = ({onClose, errors, addCategory}) => {
    const [category, setCategory] = useState('')


    const addCat = async () => {
        const data = await addCategory({name: category})
        if (data) {
            onClose();
            setCategory('')
        }
    }

    return (
        <div className='edit-category-modal'>
            <h1>Add Category?</h1>
            <FormInput value={category} setValue={setCategory} placeholder='Category Name'
                       id='category'
                       name='Category'
                       error={errors.category}/>
            <div className="category-modal-btns">
                <button onClick={onClose} className="admin-btn admin-btn-accent">Cancel</button>
                <button className="admin-btn admin-btn-accent" onClick={addCat}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default CategoryAddModal;
import React, {useState} from 'react';
import {FaAngleUp, FaAngleDown} from "react-icons/fa";

const FormInput = ({
                       type,
                       error,
                       value,
                       setValue,
                       id,
                       placeholder,
                       inputType = 'text',
                       name,
                       options,
                       multiselect = false
                   }) => {

    const [isDropDownOpen, setDropDownOpen] = useState(false)

    if (type === 'textarea') {
        return (
            <div className="form-item admin-form-item">
                <label htmlFor={id}>{name}</label>
                <textarea id="description" cols="30" rows="10" className="form-textarea admin-input" value={value}
                          onChange={setValue}
                          placeholder="Description"></textarea>
                {error && <span className="form-error">error</span>}
            </div>
        )
    }

    if (type === "select") {
        return (
            <div className="form-item admin-form-item">
                <label htmlFor={id}>{name}</label>
                <div className="select-container">
                    <div className="select-btn" onClick={() => setDropDownOpen(!isDropDownOpen)}>
                        Select Category
                        {isDropDownOpen ? <FaAngleUp/> : <FaAngleDown/>}
                    </div>
                    <div className={isDropDownOpen ? 'options-container active' : 'options-container'}>
                        {options.map(option => <div key={option} className="select-option">{option}</div>)}
                    </div>
                </div>
                {error && <span className="form-error">error</span>}
            </div>
        )
    }

    return (
        <div className="form-item admin-form-item">
            <label htmlFor={id}>{name}</label>
            <input type={inputType} id={id} placeholder={placeholder} value={value} onChange={setValue}
                   className="form-input admin-input"/>
            {error && <span className="form-error">error</span>}
        </div>
    );
};

export default FormInput;
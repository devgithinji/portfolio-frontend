import React, {useState} from 'react';
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import Link from "next/link";

const FormInput = ({
                       type,
                       error,
                       value,
                       setValue,
                       id,
                       placeholder,
                       inputType = 'text',
                       name,
                       onChangeIsFunction = false
                   }) => {


    if (type === 'textarea') {
        return (
            <div className="form-item admin-form-item">
                <label htmlFor={id}>{name}</label>
                <textarea id="description" cols="30" rows="10" className="form-textarea admin-input" value={value}
                          onChange={onChangeIsFunction ? setValue : (e) => setValue(e.target.value)}
                          placeholder={placeholder}></textarea>
                {error && <span className="form-error">error</span>}
            </div>
        )
    }


    return (
        <div className="form-item admin-form-item">
            <label htmlFor={id}>{name}</label>
            <input type={inputType} id={id} placeholder={placeholder} value={value} onChange={onChangeIsFunction ? setValue : (e) => setValue(e.target.value)}
                   className="form-input admin-input"/>
            {error && <span className="form-error">error</span>}
        </div>
    );
};

export default FormInput;
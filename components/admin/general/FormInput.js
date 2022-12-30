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
                       options,
                       multiselect = false,
                       fileType = "image",
                       existingFile
                   }) => {

    const [isDropDownOpen, setDropDownOpen] = useState(false)
    const [imagePreview, setImagePreview] = useState(existingFile ? existingFile.url : '');
    const [fileName, setFileName] = useState('');

    const acceptType = fileType === 'image' ? 'image/jpeg, image/png, image/jpg' : 'application/pdf';

    const fileHandler = (e) => {
        const file = e.target.files[0];
        if (file !== null) {
            setValue(file)
            setImagePreview(URL.createObjectURL(file))
            setFileName(file.name)
        }
    }

    const selectHandler = (e) => {
        const isChecked = e.target.checked
        const resultValue = e.target.value
        if (multiselect) {
            if (isChecked) {
                let newValue = [...value, resultValue];
                setValue(newValue)
            } else {
                let newValue = value.filter(val => val !== resultValue);
                setValue(newValue)
            }
        } else {
            if (isChecked) {
                setValue([resultValue])
            } else {
                setValue([])
            }
        }

    }

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
                        {options.map(option => {
                            const isChecked = value.findIndex(val => val === option) !== -1;
                            return (
                                <div className="select-option" key={option}>
                                    <input type="checkbox" id={option} value={option} onChange={selectHandler}
                                           checked={isChecked} className="checkbox"/>
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {error && <span className="form-error">error</span>}
            </div>
        )
    }

    if (type === "file") {
        return (
            <div className="form-item admin-form-item">
                <label>{name}</label>
                <div className="image-uploader">
                    {fileType === 'image' && imagePreview && (
                        <div className="image-container">
                            <img src={imagePreview} alt="" className="img"/>
                        </div>
                    )}
                    {fileName && <p>{fileName}</p>}
                    {(fileType !== 'image' && existingFile.url) && <Link href={existingFile.url}>Download file</Link>}
                    <label htmlFor={id} className="upload-btn">Select {fileType === 'image' ? 'image' : 'file'}</label>
                </div>
                <input type="file" id={id} accept={acceptType} className="file-input" onChange={fileHandler}/>
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
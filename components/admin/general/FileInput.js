import React, {useEffect, useState} from 'react';
import Link from "next/link";

const FileInput = ({fileType = "image", name, existingFile, id, error, setValue}) => {

    const [imagePreview, setImagePreview] = useState(existingFile ? existingFile : '');
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        setImagePreview(existingFile)
    }, [existingFile])

    const acceptType = fileType === 'image' ? 'image/jpeg, image/png, image/jpg' : 'application/pdf';

    const fileHandler = (e) => {
        const file = e.target.files[0];
        if (file !== null) {
            setValue(file)
            setImagePreview(URL.createObjectURL(file))
            setFileName(file.name)
        }
    }

    const preview = () => {
        if (fileType === 'image') {
            if (imagePreview && imagePreview !== '') {
                return (
                    <div className="image-container">
                        <img src={imagePreview} alt="" className="img"/>
                    </div>
                )
            }
        }
    }

    return (
        <div className="form-item admin-form-item">
            <label>{name}</label>
            <div className="image-uploader">
                {preview()}
                {fileName && <p>{fileName}</p>}
                {(fileType !== 'image' && existingFile) &&
                    <Link href={existingFile} className="accent">Download file</Link>}
                <label htmlFor={id} className="upload-btn">Select {fileType === 'image' ? 'image' : 'file'}</label>
            </div>
            <input type="file" id={id} accept={acceptType} className="file-input" onChange={fileHandler}/>
            {error && <span className="form-error">{error}</span>}
        </div>
    );
};

export default FileInput;
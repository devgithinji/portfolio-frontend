import React, {useState} from 'react';
import Link from "next/link";

const FileInput = ({fileType = "image", name, existingFile, id, error, setValue}) => {

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
            {error && <span className="form-error">{error}</span>}
        </div>
    );
};

export default FileInput;
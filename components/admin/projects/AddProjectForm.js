import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import FileInput from "../general/FileInput";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";

const AddProjectForm = () => {
    const router = useRouter();
    const {isLoading, addProject, getCategories, categories, errors, setFormError} = useAppContext();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [siteLink, setLink] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState('')
    const [existingFile, setExistingFile] = useState({url: ''})

    useEffect(() => {
        getCategories();
    }, [])

    const validateInputs = () => {
        if (!name) {
            setFormError({name: 'name is required'})
            return false;
        }
        if (!siteLink) {
            setFormError({siteLink: 'site link is required'})
            return false;
        }

        if (!repoLink) {
            setFormError({repoLink: 'repo link is required'})
            return false;
        }

        if (!tags) {
            setFormError({category: 'Category is required'})
            return false;
        }

        if (!image) {
            setFormError({image: 'image is required'})
            return false;
        }

        if (!description) {
            setFormError({description: 'description is required'})
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateInputs();
        if (isValid) {
            const data = new FormData();
            data.append('name', name)
            data.append('siteLink', siteLink)
            data.append('repoLink', repoLink)
            data.append('tags[]', tags)
            data.append('description', description)
            data.append('image', image)

            addProject(data);
        }
    }


    return (
        <div className="admin-section card">
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <FormInput value={name} setValue={setName} placeholder='Name' id='name' name='Name'
                               error={errors.name}/>
                    <FormInput value={siteLink} setValue={setLink} placeholder='Site Link' id='site-link'
                               name='Site Link'
                               error={errors.siteLink}/>
                    <FormInput value={repoLink} setValue={setRepoLink} placeholder='Repo Link' id='repo-link'
                               name='Repo Link'
                               error={errors.repoLink}/>
                    <SelectInput type="select" value={tags} setValue={setTags} id='category' options={categories}
                                 name='Category'
                                 error={errors.tags} multiselect={true}/>
                    <FileInput name="Image" setValue={setImage} value={image} type="file" id="image"
                               error={errors.image}
                               existingFile={existingFile}/>
                    <FormInput type='textarea' value={description} setValue={setDescription} placeholder='Description'
                               id='description' name='Description' error={errors.description}/>
                </div>
                <button type="submit" className="form-btn"
                        disabled={isLoading}>{isLoading ? 'Please wait..' : 'Add Project'}</button>
            </form>
        </div>
    );
};

export default AddProjectForm;
import React, {useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import FileInput from "../general/FileInput";

const AddProjectForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [siteLink, setLink] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState('')
    const [existingFile, setExistingFile] = useState({url: ''})
    const [errors, setErrors] = useState({})

    const [isLoading, setLoading] = useState(false);

    const options = ["option one", "option two", "option three", "option four"]
    return (
        <div className="admin-section card">
            <form className="form-container" action="">
                <div className="inputs-container">
                    <FormInput value={name} setValue={setName} placeholder='Name' id='name' name='Name'
                               error={errors.name}/>
                    <FormInput value={siteLink} setValue={setLink} placeholder='Site Link' id='site-link'
                               name='Site Link'
                               error={errors.site_link}/>
                    <FormInput value={repoLink} setValue={setRepoLink} placeholder='Repo Link' id='repo-link'
                               name='Repo Link'
                               error={errors.repo_link}/>
                    <SelectInput type="select" value={tags} setValue={setTags} id='category' options={options}
                                 name='Category'
                                 error={errors.category} multiselect={true}/>
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
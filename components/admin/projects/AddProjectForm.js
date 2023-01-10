import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import SelectInput from "../general/SelectInput";
import FileInput from "../general/FileInput";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";

const AddProjectForm = () => {
    const router = useRouter();
    const {
        isFormLoading,
        isPageLoading,
        addProject,
        updateProject,
        getCategories,
        categories,
        errors,
        setFormError,
        getProject,
        project,
        notFoundError,
        resetProject
    } = useAppContext();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [siteLink, setLink] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState('')
    const [existingFile, setExistingFile] = useState('')
    const [isEditing, setIsEditing] = useState(false);


    useEffect(() => {
        getCategories();
        const handleRouteChange = (url, {shallow}) => {
            resetProject();
        }
        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    useEffect(() => {
        if (project && isEditing) {
            const {description, image, name, repoLink, siteLink, tags} = project;
            setName(name)
            setDescription(description)
            setLink(siteLink)
            setRepoLink(repoLink)
            setExistingFile(image)
            const newTags = tags.map(tag => tag.name)
            setTags(newTags)
        }
    }, [project])

    const fetchProject = async projectId => {
        setIsEditing(true)
        await getProject(projectId);
    };

    const projectId = router.query.projectId;

    useEffect(() => {
        if (projectId) {
            fetchProject(projectId);
        }
    }, [projectId])

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

        if (!isEditing && !image) {
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

            if (isEditing) {
                if (image) {
                    data.append('image', image)
                }
                updateProject(data, projectId)
            } else {
                data.append('image', image)
                addProject(data);
            }
        }
    }

    const form = (
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
                <FileInput name="Image" setValue={setImage} value={image} id="image" error={errors.image}
                           existingFile={existingFile}/>
                <FormInput type='textarea' value={description} setValue={setDescription} placeholder='Description'
                           id='description' name='Description' error={errors.description}/>
            </div>
            <button type="submit" className="form-btn"
                    disabled={isFormLoading}>{isFormLoading ? 'Please wait..' : isEditing ? 'Edit Project' : 'Add Project'}</button>
        </form>
    )

    const noProjectFound = (
        <div style={{textAlign: 'center', fontSize: '25px'}}>
            <p> no project found</p>
        </div>
    )

    const loading = (
        <div style={{textAlign: 'center', fontSize: '25px'}}>
            <p>please wait</p>
        </div>
    )


    return (
        <div className="admin-section card">
            {isPageLoading ? loading : notFoundError ? noProjectFound : form}
        </div>
    );
};

export default AddProjectForm;
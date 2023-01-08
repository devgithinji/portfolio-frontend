import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import FileInput from "../general/FileInput";
import {FaMinus, FaPlus} from "react-icons/fa";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";

const AddJobForm = () => {
    const router = useRouter();
    const {errors, isFormLoading, updateJob, addJob, setFormError, getJob, job} = useAppContext();
    const [institution, setInstitution] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [durationRange, setDurationRange] = useState('');
    const [achievements, setAchievements] = useState(['']);
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        const jobId = router.query.jobId;
        if (jobId) {
            setIsEditing(true);
            getJob(jobId);
        }

    }, [])


    useEffect(() => {
        if (job && isEditing) {
            const {institution, title, description, durationRange, achievementsList} = job
            setInstitution(institution)
            setTitle(title)
            setDescription(description)
            setDurationRange(durationRange)
            setAchievements(achievementsList)
        }

    }, [job])


    // skills
    const updateSkill = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const updatedAchievements = [...achievements];
        updatedAchievements[id] = value;
        setAchievements(updatedAchievements);
    }

    const addAchievement = (e) => {
        e.preventDefault();
        setAchievements([...achievements, '']);
    }

    const removeAchievement = (e, index) => {
        e.preventDefault();
        let newAchievements = [...achievements];
        newAchievements.splice(index, 1);
        setAchievements(newAchievements)
    }

    const isValid = () => {
        if (!institution) {
            setFormError({institution: 'institution is required'})
            return false;
        }

        if (!title) {
            setFormError({title: 'title is required'})
            return false;
        }

        if (!description) {
            setFormError({description: 'description is required'})
            return false;
        }

        if (!durationRange) {
            setFormError({durationRange: 'duration is required'})
            return false;
        }

        if (achievements.length === 0) {
            setFormError({achievements: 'achievements is required'})
            return false;
        }

        return true;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid()) return;
        const data = {institution, title, description, achievements, durationRange}
        if (isEditing) {
            updateJob(data, job.id)
        } else {
            addJob(data)
        }
    }
    return (<div className="admin-section card">
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <FormInput value={institution} setValue={setInstitution} placeholder='Institution'
                               id='institution'
                               name='Institution'
                               error={errors.institution}/>
                    <FormInput value={title} setValue={setTitle} placeholder='Title' id='title'
                               name='Title'
                               error={errors.title}/>
                    <FormInput value={durationRange} setValue={setDurationRange} placeholder='Duration' id='duration'
                               name='Duration'
                               error={errors.durationRange}/>
                    <FormInput type='textarea' value={description} setValue={setDescription}
                               placeholder='Description'
                               id='description' name='Description' error={errors.description}/>
                    <div className="dynamic-fields-container">
                        <label htmlFor="">Add Achievements</label>
                        <button onClick={addAchievement} className="circle-btn" style={{marginBottom: "10px"}}>
                            <FaPlus/>
                        </button>
                        {achievements && achievements.map((achievement, index) => {
                            return (<div key={index} className="dynamic-input-item">
                                    <FormInput value={achievement} setValue={updateSkill}
                                               onChangeIsFunction={true}
                                               placeholder='Enter Achievement'
                                               id={index}
                                               name='Achievement'/>
                                    <button onClick={(e) => removeAchievement(e, index)} className="circle-btn danger">
                                        <FaMinus/>
                                    </button>
                                </div>)
                        })}
                    </div>
                </div>
                <button type="submit" className="form-btn"
                        disabled={isFormLoading}>
                    {isFormLoading ? 'Please wait...' : 'Submit'}
                </button>
            </form>
        </div>);
};

export default AddJobForm;
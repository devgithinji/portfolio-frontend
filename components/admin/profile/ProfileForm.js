import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import FileInput from "../general/FileInput";
import {FaMinus, FaPlus} from "react-icons/fa";
import {useAppContext} from "../../../context/appContext";

const ProfileForm = () => {
    const {errors, getProfile, updateProfile, profile, isFormLoading, setFormError} = useAppContext();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [personalStatement, setPersonalStatement] = useState('');
    const [socialMediaLinks, setSocialMediaLinks] = useState(['']);
    const [skills, setSkills] = useState(['']);
    const [resume, setResume] = useState(null)
    const [existingFile, setExistingFile] = useState('')

    useEffect(() => {
        getProfile();
    }, [])

    useEffect(() => {
        if (profile) {
            const {firstName, lastName, email, socialMediaLinks, resume, personalStatement, skills, phone} = profile
            setFirstName(firstName)
            setLastName(lastName)
            setEmail(email)
            setPhone(phone)
            setPersonalStatement(personalStatement)
            setSocialMediaLinks(socialMediaLinks)
            setSkills(skills)
            setExistingFile(resume)
        }

    }, [profile])


    const updateLink = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const updatedLinks = [...socialMediaLinks];
        updatedLinks[id] = value;
        setSocialMediaLinks(updatedLinks);
    }

    const addLink = (e) => {
        e.preventDefault();
        setSocialMediaLinks([...socialMediaLinks, '']);
    }

    const removeLink = (e, index) => {
        e.preventDefault();
        let links = [...socialMediaLinks];
        links.splice(index, 1);
        setSocialMediaLinks(links)
    }

    // skills

    const updateSkill = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        const updatedSkills = [...skills];
        updatedSkills[id] = value;
        setSkills(updatedSkills);
    }

    const addSkill = (e) => {
        e.preventDefault();
        setSkills([...skills, '']);
    }

    const removeSkill = (e, index) => {
        e.preventDefault();
        let newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills)
    }

    const isValid = () => {
        if (!firstName) {
            setFormError({firstName: 'first name is required'})
            return false;
        }

        if (!lastName) {
            setFormError({lastName: 'last name is required'})
            return false;
        }

        if (!email) {
            setFormError({email: 'email is required'})
            return false;
        }

        if (!phone) {
            setFormError({phone: 'phone number is required'})
            return false;
        }

        if (!personalStatement) {
            setFormError({personalStatement: 'personal statement is required'})
            return false;
        }
        if (socialMediaLinks.length === 0) {
            setFormError({socialMediaLinks: 'social media links is required'})
            return false;
        }
        if (skills.length === 0) {
            setFormError({socialMediaLinks: 'skills is required'})
            return false;
        }

        return true;

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid()) return;
        const formData = new FormData();
        formData.append("firstName", firstName)
        formData.append("lastName", lastName)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("socialMediaLinks[]", socialMediaLinks)
        formData.append("skills[]", skills)
        if (resume) {
            formData.append("resume", resume)
        }
        formData.append("personalStatement", personalStatement)
        updateProfile(formData);
    }
    return (
        <div className="admin-section card">
            <form className="form-container" action="" onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <FormInput value={firstName} setValue={setFirstName} placeholder='First Name' id='first-name'
                               name='First Name'
                               error={errors.firstName}/>
                    <FormInput value={lastName} setValue={setLastName} placeholder='Last Name' id='last-name'
                               name='Last Name'
                               error={errors.lastName}/>
                    <FormInput value={email} setValue={setEmail} placeholder='Email' id='email'
                               name='Email'
                               error={errors.email}/>
                    <FormInput value={phone} setValue={setPhone} placeholder='Phone' id='phone'
                               name='Phone'
                               error={errors.phone}/>
                    <FormInput type='textarea' value={personalStatement} setValue={setPersonalStatement}
                               placeholder='Personal Statement'
                               id='personal-statement' name='Personal Statement' error={errors.personalstatement}/>
                    <FileInput name="Resume" setValue={setResume} value={resume} fileType="file" id="resume"
                               error={errors.resume}
                               existingFile={existingFile}/>
                    <div className="dynamic-fields-container">
                        <label htmlFor="">Add Social Media Links</label>
                        <button onClick={addLink} className="circle-btn" style={{marginBottom: "10px"}}>
                            <FaPlus/>
                        </button>
                        {socialMediaLinks.map((link, index) => {
                            return (
                                <div key={index} className="dynamic-input-item">
                                    <FormInput value={link} setValue={updateLink}
                                               onChangeIsFunction={true}
                                               placeholder='Enter Link'
                                               id={index}
                                               name='Social Media Link'/>
                                    <button onClick={(e) => removeLink(e, index)} className="circle-btn danger">
                                        <FaMinus/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="dynamic-fields-container">
                        <label htmlFor="">Add Skills</label>
                        <button onClick={addSkill} className="circle-btn" style={{marginBottom: "10px"}}>
                            <FaPlus/>
                        </button>
                        {skills.map((skill, index) => {
                            return (
                                <div key={index} className="dynamic-input-item">
                                    <FormInput value={skill} setValue={updateSkill}
                                               onChangeIsFunction={true}
                                               placeholder='Enter Skill'
                                               id={index}
                                               name='Skill'/>
                                    <button onClick={(e) => removeSkill(e, index)} className="circle-btn danger">
                                        <FaMinus/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button type="submit" className="form-btn"
                        disabled={isFormLoading}>
                    {isFormLoading ? 'Please wait...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
import React, {useState} from 'react';
import FormInput from "../general/FormInput";
import FileInput from "../general/FileInput";
import {FaMinus, FaPlus} from "react-icons/fa";

const ProfileForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [personalStatement, setPersonalStatement] = useState('');
    const [socialMediaLinks, setSocialMediaLinks] = useState(['']);
    const [skills, setSkills] = useState(['']);
    const [resume, setResume] = useState('')
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [existingFile, setExistingFile] = useState('')

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
        let skills = [...skills];
        skills.splice(index, 1);
        setSkills(skills)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(socialMediaLinks)
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
                        disabled={isLoading}>
                    {isLoading ? 'Please wait...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
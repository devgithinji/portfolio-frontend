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
    const [skills, setSkills] = useState([]);
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
        console.log(socialMediaLinks)
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
                    <div className="social-media-links">
                        <button onClick={addLink} className="circle-btn" style={{marginBottom: "10px"}}>
                            <FaPlus/>
                        </button>
                        {socialMediaLinks.map((link, index) => {
                            return (
                                <div key={index} className="dynamic-input-item">
                                    <FormInput value={socialMediaLinks[index]} setValue={updateLink}
                                               onChangeIsFunction={true}
                                               placeholder='Enter Link'
                                               id={index}
                                               name='Link'/>
                                    <button onClick={(e) => removeLink(e, index)} className="circle-btn danger">
                                        <FaMinus/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <div className="skills">

                    </div>
                </div>
                <button type="submit" className="form-btn"
                        disabled={isLoading}>
                    {isLoading ? 'Please wait...' : 'Add Article'}
                </button>
            </form>
        </div>
    );
};

export default ProfileForm;
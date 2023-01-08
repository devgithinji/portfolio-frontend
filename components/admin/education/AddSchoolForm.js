import React, {useEffect, useState} from 'react';
import FormInput from "../general/FormInput";
import {useAppContext} from "../../../context/appContext";
import {useRouter} from "next/router";

const AddSchoolForm = () => {
    const router = useRouter();
    const {
        isFormLoading,
        isPageLoading,
        errors,
        notFoundError,
        setFormError,
        addSchool,
        getSchool,
        school,
        updateSchool
    } = useAppContext();
    const [institution, setInstitution] = useState('');
    const [level, setLevel] = useState('')
    const [qualification, setQualification] = useState('')
    const [award, setAward] = useState('')
    const [durationRange, setDurationRange] = useState('')
    const [isEditing, setIsEditing] = useState(false)


    useEffect(() => {
        const schoolId = router.query.schoolId;
        if (schoolId) {
            setIsEditing(true);
            getSchool(schoolId);
        }

    }, [router])

    useEffect(() => {
        if (school) {
            const {institution, level, qualification, award, durationRange} = school;
            setInstitution(institution)
            setLevel(level)
            setQualification(qualification)
            setAward(award)
            setDurationRange(durationRange)
        }

    }, [school])


    const isValid = () => {
        if (!institution) {
            setFormError({institution: 'institution is required'})
            return false;
        }
        if (!level) {
            setFormError({level: 'level is required'})
            return false;
        }
        if (!qualification) {
            setFormError({qualification: 'qualification is required'})
            return false;
        }
        if (!award) {
            setFormError({award: 'award is required'})
            return false;
        }
        if (!durationRange) {
            setFormError({duration: 'duration is required'})
            return false;
        }

        return true;

    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (isValid()) {
            const data = {institution, level, qualification, award, durationRange}
            if (isEditing) {
                updateSchool(data, school.id)
            } else {
                addSchool(data)
            }
        }

    }

    const form = (
        <form className="form-container" action="" onSubmit={handleSubmit}>
            <div className="inputs-container">
                <FormInput value={institution} setValue={setInstitution} placeholder='Institution' id='institution'
                           name='Institution'
                           error={errors.institution}/>
                <FormInput value={level} setValue={setLevel} placeholder='Level' id='level'
                           name='Level'
                           error={errors.level}/>
                <FormInput value={qualification} setValue={setQualification} placeholder='Qualification'
                           id='qualification'
                           name='Qualification'
                           error={errors.qualification}/>
                <FormInput value={award} setValue={setAward} placeholder='Award'
                           id='award'
                           name='Award'
                           error={errors.award}/>
                <FormInput value={durationRange} setValue={setDurationRange} placeholder='Duration'
                           id='duration'
                           name='Duration'
                           error={errors.duration}/>
            </div>
            <button type="submit" className="form-btn"
                    disabled={isFormLoading}>{isFormLoading ? 'Please wait..' : isEditing ? 'Edit School' : 'Add School'}</button>
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

export default AddSchoolForm;
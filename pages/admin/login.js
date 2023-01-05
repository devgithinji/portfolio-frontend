import React, {useEffect, useState} from 'react';
import FormInput from "../../components/admin/general/FormInput";
import {useAppContext} from "../../context/appContext";
import {useRouter} from "next/router";

const Login = () => {
    const {isLoading, showAlert, displayAlert, user, loginUser} = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [errors, setErrors] = useState({})

    const router = useRouter();

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                router.push('/admin')
            }, 3000)
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setErrors({...errors, email: 'email is required'})
            return;
        }

        if (!password) {
            setErrors({...errors, password: 'password is required'})
            return;
        }

        const userDetails = {email, password};
        loginUser(userDetails);
    }


    return (
        <div className="login-container">
            <div className="login-background">
            </div>
            <form className="login-form-container card" onSubmit={handleSubmit}>
                <h1 className="card-title login-title">Admin</h1>
                <FormInput value={email} setValue={setEmail} placeholder='Email' id='email'
                           name='Email'
                           error={errors.email}/>
                <FormInput value={password} setValue={setPassWord} placeholder='Password' inputType="password"
                           id='password'
                           name='Password'
                           error={errors.password}/>
                <button type="submit" className="admin-btn admin-btn-accent w-100" style={{marginTop: "10px"}}
                        disabled={isLoading}>
                    {isLoading ? 'PLease wait...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
import React, {useState} from 'react';
import FormInput from "../../components/admin/general/FormInput";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [errors, setErrors] = useState({})

    return (
        <div className="login-container">
            <div className="login-background">
            </div>
            <div className="login-form-container card">
                <h1 className="card-title" style={{fontWeight: '800', fontSize: '30px'}}>Admin</h1>
                <FormInput value={email} setValue={setEmail} placeholder='Email' id='email'
                           name='Email'
                           error={errors.email}/>
                <FormInput value={password} setValue={setPassWord} placeholder='Password' inputType="password"
                           id='password'
                           name='Password'
                           error={errors.password}/>
                <button className="admin-btn admin-btn-accent w-100" style={{marginTop: "10px"}}>Login</button>
            </div>
        </div>
    );
};

export default Login;
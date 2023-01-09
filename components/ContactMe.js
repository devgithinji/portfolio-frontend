import React, {useEffect, useState} from 'react';
import {FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaLocationArrow} from "react-icons/fa";
import Link from "next/link";
import validator from 'validator';
import axiosInstance from "../utils/axios-instance";

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(null)

    useEffect(() => {
        const resultTimer = setTimeout(() => {
            setResult(null)
        }, 3000)
        return () => clearTimeout(resultTimer);
    }, [result])


    const isValid = () => {
        if (!name) {
            setErrors({name: 'name is required'})
            return false;
        }

        if (!email) {
            setErrors({email: 'email is required'})
            return false;
        }

        if (!validator.isEmail(email)) {
            setErrors({email: 'invalid email'})
            return false;
        }

        if (validator.isEmpty(message)) {
            setErrors({message: 'message is required'})
            return false;
        }

        if (message.trim().length > 350) {
            setErrors({message: 'message is too long (350 characters max)'})
            return false;
        }

        return true;
    }

    const clearInputs = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({})

        if (isValid()) {
            setIsLoading(true)
            try {
                const info = {email, name, message}
                const {data} = await axiosInstance.post('/message', info)
                setResult({success: true, message: data})
                clearInputs();
            } catch (e) {
                setResult({success: false, message: 'something went wrong'})
            }
            setIsLoading(false);
        }
    }

    return (<section className="section contact" id="contact">
        <div className="container">
            <h2 className="sub-title">Contact Me</h2>
            <h1 className="title">Let's Get Talking</h1>
            <div className="contact-content">
                <div className="contact-details">
                    <ul>
                        <li className="contact-item">
                            <div className="contact-icon">
                                <FaEnvelope/>
                            </div>
                            <Link href="mailto:wakahiad@gmail.com">wakahiad@gmail.com</Link>
                        </li>
                        <li className="contact-item">
                            <div className="contact-icon">
                                <FaPhoneAlt/>
                            </div>
                            <Link href="tel:+254799566927">+254 799 566 927</Link>
                        </li>
                        <li className="contact-item">
                            <div className="contact-icon">
                                <FaWhatsapp/>
                            </div>
                            <Link href="https://wa.me/0799566927" target="_blank">+254 799 566 927</Link>
                        </li>
                        <li className="contact-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt/>
                            </div>
                            <Link href="https://www.google.com/maps/search/?api=1&query=nairobi+kenya"
                                  target="_blank">Nairobi,
                                Kenya</Link>
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <form action="" onSubmit={handleSubmit}>
                        {result && <span style={{color: result.success ? 'var(--accent)' : 'red'}}>{result.message}</span>}
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-input" name="name" id="name" value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   placeholder="Enter Name"/>
                            {errors && <span className="form-error">{errors.name}</span>}
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-input" name="name" id="email" value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Enter Email"/>
                            {errors && <span className="form-error">{errors.email}</span>}
                        </div>
                        <div className="form-item">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-textarea" placeholder="Enter Message" value={message}
                                      onChange={(e) => setMessage(e.target.value)}>

                            </textarea>
                            {errors && <span className="form-error">{errors.message}</span>}
                        </div>
                        <button type="submit" className="btn btn-accent" disabled={isLoading}>
                            {isLoading ? 'please wait...' : 'Submit'}
                            <FaLocationArrow/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>);
};

export default ContactMe;
import React from 'react';
import {FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaLocationArrow, FaArrowRight} from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {
    return (
        <section className="section contact" id="contact">
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
                        <form action="">
                            <div className="form-item">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-input" name="name" id="name"
                                       placeholder="Enter Name"/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-input" name="name" id="email"
                                       placeholder="Enter Email"/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-textarea" placeholder="Enter Message"></textarea>
                            </div>
                            <button className="btn btn-accent">
                                Submit
                                <FaLocationArrow/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
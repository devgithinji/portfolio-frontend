import React, {useEffect} from 'react';
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";

const Error = ({message}) => {

    useEffect(() => {
        document.body.classList.add('error-body');
    }, [])

    return (
        <div className="error-container">
            <h1 className="title">Oops!</h1>
            <span>{message}</span>
            <Link href="/" className="btn btn-accent"><FaArrowLeft/> back</Link>
        </div>
    );
};

export default Error;
import React, {useEffect} from 'react';
import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const ClientSideLayout = ({children}) => {
    useEffect(() => {
        document.body.classList.remove('error-body','admin-body');
    }, [])
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <BackToTop/>
            <Footer/>
        </>
    );
};

export default ClientSideLayout;
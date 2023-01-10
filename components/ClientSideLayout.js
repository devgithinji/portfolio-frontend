import React from 'react';
import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

const ClientSideLayout = ({children}) => {
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
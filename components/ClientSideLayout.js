import React, {useEffect} from 'react';
import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Script from "next/script";

const ClientSideLayout = ({children}) => {
    useEffect(() => {
        document.body.classList.remove('error-body','admin-body');
    }, [])
    return (
        <>
            <Header>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"/>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){window.dataLayer.push(arguments);}
                      gtag('js', new Date());
            
                      gtag('config', ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID});
                    `}
                </Script>
            </Header>
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
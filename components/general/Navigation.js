import React from 'react';

const Navigation = ({children}) => {
    return (
        <section className="navigation">
            <div className="container">
                {...children}
            </div>
        </section>
    );
};

export default Navigation;
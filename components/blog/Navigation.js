import React from 'react';

const Navigation = () => {
    return (
        <section className="blog-section navigation">
            <div className="container">
                <div className="nav-item active">
                    All
                </div>
                <div className="nav-item">
                    Microservices
                </div>
                <div className="nav-item">
                    Java
                </div>
                <div className="nav-item">
                    Spring Boot
                </div>
                <div className="nav-item">
                    Spring Security
                </div>
                <div className="nav-item">
                    Hibernate
                </div>
            </div>
        </section>
    );
};

export default Navigation;
import React from 'react';

const BodyContent = ({children}) => {
    return (
        <div className="admin-content">
            <div className="admin-container">
                {children}
            </div>
            <footer className="admin-footer">
                <span>Built by Dennis</span>
                <span>Copyright &copy;  {new Date().getFullYear()}</span>
            </footer>
        </div>
    );
};

export default BodyContent;
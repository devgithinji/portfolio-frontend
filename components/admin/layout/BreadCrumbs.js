import React from 'react';
import {FaAngleRight} from "react-icons/fa";
import Link from "next/link";

const BreadCrumbs = ({pageName, links}) => {
    return (
        <div className="bread-crumbs admin-section card">
            <h1 className="card-title">{pageName}</h1>
            <div className="bread-crumb-links">
                {links.map(link => {
                    if (!link.isPresent) {
                        return (
                            <Link href={link.url} key={link.name} className="bread-crumb-link">
                                <span className="link-name">{link.name}</span>
                                <FaAngleRight className="bread-crumb-link-icon"/>
                            </Link>
                        )
                    }
                    return (
                        <div className="bread-crumb-link" key={link.name}>
                            <span className="link-name">{link.name}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BreadCrumbs;
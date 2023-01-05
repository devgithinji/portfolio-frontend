import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppContext} from "../../../context/appContext";

const ProjectsList = () => {
    const {getProjects, projects} = useAppContext();

    useEffect(() => {
        getProjects();
    }, [])


    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/projects/add-project" className="admin-btn admin-btn-accent">
                    Add Project
                </Link>
            </div>
            <div className="admin-list-items">
                {
                    projects.map((project, index) => {
                        return (
                            <div className="admin-project-item card" key={project.id}>
                                <h1 className="card-sub-title"><span>Title: </span>{project.title}</h1>
                                <p className="link"><span>Repo link: </span>{project.repoLink}</p>
                                <p className="link"><span>project link: </span>{project.siteLink}</p>
                                <div className="admin-project-item-action-btns">
                                    <Link href={`/admin/projects/${project.id}`} className="admin-btn admin-btn-accent">edit</Link>
                                    <button className="admin-btn admin-btn-accent">publish</button>
                                    <button className="admin-btn admin-btn-danger">delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="card table-list">
                <div className="admin-table">
                    <table>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Photo</th>
                            <th>Stack</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project, index) => {
                            const tags = project.tags.map(project => project.name);
                            return (
                                <tr key={project.id}>
                                    <td>{index + 1}</td>
                                    <td>{project.name}</td>
                                    <td>
                                        <img src={project.image} alt="" className="img"/>
                                    </td>
                                    <td>{tags.join(', ')}</td>
                                    <td>{project.description.substring(0, 30)}...</td>
                                    <td>
                                        <div className="table-action-btns">
                                            <Link href={`/admin/projects/${project.id}`} className="admin-btn admin-btn-accent">edit</Link>
                                            <button className="admin-btn admin-btn-accent">publish</button>
                                            <button className="admin-btn admin-btn-danger">delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ProjectsList;
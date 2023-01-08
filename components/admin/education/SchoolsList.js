import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppContext} from "../../../context/appContext";
import {confirmAlert} from "react-confirm-alert";

const SchoolsList = () => {
    const {schools, getSchools, deleteSchool} = useAppContext();

    useEffect(() => {
        getSchools();
    }, [])


    const deleteSch = (schoolId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete school',
            closeOnClickOutside: true,
            closeOnEscape: true,
            overlayClassName: "custom-overlay",
            buttons: [
                {
                    label: 'Delete',
                    onClick: () => deleteSchool(schoolId)
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/education/add-school" className="admin-btn admin-btn-accent">
                    Add School
                </Link>
            </div>
            <div className="admin-list-items">
                {
                    schools.map((school, index) => {
                        return (
                            <div className="admin-article-item card" key={school.id}>
                                <h1 className="card-sub-title">{school.institution}</h1>
                                <p>{school.level}</p>
                                <p>{school.qualification}</p>
                                <p>{school.award}</p>
                                <p>{school.durationRange}</p>

                                <div className="admin-article-item-action-btns">
                                    <Link href={`/admin/education/${school.id}`}
                                          className="admin-btn admin-btn-accent">edit</Link>
                                    <button className="admin-btn admin-btn-danger"
                                            onClick={() => deleteSch(school.id)}>delete
                                    </button>
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
                            <th>Institution</th>
                            <th>Level</th>
                            <th>Qualification</th>
                            <th>Award</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {schools.map((school, index) => {
                            return (
                                <tr key={school.id}>
                                    <td>{index + 1}</td>
                                    <td>{school.institution}</td>
                                    <td>{school.level}</td>
                                    <td>{school.qualification}</td>
                                    <td>{school.award}</td>
                                    <td>{school.durationRange}</td>
                                    <td>
                                        <div className="table-action-btns">
                                            <Link href={`/admin/education/${school.id}`}
                                                  className="admin-btn admin-btn-accent">edit</Link>
                                            <button className="admin-btn admin-btn-danger"
                                                    onClick={() => deleteSch(school.id)}>delete
                                            </button>
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

export default SchoolsList;
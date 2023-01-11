import React, {useEffect} from 'react';
import Link from "next/link";
import {useAppContext} from "../../../context/appContext";
import {confirmAlert} from "react-confirm-alert";

const WorkList = () => {
    const {jobs, getJobs, deleteJob} = useAppContext()

    useEffect(() => {
        getJobs();
    })

    const deleteInstitution = (jobId) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete job?',
            closeOnClickOutside: true,
            closeOnEscape: true,
            overlayClassName: "custom-overlay",
            buttons: [
                {
                    label: 'No'
                },
                {
                    label: 'Delete',
                    onClick: () => deleteJob(jobId)
                }
            ]
        });
    }

    return (
        <div className="admin-section">
            <div className="add-btn-container card">
                <Link href="/admin/work/add-job" className="admin-btn admin-btn-accent">
                    Add Job History
                </Link>
            </div>
            <div className="admin-list-items">
                {
                    jobs.map((job, index) => {
                        return (
                            <div className="admin-article-item card" key={job.id}>
                                <h1 className="card-sub-title accent">{job.institution}</h1>
                                <p>{job.title}</p>
                                <p>{job.description}</p>
                                <p>{job.durationRange}</p>
                                <h1 className="card-sub-title accent">Achievements</h1>
                                {job && job.achievementsList.map((achievement, index) => {
                                    return (
                                        <div key={index} className="flex-row">
                                            <span>{index + 1}</span>
                                            <p>{achievement}</p>
                                        </div>
                                    )
                                })}

                                <div className="admin-article-item-action-btns">
                                    <Link href={`/admin/work/${job.id}`}
                                          className="admin-btn admin-btn-accent">edit</Link>
                                    <button className="admin-btn admin-btn-danger"
                                            onClick={() => deleteInstitution(job.id)}>delete
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobs.map((job, index) => {
                            return (
                                <tr key={job.id}>
                                    <td>{index + 1}</td>
                                    <td>{job.institution}</td>
                                    <td>{job.title}</td>
                                    <td>{job.description.substring(0, 20)}...</td>
                                    <td>{job.durationRange}</td>
                                    <td>
                                        <div className="table-action-btns">
                                            <Link href={`/admin/work/${job.id}`}
                                                  className="admin-btn admin-btn-accent">edit</Link>
                                            <button className="admin-btn admin-btn-danger"
                                                    onClick={() => deleteInstitution(job.id)}>delete
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

export default WorkList;
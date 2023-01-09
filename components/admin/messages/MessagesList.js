import React, {useEffect} from 'react';
import {useAppContext} from "../../../context/appContext";

const MessagesList = () => {
    const {messages, getMessages} = useAppContext();


    useEffect(() => {
        getMessages()
    }, [])
    
    
    return (
        <div className="admin-section">

            <div className="admin-list-items">
                {messages && messages.map((message, index) => {
                        return (
                            <div className="admin-article-item card" key={message.id}>
                                <h1 className="card-sub-title">{message.name}</h1>
                                <p>{message.email}</p>
                                <p>{message.message}</p>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages && messages.map((message, index) => {
                            return (
                                <tr key={message.id}>
                                    <td>{index + 1}</td>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.message}</td>
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

export default MessagesList;
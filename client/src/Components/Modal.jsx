import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Modal(props) {
    const [user, setUser] = useState(props.user)

    useEffect(()=>{
        console.log(props.user)
        setUser(props.user)
    },[props.user])

    const handleInputChange = (fieldName, value) => {
        setUser({
            ...user,
            [fieldName]: value
        });
    };
    const saveChanges=()=>{
        console.log("USER",user)
        axios.put("http://localhost:3000/api/updateClient/"+user.id,user)
        .then(result=>{
            console.log(result)
            props.refrech()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button
                id="updateBtn"
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
            >
                Open modal for @mdo
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modifier Client
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label text-start"
                                    >
                                        Mail:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        value={user.clientMail}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "clientMail",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="recipient-name"
                                        className="col-form-label text-start"
                                    >
                                        Etat d'avancement:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                        value={user.etat}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "etat",
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="message-text"
                                        className="col-form-label"
                                    >
                                        Services demandés:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message-text"
                                        value={user.service}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "service",
                                                e.target.value
                                            )
                                        }
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Fermer
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={()=>{saveChanges()}}
                                data-bs-dismiss="modal"
                            >
                                Sauvegarder

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./getclient.css";

export default function GetClient() {
  const [clients, setClients] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getClient")
      .then((resultat) => {
        setClients(resultat.data);
        const paths = resultat.data.map(client => `./${client.clientName.substring(client.clientName.indexOf('Images'))}`);
        setImagePaths(paths);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row m-0 p-0" >

    <div className="container d-flex flex-wrap justify-content-between " >
      {clients.map((client, index) => {
        return (
            <div className="card col-lg-3 col-md-6 col-sm-12 mx-2 my-3" style={{ width: "18rem" }} key={index}>
              {imagePaths[index] && (
                <img src={require(`${imagePaths[index]}`)} className="image" position="top" alt="..." />
              )}
              <div className="card-body">
                <h5 className="card-title">{client.clientMail}</h5>
                <h6> Service: {client.service} </h6>
                <h6> Etat d'avancement: {client.etat} </h6>
                <div className="gestion">
                <button className="btn btn-outline-success">Modifier</button>
                <button className="btn btn-outline-danger">Supprimer</button>
                </div>
                </div>
            </div>
        );
      })}
    </div>
    </div>
  );
}

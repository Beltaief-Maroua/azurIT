import React, { useState} from "react";
import LOGO from "./Images/logo.png";
import axios from "axios";
import {useNavigate} from "react-router-dom"

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBRipple,
  MDBCardImage,
  MDBCardBody,
} from "mdb-react-ui-kit";

export default function AuthAdmin() {
  const [admin, setAdmin] = useState({});
  const navigate = useNavigate();
  const handleLogin = (key, value) => {
    setAdmin({
      ...admin,
      [key]: value,
    });
  };

  const connection = () => {
    axios.post("http://localhost:3000/api/postAdmin", admin).then((result) => {
      console.log(result.data);
      if (result.data === "Login OK") {
        navigate("/client") 
      } else {
        alert("Vérifiez le mail ou le mot de passe svp!")
      }
    });
  };

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard
            style={{
              borderRadius: "15px",
              boxShadow: "-8px 5px 15px -1px rgba(128,125,125,0.74)",
              WebkitBoxShadow: "-8px 5px 15px -1px rgba(128,125,125,0.74)",
              MozBoxShadow: "-8px 5px 15px -1px rgba(128,125,125,0.74)",
            }}
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={LOGO}
                alt="logo"
                fluid
                className="w-100"
                style={{
                  border: "67px solid #ffffff",
                  borderTop: "50px double #ffffff",
                }}
              />
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <MDBInput
                onChange={(e) => {
                  handleLogin("adminMail", e.target.value);
                }}
                wrapperClass="mb-4"
                placeholder="Adresse mail"
                id="mail"
                type="email"
                size="lg"
              />
            </MDBCardBody>

            <MDBCardBody className="pb-0">
              <MDBInput
                onChange={(e) => {
                  handleLogin("adminPassword", e.target.value);
                }}
                wrapperClass="mb-4"
                placeholder="Mot de passe"
                id="password"
                type="password"
                size="lg"
              />
            </MDBCardBody>

            <MDBCardBody className="pb-0">
              <div className="align-items-center pb-2 mb-4">
                <div className="button">
                  <MDBBtn color="primary" onClick={connection}>
                    Se connecter
                  </MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

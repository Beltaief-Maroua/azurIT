import React, {useState} from "react";
import axios from "axios";

export default function AddClient(props) {

  const [customer, setcustomer] = useState({})

  const HandleChange =(key , value)=>{
    setcustomer({
      ...customer,
      [key]: value
    })
  }

const AjoutClient=() => {
   axios.post("http://localhost:3000/api/postClient",customer)
   .then((result) => {
    props.refrech()
    console.log(result,'client ajouté avec succès');
  })
   .catch(error=>{
    console.log(error)
   })
}


  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal1"
        data-whatever="@fat"
      >
        Ajouter Client
      </button>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Nouveau client
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Entreprise:"
                    value={customer.clientName}
                    onChange={(e) =>
                      HandleChange(
                          "clientName",
                          e.target.value
                          )
                      }
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    
                  </label>
                  <input
                    className="form-control"
                    id="recipient-name"
                    placeholder="Adresse mail:"
                    value={customer.clientMail}
                    onChange={(e) =>
                      HandleChange(
                          "clientMail",
                          e.target.value
                          )
                      }
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Etat d'avancement:"
                    value={customer.etat}
                    onChange={(e) =>
                      HandleChange(
                          "etat",
                          e.target.value
                          )
                      }
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    
                  </label>
                  <textarea 
                  class="form-control" 
                  id="message-text" 
                  placeholder="Services demandés:"
                  value={customer.service}
                    onChange={(e) =>
                      HandleChange(
                          "service",
                          e.target.value
                          )
                      }
                  >
                  </textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={()=>{AjoutClient()}}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

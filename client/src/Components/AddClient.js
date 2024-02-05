import React from "react";

export default function AddClient() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@fat"
      >
        Ajouter Client
      </button>
      <div
        className="modal fade"
        id="exampleModal"
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
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    
                  </label>
                  <input
                    className="form-control"
                    id="recipient-name"
                    placeholder="Adresse mail:"
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
                  />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    
                  </label>
                  <textarea class="form-control" id="message-text" placeholder="Services demandés:"></textarea>
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
              <button type="button" className="btn btn-primary">
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

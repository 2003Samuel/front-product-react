import React from "react";

export const Information = () => {
  return (
    <div className="container mt-4">
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Descripción
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Descripción proyecto front-end
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Consumo de API REST (Productos), utilizando el framework de
                desarrollo React js y la libreria sweetalert2, en la cual se
                podrá listar, insertar, editar y eliminar (CRUD).
              </p>
              <p className="mb-0">Link back-end realizado en laravel 8:</p>
              <a href="https://apitienda.softwaremys.site/" target="_blank">
                https://apitienda.softwaremys.site/
              </a>
              <p className="mt-3 mb-0">Link repositorio git hub:</p>
              <a
                href="https://github.com/2003Samuel/front-productos-react"
                target="_blank"
              >
                https://github.com/2003Samuel/front-productos-react
              </a>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

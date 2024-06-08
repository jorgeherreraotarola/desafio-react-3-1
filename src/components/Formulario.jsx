import React from "react";

const Formulario = () => {
    return (
        <>
        <div className="col col-12 col-md-3 ms-1"> 
          <h5>Agregar Colaborador</h5>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorName"
                placeholder="Nombre del colaborador"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="collaboratorEmail"
                placeholder="tuemail@ejemplo.com"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorAge"
                placeholder="Edad del colaborador"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPosition"
                placeholder="Cargo del colaborador"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPhone"
                placeholder="Telefono del colaborador"
              />
            </div>
            <button type="submit" className="btn btn-primary form-control">
              Agregar colaborador
            </button>
          </form>
        </div>
        </>
    )
}

export default Formulario
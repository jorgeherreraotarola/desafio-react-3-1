import React from "react";

const Listado = ({collaboratorList}) => {
    return (
        <>
        <div className="col col-12 col-md-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Edad</th>
                <th scope="col">Cargo</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {collaboratorList.map(colaborador => 
                <>
                  <tr key={colaborador.id}>
                  <th scope="row">{colaborador.nombre}</th>
                  <td>{colaborador.correo}</td>
                  <td>{colaborador.edad}</td>
                  <td>{colaborador.cargo}</td>
                  <td>{colaborador.telefono}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        </>
    )
}

export default Listado
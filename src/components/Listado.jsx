import React from "react";

const Listado = () => {
    return (
        <>
        <div className="col col-12 col-md-9">
          <table class="table">
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
              <tr>
                <th scope="row">Juan Soto</th>
                <td>juans@colaborador.com</td>
                <td>23</td>
                <td>Desarrollador FrontEnd</td>
                <td>99887766</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    )
}

export default Listado
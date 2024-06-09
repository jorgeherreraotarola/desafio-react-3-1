import React from "react";
import { Table } from 'react-bootstrap';

const Listado = ({ colaboradores }) => {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map(colaborador => (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <div className="col col-12 col-md-9">
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
        </div> */}
        </>
    )
}

export default Listado
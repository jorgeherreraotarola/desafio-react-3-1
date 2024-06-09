import React from "react";
import { useState } from "react";

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    } else {
      alert('Todos los campos son obligatorios');
    }
  };

    return (
        <>
        <div className="col col-12 col-md-3 ms-1">
          <h5>Agregar Colaborador</h5>
          <form onSubmit={manejarSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorName"
                placeholder="Nombre del colaborador"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="collaboratorEmail"
                placeholder="tuemail@ejemplo.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="collaboratorAge"
                placeholder="Edad del colaborador"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPosition"
                placeholder="Cargo del colaborador"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPhone"
                placeholder="Telefono del colaborador"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
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
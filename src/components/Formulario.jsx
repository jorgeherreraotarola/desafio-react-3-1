import React, { useState } from "react";

import Alert from "./Alert";
// import {BaseColaboradores} from '../BaseColaboradores'

const Formulario = ({addColaborador}) => {
  const [collaboratorName , setCollaboratorName] = useState("")
  const [collaboratorEmail, setCollaboratorEmail] = useState("")
  const [collaboratorAge, setCollaboratorAge] = useState("")
  const [collaboratorPosition, setCollaboratorPosition] = useState("")
  const [collaboratorPhone, setCollaboratorPhone] = useState("")

  const [alertCollaboratorName, setAlertCollaboratorName] = useState("")

  // const [collaboratorList, setCollaboratorList] = useState(BaseColaboradores)
  const completeInput = false
  const getCollaboratorName =(e) => {
    if(e.target.value !== ''){
      setCollaboratorName(e.target.value)
    }else{
      setAlertCollaboratorName("No puedes crear un colaborador sin nombre");
    }
  }
  const getCollaboratorEmail = (e) => {
    setCollaboratorEmail(e.target.value)
  }
  const getCollaboratorAge = (e) => {
    setCollaboratorAge (e.target.value)
  }
  const getCollaboratorPosition = (e) => {
    setCollaboratorPosition(e.target.value)
  }
  const getCollaboratorPhone = (e) => {
    setCollaboratorPhone(e.target.value)
  }
  const addCollaborator = (e) => {
    e.preventDefault()
    addColaborador({
      id: "xx-xx",
      nombre: collaboratorName,
      correo: collaboratorEmail,
      edad: collaboratorAge,
      cargo: collaboratorPosition,
      telefono: collaboratorPhone
    })
  }
    return (
        <>
        <div className="col col-12 col-md-3 ms-1"> 
          <h5>Agregar Colaborador</h5>
          <form onSubmit={addCollaborator}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorName"
                placeholder="Nombre del colaborador"
                onChange={getCollaboratorName}
              />
              {alertCollaboratorName && <Alert message={alertCollaboratorName} type="danger" />}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="collaboratorEmail"
                placeholder="tuemail@ejemplo.com"
                onChange={getCollaboratorEmail}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorAge"
                placeholder="Edad del colaborador"
                onChange={getCollaboratorAge}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPosition"
                placeholder="Cargo del colaborador"
                onChange={getCollaboratorPosition}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPhone"
                placeholder="Telefono del colaborador"
                onChange={getCollaboratorPhone}
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
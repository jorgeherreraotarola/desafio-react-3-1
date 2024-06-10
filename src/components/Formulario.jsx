import React from "react";
import { useState } from "react";
import Alert from "./Alert";

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [alertCollaboratorName, setAlertCollaboratorName] = useState("")
  const [alertCollaboratorEmail, setAlertCollaboratorEmail] = useState("")
  const [alertCollaboratorAge, setAlertCollaboratorAge] = useState("")
  const [alertCollaboratorPosition, setAlertCollaboratorPosition] = useState("")
  const [alertCollaboratorPhone, setAlertCollaboratorPhone] = useState("")
  const [alertAddCollaborate, setAlertAddCollaborate] = useState("")

  const validateName = (e) => {
    if(e.target.value == ''){
      setAlertCollaboratorName("El nombre es obligatorio")
    }else{
      setAlertCollaboratorName("")
      setNombre(e.target.value)
    }
  }
  const validateEmail = (e)=>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value === "") {
      setAlertCollaboratorEmail("El email es obligatorio");
    } else if (!emailPattern.test(e.target.value)) {
      setAlertCollaboratorEmail("El formato del email no es correcto");
    } else {
      setAlertCollaboratorEmail("");
      setCorreo(e.target.value)
    }
  }
  const validateAge = (e)=>{
    if(e.target.value < 18) return setAlertCollaboratorAge("El colaborador no puede tener menos de 18 años")
    if(e.target.value > 80) return setAlertCollaboratorAge("El colaborador no puede tener mas de 80 años")
    setEdad(e.target.value)
    return setAlertCollaboratorAge("")
  }
  const validatePosition = (e) => {
    if(e.target.value == ''){
      setAlertCollaboratorPosition("El cargo es obligatorio")
    }else{
      setAlertCollaboratorPosition("")
      setCargo(e.target.value)
    }
  }
  const validatePhone = (e) =>{
    if(e.target.value == '') return setAlertCollaboratorPhone("El núero de teléfono es obligatorio")
    if(!Number(e.target.value)) return setAlertCollaboratorPhone("El numero de telefono no puede ser alfanumerico")
    if(e.target.value.length !== 9) return setAlertCollaboratorPhone("El numero de telefono debe comenzar con 9 y ser de largo maximo 9")
    setTelefono(e.target.value)
    setAlertCollaboratorPhone("")
  }
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      agregarColaborador({ nombre, correo, edad, cargo, telefono });
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
      document.getElementById('addCollaborator').reset()
      setAlertAddCollaborate("Registro realizado exitosamente")
    } else {
      setAlertAddCollaborate('Todos los campos son obligatorios')
    }
  }

    return (
        <>
        <div className="col col-12 col-md-3 ms-1">
          <h5>Agregar Colaborador</h5>
          <form id="addCollaborator" autoComplete="off" onSubmit={manejarSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorName"
                placeholder="Nombre del colaborador"
                onChange={validateName}
              />
              {alertCollaboratorName && <Alert message={alertCollaboratorName} type="danger" />}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="collaboratorEmail"
                placeholder="tuemail@ejemplo.com"
                onChange={validateEmail}
              />
              {setAlertCollaboratorEmail && <Alert message={alertCollaboratorEmail} type="danger" />}
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="collaboratorAge"
                placeholder="Edad del colaborador"
                onChange={validateAge}
              />
              {setAlertCollaboratorAge && <Alert message={alertCollaboratorAge} type="danger" />}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPosition"
                placeholder="Cargo del colaborador"
                onChange={validatePosition}
              />
              {setAlertCollaboratorPosition && <Alert message={alertCollaboratorPosition} type="danger" />}
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="collaboratorPhone"
                placeholder="Telefono del colaborador"
                onChange={validatePhone}
              />
              {setAlertCollaboratorPhone && <Alert message={alertCollaboratorPhone} type="danger" />}
            </div>
            <button type="submit" className="btn btn-primary form-control" >
              Agregar colaborador
            </button>
            {setAlertAddCollaborate && <Alert message={alertAddCollaborate} type={alertAddCollaborate=="Registro realizado exitosamente" ? "success":"danger"}/>}
          </form>
        </div>
        </>
    )
}

export default Formulario
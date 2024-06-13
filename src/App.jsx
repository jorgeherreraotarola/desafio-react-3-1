import React, { useState } from 'react';
import './App.css';

import Buscador from './components/Buscador';
import Alert from './components/Alert';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

import { BaseColaboradores } from './BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [colaboratorList, setColaboratorList] = useState(BaseColaboradores)
  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboratorList, { ...nuevoColaborador, id: colaboradores.length + 1 }]);
    setColaboratorList([...colaboratorList, { ...nuevoColaborador, id: colaboradores.length + 1 }]);
  };
  const [count, setCount] = useState(0)

  const filterList = (filterParam) => {
    if(filterParam == ''){
      setColaboradores([...colaboratorList])
    }
    console.log(filterParam);
    // arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    const filterCollaborator = colaboratorList.filter(colaborador => colaborador.nombre.toLowerCase().includes(filterParam.toLowerCase()))
    console.log(filterCollaborator)
    setColaboradores([...filterCollaborator])
    // setCollaboratorList([...collaboratorList, e])
  }
  return (
      <section className='container mt-1'>
        <h1>Lista de colaboradores</h1>
        <Buscador filterParameter = {filterList}/>
        <div className='d-flex flex-column flex-md-row'>
          <Listado colaboradores={colaboradores}/>
          <Formulario agregarColaborador={agregarColaborador} />
        </div>
      </section>
  )
}

export default App

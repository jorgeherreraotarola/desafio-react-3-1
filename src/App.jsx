import { useState } from 'react'
import './App.css'

import Buscador from './components/Buscador'
import Alert from './components/Alert'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import {BaseColaboradores} from './BaseColaboradores'

function App() {
  const [count, setCount] = useState(0)
  const [collaboratorList, setCollaboratorList] = useState(BaseColaboradores)

  const addCollaborator = (e) => {
    console.log(e)
    setCollaboratorList([...collaboratorList, e])
  }
  return (
      <section className='container mt-1'>
        <h1>Lista de colaboradores</h1>
        <Buscador />
        <div className='d-flex flex-column flex-md-row'>
          <Listado key="collaborationList" collaboratorList={collaboratorList} />
          <Formulario addColaborador={addCollaborator}/>
        </div>
      </section>
  )
}

export default App

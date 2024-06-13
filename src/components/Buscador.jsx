import React from "react";

const Buscador = ({filterParameter}) => {
  const searchCollaborate = (e) => {
    filterParameter(e.target.value)
  }
    return (
      <>
        <div className="col col-12">
          <div className="col col-12 col-md-3">
            <input type="text" className="form-control" placeholder="Buscar un Colaborador" onChange={searchCollaborate}/>
          </div>
        </div>
      </>
    )
}

export default Buscador
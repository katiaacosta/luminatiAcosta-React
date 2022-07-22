// import React from 'react'
// import { Titulo } from '../App'

import Titulo from "./Titulo"

const ContenedorComponents = ({titulo, descripcion, saludo}) => {
  return (
    <div style={{background:"red"}}>
        {/* <h1>{titulo}</h1> */}
        <Titulo titulo = {titulo}/>
        <p>{descripcion}</p>

        <button onClick={saludo}>Saludar</button>

    </div>
  )
} 

export default ContenedorComponents
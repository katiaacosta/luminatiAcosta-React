// import React from 'react'

import { useState, useEffect } from "react"

const Card = ({producto,color}) => {
    const [numero, setNumero] = useState(0);

    function minimo(){
        setNumero(numero - 1)
    }

    function maximo(){
        setNumero(numero +  1)
    }

    useEffect(() => {
        if (numero === 9) {
            console.log("ultima unidad disponible");
        }
      },[numero])
      
    return (
        <>
            <div>
                <p style={{background:color}}>{producto}</p>
                <button disabled={numero===0} onClick={minimo}>Quitar</button>
                <p>Cantidad: {numero}</p>
                <button disabled={numero===10} onClick={maximo}>Agregar</button>
            </div>

            {/* <Carrito cantidad={numero}/> */}
        </>
    )
}

export default Card
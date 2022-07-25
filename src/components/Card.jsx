// import React from 'react'

import { useState, useEffect } from "react"

const Card = ({producto,color}) => {
    const [numero, setNumero] = useState(0);

    function minimo(){
        setNumero(numero - 1)
    }

    function maximo(){
        setNumero(numero +  1)
        console.log(`${producto} + agregado exitosamente`);
    }

    useEffect(() => {
        if (numero === 9) {
            console.log("Ultima unidad disponible");
        }
    },[numero])
      
    return (
        <>
            <div>
                <p style={{background:color}}>{producto}</p>
                <div className="cantidad">
                    <button className="spaceBetween" disabled={numero===0} onClick={minimo}>Quitar</button>                
                    <p className="spaceBetween">{numero}</p>
                    <button className="spaceBetween" disabled={numero===10} onClick={maximo}>Agregar</button>
                </div>
            </div>

        </>
    )
}

export default Card
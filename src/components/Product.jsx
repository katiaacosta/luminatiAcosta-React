// import React from 'react'
import { useState, useEffect } from "react"


const Product = ({nombre,precio,img}) => {
    const [numero, setNumero] = useState(0);

    function minimo(){
        setNumero(numero - 1)
    }

    function maximo(){
        setNumero(numero +  1)
        console.log(`agregando ${nombre} al carrito...`);

        setTimeout(() => {
            console.log(`${nombre} agregado exitosamente!`);
            
        }, 1000);
    }

    useEffect(() => {
        if (numero === 9) {
            console.log("Ultima unidad disponible");
        }
    },[numero])


    return (
    <>
        <div>{img}</div>
        <div className='tituloProd'>{nombre} </div>
        <div className="itemDetails">
            <div className="precioProd">{precio}</div>
            <div className='cantidad'>
                <button className='cardButton' disabled={numero===0} onClick={minimo}>Quitar</button>                
                <div className="spaceBetween">{numero}</div>
                <button className='cardButton' disabled={numero===10} onClick={maximo}>Agregar</button>
            </div>
        </div>

    </>
    )
}

export default Product


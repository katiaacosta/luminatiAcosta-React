import Carrito from "./Carrito"
import Card from "./Card"

// import React from 'react'
const Menu = () => {   
    return (
    <>
        <div>            
            <button className="spaceBetween">Inicio</button>
            <button className="spaceBetween">Quienes Somos</button>
            <button className="spaceBetween">Tienda</button>
            <button className="spaceBetween">Contactanos</button>
            <button className="spaceBetween">Encontranos</button>
        </div>
        <div>
            {/* Le paso CARD, porque asumo que en algun momento encontraremos una forma de pasarle numero para actualizar el carrito, imagino que sera de alguna manera parecia a lo que tengo hasta ahora */}
            <Carrito componente = {<Card/>}/>
        </div>
    </>
  )
}

export default Menu
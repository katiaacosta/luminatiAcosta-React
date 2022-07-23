// import React from 'react'
// import { useEffect } from 'react'
import '../components/styles.css'
import { BsCart3 } from "react-icons/bs";

const Carrito = ({cantidad}) => {

  return (
    <>
    <div>{cantidad} <BsCart3 className='boxCarrito'/></div>

    </>
  )
}

export default Carrito
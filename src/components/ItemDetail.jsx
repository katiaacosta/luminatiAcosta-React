import React from 'react'
// import Product from './Product'
import Count from './Count'

const ItemDetail = (producto) => {


  return (
    <>
    <div>{producto.img}</div>
        <div className='tituloProd'>{producto.nombre} </div>
        <div className="itemDetails">
            <div className="precioProd">{producto.precio}</div>
            <div className='cantidad'>
                <Count nombre={producto.nombre}/>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
import React from 'react'
// import Product from './Product'
import Count from './Count'

const ItemDetail = ({producto}) => {

//   const prod = producto[producto.id]   


  return (
    <>
    <div className='prodDetalle'>
        <div>{producto.img}</div>
        <div className="itemDetailsDetalle">
            <div className='detalle'>            
                <div className="precioProdDetalle">Nombre Prod: {producto.nombre} </div>
                <div className="precioProdDetalle">Categoria: {producto.categoria} </div>
                <div className="precioProdDetalle">Precio: {producto.precio}</div>
                <div className='cantidadDetalle'>
                    <Count nombre={producto.nombre}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail
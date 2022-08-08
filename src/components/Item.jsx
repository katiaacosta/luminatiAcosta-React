import React from 'react'
import Count from './Count'

const Item = ({img,nombre,categoria,precio,descripcion}) => {
  return (
    <>
    <div className='prodDetalle'>
        <div>{img}</div>
        <div className="itemDetailsDetalle">
            <div className='detalle'>            
                <div className="precioProdDetalle">Nombre Prod: {nombre} </div>
                <div className="precioProdDetalle">Categoria: {categoria} </div>
                <div className="precioProdDetalle">Precio: {precio}</div>
                <div className="precioProdDetalle">Descripcion: {descripcion}</div>
                <div className='cantidadDetalle'>
                    <Count nombre={nombre}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Item
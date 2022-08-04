import React from 'react'
import Count from './Count'

const ItemDetail = ({producto}) => {

    return (
        <>
            <div className='prodDetalle'>
                <div>{producto.img}</div>
                <div className="itemDetailsDetalle">
                    <div className='detalle'>            
                        <div className="precioProdDetalle">Nombre Prod: {producto.nombre} </div>
                        <div className="precioProdDetalle">Categoria: {producto.categoria} </div>
                        <div className="precioProdDetalle">Precio: {producto.precio}</div>
                        <div className="precioProdDetalle">Descripcion: {producto.descripcion}</div>
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
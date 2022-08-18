import React from 'react'
import { useContextt } from './Context'

const ItemCart = ({producto}) => {
    const {removeItem} = useContextt();

  return (
    <div className='prodDetalle'>
        <div>{producto.img}</div>
        <div className="itemDetailsDetalle">
            <div className='detalle'>            
                <div className="precioProdDetalle">Nombre Prod: {producto.nombre} </div>
                <div className="precioProdDetalle">Categoria: {producto.categoria} </div>
                <div className="precioProdDetalle">Precio: ${producto.precio}</div>
                <div className="precioProdDetalle">Descripcion: {producto.descripcion}</div>    
                <div className="precioProdDetalle">Cantidad: {producto.quantity}</div>    
                <button onClick={() => removeItem(producto.id)} className='cardButton'>Eliminar producto</button>      
            </div>
        </div>
    </div>
  )
}

export default ItemCart
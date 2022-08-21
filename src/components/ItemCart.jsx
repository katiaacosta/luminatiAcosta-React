import React from 'react'
import { useContextt } from './Context'
import { BsTrash } from 'react-icons/bs';

const ItemCart = ({producto}) => {
    const {removeItem} = useContextt();

  return (
    <>    
    <div className='prodDetalle'>
        <div className='imagesDetalle'>
          <img src={producto.img} alt={producto.nombre} width='100%'/>
        </div>
    </div>
    <div className="itemDetailsDetalle">
        <div className='detalle'>            
            <div className="precioProdDetalle">Nombre Prod: {producto.nombre} </div>
            <div className="precioProdDetalle">Categoria: {producto.categoria} </div>
            <div className="precioProdDetalle">Descripcion: {producto.descripcion}</div>    
            <div className="precioProdDetalle">Precio: ${producto.precio}</div>
            <div className="precioProdDetalle">Cantidad: {producto.quantity}</div> 
            <div className="precioProdDetalle">Total por Producto: ${producto.quantity * producto.precio}</div> 
            <button onClick={() => removeItem(producto.id)} className='cardButton'><BsTrash /></button>      
        </div>
    </div>
    </>
  )
}

export default ItemCart
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Count from './Count'
import { useContextt } from './Context';

const ItemDetail = ({producto, contador}) => {
    const [item, setItem] = useState(false)

    const {addItem} = useContextt()

    const onAdd = (contador) => {
        console.log( `Se agregaron ${contador} productos al carrito`);
        setItem(true)
        addItem(producto,contador)
    }

    return(
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
                            {item 
                                ? <Link to='/Cart'><button className='cardButton'>Terminar compra</button></Link>
                                : <Count nombre={producto.nombre} onAdd={onAdd}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default ItemDetail
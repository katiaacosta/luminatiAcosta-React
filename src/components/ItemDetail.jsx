import React from 'react'
import Count from './Count'
import Item from './Item'


const ItemDetail = ({producto}) => {

    return (
        <>
            <Item key={producto.id} img={producto.img} nombre={producto.nombre} categoria={producto.categoria} precio={producto.precio} descripcion={producto.descripcion} />
        </>
    )
}

export default ItemDetail
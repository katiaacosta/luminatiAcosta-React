import React from 'react'
import { useContextt } from './Context'
import ItemCart from './ItemCart'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {listProd, totalPrice} = useContextt();

  if (listProd.length === 0) {
    return (
      <div>
        <p>Todavia no agregaste productos al carrito</p>
        <div>
          <Link to='/'><button>Volver a la tienda</button></Link>
        </div>
        
      </div>
    )    
  }
  
  return (
    <>
      {
        listProd.map(producto => <ItemCart key={producto.id} producto={producto}/>)
      }
      <p>Total: ${totalPrice()}</p>
    </>
  )
}

export default Cart
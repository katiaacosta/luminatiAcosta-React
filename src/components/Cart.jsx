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
          <Link to='/'><button className='cardButton'>Volver a la tienda</button></Link>
        </div>
        
      </div>
    )    
  }
  
  return (
    <>
      <div className='container'>
        <div className='row'>    
          {
            listProd.map(producto => <ItemCart key={producto.id} producto={producto}/>)
          }
        </div>
      </div>
      <p>Total: ${totalPrice()}</p>
      <Link to='/checkout'><button className='cardButton'>Finalizar compra</button></Link>
    </>
  )
}

export default Cart
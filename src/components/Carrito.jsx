
import '../components/styles.css'
import { BsCart3 } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useContextt } from './Context'

  function Carrito(){

    const { countItems } = useContextt()
    return (
      <>      
      <Link to="/Cart">
        < BsCart3 className='boxCarrito'/>
      </Link>
      <span className='p-1'>{countItems() || ''}</span>    

    </>
  )
}

export default Carrito
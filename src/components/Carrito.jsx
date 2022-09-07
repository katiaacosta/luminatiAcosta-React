
import '../components/styles.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useContextt } from './Context'

  function Carrito(){
    const { countItems } = useContextt()
    return (
      <>      
      <Link to="/Cart">
        <FaShoppingCart />
        <span className='p-1'>{countItems() || ''}</span> 
      </Link>

    </>
  )
}

export default Carrito
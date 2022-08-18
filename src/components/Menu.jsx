import { Link } from "react-router-dom"
import Carrito from "./Carrito"

const Menu = () => {   
    return (
    <>
        <div className="spaceBetween">            
            <Link to={'/'} className="menu">Tienda</Link>
            <br/>
            <Link to={'/category/escritorios'} className="menu">Escritorios</Link>
            <br/>
            <Link to={'/category/estantes'} className="menu">Estantes</Link>
            <br/>
            <Link to={'/category/deco'} className="menu">Deco y Hogar</Link>
            <br/>

        </div>
        <div>
            <Link to={'/Cart'}><Carrito/></Link>
        </div>
    </>
  )
}

export default Menu
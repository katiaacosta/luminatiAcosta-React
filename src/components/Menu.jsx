import { Link } from "react-router-dom"
import Carrito from "./Carrito"
import Product from "./Product"

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
            {/* Le paso Product, porque asumo que en algun momento encontraremos una forma de pasarle numero para actualizar el carrito, imagino que sera de alguna manera parecia a lo que tengo hasta ahora */}
            <Carrito componente = {<Product/>}/>
        </div>
    </>
  )
}

export default Menu
// import reactLogo from './assets/react.svg'
// import './App.css'
import Card from './components/Card';
import Carrito from './components/Carrito';
import Header from './components/header';
import Menu from './components/Menu';
import './components/styles.css'


function App() {

  // let cantidad = 0
  //   cantidad.onClick = () => {
  //       cantidad++
  //       console.log(cantidad);
  //   }

  return (

    <>
     <div className='header'>
      {/* titulo, marca */}
        <Header/>
      </div>
      
      <div className='menu'>
        {/* menu + carrito de compras */}
        <Menu/>       
        <Carrito/>   
      </div>
      
      {/* list container */}
      <div className='menu'>
        {/* card del producto */}
        <div className='tamCard'>
          {/* suma y resta cantidad de productos */}
          <Card producto= "Producto1" color="red"/>
        </div>

        <div className="tamCard">
          <Card producto= "Producto2" color="blue"/>
        </div> 

        <div className="tamCard">
          <Card producto= "Producto3" color="green"/>
        </div> 

        <div className="tamCard">
          <Card producto= "Producto4" color="purple" numero=""/>
        </div> 
      </div>
        
    </>
  )
    

    
}

export default App;
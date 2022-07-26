// import reactLogo from './assets/react.svg'
// import './App.css'
import Header from './components/header';
import Menu from './components/Menu';
import Productos from './components/Productos';
import './components/styles.css'


function App() {

  return (

    <>
     <div className='header'>
      {/* titulo, marca */}
        <Header/>
      </div>
      
      <div className='menu'>
        {/* menu + carrito de compras */}
        <Menu/>       
      </div>
      
      {/* list container */}
      <Productos/>
      
        
    </>
  )
    

    
}

export default App;
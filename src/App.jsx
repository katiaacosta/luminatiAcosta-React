// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import ItemDetailContainer from './components/ItemDetailContainer';
import Menu from './components/Menu';
import ProductListContainer from './components/ProductListContainer';
import './components/styles.css'


function App() {

  return (

    <>
    <BrowserRouter>
     <div className='header'>
      {/* titulo, marca */}
        <Header/>
      </div>
      
      <div className='menu'>
        {/* menu + carrito de compras */}
        <Menu/>       
      </div>
      <Routes>
        {/* list container */}
        <Route path='/' element={<ProductListContainer/>}/>
        <Route path='/category/:categoria' element={<ProductListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1> Error 404 </h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )     
}

export default App;
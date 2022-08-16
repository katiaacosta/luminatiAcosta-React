// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/header';
import ItemDetailContainer from './components/ItemDetailContainer';
import Menu from './components/Menu';
import ProductListContainer from './components/ProductListContainer';
import './components/styles.css'
import ContextProvider from './components/Context';


function App() {

  return (
    <>
      <ContextProvider>
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
            {/* busqueda por categoria */}
            <Route path='/category/:categoria' element={<ProductListContainer/>}/>
            {/* detalle del producto */}
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            {/* carrito de compras */}
            <Route path='/Cart' element={<Cart/>}/>
            {/* error por url incorrecta */}
            <Route path='*' element={<h1> Error 404 </h1>}/>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )     
}

export default App;
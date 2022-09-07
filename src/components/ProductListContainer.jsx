import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';
import ProductList from './ProductList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ProductListContainer = () => {

  const [productos,setProductos] = useState([]);
  const[loading, setLoading] = useState(false);
  const {categoria} = useParams();
  useEffect(() => {
    setTimeout(() => {
        setLoading(true);  
    }, 1000);
}, [])

  useEffect( () => {
    let listProd = []
    const db = getFirestore();
    const refListProd = collection(db, 'productos');
    if (categoria){
      const dbFilter = query(refListProd, where('categoria', '==', categoria))
      getDocs(dbFilter)
      .then(resolved => 
        setProductos(resolved.docs.map(prod => ({
          id:prod.id, ...prod.data()
        }))))
    }else{
      getDocs(refListProd)
      .then(resolved => 
        setProductos(resolved.docs.map(prod => ({
        id:prod.id, ...prod.data()
      }))))
    }    
  },[categoria])
  

  if (!loading) {
    return (<div className='pos-center'>
              <Loader/>
            </div>)    
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <ProductList productos={productos} />
        </div>
      </div>
    </>
  )
}

export default ProductListContainer
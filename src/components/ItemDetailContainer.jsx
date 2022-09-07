import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    let prod;
    const db = getFirestore();
    const refAProd = doc(db, 'productos', id);
    getDoc(refAProd)
    .then((resolved) => {
      prod = {
        id: resolved.id,
        ...resolved.data()
      }
      setProducto(prod)
    })
  },[id])

  return (
    <>
      <div className='container'>
        <div className='row'>
            <ItemDetail producto={producto}/>
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer
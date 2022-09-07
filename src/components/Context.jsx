import React, { useState, useContext, useEffect } from 'react'

const Context = React.createContext([])
export const useContextt = () => useContext(Context) 

const ContextProvider = ({children}) => {
  let getProdFromLS = JSON.parse(window.localStorage.getItem('compra'))
  if (getProdFromLS === null) {
    getProdFromLS = [];
  }

  const[listProd, setListProd] = useState(getProdFromLS)

  const addItem = (addProd, newQuantity) => {
      const newItem = listProd.filter(producto => producto.id !== addProd.id)
      newItem.push({...addProd, quantity: newQuantity});    
      setListProd(newItem)

  }

  const clear = () => setListProd([]);

  const isInList = (id) => listProd.find(producto => producto.id === id) ? true : false;

  const removeItem = (id) => setListProd(listProd.filter(producto => producto.id !== id));

  const countItems = () => listProd.reduce((acumulador, producto) => acumulador + producto.quantity, 0)

  const totalPrice = () => { return listProd.reduce((prev, act) => prev + act.quantity * act.precio, 0)}

  useEffect(() => {
    window.localStorage.setItem("compra", JSON.stringify(listProd));
  }, [listProd]);

  return (
    <Context.Provider value={{addItem, clear, isInList, countItems, removeItem, totalPrice, listProd }}>
        {
            children
        }
    </Context.Provider>
  )
}

export default ContextProvider
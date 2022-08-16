import React, { useState, useContext } from 'react'

const Context = React.createContext([])
export const useContextt = () => useContext(Context) 

const ContextProvider = ({children}) => {

    const[listProd,setlistProd] = useState([])

    const addItem = (addProd, newQuantity) => {
        const newItem = listProd.filter(producto => producto.id !== addProd.id)
        newItem.push({...addProd, quantity: newQuantity});    
        setlistProd(newItem)

    }

    const clear = () => setlistProd([]);

    const isInList = (id) => listProd.find(producto => producto.id === id) ? true : false;

    const removeItem = (id) => setlistProd(listProd.filter(producto => producto.id !== id));

    const countItems = () => {
        listProd.reduce((acumulador, producto) => acumulador + producto.quantity, 0)
    }

    const totalPrice = () => { return listProd.reduce((prev, act) => prev + act.quantity * act.precio, 0)}

  return (
    <Context.Provider value={{addItem, clear, isInList, countItems, removeItem, totalPrice, listProd }}>
        {
            children
        }
    </Context.Provider>
  )
}

export default ContextProvider
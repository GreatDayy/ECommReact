//1: USE STATE AND CREATE CONTEXT

import {useState, createContext} from 'react'
import Products_Data from '../Shop_Data.json';

export const ProductsContext = createContext({
    products:[]
})

//2: Product provider
export const ProductsProvider = ({children}) => {
      
    const [products, setProducts] = useState(Products_Data);
    const value = {products};
    
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
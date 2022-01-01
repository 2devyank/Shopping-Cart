// import React from 'react'
import React, {  createContext, useContext, useReducer } from 'react'
import faker from 'faker'
import { cartReducer } from './Reducer';
const Cart=createContext();
// faker.seed(99)
const Co = ({children}) => {
    const products=[...Array(20)].map(()=>({
id:faker.datatype.uuid(),
name:faker.commerce.productName(),
price:faker.commerce.price(),
image:faker.random.image(),
instock:faker.random.arrayElement([0,3,5,6,7]),
rating:faker.random.arrayElement([1,2,3,4,5]),
fastDelivery:faker.datatype.boolean(),
    }))
   const [state, dispatch] = useReducer(cartReducer, {
       products:products,
       cart:[]
   })
    return    <Cart.Provider value={{state,dispatch}}>{children} </Cart.Provider>
        
    
}

export default Co

export const CartState=()=>{
    return useContext(Cart)
}
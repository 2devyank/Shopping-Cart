// import React from 'react'
import { CartState } from '../context/Co'
import Filter from './Filter';
import SingleProduct from './SingleProduct';
import './style.css'; 
const Home = () => {
    const {state:{products },}=CartState();
    console.log(products);
    return <div className="home">
        <Filter/>
        <div className="productcontainer">
{products.map((prod)=>{
   return <SingleProduct key={prod.id} prod={prod}/>
})}
        </div>
           </div>
}

export default Home

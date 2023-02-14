import { useState, useEffect } from "react";
import Product from "./Product.jsx"
import Loader from "./Loader.jsx";

export default function Products(props) {
    const [products,setProducts]= useState();
    const [isLoading,setIsLoading]= useState(true);

    const {onProductAdd, onProductDelete, cart}= props;
    
    useEffect(()=>{
        fetch("https://react-tutorial-demo.firebaseio.com/supermarket.json")
        .then(res=> res.json())
        .then(data=>{
            if(data){
                setProducts(data);
            }
        })
        .finally(()=> setIsLoading(false))
        
    },[])

    return (
        <div className="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="products-grid">
                {isLoading && <Loader />}
                {products && products.map(product=> <Product key={product.id} details={product} cart={cart} onProductDelete={onProductDelete} onProductAdd={onProductAdd} />)}
            </div>
        </div>
    
    )
}
  
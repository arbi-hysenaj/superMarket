import { useState, useEffect } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function ProductDetails(){
    const [product,setProduct]= useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        fetch(`https://react-tutorial-demo.firebaseio.com/productinfo/id${id}.json`)
        .then(res=>res.json())
        .then(data=>{
            if(data) setProduct(data)
        })
        .catch(error=>console.log(error))
    },[])


    return (
        <>
        <div className="product-details-layout">
            <div>
                <h2>{product.name}</h2>
                <img width="125" height="125" className="product-details-image" src={product.image} alt={product.name}/>
            </div>
            <div>
                <div className="tabs">
                <ul>
                    <li>
                    <NavLink to="" className={({isActive})=> isActive ? "tab-active" : ""} end>Details</NavLink>
                    </li>
                    <li>
                    <NavLink to="nutrition" className={({isActive})=> isActive ? "tab-active" : ""}>Nutrition</NavLink>
                    </li>
                    <li>
                    <NavLink to="storage" className={({isActive})=> isActive ? "tab-active" : ""}>Storage</NavLink>
                    </li>
                </ul>
                </div>
                <Outlet context={product}/>
            </div>
        </div>
        </>
    )
}

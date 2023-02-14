import React,{useState,useEffect} from "react"
import {createRoot} from "react-dom/client";
import './index.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import ProductDetailInfo from "./Components/ProductDetailInfo.jsx";
import ProductDetailNutrition from "./Components/ProductDetailNutrition.jsx";
import ProductDetailStorage from "./Components/ProductDetailStorage.jsx";

export default function App() {
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductAdd(newProduct){
      const existingProduct = cart.find(product=> product.id=== newProduct.id)
      if(existingProduct){
        const updatedCart = cart.map(product => {
          if(product.id === newProduct.id){
            return {...product, quantity: product.quantity + 1}
          }else{
            return product;
          }
        })          
        setCart(updatedCart);

      }else{
        setCart([...cart,{...newProduct, quantity : 1}])
      }
    }

    function handleProductDelete(id){
      const updatedCart = cart.filter(product=> product.id !== id)
      setCart(updatedCart)
    }
    

      return (
        <>
         <BrowserRouter>
          <Navbar cart={cart} />
          <div className="container">
       
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />}></Route>
            <Route path="/products/:id" element={<ProductDetails onProductAdd={handleProductAdd} />}>
              <Route path="" element={<ProductDetailInfo onProductAdd={handleProductAdd}/>}></Route>
              <Route path="nutrition" element={<ProductDetailNutrition />}></Route>
              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route path="/cart" element={<Cart cart={cart} />}></Route>
          </Routes>
          </div>
          </BrowserRouter>
          
        </>);
}

const root = document.querySelector("#react-root");
createRoot(root).render(<React.StrictMode><App /></React.StrictMode>)
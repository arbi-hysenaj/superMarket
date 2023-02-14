import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const {cart}= props;

  const totalQuantityInCart = cart.reduce((total,current)=>{
    return total + current.quantity
  }, 0)
    return (
      <nav className="navbar">
        <NavLink to="/" className="nav-brand">SuperM</NavLink>
        <ul>
          <li className="nav-item">
            <NavLink to="/" className={({isActive})=> isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({isActive})=> isActive ? "active" : ""}>About us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className={({isActive})=> isActive ? "active" : ""}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">Cart ({totalQuantityInCart})</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  
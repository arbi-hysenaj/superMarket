
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Product(props){
    const {name,description,price,image,id} = props.details;
    const {cart}= props;

       const existingItem = cart.find(product=> product.id===id);
      
       const quantity = existingItem ? existingItem.quantity : "0"
    

    return(
        <div className="product">
            <div className="product-image-container">
                <Link to={`${id}`}>
                    <img width="100" height="100" className="product-image" src={image} alt={name} />
                </Link>
                <div className="product-quantity-container">
                    {existingItem && <div className="product-quantity">{quantity}</div>}
                </div>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="product-checkout">
                <div>
                    <Button outline className="product-delete" onClick={()=>props.onProductDelete(id)}>x</Button>
                </div>
                <Button outline onClick={()=> props.onProductAdd(props.details)}>${price}</Button>
            </div>
        </div>
    )
}

import { useState } from "react";

export default function Cart(props) {

    const totalPrice = props.cart.reduce((total,current)=>{
        return total + (current.quantity * current.price);
    }, 0)

    return (
    <>
        <div className="cart-layout">
            <div>
                <h1>Your Cart</h1>
                {props.cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
                {props.cart.length > 0 && 
                
                <table className="table table-cart">
                    <thead>
                        <tr>
                        <th width="25%" className="th-product">Product</th>
                        <th width="20%">Unit price</th>
                        <th width="10%">Quanity</th>
                        <th width="25%">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cart.map(product => {
                        return(
                        <tr>
                        <td>
                            <img width="30" height="30" alt="" src={product.image} />
                            {product.name}
                        </td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                            <strong>${product.price * product.quantity}</strong>
                        </td>
                        </tr>)})}
                    </tbody>
                    <tfoot>
                        <tr>
                        <th colSpan="2"></th>
                        <th className="cart-highlight">Total</th>
                        <th className="cart-highlight">${totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>}
            </div>
        </div>
    </>)
}
  
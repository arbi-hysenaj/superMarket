import { useOutletContext } from "react-router-dom"
import Button from "./Button";

export default function ProductDetailInfo(props){
    const context= useOutletContext()

    return (
        <>
        <p>
            {context.description} sold at <strong>${context.price}</strong> per piece.
        </p>
        <Button onClick={()=> props.onProductAdd(context)}>${context.price}</Button>
        </>
    )
}
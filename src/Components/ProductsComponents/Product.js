import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Product = ({product}) => {
   
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch()

   return (<div>
      <img src={`${product.img}.jpg`} alt="foto"/>
      <h2>{product.name}</h2>
      <p> {product.price} рублей </p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
      <button onClick={() => {dispatch(addItemToCart({product, quantity}));
   }} >добавить в корзину</button>
   </div>)

    }
export  default Product; 
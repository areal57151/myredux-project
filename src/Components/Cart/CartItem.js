import dataProducts from "../../data/dataProducts";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) =>{

  const products = dataProducts.find(item => item.id === cartItem.productId);
  
  const dispatch = useDispatch();
      console.log(products)

    return(<div>
      <p>{products.name}</p>
      <p>{cartItem.quantity} штук </p>
      <p> Всего:  {products.price * cartItem.quantity} рублей </p>
      <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}> 
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="j"/> 
      </span> 
          

    </div>)
}
export default CartItem;
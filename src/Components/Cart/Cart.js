import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <img className="cartIcon" src="https://lucid-noyce-47a31d.netlify.app/static/media/cart.1589f603f1a0765175ef.png" alt="cart"/>
        <h3>ОБЩАЯ СУММА ПОКУПОК: {totalPrice} рублей</h3> 
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
    </div>)
}
export default Cart; 
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {showCart} from '../redux/actions/cartActions';

const CartTotal = () => {
	const cart = useSelector((state) => state.cart);
  	const { cartItems } = cart;
	const cartTotal = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
	const shipping = parseFloat(cartTotal) > 100 ? 0 : 10;
	const tax = (parseFloat(cartTotal) * 0.15).toFixed(2);
	const total = (parseFloat(cartTotal) + shipping + parseFloat(tax)).toFixed(2);

	const dispatch = useDispatch();
	const closeCart = () => {
		dispatch(showCart(false))
	}
	return(
			<>
				<footer>
					<div className="cart-summary">
						<p>Subtotal: ₹{cartTotal}</p>
						<p>Shipping: ₹{shipping}</p>
						<p>Tax: ₹{tax}</p>
						<h3 className="cart-total text-slanted">Total: ₹{total}</h3>
					</div>
		            {
		            	cartItems.length > 0 ? 
		            	<Link to="/shipping" onClick={closeCart}><button className="cart-checkout btn">checkout</button></Link>
		            	:
		            	""
		            }
		          </footer>
			</>
		)
}

export default CartTotal;
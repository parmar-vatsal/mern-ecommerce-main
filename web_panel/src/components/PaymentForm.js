import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import {Link, useHistory} from 'react-router-dom';
import {showCart} from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';
import axios from 'axios';

const PaymentForm = () => {

  const history = useHistory()


  const [submitted, setSubmitted] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');  
  const [formState,setFormState] = useState({
        values:{}       
  });

  const userInfo = useSelector((state) => state.userPanelLogin.userInfo?.data);
  const shippingAddress = useSelector((state) => state.cart.shippingAddress);
  const cartItems = useSelector((state)=> state.cart.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
       dispatch(showCart(false));
  }, [dispatch]);

  // Check if user is authenticated
  if (!userInfo) {
    history.push("/login");
    return null;
  }

  const user = userInfo[0]._id;

  const { street1, street2, city, state, zip, country } = shippingAddress || {};

  const orderItems = [];
  const cartItemsList = cartItems.map((product)=>{
  const {name,qty,image,price, id} = product;
    orderItems.push({
        name,
        qty,
        image,
        price,
        product: id,
      })
  });

  const itemsPrice = orderItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = (0.15 * itemsPrice).toFixed(2);
  const totalPrice = ((parseFloat(itemsPrice) + parseFloat(shippingPrice) + parseFloat(taxPrice)) * 100).toFixed();

  //Redirect to shipping page if address is not filled
  if (cartItems.length === 0) {
    history.push("/");
    return null;
  }

  //Redirect to shipping page if address is not filled
  if (Object.keys(shippingAddress || {}).length === 0) {
    history.push("/shipping");
    return null;
  }

  const handleChange = (event) => {
        setFormState(formState =>({
          ...formState,
          values:{
            ...formState.values,
            [event.target.name]:
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
          }
          
        }));
      }

  const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true); 
        setBtnDisable(true);

        if(orderItems && shippingAddress && paymentMethod){
            dispatch(createOrder({orderItems, shippingAddress, paymentMethod, user, itemsPrice, shippingPrice, taxPrice, totalPrice}));
            history.push('/');
        }  
    }

    const changePaymentMethod = (e) =>{
      setPaymentMethod(e.target.value);
    }

  return(
    <>
      <NavBar/> 
      <PageHeading title="Home / Payment"/>
      <section className="section section-center">
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <div className="user_card content-card payment-page-content">   
                  <h4 className="content-heading">Payment Detail</h4>       
                  <div className="d-flex justify-content-center form_container auth-page-container payment-page-container">
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="alert-danger" id="card-errors">
                      </div>
                        <div className="input-group mt-3">
                          <select className="form-control form-control-lg" id="paymentType" value={paymentMethod} onChange={changePaymentMethod}>
                            <option value="Cash on Delivery">Cash on Delivery</option>
                          </select>
                      </div>
                      <div className="d-flex justify-content-center mt-3 login_container">
                        <button className="btn login_btn" disabled={btnDisable} >
                         
                        {submitted ? (
                            <i className="fas fa-spinner fa-spin"></i>
                          ): (
                            "Place Order"
                          )
                        }
                        </button>
                      </div>
                    </form>
                  </div>                  
                </div>
              </div>
            </div>
        </section>
      <Sidebar/>
      <Cart/>
    </>
    )
}


export default PaymentForm;
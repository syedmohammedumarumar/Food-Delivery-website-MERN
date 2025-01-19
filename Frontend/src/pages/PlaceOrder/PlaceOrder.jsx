import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItem,url} = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder = async(event)=>{
    event.preventDefault()
    let orderItems= [];
    food_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })

    let orderData ={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
    
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error placing the order. Please try again.");
      }
    } catch (error) {
      console.error("Order placement error:", error);
      alert("Something went wrong. Please check your internet connection.");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  })


  return (
    <form onSubmit={placeOrder} className="place-order">
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input name='firstName' onChange={onChangeHandler} value={data.firstName} required  type="text" placeholder="First name" />
        <input onChange={onChangeHandler} value={data.lastName} required name="lastName"  type="text" placeholder="Last name" />
      </div>
      <input onChange={onChangeHandler} value={data.email} required name="email"  type="email" placeholder="Email address" />
      <input onChange={onChangeHandler} value={data.street} required name="street" type="text" placeholder="Street" />
      <div className="multi-fields">
        <input onChange={onChangeHandler} value={data.city} required name="city"  type="text" placeholder="City" />
        <input onChange={onChangeHandler} value={data.state} required name="state" type="text" placeholder="State" />
      </div>
      <div className="multi-fields">
        <input onChange={onChangeHandler} value={data.zipcode} required name="zipcode" type="text" placeholder="Zip code" />
        <input onChange={onChangeHandler} value={data.country} required name="country"  type="text" placeholder="Country" />
      </div>
      <input onChange={onChangeHandler} value={data.phone} required name="phone"  type="text" placeholder="Phone" />
    </div>
    <div className="place-order-right">
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
        </div>
        <button type="submit">PROCEED TO PAYMENT</button>
      </div>
    </div>
  </form>
  )
}

export default PlaceOrder

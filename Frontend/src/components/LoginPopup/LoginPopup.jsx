import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
    const [currState, setCurrState] = useState("sign up")
    const [data, setData] = useState({
      name:"",
      email:"",
      password:"",
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event) =>{
      event.preventDefault();
      let newUrl = url;
      if(currState==='Login'){
        newUrl+='/api/user/login'
      }
      else{
        newUrl+='/api/user/register'
      }

      const response = await axios.post(newUrl,data)
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Your Name' required />}
                <input type="email" onChange={onChangeHandler} name='email' value={data.email} placeholder='Your Email' required />
                <input type="password" onChange={onChangeHandler} name='password' value={data.password} placeholder='Your Password' required />
            </div>

            <button type='submit'>{currState==="sign up"?"Create account":"Login"}</button>

            <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>i agree the terms of use & privacy policy</p>
        </div>
        {
          currState==='Login'?
          <p>Create new account?<span onClick={()=>setCurrState('sign up')}>Click here</span></p>
          :<p>Already have account?<span onClick={()=>setCurrState('Login')}>Login here</span></p>
        }


        </form>
    </div>
  )
}

export default LoginPopup

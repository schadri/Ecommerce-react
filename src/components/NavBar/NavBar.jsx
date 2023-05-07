import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaRegSnowflake } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";


export const NavBar = () => {

  const {
    loginData
} = useContext(AuthContext)

  return (

    <div className='menu'>
      <ul>
        <li><div className="icon_main"><FaRegSnowflake /></div></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="carrito">
        <li><Link to='/cart' ><CartWidget /></Link></li>
      </div>
      {
        loginData?.user && 
        <div>
          <img src={loginData.user.photoURL} alt="user-photo" />
        </div>
      }
      
    </div>

  );
};

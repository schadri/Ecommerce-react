import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaRegSnowflake } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { Profile } from "../Profile/Profile";

export const NavBar = () => {
  const { loginData } = useContext(AuthContext)

  return (
    <div className='menu'>
      <div className="left">
        <ul>
          <li><div className="icon_main"><FaRegSnowflake /></div></li>
          <li><Link to="/">Home</Link></li>
          
        </ul>
      </div>
      <div className="right">
        <div className="carrito">
          <li><Link to='/cart' ><CartWidget /></Link></li>
        </div>
        <div className="login-style">{loginData ? <Profile /> : <Link to="/login">Login</Link>}</div>
      </div>
    </div>

  );
};

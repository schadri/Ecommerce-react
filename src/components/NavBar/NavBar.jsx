import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaRegSnowflake } from "react-icons/fa";


export const NavBar = () => {
  return (
  
  <div className='menu'>      
  <ul>
  <li><div className="icon_main"><FaRegSnowflake/></div></li>
  <li><Link to="/">Home</Link></li>
  <li><Link to="#">Login</Link></li>
  {/* <li><Link to="/poke">Poke</Link></li>
  <li><Link to="/counter">Count</Link></li> */}
  </ul>
<div className="carrito">
 <li><Link to= '/cart' ><CartWidget/></Link></li>
  </div> 
    <div >
   
    </div>
    </div>
    
  );
};

import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Cart.css'
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
  const {calcularCantidad} = useContext(CartContext)
  return (
    <>
    <FaShoppingCart className="carrito"/>
    <span className='cantidad'>{calcularCantidad()}</span>
    </>
  )
}

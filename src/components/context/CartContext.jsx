import { createContext, useEffect } from "react";
import { useState } from 'react';

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(init)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const addToCart = (item) => {
        const itemInCart = carrito.find(cartItem => cartItem.id === item.id);
        if (itemInCart) {
            let newCart = carrito.filter(cartItem => cartItem.id !== item.id);
            newCart.push({ ...item, counter: item.counter + itemInCart.counter });
            setCarrito(newCart);
        } else {
            setCarrito([...carrito, item]);
        }
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.counter, 0)
    }

    const removerItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={{
            addToCart,
            calcularCantidad,
            precioTotal,
            removerItem,
            carrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


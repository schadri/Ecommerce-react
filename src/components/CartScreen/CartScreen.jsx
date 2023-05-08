import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";

export const CartScreen = () => {
  const { carrito, precioTotal, removerItem, vaciarCarrito } =
    useContext(CartContext);

  return (
    <div className='container my-5'>
      {carrito.length === 0 ? (
        <>
          <h3>Carrito Vacio</h3>
          <Link to='/' className='btn btn-success'>
            Volver a comprar
          </Link>
        </>
      ) : (
        <>
          <h3>Resumen de compras</h3>
          <hr />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((prod, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{prod.description}</td>
                  <td>${prod.price}</td>
                  <td>{prod.counter}</td>
                  <td>
                    <Button onClick={() => removerItem(prod.id)}>
                      <BsFillTrashFill />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <strong>Precio total: $ {precioTotal()}</strong>
          <hr />
          <div className="d-flex justify-content-center">
            <Button className='btn btn-danger action-button' onClick={vaciarCarrito} >
              Vaciar Carrito
            </Button>
            <Link to='/checkout'>
              <Button className='btn btn-success action-button'>Finalizar Compra</Button>
            </Link>
          </div>
        </>
      )
      }
    </div >
  );
};

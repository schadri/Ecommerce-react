import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { db, getActualDate } from "../../firebase/config";
import "./checkout.css";

export const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();

    const orden = {
      buyner: {
        email,
        nombre,
        apellido,
        telefono,
      },
      item: carrito,
      total_price: precioTotal(),
      data: getActualDate(),
    };

    const ordenes = db.collection("ordenes");

    ordenes.add(orden).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Compra realizada con exito",
        text: `Guarde su numero de compra:  ${res.id}`,
        willClose: () => {
          vaciarCarrito();
        },
      }).finally(() => {
        console.log("exito");
      });
    });
    carrito.forEach((item) => {
        const docRef = db.collection("productos").doc(item.id);
        docRef.get().then((doc) => {
          docRef.update({
            stock: doc.data().stock -item.counter,
          });
        });
      });
  };
  

  return (
    <div>
      <h3>Terminar compra</h3>
      <hr />

      <form onSubmit={handleSumbit} className='container mt-3'>
        <div className='form-group'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nombre</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Apellido</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>Telefono</label>
          <input
            type='number'
            className='form-control'
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
        </div>

        <button type='submit' className='btn btn-success'>
          Finalizar
        </button>

        <Link to='/cart'>
          <Button className='btn btn-info' id='fin-compra'>
            Volver al Carrito
          </Button>
        </Link>
      </form>
    </div>
  );
};

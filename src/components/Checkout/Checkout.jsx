import { useContext, useEffect, useState } from "react";
import "./checkout.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { db, getActualDate } from "../../firebase/config";
import { AuthContext } from "../context/AuthContext";

export const Checkout = () => {
  const { loginData } = useContext(AuthContext)
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    if (loginData && loginData._tokenResponse) {
      const { firstName, lastName, email: userEmail } = loginData._tokenResponse
      console.log(loginData)
      setEmail(userEmail)
      setNombre(firstName)
      setApellido(lastName)
    }
  }, [loginData])

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
          stock: doc.data().stock - item.counter,
        });
      });
    });
  };


  return (
    <div className="my-5">
      {
        loginData ? <div>
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

            <div class="footer">
              <button type='submit' className='btn btn-success action-button'>
                Finalizar
              </button>

              <Link to='/cart'>
                <Button className='btn btn-info action-button' id='fin-compra'>
                  Volver al Carrito
                </Button>
              </Link>
            </div>
          </form>
        </div> :
          <>
            <h3>Debe <Link to='/login'>iniciar sesión</Link> para terminar la compra</h3>
          </>
      }
    </div>
  );
};

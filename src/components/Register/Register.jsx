import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import "./register.css"
import { FcGoogle } from "react-icons/fc";
import { FaRegSnowflake } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Register = () => {
  const navigate = useNavigate();

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    LoginWithGoogle,
    loginData,
  } = useContext(AuthContext);

  useEffect(() => {
    if (loginData) {
      window.location.replace('/')
    }
  }, [loginData])

  useEffect(() => {
    setEmail("") 
    setPassword("") 
  }, [])
  
  const submitForm = async (event) => {
    event.preventDefault();
    const res = await handleRegister()
    Swal.fire({
      icon: res.error ? "error" : "success",
      title: "Registro",
      text: res.message,
    }).then(()=>{
      navigate('/login')
      setPassword("")
    })
  }

  return (
    <div>
      {!loginData && (
        <div>
          <section className='h-100'>
            <div className='container h-100'>
              <div className='row justify-content-sm-center h-100'>
                <div className='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                  <div id="bordeado">
                    <div className='text-center my-5' id="Icon-Logo">
                      <FaRegSnowflake />
                    </div>
                  </div>
                  <div className='card shadow-lg'>
                    <div className='card-body p-5'>
                      <h1 className='fs-4 card-title fw-bold mb-4'>Registrarse</h1>

                      <form
                        method='POST'
                        className='needs-validation'
                        onSubmit={submitForm}
                      >
                        <div className='mb-3'>
                          <label className='mb-2 text-muted' htmlFor='email'>
                            Correo Electronico 
                          </label>
                          <input
                            id='email'
                            type='email'
                            className='form-control'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                          />
                          <div className='invalid-feedback'>Email is invalid</div>
                        </div>

                        <div className='mb-3'>
                          <div className='mb-2 w-100'>
                            <label className='text-muted' htmlFor='password'>
                              Contraseña
                            </label>
                          </div>
                          <input
                            id='password'
                            type='password'
                            className='form-control'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <div className='invalid-feedback'>
                            Contraseña requerida
                          </div>
                        </div>

                        <div className='d-flex align-items-center'>
                          <button type='submit' className='btn btn-primary ms-auto'>
                            Registrarse
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className='card-footer py-3 border-0'>
                      <div className='text-center'>
                        Ya tengo una cuenta:{" "}
                        <Link to='/login' className='text-dark'>
                          Ingresar
                        </Link>
                      </div></div>
                    <div className='card-footer py-3 border-0'>
                      <div className='text-center'>
                        <p>O ingresar con Google</p>
                        <button onClick={LoginWithGoogle} id="google-icon"><FcGoogle /></button>

                      </div>
                    </div>
                  </div>
                  <div className='text-center mt-5 text-muted'>
                    Copyright &copy; 2023 &mdash; Winter Store
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

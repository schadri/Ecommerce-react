import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import "./login.css"
import { FcGoogle } from "react-icons/fc";
import { FaRegSnowflake } from "react-icons/fa";
export const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleEmailLogin,
    LoginWithGoogle,
    loginData,
  } = useContext(AuthContext);

  useEffect(() => {
    if (loginData) {
      window.location.replace('/')
    }
  }, [loginData])

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
                      <h1 className='fs-4 card-title fw-bold mb-4'>Login</h1>

                      <form
                        method='POST'
                        className='needs-validation'
                        onSubmit={handleEmailLogin}
                      >
                        <div className='mb-3'>
                          <label className='mb-2 text-muted' htmlFor='email'>
                            E-Mail Address
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
                              Password
                            </label>
                            <a href='forgot.html' className='float-end'>
                              Forgot Password?
                            </a>
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
                            Password is required
                          </div>
                        </div>

                        <div className='d-flex align-items-center'>
                          <div className='form-check'>
                            <input
                              type='checkbox'
                              name='remember'
                              id='remember'
                              className='form-check-input'
                            />
                            <label htmlFor='remember' className='form-check-label'>
                              Remember Me
                            </label>
                          </div>
                          <button type='submit' className='btn btn-primary ms-auto'>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className='card-footer py-3 border-0'>
                      <div className='text-center'>
                        Don't have an account?{" "}
                        <a href='register.html' className='text-dark'>
                          Create One
                        </a>
                      </div>
                    </div>
                    <div className='card-footer py-3 border-0'>
                      <div className='text-center'>
                        <p>Or Login With Google</p>
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

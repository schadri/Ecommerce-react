import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPasswordFirebase,
  LoginWithGooglePopout,
  signOut,
  createUserWithEmailAndPasswordFirebase
} from "../../firebase/config";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    if(loginData){
      localStorage.setItem('login-data', JSON.stringify(loginData))
    }
  }, [loginData])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('login-data'));
    if (data) {
      setLoginData(data)
    }
  }, [])

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithEmailAndPasswordFirebase(email, password);
      setLoginData(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPasswordFirebase(email, password);
      return {error:false, message:"Registro Completado"}
    } catch (error) {
      console.error(error);
      return {error:true, message: error.message}
    }
  };

  const LoginWithGoogle = async () => {
    const res = await LoginWithGooglePopout();
    setLoginData(res);
  }

  const logout = () => {
    localStorage.removeItem('login-data')
    signOut();
    setLoginData(null);
  }

  return (
    <AuthContext.Provider value={{
      email,
      password,
      loginData,
      setEmail,
      setPassword,
      handleEmailLogin,
      handleRegister,
      LoginWithGoogle,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}


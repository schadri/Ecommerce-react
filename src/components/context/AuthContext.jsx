import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPasswordFirebase,
  LoginWithGooglePopout,
  signOut
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
      LoginWithGoogle,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}


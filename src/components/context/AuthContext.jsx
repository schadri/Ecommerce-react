import { createContext, useState } from "react";
import {
  signInWithEmailAndPasswordFirebase,
  LoginWithGooglePopout
} from "../../firebase/config";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState();

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


  return (
    <AuthContext.Provider value={{
      email,
      password,
      loginData,
      setEmail,
      setPassword,
      handleEmailLogin,
      LoginWithGoogle,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


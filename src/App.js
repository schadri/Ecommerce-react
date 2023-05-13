import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { Poke } from "./components/Poke/Poke";
import { Checkout } from "./components/Checkout/Checkout.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import { CartProvider } from "./components/context/CartContext.jsx";
import { CartScreen } from "./components/CartScreen/CartScreen.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";
import RedirectComponent from "./components/Account/Forgot.jsx";


const dinamicRoutes = [
  { path: '/', element: <ItemListContainer /> },
  { path: '/productos/:categoryId', element: <ItemListContainer /> },
  { path: '/detail/:itemId', element: <ItemDetailContainer /> },
  { path: '/counter', element: <ItemCount /> },
  { path: '/poke', element: <Poke /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot', element: <RedirectComponent /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/cart', element: <CartScreen /> },
  { path: '*', element: <Navigate to='/' /> },
]

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider >
          <div className='App'>
            <Router>
              <NavBar />
              <Routes>
                {dinamicRoutes.map((route, i) =>
                  <Route path={route.path} element={route.element} key={i} />)
                }
              </Routes>
            </Router>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;

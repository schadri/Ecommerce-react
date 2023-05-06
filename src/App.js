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
import React from "react";
import { CartScreen } from "./components/CartScreen/CartScreen.jsx";


function App() {

  

    return (
      <>
      <CartProvider >        
      <div className='App'>
        <Router>
          <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/counter' element={<ItemCount />} />
            <Route path='/poke' element={<Poke />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/cart' element={<CartScreen/>} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
    </>
  );
}

export default App;

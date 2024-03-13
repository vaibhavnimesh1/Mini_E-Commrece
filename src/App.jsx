import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  
  return (
    
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route exact path="/" element={<Home  cart={cart} setCart={setCart} />} />
        <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

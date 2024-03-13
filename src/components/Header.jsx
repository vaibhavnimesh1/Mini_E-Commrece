import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Header = () => {

const {cart}=  useContext(CartContext)

console.log(useContext(CartContext));
  
  return (
    <div className=" d-flex  bg-black  text-light gap-5 justify-content-around  p-3   ">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length}) </Link>
  
    </div>
  );
};

export default Header;

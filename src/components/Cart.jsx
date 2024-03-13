import React, { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct.jsx";
import { CartContext } from "./Context.jsx";

const Cart = () => {
  const [total, setTotal] = useState(0);

// const {cart}=  useContext(CartContext)


const {cart ,setCart}=  useContext(CartContext)

useEffect(()=>{

  setTotal(cart.reduce((acc, cur)=> acc  + cur.price , 0))
},[cart])

  // console.log(cart);
  return (


    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      {cart.length > 0 ? (<span style={{ fontSize: 30   }}>Total: {total}</span>):(<h2>Cart is Empty</h2>)}
      <div className="container">
        <div className="col">
          <div className="row gap-3  d-flex  justify-content-between ">
            {cart?.map((prod) => (
              <CartProduct
                product={prod}
                setCart={setCart}
                cart={cart}
                key={prod.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

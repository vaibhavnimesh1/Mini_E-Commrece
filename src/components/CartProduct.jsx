import React, { useContext } from "react";
import { CartContext } from "./Context";

const CartProduct = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  // console.log(product);
  return (
    <div className="card  col-4  " style={{ width: "15rem" }}>
      <img
        src={product?.thumbnail}
        width="100%"
        height="150px"
        alt={product?.name}
      />
      <div className="card-body">
        <h6 className="card-title">{product?.title}</h6>
        <h6>Price : ₹ {product?.price}</h6>

        <button
          className="btn  btn-danger "
          onClick={() =>
            setCart(cart.filter((item) => item.id !== product?.id))
          }
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

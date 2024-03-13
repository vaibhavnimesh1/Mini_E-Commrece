import React, { useContext } from "react";
import { CartContext } from "./Context";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="card col-4" style={{ width: "15rem" }}>
      <img
        src={product?.thumbnail}
        width="100%"
        height="150px"
        alt={product?.name}
      />
      <div className="card-body">
        <h6 className="card-title">{product?.title}</h6>
        <h6>Price: ₹ {product?.price}</h6>

        {isInCart(product.id) ? (
          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;

import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        if (data && data.products) {
          setProductArray(data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="col-12">
        <div className="row col-12 d-flex g-4 gap-2 justify-content-between">
          {productArray.map((prod) => (
            <SingleProduct product={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

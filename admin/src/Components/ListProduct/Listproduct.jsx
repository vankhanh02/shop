import React, { useEffect, useState } from "react";
import "./Listproduct.css";
import remove_icon from "../../assets/cross_icon.png";

const Listproduct = () => {
  const [allproduct, setAllProducts] = useState([]);
  const BASE_URL = "https://shop-backend-wi82.onrender.com";

  const fetchInfo = async () => {
    await fetch(`${BASE_URL}/api/product/allproduct`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(`${BASE_URL}/api/product/deleteproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="listproduct">
      <h1>All Product</h1>
      <div className="listproduct-format title">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproduct.map((product, index) => {
        return (
          <>
            <div key={index} className="listproduct-format">
              <img
                src={`${BASE_URL}/images/${product.image}`}
                alt=""
                className="listproduct-main-img"
              />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => {
                  remove_product(product.id);
                }}
                src={remove_icon}
                alt=""
                className="listproduct-remove-icon"
              />
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Listproduct;

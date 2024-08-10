import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const disabledProducts = useSelector((state) => state.cart.disabledProducts); // Access disabled products from Redux

  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 30 },
  ];
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); //Dispatch action to add item to cart
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => (
          <li key={product.id} className="product-list-item">
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              className={`add-to-cart-btn ${
                disabledProducts.includes(product.id) ? "disabled" : ""
              }`}
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} // Disable button if product is in disabledProducts
            >
              {disabledProducts.includes(product.id) ? "Added" : "Add to Cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

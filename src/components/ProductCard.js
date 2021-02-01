import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductCard(props) {
  const product = props.product;

  return (
    <div key={product.id} className="card">
      <Link to={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt="product" />
      </Link>
      <div className="class-body">
        <Link to={`/product/${product.id}`}>
          <h1>{product.title}</h1>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">$ {product.price}</div>
      </div>
    </div>
  );
}

export default ProductCard;

import React, { useEffect } from "react";
import { addToCart } from "../Redux/action/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartCard({ item }) {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    console.log(`product id ${id} to be removed`);
  };
  return (
    <div className="row">
      <img src={item.image} atl={item.title} className="small"></img>

      <div className="min-30">
        <Link to={`/product/${item.product}`}>{item.name}</Link>
      </div>
      <select
        value={item.qty}
        onchange={(e) =>
          dispatch(addToCart(item.product), Number(e.target.value))
        }
      >
        {" "}
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <div>$ {item.price}</div>
      <button type="button" onClick={() => removeFromCartHandler(item.product)}>
        Remove
      </button>
    </div>
  );
}

export default CartCard;

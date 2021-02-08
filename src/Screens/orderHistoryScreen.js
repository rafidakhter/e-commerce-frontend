import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";

function OrderHistory(props) {
  const [orderHistory, setOrderHistory] = useState([]);

  const fetchData = async () => {
    const { data } = await Axios.get(
      `http://localhost:5000/order/orderHistory/${props.match.params.id}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE4ZWUyODUxNzY0ZDI2ZDRmYjUyOTEiLCJuYW1lIjoiUmFmaWQiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjEyNzk4NjYxLCJleHAiOjE2MTI4ODUwNjF9.rXgFdntN3osPKX-mACjtjmNWAfXYX_LXKIpSt8D0_uQ`,
        },
      }
    );

    setOrderHistory(data.orderHistory);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Order id</th>
            <th>Price</th>
            <th>Purchase Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => {
            return (
              <tr>
                {" "}
                <td>{order._id}</td>
                <td>{order.totalPrice}</td>
                <td>{order.createdAt}</td>
                <td>
                  {" "}
                  <Link to={`/order/${order._id}`}>
                    <button>Details</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;

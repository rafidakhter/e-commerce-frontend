import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function OrderHistoryTable({ ordersHistory }) {
  return (
    <table striped bordered hover>
      <thead>
        <tr>
          <th>Order id</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Purchase Date</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {ordersHistory.map((order) => {
          return (
            <React.Fragment>
              <tr>
                {" "}
                <td>{orderHistory._id}</td>
                <td>{orderHistory.title}</td>
                <td>{orderHistory.totalPrice}</td>
                <td>{orderHistory.createdAt}</td>
                <td>
                  {" "}
                  <Link to={`/order/${order._id}`}>
                    <Button></Button>
                  </Link>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}

export default OrderHistoryTable;

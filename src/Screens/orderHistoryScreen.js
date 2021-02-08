import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getOrderHistory } from "../Redux/action/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function OrderHistoryScreen(props) {
  const orderHistory = useSelector((state) => state.orderHistory);
  const { loading, error, orders } = orderHistory;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      console.log("redirecting");
      props.history.push("/signin?redirect=ordershistory");
    } else {
      dispatch(getOrderHistory());
    }
  }, [userInfo]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
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
              {console.log(orders)}
              {orders.map((order) => {
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
      )}
    </div>
  );
}

export default OrderHistoryScreen;

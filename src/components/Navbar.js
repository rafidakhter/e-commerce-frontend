import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../Redux/action/userAction";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart); // this is to access the cart items from local storage
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };
  return (
    <React.Fragment>
      <div>
        <Link to="/" className="brand">
          Amazona
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <i className="fa fa-shopping-cart" style={{ fontSize: "1.5em" }}></i>
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </Link>
        {userInfo ? (
          <div className="dropdown">
            {" "}
            <Link to="/">
              {userInfo.name}
              <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/ordershistory">Order History</Link>
              </li>
              <li>
                <Link to="/" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <React.Fragment>
            {" "}
            <Link to="/signin">Sign In</Link>
            <Link to="/Register">Sign Up</Link>
          </React.Fragment>
        )}
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <Link to="#admin">
              Admin <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/productlist">Products</Link>
              </li>
              <li>
                <Link to="/orderlist">Orders</Link>
              </li>
              <li>
                <Link to="/userlist">Users</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Navbar;

/* const cart = useSelector((state) => state.cart); // this is to access the cart items from local storage
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
    /////////////////// in header//////////////////////
     <div>
            <Link to="/" className="brand">
              Amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <i
                className="fa fa-shopping-cart"
                style={{ fontSize: "1.5em" }}
              ></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                {" "}
                <Link to="/">
                  {userInfo.name}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/ordershistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <React.Fragment>
                {" "}
                <Link to="/signin">Sign In</Link>
                <Link to="/Register">Sign Up</Link>
              </React.Fragment>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
  };*/

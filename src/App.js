import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// screens
import HomeScreen from "./Screens/Homescreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SignInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import CreateOrderScreen from "./Screens/CreateOrderScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import ProfileScreen from "./Screens/ProfileScreen";

//redux actions and functions
import { signOut } from "./Redux/action/userAction";
import { useSelector, useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const cart = useSelector((state) => state.cart); // this is to access the cart items from local storage
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };
  return (
    <Router>
      {" "}
      <div className="grid-container">
        <header className="row">
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
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/ordershistory" component={OrderHistoryScreen}></Route>
          <Route path="/order/:id" component={CreateOrderScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/Shipping" component={ShippingAddressScreen}></Route>
          <Route path="/Register" component={RegisterScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;

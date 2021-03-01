import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// screens
import HomeScreen from "./Screens/Homescreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SignInScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import ProfileScreen from "./Screens/ProfileScreen";

// components
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";
import AdminProductScreen from "./Screens/AminProductScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <Navbar />
        </header>
        <main>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={AdminProductScreen}
          ></AdminRoute>
          <Route path="/ordershistory" component={OrderHistoryScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
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

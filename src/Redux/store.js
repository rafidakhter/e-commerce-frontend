import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productListReducer from "./reducers/productListReducer";
import productDetailReducer from "./reducers/productDetailReducer";
import cartReducer from "./reducers/cartReducer";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddress = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialstate = {
  cart: { cartItems, shippingAddress },
  userSignin: { userInfo },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(); /*WebDevTool*/

const store = createStore(
  reducer,
  initialstate,
  compose(applyMiddleware(thunk), composeEnhancer)
);

export default store;

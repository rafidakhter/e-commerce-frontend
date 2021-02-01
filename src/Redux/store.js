import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productListReducer from "./reducers/productListReducer";
import productDetailReducer from "./reducers/productDetailReducer";
import cartReducer from "./reducers/cartReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialstate = {
  cart: { cartItems },
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
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

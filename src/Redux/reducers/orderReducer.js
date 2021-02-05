import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstats";

const orderCreateReducer = (
  state = { loading: false, error: false, sucess: false, orderItems: {} },
  action
) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { ...state, loading: true };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        sucess: true,
        orderItems: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return { ...state, loading: false, error: action.paload };
    case ORDER_CREATE_RESET:
      return { loading: false, error: false, orderItems: {} };
    default:
      return state;
  }
};

export default orderCreateReducer;

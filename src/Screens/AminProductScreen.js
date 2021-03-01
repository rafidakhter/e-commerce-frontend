import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { listProducts } from "../Redux/action/productaActions";

function AdminProductScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  var deleteProduct = (product_id) => {
    // RestAPI request to delete product
    //dispatch delete handler
    dispatch(removeProduct(product_id));
    console.log("product deleted");
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          <h1>product History</h1>
          <table style={{ width: "90%" }}>
            <thead>
              <tr>
                <th>Product id</th>
                <th>Name</th>
                <th>price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteProduct(product._id);
                        }}
                      >
                        Delete
                      </button>
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

export default AdminProductScreen;

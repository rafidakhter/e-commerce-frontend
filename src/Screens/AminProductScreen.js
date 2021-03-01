import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { createProduct, listProducts } from "../Redux/action/productaActions";
import { PRODUCT_CREATE_RESET } from "../Redux/constants/productConstants";

function AdminProductScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const dispatch = useDispatch();

  var deleteProduct = (product_id) => {
    // RestAPI request to delete product
    //dispatch delete handler
    console.log("product deleted");
  };

  var createHandler = () => {
    dispatch(createProduct());
  };
  let count = 0;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      props.history.push(`/product/${createdProduct._id}/edit`);
    }
    dispatch(listProducts());
    count++;
  }, [dispatch, successCreate]);

  return (
    <div>
      <div className="row">
        <h1>Products</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
      </div>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}

      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
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

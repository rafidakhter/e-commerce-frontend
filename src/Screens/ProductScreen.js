import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { detailProducts } from "../Redux/action/productaActions";

function ProductScreen(props) {
  ///////////
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;

  useEffect(() => {
    dispatch(detailProducts(productId));
  }, [dispatch, productId]);

  ///////// redirect to add to add to cart ////////////
  // history.push only works if we are passed a history prop, if not it will be undefined
  //

  const addToCartHandler = () => {
    console.log("addtocart function from product screen trigerred");
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          {" "}
          <Link style={{ float: "left" }} to="/">
            Back to Home
          </Link>
          <div className="row top">
            <div className="col-2">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul
                style={{
                  textAlign: "left",
                  padding: "2rem",
                }}
              >
                <li>
                  <h1>{product.title}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>$ {product.price}</li>
                <li>
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body" style={{ padding: "1rem" }}>
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">$ {product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div className="price">
                        {product.countInStock > 0 ? (
                          <span className="sucess">In Stock</span>
                        ) : (
                          <span className="error">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 ? (
                    <React.Fragment>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={addToCartHandler}
                        >
                          {" "}
                          Add to Cart
                        </button>
                      </li>
                    </React.Fragment>
                  ) : (
                    <div></div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;

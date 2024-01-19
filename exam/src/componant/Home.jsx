import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_PROGRESS } from "../Redux-saga/user/action";

const Data = () => {
  const product = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  const data = product.product.slice(0, 5)

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data?.map((val, ind) => {
          return (
            <div className="col-4" key={ind}>
              <div class="card mt-5" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{val.name}</h5>
                  <p class="card-text">{val.price}</p>
                  <p class="card-text">{val.dec}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Data;

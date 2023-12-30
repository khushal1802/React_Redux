import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRSS, POST_PRODUCT_PROGRSS } from "../redux-saga/Admin/Action/action";


const Data = () => {
  const name = useRef()
  const price = useRef();
  const product = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const handalSubmit = () => {
    const data = {
      productName: name.current.value,
      price:price.current.value
    }
    dispatch({
      type: POST_PRODUCT_PROGRSS,
      payload: data
    });
  }

  const handalDelete = (val) => {
    dispatch({
      type: DELETE_PRODUCT_PROGRSS,
      payload: val,
    });
  }

  return (
    <div className="container">
        <input type="text" ref={name}></input>
        <input type="text" ref={price}></input>
        <button onClick={handalSubmit}>Submit</button>
      <div className="row">
        {product.product?.map((val, ind) => {
          return (
            <div className="col-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{val.productName}</h5>
                  <p class="card-text">{val.price}</p>
                  <button onClick={()=>handalDelete(val)}>Delete</button>
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

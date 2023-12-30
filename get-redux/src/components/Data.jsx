import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
  const product = useSelector((state) => state.productReducer);

  console.log(product, "product from data");

  return (
    <div>
      {product.product.map((val, ind) => {
        return (
          <>
            <h1>{val.productName}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Data;

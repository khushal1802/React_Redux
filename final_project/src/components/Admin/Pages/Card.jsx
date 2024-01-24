import React from "react"
import "../admin.css";


function Card() {
  return (
    <div>
      <div className="chart-container rounded-2 p-3">
        <h3 className="fs-6 mb-3">Card one</h3>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default Card;

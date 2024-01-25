import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ELECTION_PROGRESS } from "../../../redux-saga/Admin/Election/ElectionAction";
import {
  GET_PARTY_PROGRESS,
} from "../../../redux-saga/Admin/Party/PartyAction";

function Card() {
  const count = []
  
  const Election = useSelector((state) => state.ElectionReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS });
  }, []);
  console.log("hello", Election?.length);

  count.push(Election?.length);

  const Party = useSelector((state) => state.PartyReducer.data);
  console.log("hello", Party?.length);
  count.push(Party?.length)

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS });
  }, []);

  console.log(count);
  return (
    <div>
      <div className="chart-container rounded-2 p-3">
        <center>
          <h1 className=" mb-3">{Election?.length}</h1>
        </center>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default Card;

import {  useDispatch } from "react-redux";
import "./App.css";
import Data from "./components/Data";
import { useEffect } from "react";
import { GET_PRODUCT_PROGRESS } from "./redux-saga/Admin/Action/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  return (
    <div className="App">
      Hello
      <Data />
    </div>
  );
}

export default App;

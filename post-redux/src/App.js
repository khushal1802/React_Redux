import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PROGRESS } from "./redux-saga/admin/action/action";
import Data from "./components/Data";

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

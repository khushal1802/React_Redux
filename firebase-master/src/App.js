import { useEffect, useRef } from "react";
import "./App.css";
import { getAllData, saveItem } from "./firebase/functions/function";

function App() {
  const fname = useRef();
  const email = useRef();

  const save = () => {
    const data = {
      email: fname.current.value,
      fname: fname.current.value,
    };

    saveItem(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      <div>
        <input type="text" ref={fname} />
        <input type="text" ref={email} />
        <button onClick={save}>save</button>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  getAllData,
  saveItem,
  updateItem,
  deleteItem,
} from "./firebase/functions/function";

function App() {
  const [data, setData] = useState([]);
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const phone = useRef();

  const save = async () => {
    const newData = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };

    await saveItem(newData);
    const allData = await getAllData();
    setData(allData);
  };

  const update = async (id) => {
    const updatedData = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };

    await updateItem(id, updatedData);
    const allData = await getAllData();
    setData(allData);
  };

  const remove = async (id) => {
    await deleteItem(id);
    const allData = await getAllData();
    setData(allData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllData();
      setData(allData);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        First name:
        <input type="text" ref={fname} />
        Last name:
        <input type="text" ref={lname} />
        Email:
        <input type="text" ref={email} />
        Phone:
        <input type="text" ref={phone} />
        <button onClick={save}>Save</button>
      </div>
      <div>
        <h2>Data:</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.fname} {item.lname} - {item.email} - {item.phone}
              <button onClick={() => update(item.id)}>Update</button>
              <button onClick={() => remove(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

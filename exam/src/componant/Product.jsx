import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Apidata() {
  const [data, setdata] = useState([]);
  const [update, setupdate] = useState({});
  const name = useRef();
  const price = useRef();
  const dec = useRef();

  /* --------------------------------- Get Data -------------------------------- */
  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setdata(res.data || []);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  function handlesubmit() {
    const result = {
      name: name.current.value,
      price: price.current.value,
      dec: dec.current.value,
    };
    console.log(data);
    
    /* -------------------------------- Add Data -------------------------------- */
    axios.post("http://localhost:3001/posts", result).then((res) => {
      setdata([...data, res.data]);

      name.current.value = "";
      price.current.value = "";
      dec.current.value = "";

      Swal.fire({
        title: "Added.....!",
        text: "Your data add successfully!",
        icon: "success",
      });
    });
  }

  /* ------------------------------- Data Delete ------------------------------ */
  const deleteData = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setdata(
        data.filter((e) => {
          return e.id !== id;
        })
      );
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted.....!",
            text: "Your data delete successfully.",
            icon: "success",
          });
        }
      });
    });
  };
 
  /* ------------------------------- Data Update ------------------------------ */

   const updataData = (id, ind) => {
    const final = data[ind];
    setupdate(final);
  };

  const finalUpdate = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  };

  const final = () => {
    axios
      .put(`http://localhost:3001/posts/${update.id}`, update)
      .then((res) => {
        const updatedData = [...data];
        const index = updatedData.findIndex((item) => item.id === update.id);
        updatedData[index] = res.data;
        setdata(updatedData);
        Swal.fire({
      title: "Update.....!",
      text: "Your data update successfully!",
      icon: "success",
    });
      });
  }

  return (
    <div className="container">
      <div>
        <label>Name:-</label>
        <input type="text" name="name" ref={name} style={{ margin: "10px" }} />
        <label>Dec.:-</label>
        <input type="text" name="dec" ref={dec} style={{ margin: "10px" }} />
        <label>Price:-</label>
        <input type="text" name="price" ref={price} />
        <button onClick={handlesubmit} style={{ margin: "10px" }}>
          Submit
        </button>
        <br />
        <br />
        <input
          type="text"
          name="name"
          value={update.name}
          onChange={finalUpdate}
          style={{ margin: "5px" }}
        />
        
        <input
          type="text"
          name="price"
          value={update.price}
          onChange={finalUpdate}
        />
        <button onClick={final}>Update</button>
      
        <div class="row col-md-12">
          {data?.map((val, ind) => {
            return (
              <div class="col-4" key={val.id}>
                <div
                  class="card mt-3"
                  style={{ width: "18rem", margin: "3rem" }}
                >
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <p class="card-text">{val.price}</p>
                    <p class="card-text">{val.dec}</p>

                    <button
                      onClick={() => deleteData(val.id)}
                      style={{
                        width: "250",
                        alignSelf: "center",
                        margin: "20px",
                      }}
                    >
                      Delete
                    </button>
                    <button onClick={() => setupdate(val)}>Update</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Apidata;

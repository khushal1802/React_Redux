import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../admin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PARTY_PROGRESS,
  GET_PARTY_PROGRESS,
  POST_PARTY_PROGRESS,
  UPDATE_PARTY_PROGRESS,
} from "../../../redux-saga/Admin/Party/PartyAction";

function Party() {
  const name = useRef();
  const logo = useRef();
  const code = useRef();
  const [view, setview] = useState({});

  const Party = useSelector((state) => state.PartyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS });
  }, []);

  const handalSubmit = () => {
    const formData = new FormData();
    formData.append("pName", name.current.value);
    formData.append("shortCode", code.current.value);
    formData.append("Profile", logo.current.files[0]);

    dispatch({
      type: POST_PARTY_PROGRESS,
      payload: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const handalDelete = (val) => {
    dispatch({
      type: DELETE_PARTY_PROGRESS,
      payload: val,
    });
  };

  const handal = (e) => {
    setview((view) => ({
      ...view,
      [e.target.name]: e.target.value,
    }));
  };

  const handalUpdate = () => {
    dispatch({ type: UPDATE_PARTY_PROGRESS, payload: view });
  };

  return (
    <>
      <div>
        <Sidebar />
        <div id="wrapper">
          <Navbar />
          <div className="p-4">
            <section className="charts mt-4">
              <button
                type="button"
                class="button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Add +
              </button>

              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Create E-Election Party</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div class="modal-body">
                      <form>
                        E-Election Party Name:
                        <br />
                        <input
                          className="mb-3"
                          type="text"
                          id="name"
                          name="name"
                          ref={name}
                          onChange={handal}
                          style={{ width: "100%" }}
                        />
                        <br />
                        E-Election Party Logo:
                        <br />
                        <input
                          className="mb-3"
                          type="file"
                          id="logo"
                          name="logo"
                          ref={logo}
                          onChange={handal}
                          style={{ width: "100%" }}
                        />
                        <br />
                        E-Election Party Short Code:
                        <br />
                        <input
                          className="mb-3"
                          type="text"
                          id="code"
                          name="code"
                          ref={code}
                          onChange={handal}
                          style={{ width: "100%" }}
                        />
                        <br />
                      </form>
                    </div>

                    <div class="modal-footer">
                      <input
                        type="submit"
                        class="vote m-2"
                        value="Submit"
                        onClick={handalSubmit}
                        data-bs-dismiss="modal"
                      />

                      <button
                        type="button"
                        class="vote m-0"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {Party.data?.map((val, ind) => {
                  return (
                    <div className="col-4" key={ind}>
                      <div class="card mt-5" style={{ width: "18rem" }}>
                        <div class="card-body">
                          <h3 class="card-title">{val.pName}</h3>
                          <img
                            src={val.Profile}
                            class="card-img-top"
                            alt="party logo"
                          ></img>
                          <h4 class="card-text">{val.shortCode}</h4>
                          <br />

                          <button onClick={() => handalDelete(val)}>
                            Delete
                          </button>
                          <button onClick={() => setview(val)}>View</button>
                          <button onClick={handalUpdate}>Update</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Party;

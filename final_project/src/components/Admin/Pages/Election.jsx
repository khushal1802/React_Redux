import React, { useEffect, useRef, useState } from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import "../admin.css";
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ELECTION_PROGRESS, GET_ELECTION_PROGRESS, POST_ELECTION_PROGRESS, UPDATE_ELECTION_PROGRESS } from '../../../redux-saga/Admin/Election/ElectionAction';


function Election() {
  const name = useRef()
  const date = useRef();
  const [view, setview] = useState({});
  
const Election = useSelector((state) => state.ElectionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS });
  }, []);
  
  console.log(Election);
   const handalSubmit = () => {
     const data = {
       ElectionName: name.current.value,
       RegisterDate: date.current.value,
     };
     dispatch({
       type: POST_ELECTION_PROGRESS,
       payload: data,
     });
   };

   const handalDelete = (val) => {
     dispatch({
       type: DELETE_ELECTION_PROGRESS,
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
     dispatch({ type: UPDATE_ELECTION_PROGRESS, payload: view });
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
                      <h4 class="modal-title">Create E-Election</h4>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <div class="modal-body">
                      <form>
                        E-Election Name:
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
                        RegisterDate :
                        <br />
                        <input
                          className="mb-3"
                          type="date"
                          id="logo"
                          name="logo"
                          ref={date}
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
                {Election.ELECTION?.map((val, ind) => {
                  return (
                    <div className="col-4" key={ind}>
                      <div class="card mt-5" style={{ width: "18rem" }}>
                        <div class="card-body">
                          <h5 class="card-title">{val.ElectionName}</h5>
                          <p class="card-text">{val.RegisterDate}</p>
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

export default Election
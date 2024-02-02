import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PARTY_PROGRESS } from "../../../redux-saga/Admin/Party/PartyAction";
import { GET_ELECTION_PROGRESS } from "../../../redux-saga/Admin/Election/ElectionAction";
import {
  DELETE_VOTE_PROGRESS,
  GET_VOTE_PROGRESS,
  POST_VOTE_PROGRESS,
} from "../../../redux-saga/User/Vote/VoteAction";
import Swal from "sweetalert2";

function Vote() {
  const [Data, setData] = useState({
    election: "",
    party: "",
  });

  const Party = useSelector((state) => state.PartyReducer);
  const Election = useSelector((state) => state.ElectionReducer);
  const Vote = useSelector((state) => state.VoteReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS });
    dispatch({ type: GET_ELECTION_PROGRESS });
    dispatch({ type: GET_VOTE_PROGRESS });
  }, []);

  const inputHandel = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleConectParty = () => {
    if (Data.election && Data.party) {
      const payload = {
        election: Data.election,
        party: Data.party,
      };

      dispatch({ type: POST_VOTE_PROGRESS, payload });

      setData((prevData) => ({
        ...prevData,
        party: "",
      }));

      Swal.fire({
        title: "Connected!",
        text: "Party connected successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please select both election and party",
        icon: "error",
      });
    }
  };

  const handalDelete = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_VOTE_PROGRESS,
      payload: val,
    });
  };

  return (
    <>
      <div>
        <div className="container">
            <div className="p-4">
              <section className="charts mt-4">
                <div className="row">
                  <table
                    className="table table-hover"
                    style={{ boxShadow: "0px 3px 20px -15px" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">ElectionName</th>
                        <th scope="col">RegisterDate</th>
                        <th scope="col">Party Name</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Short Code</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Vote.data?.map((val, ind) => (
                        <tr key={ind}>
                          <td>{val.Election.ElectionName}</td>
                          <td>{val.Election.RegisterDate}</td>
                          <td>{val.Party.pName}</td>
                          <td>
                            <img
                              src={val.Party.Profile}
                              alt="party logo"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </td>
                          <td>{val.Party.shortCode}</td>
                          <td>
                            <button
                              className="btn btn-dark"
                              style={{ margin: "0px", marginRight: "15px" }}
                              onClick={() => handalDelete(val)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
        </div>
      </div>
    </>
  );
}

export default Vote;

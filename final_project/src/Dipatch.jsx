import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { GET_DATA_PROGRESS } from './redux-saga/Admin/Action/Action';


function Dipatch() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:GET_DATA_PROGRESS});
        }, []);
  return (
    <div>Dipatch</div>
  )
}

export default Dipatch
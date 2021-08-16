import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, getError } from "./errorSlice";

const Error = () => {
  const { errorMessage, retryHandler } = useSelector(getError);
  const dispatch = useDispatch();

  if (!errorMessage) {
    return null;
  }

  return (
    <div id="error-message-container">
      <p>{errorMessage}</p>
      <button
        onClick={() => {
          dispatch(retryHandler());
          dispatch(clearErrorMessage());
        }}
      >
        X
      </button>
    </div>
  );
};

export default Error;

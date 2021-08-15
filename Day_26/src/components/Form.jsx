import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstNameInput,
  updateLastNameInput,
} from "../redux/userForm/actions";

function Form() {
  const FirstName = useSelector((state) => state.firstName);
  const LastName = useSelector((state) => state.lastName);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Redux Form </h2>
      <form action=" ">
        FirstName:{" "}
        <input
          type="text"
          name="firstName"
          value={FirstName}
          onChange={(e) => dispatch(updateFirstNameInput(e.target.value))}
        />
        LastName:{" "}
        <input
          type="text"
          name="lastName"
          value={LastName}
          onChange={(e) => dispatch(updateLastNameInput(e.target.value))}
        />
        <h2>changes</h2>
        <p>FirstName:{FirstName}</p>
        <p>LastName:{LastName}</p>
      </form>
    </div>
  );
}

export default Form;

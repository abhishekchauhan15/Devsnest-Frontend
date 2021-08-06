import React from "react";
import { changeEmail, changeName } from "./actions/inputActions";
import { useDispatch } from "react-redux";
import Display from "./components/Display";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  return (
    <div className="cont">
      <input
        type="text"
        onChange={(e) => {
          changeName.payload = e.target.value;
          dispatch(changeName);
        }}
      />
      <br></br>
      <input
        type="text"
        onChange={(e) => {
          changeEmail.payload = e.target.value;
          dispatch(changeEmail);
        }}
      />
      <Display />
    </div>
  );
}

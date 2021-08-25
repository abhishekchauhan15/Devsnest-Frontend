import React, { useState } from "react";
import Posts from "./Post";
import "../Styles/CaloriePage.css";

function CaloriePage() {
  const [formData, setformData] = useState({
    title: "",
    calories: "",
  });

  const [arrData, setarrData] = useState([]);

  const [error, setError] = useState("");

  //this is a call back function
  const handleOnFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handeleOnSubmit = (e) => {
    const { title, calories } = formData;
    e.preventDefault();
    // console.log(title,calories)

    if (!title) {
      setError("Title is required");
      return;
    }

    if (!calories) {
      setError("Calories is required");
      return;
    }

    setError("");

    setarrData((arrData) => [...arrData, { title, calories }]);

    console.log(arrData);
    // console.log(setarrData)
    // console.log(formData);
  };

  return (
    <div>
      {/* <h2>{formData}</h2> */}

      <form>
        <input
          type="text" //for email @system
          value={formData.title}
          required
          name="title"
          placeholder="Item Name"
          onChange={handleOnFormDataChange}
        />

        <input
          type="number"
          value={formData.calories}
          required
          name="calories"
          placeholder="Calorie Amount"
          onChange={handleOnFormDataChange}
        />

        <p>{error}</p>

        <button className="submitBtn" type="submit" onClick={handeleOnSubmit}>
          Add Item{" "}
        </button>
        <Posts post={arrData} />
      </form>
    </div>
  );
}

export default CaloriePage;

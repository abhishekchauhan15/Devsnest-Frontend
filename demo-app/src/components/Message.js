import React, { useState } from "react";

const Todo = ({ todo }) => {
  return <p>{todo}</p>;
};

function Message() {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState(["complete day 18", "day 19"]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          // console.log(value);
        }}
        value={value}
      />
      <button
        onClick={() => {
            setTodo([...todos, value]);
          //   console.log(value);
          setValue("");
        }}
      >
        add
      </button>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}

export default Message;

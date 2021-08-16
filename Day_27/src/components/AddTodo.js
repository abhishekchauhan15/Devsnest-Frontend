import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../actions"

function AddTodo() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add your todos"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() =>{dispatch(addItem({
            title:item,
            done:false
        }));
        setItem("");
        console.log(item);
        }}>
        Add</button>
      </form>
    </div>
  );
}

export default AddTodo;

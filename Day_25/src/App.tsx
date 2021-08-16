import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counterSlice";
import { useFetchPersonQuery } from "./features/person/personSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchPersonQuery();

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(amountAdded(1))}>
            count is: {count}
          </button>
        </p>
        <div>RANDOM PERSON</div>
      </header>
    </div>
  );
}

export default App;

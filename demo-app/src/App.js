import React from "react";
import Greet from "./components/Greet";
import Counter from "./components/Counter";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Greet name="abhi" heroname="superman"> this is a test</Greet>
        <Greet name="abh" heroname="batman"/>
        <Greet name="ab" heroname="spiderman"/>

      {/* <Counter /> */}

      <Message />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>increase</button>
    </div>
  );
}

export default Counter;

//useState

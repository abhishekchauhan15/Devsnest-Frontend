import React from "react";

// function Greet(props) {
//     return (
//         <div>
//             <h1>hi {props.name} aka {props.heroname}</h1>
//             {props.children}
//         </div>
//     )
// }

// Destructuring props
function Greet(props) {
  const { name, heroname, children } = props;
  return (
    <div>
      <h1>
        hi {name} aka {heroname}
      </h1>
      {children}
    </div>
  );
}

// const Greet = (props) =>{
//     return (
//         <div>

//         </div>
//     )
// }

export default Greet;

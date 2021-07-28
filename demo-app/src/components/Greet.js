import React from 'react'

// function Greet() {
//     return (
//         <div>
//             <h1>hi</h1>
//         </div>
//     )
// }


const Greet = (props) =>{
    return (
        <div>   
            <h1>hi {props.name} aka {props.heroname}</h1>
            {props.children}
        </div>
    )
}

export default Greet


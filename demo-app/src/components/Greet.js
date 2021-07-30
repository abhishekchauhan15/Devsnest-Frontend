import React from 'react'

function Greet(props) {
    return (
        <div>
            <h1>hi {props.name} aka {props.heroname}</h1>
            {props.children}
        </div>
    )
}


// const Greet = (props) =>{
//     return (
//         <div>   
            
//         </div>
//     )
// }

export default Greet


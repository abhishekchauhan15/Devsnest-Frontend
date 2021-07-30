import React from 'react'

function FunClick() {
     function clickHandler(){
        alert('Clicked!');

     }
    // return (
    //     <div>
    //     <button onClick={ clickHandler }>Click Me </button>
            
    //     </div>
    // )

    return (
        <div>
        <button onClick={() => clickHandler() }>Click Me </button>
            
        </div>
    )
}

export default FunClick

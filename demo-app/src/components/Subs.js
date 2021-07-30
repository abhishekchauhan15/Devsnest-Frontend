import React, {useState} from 'react'

function Subs() {
    const [message , setMessage] = useState('Welcome Visitor')
    return (
        <div>
            <h2>{message}</h2>

        <button onClick={() => setMessage("thanks of subscribing")} >Subscribe</button>
            
        </div>
    )
}

export default Subs

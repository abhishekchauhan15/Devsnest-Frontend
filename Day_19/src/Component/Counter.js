import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
   
    return (
        <div>
        <button onClick={() =>  setCount(count + 1)}>{count}</button>
        <button onClick={() =>  setCount1(count1 + 1)}>{count1}</button>
        <button onClick={() =>  setCount2(count2 + 1)}>{count2}</button>
        <button onClick={() =>setCount3(count3 + 1)}>{count3}</button>
            
        </div>
    )
}

export default Counter

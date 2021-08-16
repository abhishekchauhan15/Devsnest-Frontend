import React, { useEffect, useState } from 'react'


function Api() {
    useEffect(()=>{
        fetchItems();

    }, [])

    const fetchItems = async() =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const post = await response.json()
        // const post_text =response.text();
        console.log(post , 'json');
        setItems(post)
    }

    const [items, setItems] = useState([]);


    return (
        <div>
        {
           items.map((el,index) => (
               <h1 key={index}>{el.title}</h1>
           ))
        

        }
        
            
        </div>
    )
}

export default Api

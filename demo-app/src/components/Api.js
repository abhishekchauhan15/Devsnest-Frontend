import React, { useEffect } from 'react'

function Api() {
    useEffect(()=>{
        fetchItems();

    })

    const fetchItems = async() =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const post = await response.json()
        // const post_text =response.text();
        console.log(post , 'json');
    }


    return (
        <div>
        
            
        </div>
    )
}

export default Api

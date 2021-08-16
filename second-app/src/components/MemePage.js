import React, {useState, useEffect} from 'react'

function MemePage() {
    const [meme, setMeme]=useState([])

    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems= async()=>{

       const response= await fetch("https://api.twitter.com/https://api.twitter.com/1.1/trends/closest.json?lat=37.781157&long=-122.400612831116.1/trends/place.json")
       const post =await response.json()
    //    console.log(post)
    //    setMeme(post.data.memes)
    setMeme(post.trends.name)
 

    }

    return (
        <div>
            <h1>Meme Page</h1>
            {/* <div className="meme">
            {
                meme.map((el, index) =>(
                <div key={index}>
                    <img src={el.url} alt="meme" />
                </div>
                ))

            }
            </div> */}
            
        </div>
    )
}

export default MemePage

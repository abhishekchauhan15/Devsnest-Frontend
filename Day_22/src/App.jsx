import {useEffect, useState} from 'react';
import logo from './logo.svg';
import "./App.css";
import Template from "./components/template";
import Meme from "./components/meme";

function App() {
  const [templates , setTemplates] = useState([]);
  const [meme , setMeme] = useState(null);
  useEffect(() => {
    fetch( "https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then((data) =>{
        setTemplates(data.data.memes);
      });
    },[]);

    return (
    <div className="App">
    <h1>Meme Generator</h1>
    {meme === null ? <Template templates ={templates}  setMeme={setMeme}/> :<Meme meme={meme} />}
    <Template templates={templates}/ >
    </div>  
  );
}

export default App;

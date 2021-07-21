import {useEffect, useState} from 'react';
import logo from './logo.svg';
import "./App.css";

function App() {
  const [templates , setTemplates] = useState([]);
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
    {
      templates.map(template => (
        <div key={template.id} className="template">
          <div  style ={{backgroundImage : `url(${template.url})`}}className="image"></div> 
        </div>
      ))}
    </div>  
  );
}

export default App;

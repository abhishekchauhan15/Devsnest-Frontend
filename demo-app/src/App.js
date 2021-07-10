import pic from './meme.jpg';
import './App.css';
//day 16
function App() {
  return (
    <div className="card">
        <img src={pic} className="App-meme" alt="meme" />
        <h1>This is a Meme </h1>
        <p>Best meme😏</p>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ChessBoard from './component/chessBoard';
import Header from "./component/header";

function App() {
  return (
    <div className="App">
     <Header/>
    <ChessBoard />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
// import {useState, useEffect} from 'react'
import {incNumber , decNumber} from './actions';
import {useDispatch , useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count =useSelector(state=>state.counter);
  return (  
    <div className="App">
   <button onClick={() =>{dispatch(decNumber())}}>-</button>
   <span>{count}</span>
   <button onClick={() => {dispatch(incNumber())}}>+</button>
    </div>
  );
}

export default App;

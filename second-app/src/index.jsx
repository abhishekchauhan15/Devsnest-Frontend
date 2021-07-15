import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const name = " abhishek ";
// const lname = "chauhan";
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// const link = "www.google.com";


// const test = {
//   color: "blue",
//   backgroundColor: "aqua"
// }

const cssStyle={
  color :"red"
}


let gratutide= "h";
let date =new Date(2020, 7, 14, 14);

let currTime=date.getHours();

if(currTime>=1 && currTime<12){
  gratutide="Good Morning "
  cssStyle.color="yellow";
}
else if(currTime>=12 && currTime<19){
  gratutide="Good Evening "
  cssStyle.color="orange";
}
else {
  gratutide="Good Night "
  cssStyle.color="black";
}




ReactDOM.render(
  <>
  {/* <h1 >{ `my name will display now : ${name}  ${lname} `}</h1>
  <p style={{color: "red"}}>{`current date: ${date}`}</p>
  <p style ={test}>{`current time is : ${time}`}</p>

  <h1 contentEditable="true">hi this is test</h1>
  <img src="https://picsum.photos/200/300" alt="sample" />
  <a href = {link} >
  <img src="https://picsum.photos/200/300" alt="sample" />

  </a> */}

<div>

  <h1> Hello Abhishek, <span style={cssStyle}> {gratutide}</span> </h1>
  

</div>


  </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

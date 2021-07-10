const input = document.querySelector("input");
const btn = document.querySelector(".addbtn");
const todocontainer = document.querySelector(".tdcont");
// const del=document.querySelectorAll(".del");
var todos = localStorage.getItem("todos");
// var arrdell=document.querySelectorAll(".del");
// console.log(todos)
let id = localStorage.getItem("lastid")
  ? JSON.parse(localStorage.getItem("lastid"))
  : 0;
var del;
if (todos === null) {
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
} else {
  todos = JSON.parse(localStorage.getItem("todos"));
  loadTodo();

  del = document.querySelectorAll(".del");
}
function loadTodo() {
  JSON.parse(localStorage.getItem("todos")).map((todo, index) => {
    const newtodo = document.createElement("div");
    newtodo.classList.add("newtodo");
    // console.log(todo.id);
    // newtodo.setAttribute("name",todo.id);
    todocontainer.appendChild(newtodo);
    newtodo.innerHTML = `<div class="todotext">${todo.title}</div>
        <button class="del" name=${todo.id}>Del</button>`;
    // let indexs=index;
  });
}

// function del() {
//     console.log(this)
//     // todos.splice(indexs,1);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
del.forEach((deletedbtn) => {
  deletedbtn.addEventListener("click", (e) => {
    // console.log(e.target);
    const todoid = e.target.getAttribute("name");
    console.log(todoid);

    todos = todos.filter((t) => {
      // console.log(t.id,todoid)
      // console.log(typeof(t.id))
      // console.log(typeof(todoid))
      // console.log(parseInt(t.id)!==parseInt(todoid))
      return parseInt(t.id) !== parseInt(todoid);
    });
    e.target.parentElement.remove();
    // console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(e.target.parentElement.firstChild.innerHTML)
    // localStorage.removeItem()
  });
});
btn.addEventListener("click", () => {
  console.log(todos);
  if (input.value != "") {
    const newtodo = document.createElement("div");

    newtodo.classList.add("newtodo");
    newtodo.innerHTML = `<div class="todotext">${input.value}</div>
        <button class="del" name=${id}>Del</button>`;
    newtodo.setAttribute("name", id);
    todocontainer.appendChild(newtodo);
    // const tempval=input.value;
    let temp = {
      title: input.value,
      done: false,
      id: id,
    };
    id++;
    localStorage.setItem("lastid", JSON.stringify(id));
    // console.log(todos)
    todos.push(temp);
    // console.log(todos);
    input.value = "";

    localStorage.setItem("todos", JSON.stringify(todos));
    newtodo.querySelector(".del").addEventListener("click", (e) => {
      // console.log(e.target);
      const todoid = e.target.getAttribute("name");
      console.log(todoid);
      todos = todos.filter((t) => {
        // console.log(t.id,todoid)
        // console.log(typeof(t.id))
        // console.log(typeof(todoid))
        console.log(parseInt(t.id) !== parseInt(todoid));
        return parseInt(t.id) !== parseInt(todoid);
      });
      e.target.parentElement.remove();
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    });
    // del.addEventListener("click",(e) =>{
    //     e.target.parentElement.remove();
    // })
  }
  input.value = "";
  // del=document.querySelectorAll(".del");
});

const newTodo = localStorage.getItem("todos");

// to use commands today:
// fetch(api)
// then(res=> res.json)
// then(data=>console.log(data.bio))

// showing time
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou >= 12) {
    pe = "PM";
  }
  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augest",
    "September",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  var values = [
    week[dname],
    months[mo],
    dnum.pad(2),
    yr,
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// quote api functions
var data;
let front = true;
const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const button = document.querySelectorAll(".new-quote");
console.log(button);
console.log({ texts });
// const cards=document.querySelectorAll(".thecard")

const blockFront = document.querySelector(".front");
const blockBack = document.querySelector(".back");

// need to fix this but let's see if it works
const authorFront1 = authors[0];
const authorBack1 = authors[1];

const textFront1 = texts[0];
const textBack1 = texts[1];

const authorFront2 = authors[2];
const authorBack2 = authors[3];

const textFront2 = texts[2];
const textBack2 = texts[3];

const authorFront3 = authors[4];
const authorBack3 = authors[5];

const textFront3 = texts[4]
const textBack3 = texts[5];

const authorFront4 = authors[6];
const authorBack4 = authors[7];

const textFront4 = texts[6];
const textBack4 = texts[7];


const displayQuote = () => {
    
  let index = Math.floor(Math.random() * data.length);
  let quote = data[index].text;
  let author = data[index].author;
  
  if (quote.length>90){
      displayQoute()
  }

  if (!author) {
    author = "Anonymous";
  }
  if (front) {
    textFront1.innerHTML = quote;
    authorFront1.innerHTML = "-" + author;
    
  } else {
    textBack1.innerHTML = quote;
    authorBack1.innerHTML = "-" + author;
    
  }

  front = !front;

};

const displayQuote2 = () => {
    
  let index = Math.floor(Math.random() * data.length);
  let quote = data[index].text;
  let author = data[index].author;
  if (quote.length>90){
      displayQoute2()
  }

  if (!author) {
    author = "Anonymous";
  }
  if (front) {
    textFront2.innerHTML = quote;
    authorFront2.innerHTML = "-" + author;
    
  } else {
    textBack2.innerHTML = quote;
    authorBack2.innerHTML = "-" + author;
  }

  front = !front;

};
const displayQuote3 = () => {
    
  let index = Math.floor(Math.random() * data.length);
  let quote = data[index].text;
  let author = data[index].author;
  if (quote.length>90){
      displayQoute3()
  }

  if (!author) {
    author = "Anonymous";
  }
  if (front) {
    textFront3.innerHTML = quote;
    authorFront3.innerHTML = "-" + author;
    
  } else {
    textBack3.innerHTML = quote;
    authorBack3.innerHTML = "-" + author;
  }

  front = !front;

};
const displayQuote4 = () => {
    
  let index = Math.floor(Math.random() * data.length);
  let quote = data[index].text;
  let author = data[index].author;
  if (quote.length>90){
      displayQoute4()
  }

  if (!author) {
    author = "Anonymous";
  }
  if (front) {
    textFront4.innerHTML = quote;
    authorFront4.innerHTML = "-" + author;
    
  } else {
    textBack4.innerHTML = quote;
    authorBack4.innerHTML = "-" + author;
  }

  front = !front;

};


fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  }) // Getting the raw JSON data
  .then(function (data) {
    this.data = data;
    console.log(data)
    displayQuote();
    displayQuote2();
    displayQoute3();
    displayQoute4();
    
  });

button.forEach((fbutton,index) => {
  fbutton.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.toggle("rotate");
    if (index<2){
    displayQuote();}
    else if (2<=index<4){
      displayQoute2();
    }
    else if (4<=index<6){
      displayQoute3();
    }
    else{
      displayQoute4();
    }
  });
});

let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];



let question_count=0; 
let points=0;
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;


let mytime = setInterval(function(){
  time++;
  
  if(seconds < 59) {
      seconds++;
  } else {
      seconds = 0;
      minutes++;
  }
  let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
  let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
  document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
}, 1000);


window.onload=function(){
    show(question_count);
}

function next(){
    if(question_count==questions.length-1){
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href="end.html"
      return ;
        

    }
    let user_answer=document.querySelector("li.option.active").innnerHTML;

    //check user answer

    if(user_answer == questions[question_count].answer ){
        points += 10
        sessionStorage.setItem("points", points )
       
    }
    console.log(points);
    
    
    question_count++
    show(question_count)


}

function show(count){
    let question=document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
    // console.log(question[count])

    // question.innerHTML="<h2>"+ questions[count].question +"</h2>"
    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>'
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
toggleActive();

}


function toggleActive(){
    let option=document.querySelectorAll("li.option");

    for(let i=0; i<option.length; i++){
        option[i].onclick=function(){
            for(let i=0; i<option.length; i++){
                if(option[i].classList.contains("active"))
                option[i].classList.remove("active")
            }
            option[i].classList.add("active");

        }
    }
}




 


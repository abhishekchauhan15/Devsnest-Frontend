let screen=document.getElementById('screen');
var buttons=document.querySelectorAll('button');
var number=document.querySelector("num")
let screenValue=' ';
var preBtn='';

for(item of buttons ){
    item.addEventListener('click', (e) => {
        buttonText=e.target.innerText;

        // console.log(buttonText);

        
        if(buttonText=='X' && preBtn!="X"){
            buttonText='*';
            preBtn="X"
            // console.log(preBtn);
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='+'  && preBtn!="+"){
            buttonText='+';
            preBtn="+"
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='-'  && preBtn!="-"){
            buttonText='-';
            preBtn="-"
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='/'  && preBtn!="/"){
            buttonText='/';
            preBtn="/"
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='.'  && preBtn!="."){
            buttonText='.';
            preBtn="."
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }

        else if(buttonText=='C'){
            screenValue=" ";
            screen.value=screenValue;
        }

        else if(buttonText=== "1" || buttonText=== "2" ||buttonText=== "3" ||buttonText=== "4" ||buttonText=== "5" ||buttonText=== "6" ||buttonText=== "7" ||buttonText=== "8" ||buttonText=== "9" ||buttonText=== "0" ){
            screenValue+=buttonText;
            screen.value=screenValue;

        }
    })
}







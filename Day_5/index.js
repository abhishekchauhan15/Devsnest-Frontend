let screen=document.getElementById('screen');
var buttons=document.querySelectorAll('button');
let screenValue=' ';

for(item of buttons ){
    item.addEventListener('click', (e) => {
        buttonText=e.target.innerText;
        console.log(e);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;


        }
        else if(buttonText=='C'){
            screenValue=" ";
            screen.value=screenValue;

        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else {
            screenValue+=buttonText;
            screen.value=screenValue;

        }
    })
}


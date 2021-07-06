let screen=document.getElementById('screen');
var buttons=document.querySelectorAll('button');
let screenValue=' ';
var preBtn=' ';

for(item of buttons ){
    item.addEventListener('click', (e) => {
        buttonText=e.target.innerText;
        // console.log(e);

        
        // if((preBtn=== "+") || (preBtn === "-" )|| (preBtn=== "X")|| (preBtn=== "/" )){
        //         console.log("yes");
        //     }
        
         if(buttonText=='X'){
            buttonText='*';
            preBtn="X"
            screenValue+=buttonText;
            screen.value=screenValue;


        }
        else if(buttonText=='C'){
            screenValue=" ";
            screen.value=screenValue;

        }
        else if(buttonText=='+'){
            buttonText='+';
            preBtn="X"
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='-'){
            buttonText='-';
            preBtn="-"
            screenValue+=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='/'){
            buttonText='/';
            preBtn="/"
            screenValue+=buttonText;
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







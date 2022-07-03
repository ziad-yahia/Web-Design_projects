
let btn= document.getElementById("dosomethig");

function makeit(){
   
    let num1=parseFloat(document.getElementById("first_fild").value) ;
    let num2=parseFloat(document.getElementById("second_feild").value);
    let result= document.getElementById("result");
    let operation = document.getElementById("operation").value;


    // result.innerHTML=(num1+num2);
       
        if(operation=="+"){

            result.innerHTML=(num1+num2);
        }
        else if(operation=="-"){

            result.innerHTML=(num1-num2);
        }else if(operation=="/"){

            result.innerHTML=(num1/num2);
        }else if(operation=="*"){

            result.innerHTML=(num1*num2);
        }
        

  
}

btn.addEventListener("click",makeit);
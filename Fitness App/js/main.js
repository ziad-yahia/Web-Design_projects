let span = document.querySelector(".up");

window.onscroll=()=>{

    // console.log(window.scrollY);
       // icone go up 
   if(this.scrollY >= 400)
   {
       span.classList.add("show")
   }else{

       span.classList.remove("show")
   }  ;

}

// show password
let show= document.getElementById('pws');
let eye=document.getElementById('eye');

function pswshow(){
 
    if(show.type=="password")
    {
       
        show.type="text"
        eye.className="fa-solid fa-eye"
        if( eye.className=="fa-solid fa-eye"){
        eye.style.color='red';
        }
            
    }
    
    else{
        show.type="password"
        eye.className="fa-solid fa-eye-slash"
        if (eye.className=="fa-solid fa-eye-slash") {
            eye.style.color='black';
        }
    }
}
eye.onclick=pswshow ;

   
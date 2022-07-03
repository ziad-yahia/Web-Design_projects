var gallary=["images/about.jpg","images/banner.jpg","images/logo.png","images/n1.jpg","images/n2.jpg"];

var slides=document.getElementById("slider");



let counter=0;

function move(){

    slides.style=`background:url(${gallary[counter]})  no-repeat center/cover`;
    counter++;
    if(counter == gallary.length )
    counter=0;
   

}
setInterval(move,2000);




var reverse=document.querySelector(".reverse");
var gofront=document.querySelector(".gofront");
var curosal=document.getElementById("curosal");
var i = 0 ;
function cero(){

    curosal.style.background=`url(${gallary[i]})  no-repeat center/cover`;
  
   
}
setInterval(cero,1000);


reverse.addEventListener("click",()=>{
    i--;
    if(i <0)
    i=0;
});

gofront.onclick=function(){
    i++;
     if(i == gallary.length)
    i=0;
};
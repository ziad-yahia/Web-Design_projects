let gallary=["images/pexels-photo-1097456.jpeg","images/pexels-photo-853199.jpeg","images/wallpaperflare.com_wallpaper9.jpg"];
let curo=document.getElementById("curo");
let counter=0;

function move (){

    curo.style=`background:url(${gallary[counter]}) no-repeat center/cover`;
    // curo.style.backgroundAttachment="fixed ";
    counter++;
    if(counter == gallary.length )
    counter=0;

   
    
}
setInterval(move,2000);


let progress=document.querySelector(".progress");
let spans = document.querySelectorAll(".porg-val-inner");
let span = document.querySelector(".up");
let nav_bar=document.getElementById("nav_bar");


window.onscroll=()=>{

    // console.log(window.scrollY);
   if(this.scrollY >= progress.offsetTop-500)
   {
       spans.forEach((span)=>{
        span.style.width= span.dataset.width;
    });
   }
   else{
    spans.forEach((span)=>{
        span.style.width= 0;
    });
   }

   
   // icone go up 
   if(this.scrollY >= 400)
   {
       span.classList.add("show")
   }else{

       span.classList.remove("show")
   }  ;
    // this.scrollY >=500 ? span.classlist.add("show"):span.classlist.remove("show");


    //    nav bar
    if(this.scrollY >= 518)
    {
        nav_bar.style.backgroundColor="#EEE";
        
    }else{
        nav_bar.style.backgroundColor="transparent";
    };
    // this.scrollY >=518 ? nav_bar.style.backgroundColor="gray":nav_bar.style.backgroundColor="transparent";
       
};

span.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",        
    });
};

// ----------------preloder--------------
let load=document.getElementById("loder");

window.addEventListener("load",function(){

    load.style.display="none";
});

// fetch()
// .then()
// .then()    


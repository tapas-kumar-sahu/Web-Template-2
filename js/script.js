// Header Scroll
let nav = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop > 30){
        nav.style.background = "#242348";
    }
    else{
        nav.style.background = "transparent";
    }
})
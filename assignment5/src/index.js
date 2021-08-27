const body = document.querySelector("body");
const h2 = document.querySelector("h2");

h2.style.color = "white";


function resize(){
    let width_size = window.innerWidth;
    if(width_size < 600){
        body.style.background = "blue";
    }
    else if(width_size < 1200){
        body.style.background = "purple";
    }
    else{
        body.style.background = "#cca518";
    }
}

resize();
window.addEventListener("resize",resize);
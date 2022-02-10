let bars = document.querySelector(".bars");
let links = document.querySelector(".appear");
var i = 1;


bars.addEventListener('click', (e) =>{
    if (i % 2 != 0){
        links.style.setProperty('top', '0');
        i++;
    }else{
        links.style.setProperty('top', '-1200px');
        i++;
    }
}) 
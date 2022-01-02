const imgshow = document.querySelector(".show");
const imghide = document.querySelector(".hide");
const pass = document.getElementById("password");

function showorhide(objshow,objhide,passnum,selection){
    objshow.style.setProperty('display','inline-block');
    objhide.style.setProperty('display','none');
    passnum.type = selection;
}

/*  Ejecutando funciones del hide y show  */
imgshow.addEventListener("click", (e)=>{
    showorhide(imghide,imgshow,pass,"password");
});

imghide.addEventListener("click",(e)=> {
    showorhide(imgshow,imghide,pass,"text");
})


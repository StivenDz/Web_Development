const teclas = document.querySelectorAll(".teclas");
const audios = document.querySelectorAll(".audio");
window.addEventListener("keypress", (e) => {
  for (let index of teclas) {
    let valor = index.getAttribute("data-tecla");
    if (valor === e.key) {
      index.style.transform = "scale(.96)";
      index.style.boxShadow = "0 0 20px rgb(0, 124, 207)";
      index.style.border = "2px solid rgb(0, 124, 207)";
    }
    reproducir(e);
  }
});

function reproducir(e) {
  for (let a of audios) {
    let value = a.getAttribute("data-key");
    if (value === e.key) {
      a.play();
    }
  }
}

window.addEventListener("keyup", () => {
  for (let i of teclas) {
    i.style.transform = "scale(1)";
    i.style.boxShadow = "none";
    i.style.border = "none";
  }
});

addEventListener("mousemove", (e) => {
  var x = e.pageX / window.innerWidth - 0.5;
  var y = e.pageY / window.innerHeight - 0.5;
  box_piano.style.transform = `rotateX(${y * 55 + 60}deg) rotateZ(${
    -x * 360 + 35
  }deg) translateZ(-6vw)`;
});
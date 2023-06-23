/* aparecer imagem de acordo com o scroll */
window.addEventListener("scroll", function () {
  var imgDiv = document.querySelector(".imagem-chamada2");
  var imgOffset = imgDiv.offsetTop;
  var imgHeight = imgDiv.offsetHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
    imgDiv.classList.add("fade-in");
  }
});

window.addEventListener("scroll", function () {
  var imgDiv = document.querySelector(".imagem-esquerda");
  var imgOffset = imgDiv.offsetTop;
  var imgHeight = imgDiv.offsetHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
    imgDiv.classList.add("fade-in");
  }
});

window.addEventListener("scroll", function () {
  var imgDiv = document.querySelector(".imagem-direita");
  var imgOffset = imgDiv.offsetTop;
  var imgHeight = imgDiv.offsetHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
    imgDiv.classList.add("fade-in");
  }
});

window.addEventListener("scroll", function () {
  var imgDiv = document.querySelector(".paragrafo-3");
  var imgOffset = imgDiv.offsetTop;
  var imgHeight = imgDiv.offsetHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
    imgDiv.classList.add("fade-in");
  }
});

function menuHamburguer() {
  const navmobile = document.getElementById("navmobile");
  if (navmobile.style.display == "block") {
    setTimeout(function () {
      navmobile.style.display = 'none';
    }, 500);
    navmobile.classList.remove("subir");
    navmobile.classList.add("descer");
  }
  else {
    navmobile.style.display = "block"
    navmobile.classList.remove("descer");
    navmobile.classList.add("subir");

  }


}
function trocarImg() {

  var imagemTroca = document.getElementById("hamburguer");

  if (imagemTroca.src.endsWith("menu.svg")) {
    imagemTroca.src = "imagens/excluir.png";
  } else {
    imagemTroca.src = "imagens/menu.svg";
  }
}












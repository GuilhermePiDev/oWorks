/* aparecer imagem de acordo com o scroll */
window.addEventListener("scroll", function() {
    var imgDiv = document.querySelector(".imagem-chamada2");
    var imgOffset = imgDiv.offsetTop;
    var imgHeight = imgDiv.offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
        imgDiv.classList.add("fade-in");
    }
});

window.addEventListener("scroll", function() {
    var imgDiv = document.querySelector(".imagem-esquerda");
    var imgOffset = imgDiv.offsetTop;
    var imgHeight = imgDiv.offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
        imgDiv.classList.add("fade-in");
    }
});

window.addEventListener("scroll", function() {
    var imgDiv = document.querySelector(".imagem-direita");
    var imgOffset = imgDiv.offsetTop;
    var imgHeight = imgDiv.offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
        imgDiv.classList.add("fade-in");
    }
});

window.addEventListener("scroll", function() {
    var imgDiv = document.querySelector(".paragrafo-3");
    var imgOffset = imgDiv.offsetTop;
    var imgHeight = imgDiv.offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= imgOffset - window.innerHeight + imgHeight * 0.5) {
        imgDiv.classList.add("fade-in");
    }
});


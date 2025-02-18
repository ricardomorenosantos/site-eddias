// Seleciona o header
const header = document.querySelector("header");

// Função para mudar a cor do menu ao rolar a página
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Menu Mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// Seleciona os elementos
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

// Função para trocar imagem
function changeImage(next = true) {
    images[currentIndex].classList.remove("active");

    if (next) {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    images[currentIndex].classList.add("active");
}

// Troca automática a cada 4 segundos
let autoSlide = setInterval(changeImage, 4000);

// Botões de navegação manual
nextBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    changeImage(true);
    autoSlide = setInterval(changeImage, 4000);
});

prevBtn.addEventListener("click", () => {
    clearInterval(autoSlide);
    changeImage(false);
    autoSlide = setInterval(changeImage, 4000);
});

document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada.");
        this.reset(); // Limpa o formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

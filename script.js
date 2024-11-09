// Obtém o botão "Voltar ao topo"
const backToTopBtn = document.getElementById('backToTopBtn');

// Quando o usuário rolar a página
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // Exibe o botão
        backToTopBtn.style.opacity = 1; // Torna o botão visível
    } else {
        backToTopBtn.style.display = "none"; // Esconde o botão quando está no topo
    }
};

// Função para rolar a página até o topo
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


let currentIndex = 0; // Índice da imagem atual

// Função para mover o carrossel
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex += step;

    // Garante que o índice fique dentro do intervalo
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // Move o carrossel para a imagem desejada
    const offset = -currentIndex * 100; // Calcula o deslocamento das imagens
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

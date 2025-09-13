// Aguarda o conteúdo da página ser totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos que vamos manipular
  const botaoSaibaMais = document.querySelector(".btnSaibaMais");
  const fraseTransicao = document.querySelector(".fraseTransicao");

  // Adiciona um "ouvinte" de evento de rolagem na janela
  window.addEventListener("scroll", function () {
    // Verifica se a posição da rolagem vertical é maior que 100 pixels
    if (window.scrollY > 100) {
      // Se o usuário rolou para baixo:
      // Esconde o botão e mostra a frase
      botaoSaibaMais.classList.add("hidden");
      fraseTransicao.classList.remove("hidden");
    } else {
      // Se o usuário está no topo da página:
      // Mostra o botão e esconde a frase
      botaoSaibaMais.classList.remove("hidden");
      fraseTransicao.classList.add("hidden");
    }
  });
});

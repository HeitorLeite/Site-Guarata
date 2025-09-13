document.addEventListener("DOMContentLoaded", function () {
  const botaoSaibaMais = document.querySelector(".btnSaibaMais");
  const fraseTransicao = document.querySelector(".fraseTransicao");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      botaoSaibaMais.classList.add("hidden");
      fraseTransicao.classList.remove("hidden");
    } else {
      botaoSaibaMais.classList.remove("hidden");
      fraseTransicao.classList.add("hidden");
    }
  });
});

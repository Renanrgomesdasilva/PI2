document.addEventListener("DOMContentLoaded", function() {
  window.onscroll = function() {
    const header = document.getElementById("header");

    // Verifica se o usuário rolou mais de 50px
    if (window.scrollY > 50) {
      header.classList.add("rolagem"); // Adiciona a classe 'rolagem'
    } else {
      header.classList.remove("rolagem"); // Remove a classe 'rolagem'
    }
  };
});

  
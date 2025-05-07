// Função para abrir o modal
function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";  // Exibe o modal de forma centralizada
  modalImg.src = img.src;  // Define a imagem do modal
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";  // Esconde o modal
}

// Garantir que o modal não seja aberto automaticamente
window.onload = function() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";  // Certifique-se de que o modal esteja oculto ao carregar a página
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  var modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";  // Fecha o modal se o fundo for clicado
  }
};
// script.js

// Adiciona um event listener ao botão
document.getElementById("mostrarPares").addEventListener("click", function() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o conteúdo anterior

  // Loop for para percorrer os números de 1 a 10
  for (let i = 1; i <= 10; i++) {
    // Condicional para verificar se o número é par
    if (i % 2 === 0) {
      // Se o número for par, adiciona ao resultado
      resultado.innerHTML += i + "<br>";
    }
  }
});

const prompt = require('prompt-sync')()

const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativa
let tentativas = 0

while (tentativa !== numeroSecreto) {
  tentativa = parseInt(prompt("Adivinhe o número de 1 a 100: "))
  tentativas++;

  if (isNaN(tentativa)) {
    console.log("Digite um número válido.")
  } else if (tentativa < numeroSecreto) {
    console.log("Mais alto!")
  } else if (tentativa > numeroSecreto) {
    console.log("Mais baixo!")
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s)!`)
  }
}


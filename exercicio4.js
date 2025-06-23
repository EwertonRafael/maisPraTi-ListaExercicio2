const prompt = require('prompt-sync')()

function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para números negativos")
  if (n === 0) return 1
  return n * fatorial(n - 1)
}
const numero = parseInt(prompt("Digite um número para calcular o fatorial: "))
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`)
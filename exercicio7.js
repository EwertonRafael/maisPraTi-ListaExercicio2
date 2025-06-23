function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(item => item.nome)
}
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 80 },
  { nome: "Monitor", preco: 400 }
]
console.log(nomesOrdenadosPorPreco(produtos))

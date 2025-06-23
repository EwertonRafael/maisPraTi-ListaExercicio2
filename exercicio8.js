function agruparPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.cliente]) {
      acumulador[venda.cliente] = 0
    }
    acumulador[venda.cliente] += venda.total
    return acumulador
  }, {})
}
const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "Carlos", total: 50 },
  { cliente: "Ana", total: 80 }
]
console.log(agruparPorCliente(vendas))

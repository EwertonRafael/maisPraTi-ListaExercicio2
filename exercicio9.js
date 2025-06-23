function paresParaObjeto(pares) {
  const obj = {}
  for (const [chave, valor] of pares) {
    obj[chave] = valor
  }
  return obj
}
function objetoParaPares(obj) {
  const pares = []
  for (const chave in obj) {
    pares.push([chave, obj[chave]])
  }
  return pares
}
console.log(paresParaObjeto([["a", 1], ["b", 2]]))
console.log(objetoParaPares({ a: 1, b: 2 }))    

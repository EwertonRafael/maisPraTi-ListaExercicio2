function palavrasUnicas(texto) {
    const palavras = texto.split(" ")
    const unicas = []
    for (let i = 0; i < palavras.length; i++) {
        let count = 0
        for (let j = 0; j < palavras.length; j++) {
            if (palavras[i] === palavras[j]) count++
        }
        if (count === 1) unicas.push(palavras[i])
    }
    return unicas
}
const texto = "olá olá mundo mundo"
console.log(palavrasUnicas(texto))
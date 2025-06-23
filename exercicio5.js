function debounce(fn, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), delay)
  }
}
const debounceFunction = debounce(console.log, 5000)
debounceFunction("Mensagem 1")
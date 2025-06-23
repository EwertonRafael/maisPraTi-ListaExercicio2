function memoize(fn) {
  const cache = new Map()
  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) return cache.get(key)
    const result = fn.apply(this, args)
    cache.set(key, result)
    return result
  }
}
function slowFunction(num) {
  console.log('Calculando...')
  return num * 2
}
const memoizedFunction = memoize(slowFunction)
console.log(memoizedFunction(6))
console.log(memoizedFunction(6))
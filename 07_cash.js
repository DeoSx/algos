const factorial = (n) => {
  let result = 1
  while (n !== 1) {
    result *= n
    n -= 1
  }
  return result
}

const cashFunction = (fn) => {
  const cash = {}

  return function (n) {
    if (cash[n]) {
      console.log('Value from cash', cash[n])
      return cash[n]
    }
    let result = fn(n)
    cash[n] = result
    console.log('Not cash', result)
    return result
  }
}

const cashFactorial = cashFunction(factorial)

cashFactorial(2)
cashFactorial(5)
cashFactorial(9)
cashFactorial(3)
cashFactorial(2)
cashFactorial(7)
cashFactorial(9)
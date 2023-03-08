function fibonacci(num) {
    if (num <= 1) {
      return 1;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2)
    }
  }
  
  function verificaFibonacci(num) {
    let i = 0;
    let fib = fibonacci(i);
  
    while (fib <= num) {
      if (fib === num) {
        return `${num} pertence à sequência de fibonacci.`
      }
      i++
      fib = fibonacci(i);
    }
  
    return `${num} não pertence à sequência de fibonacci.`
  }
  
let num = 2

console.log(fibonacci(num))
console.log(verificaFibonacci(num))
  
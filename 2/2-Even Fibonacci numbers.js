const fibo = [1, 1]

let i = 0
while (++i) {
  const fiboNext = fibo[i] + fibo[i - 1]
  if (fiboNext > 4000000) {
    break
  }
  fibo.push(fiboNext)
}

console.log(eval(fibo.map((e) => (e % 2 === 0 ? e : 0)).join('+')))

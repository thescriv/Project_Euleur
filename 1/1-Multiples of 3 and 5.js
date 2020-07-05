const res = []
for (let i = 0; i < 1000; i++) {
  i % 3 === 0 || i % 5 === 0 ? res.push(i) : 0
}

console.log(res)
console.log(eval(res.join('+')))

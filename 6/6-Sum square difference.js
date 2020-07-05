const res = { sum: [], sqrt: [] }

for (let i = 1; i < 101; i++) {
  res.sum.push(i**2)
  res.sqrt.push(i)
}

const sum = eval(res.sum.join('+'))
const sqrt = eval(res.sqrt.join('+')) ** 2

console.log(sum)
console.log(sqrt)

console.log(sqrt - sum)

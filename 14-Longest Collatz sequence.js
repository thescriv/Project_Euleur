let total = 0

function collatz(n) {
  let k = 1
  while (n !== 1) {
    n % 2 ? n = (n * 3) + 1 : (n = n / 2)
    k++
  }
  return (k)
}

for (let i = 1; i < 999999; i++) {
  const res = collatz(i)
    total = res > total ? res : total
}

console.log(total)
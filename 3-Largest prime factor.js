const res = []

for (let i = 2, n = 600851475143; n > 10; i++) {
  if (n % i === 0) {
    n /= i
    res.push(i)
  }
}

console.log(res)

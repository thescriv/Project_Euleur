let sum = 0

function isPrime(n) {
  for (let i = 2; i < n -1; i++) {
    if (n % i === 0) return false
  }
  return true
}

for (let i = 2; i < 2000000; i++) {
  if (isPrime(i)) sum += i
}

console.log(sum)

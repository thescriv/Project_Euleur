const prime = []

function isPrime(n) {
    for (let i = 2; i < n -1; i++) {
      if (n % i === 0) return false
    }
    return true
  }

for (let i = 2; i; i++) {
  if (prime.length === 10003) {
    console.log(prime)
    console.log(prime[10000])
    break ;
  }
  if (isPrime(i)) {
      prime.push(i)
  }
}
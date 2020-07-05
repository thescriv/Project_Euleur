let a, b, c
for (a = 0; a < 250; a++) {
  for (b = a + 1; b < 500; b++) {
    for (c = b + 1; c < 500; c++) {
      if (a ** 2 + b ** 2 === c ** 2 && a + b + c === 1000) {
        console.log(a, b, c, a * b * c)
      }
    }
  }
}


let a, b

for (a = 999*999; a>10000; a--) {
    const p = a.toString()
    if (p == [...p].reverse().join('')) {
        console.log('IS PALINDROME', p)
        for(let d = 999; d > 100; d--) {
            if (a % d == 0 && (a/d).toString().length===3) {
                console.log(p, d, a/d)
                return ;
            }
        }
    }
}

//906609 993 913
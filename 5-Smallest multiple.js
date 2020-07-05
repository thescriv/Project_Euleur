let a = new Array(20).fill(0)

console.log(a)

for (let i = 1; i; i++) {
    let res = a.map( (_,n) => i % n).filter(e=>e===0)

    if (res.length === 19) {
        console.log(i)
        break ;
    }
}
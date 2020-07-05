let a = new Array(100).fill(0).map( (_,i) => i+1)
console.log(a)

const res = eval([...eval( a.join('*') ).toString().replace('.','').split('e')[0]].join('+'))

console.log(res)
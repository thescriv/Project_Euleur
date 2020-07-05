console.log(2**1000)
console.log( eval(  [...(2**1000).toString().replace('.','').split('e')[0]].join('+') ) )
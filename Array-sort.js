let n = [40, 1, 5, 200];
//sort string
console.log(n.sort())
//sort with compare function,array elements are sorted according to the return value of the compare function
console.log(n.sort((a,b)=>a-b))

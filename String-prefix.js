ar=["ab","abc","abcd"]

let i=0;
for(i=1;i<=ar[0].length;i++){
var pre=ar[0].substring(0,i)
if(!ar.every(e=>e.startsWith(pre))) break;
}
console.log(ar[0].substring(0,i-1));

const a1=[1,2,6,4,5]
const k=3
var klargest=[]
function max(a,k){
let max=a[0];
let index=0;
for (let i=0; i<a1.length;i++){
    if (a[i]>max && !k.includes(a[i])){
        max=a[i];
        index=i;
    }
}
return max;
}
for (let j = 0; j<k; j++){
   klargest.push(max(a1,klargest ))
}
console.log(klargest[k-1]);

/*using every to compare every element
using string to array
using reverse */
arr1="aaa".split("")
arr2=arr1.reverse()
console.log(arr1.every((e,index,arr2)=>e=arr2[index]))

//option1
var allPal=[];
function getPal(str){
    let allPal=[];
    for (let i=0; i<str.length;i++){
        for (let j=str.length-1; j>i;j--){
            if (isPal(str,i,j)) allPal.push(str.slice(i,j+1));
        }
    }
    return allPal
}
    
function isPal(str,l,r){
    if(l>=r) return true;
    if (str.charAt(l)!=str.charAt(r)) return false;
    return isPal(str,l+1,r-1);
}


console.log(getPal("abbaergttgre"));

//option2
a="abcba".split("")
function isPal(a){
for (let i=0;i<a.length/2;i++){
    if (a[i]!=a[a.length-1-i]) return false
}
return true
}
console.log(isPal(a))

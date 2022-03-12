a="abcd".split("")
function generateSub(a){
    let sub=a[0];
console.log(sub) 
for (let i=1;i<a.length;i++){
     sub=sub.concat(a[i]);
     console.log(sub);
}
if(a.length>1) generateSub(a.slice(1,a.length));
}
generateSub(a)

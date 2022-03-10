//find element startsWith character and remove it
a=["12","21","3"]
for (let k of a.keys()){
 if (a[k].startsWith("1")) console.log(a.splice(k,1));
}

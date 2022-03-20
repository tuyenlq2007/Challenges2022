//find element startsWith character and remove it
a=["12","21","3"]
for (let k of a.keys()){
 if (a[k].startsWith("1")) console.log(a.splice(k,1));
}
//binary search
//Binary search element in sorted array
a=[1,2,3,4,5,6,7];
t=3;
l=0;
r=a.length;
m=Math.floor((l+r)/2)
while (l<r && a[m]!=t){
m=Math.floor((l+r)/2);
if (a[m]>t) r=m;
if (a[m]<t) l=m;
}
console.log(m);

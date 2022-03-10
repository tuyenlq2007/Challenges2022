a = [5,1,1, 2, 3,4];
c=[5,6];
for (let d of c){
b=a.find(a=>a==d);
console.log(b==null?"not found":b);
}


//find index of sub array
arr = [4,3,2,1,2,1,1,2,3,4];
subarr=[1,2,1,1];
let i=0;
let j=0;
while(i< arr.length-1){
let found=true;
for (j = 0; j < subarr.length; j++) {
    if (arr[i+j] != subarr[j]) break;
}

if (j==subarr.length) console.log (i);
i++;
}

    
a=[1,4,3,2,5,7,9]
console.log(a)
count=[]
//create count array
let max=0;
for (let t=0; t<a.length;t++ ){
 if(a[t]>max) max=a[t];
}
//update count array with 0
for(let k=0;k<max+1;k++){
    count.push(0);
}
console.log(count);
//count element and update to count array
for (let i=0;i<a.length;i++){
    let ct=0;
    for(j=0;j<a.length;j++){
       if (a[i]==a[j]) ct++;
    }
    count[a[i]]=ct;
}
console.log(count);

//calculate the sum
for(let i=1;i<count.length;i++){
    count[i]=count[i]+count[i-1];
}
console.log(count);

//print sort
sorted=[]
for(i=0;i<a.length;i++){
    sorted[count[a[i]]-1]=a[i];
}
console.log(sorted)

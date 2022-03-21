More than n/k Occurences of element in array
“Given an array of N integers, and an integer K. Write a program to find all the elements in an array that appear more than n/k times.”

//option2 use Map
a=[1,2,3,3,6,7];
m=new Map();

for (let i=0; i<a.length; i++){
  let c=1;
  if (m.has(a[i])) c=c+m.get(a[i])
  m.set(a[i],c);
}
console.log (m);

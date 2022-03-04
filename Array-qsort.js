

function partition(A, low, high){
  let pivot = A[high];
  
  //temp pivot index
  let i=low-1;
  for (let j=low; j<high; j++){
    if (A[j] <= pivot){
        //move i
        i=i+1;
        //swap A[i] with A[j] , move j to the lowest
        let temp= A[i];
        A[i]=A[j];
        A[j]=temp;
    }
  }
  i = i + 1;
  //swap A[i] with A[high]
    temp= A[i];
    A[i]=A[high];
    A[high]=temp;
  return i;
}
let A=[5,4,7,2,1,3];
function qsort(a,lo,hi){
    if (a.length>1){
    p=partition(a,lo,hi);
    if (p-1 > lo) qsort(a,lo,p-1);
    if (p < hi) qsort(a,p,hi);
}
}
qsort(A,0,A.length-1)
console.log(A)


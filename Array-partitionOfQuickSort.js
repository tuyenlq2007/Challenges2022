//Partition in QuickSelect, QuickSort
//Parton in QuickSelect, QuickSort
a=[1,2,6,4,7,8,3,4];
function parttion(a,l,h){
let r=h-1;
let pivot=a[h];
let index=0;
while (l<=r){
  console.log(l);
  if (a[l]>pivot) {
    temp=a[r];
    a[r]=a[l];
    a[l]=temp;
    r--;
  }else l++
  console.log(a);
}
index=l;
temp=a[index];
a[index]=pivot;
a[h]=temp;
return index;
}

let index= parttion(a,0,7);
console.log("final results")
console.log (a);
console.log (index)

**partition in quick sort: start at low at swap large to low postion**

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
let A=[5,4,2,1,3];
console.log(A[partition(A, 0, 4)]);
console.log(A);
//round1 j=0, i=-1, A=[5,4,2,1,3];
//round2 j=1, i=-1, A=[5,4,2,1,3];
//round3 j=2, i=0,  A=[2,4,5,1,3];
//round3 j=3, i=1,  A=[2,1,5,4,3];
//end    i=2, A=[2,1,3,4,5];


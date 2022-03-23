//Parton in QuickSelect, QuickSort
a=[1,2,6,4,7,8,3,4];

function parttion(a,l,h){
let r=h-1;
let pivot=a[h];
let index=0;
while (l<=r){
  if (a[l]>pivot) {
    temp=a[r];
    a[r]=a[l];
    a[l]=temp;
    r--;
  }else l++
}
index=l;
temp=a[index];
a[index]=pivot;
a[h]=temp;
return index;
}



//QuickSelect k smallest
function qselect(a,k,lo,hi){
  i=parttion(a,lo,hi);
  if (i==k) return a[k];
  if (i<k) return qselect(a,k,i,hi);
  if (i>k) return qselect(a,k,lo,i-1);
}

console.log(qselect(a,5,0,7));
console.log(a);

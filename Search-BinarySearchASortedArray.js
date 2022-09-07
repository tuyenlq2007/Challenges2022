var arr=[8,9,1,3,5,7]

const selection_sort=(arr)=>{
  for (i=0; i<arr.length;i++){
    pos=arr[i]
    for(j=i;j<arr.length;j++){
      if (arr[j] < pos){
        arr[i]=arr[j]
        arr[j]=pos
        pos=arr[i]
      }
    }
  }
  return arr
}

function binarysearch(a, e){
  let mid = Math.floor(a.length/2);
  if (a[mid]==e) return true;
  if (a[mid] > e) return binarysearch(a.slice(0,mid),e);
  if (a[mid] < e) return binarysearch(a.slice(mid+1,a.length),e);
  return false;
}

console.log(selection_sort(arr))
console.log(arr)
console.log(binarysearch(arr, 9))



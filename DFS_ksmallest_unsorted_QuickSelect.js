var arr = [1,4,5,6,3, 2]
function partion(left, right){
  pivot=right
  let arrroot=[]
  let arrleft=[]
  let arrright=[]
  let i = 0
  for (i=0; i<left; i++)arrroot.push(arr[i])
  for (i=left; i<=right; i++){
    if (arr[i]<=arr[pivot]) {
      arrleft.push(arr[i])
    }else if (arr[i]>arr[pivot]) arrright.push(arr[i])
  }
  arr=arrroot.concat(arrleft)
  index = arr.length - 1
  arr=arr.concat(arrright)
  return index
}

function _partion(low, high) 
{ 
    let pivot = arr[high], pivotloc = low; 
        for (let i = low; i <= high; i++) 
        { 
          
            // inserting elements of less value 
            // to the left of the pivot location 
            if (arr[i] < pivot) 
            { 
                let temp = arr[i]; 
                arr[i] = arr[pivotloc]; 
                arr[pivotloc] = temp; 
                pivotloc++; 
            } 
        } 
   
        // swapping pivot to the final pivot location 
        let temp = arr[high]; 
        arr[high] = arr[pivotloc]; 
        arr[pivotloc] = temp; 
   
        return pivotloc; 
} 
function ksmallest_unsorted_array(low, high, k){
    // find the partition 
        let partition = partion(low, high); 
   
        // if partition value is equal to the kth position, 
        // return value at k. 
        if (partition == k - 1) 
            return arr[partition]; 
   
        // if partition value is less than kth position, 
        // search right side of the array. 
        else if (partition < k - 1) 
            return ksmallest_unsorted_array(partition + 1, high, k); 
   
        // if partition value is more than kth position, 
        // search left side of the array. 
        else
            return ksmallest_unsorted_array(low, partition - 1, k); 
}
//console.log(_partion(4, arr.length-1))
//console.log(partion(4, arr.length-1))
//arr.forEach(e=>console.log(e))
console.log(ksmallest_unsorted_array(0, arr.length-1, 2))

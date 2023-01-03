var arr1=[1,3,5,7, 8, 9]
var arr2=[1,2,3,4]

function merge(arr1, arr2){
count1 = 0
count2 = 0
count_merge = 0

var arr3=[]
while (count1<arr1.length && count2<arr2.length){
  if(arr1[count1]>=arr2[count2]){
    temp = arr2[count2]
   count2++
  }else {
    temp = arr1[count1]
    count1++
  }
 arr3[count_merge] = temp 
 count_merge++  
}

while (count1 < arr1.length) arr3[count_merge++]=arr1[count1++]
while (count2 < arr2.length) arr3[count_merge++]=arr2[count2++]
return arr3
}

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([3,2,6,5,8,4]))

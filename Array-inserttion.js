/**insertion sort**/
//option 1
A = [3, -1, 2, -4, -5, -6];
let i = 1;
while (i < A.length) {
    let key = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > key) {
        A[j + 1] = A[j];
        j--;
    }
    A[j + 1] = key;
    i++;
}
console.log(A)

/*option 2 */
const insertion_sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;
        let position = nums[i];
        while (j >= 0 && nums[j] > position) {
            //move larger number to right
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = position;
    }
    return nums;
}

console.log(insertion_sort([3, 4, 2, 17]));

/**Sort an array of strings alphabetically**/
const insertion_sorted = (strs) => {
    for (let i = 1; i < strs.length; i++) {
        let j = i - 1;
        let pos = strs[i];
        while (j >= 0 && strs[j].localeCompare(pos) > 0) {
            //move larger number to right
            strs[j + 1] = strs[j];
            j--;
        }
        strs[j + 1] = pos;
    }
    return strs;
}
console.log(insertion_sorted(['z', 'a', 'b', 'c']));



//option 1

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/* Function to sort an array using insertion sort*/
function insertionSort(B, size)
{
   var A=B;
   var i, key, j;
   for (i = 1; i < size; i++)
   {
       key = A[i];
       j = i-1;
 
       /* Move elements of A[0..i-1], that are
          greater than key, to one
          position ahead of their current position.
          This loop will run at most k times */
       while (j >= 0 && A[j]>key)
       {
           //step A move to right
           A[j+1]=A[j];
           j--;
       }
       //set value for j at step A
       A[j+1] = key;
   }
   return A;
}
 
A = [6, 5, 3, 2, 8, 10, 9]
k = 3
console.log(insertionSort(A,k))

 

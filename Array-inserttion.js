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

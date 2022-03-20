//Merge two Sorted Arrays Without Extra Space
Approach:

Use a for loop in arr1.
Whenever we get any element in arr1 which is greater than the first element of arr2,swap it.
Rearrange arr2.
Repeat the process.

a=[1,2,3,6,7];
b=[4,5,8]
//insertionsort 
const is = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let position = nums[i]
    while (j >= 0 && nums[j] > position) {
      //move larger number to right
      nums[j+1]=nums[j]
      j--
    }
    nums[j+1] = position
  }
  return nums
} 
//compare with 1st element of b
//swap b[0] with a[i]
//sort b
let i=0;
while (i< a.length){
  if (a[i]>b[0]){
    temp=a[i];
    a[i]=b[0];
    b[0]=temp;
    b=is(b);
  }
  i++;
}
console.log(a);
console.log(b);

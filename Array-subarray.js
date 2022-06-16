/*find all combination of array*/
const getAllSubsets = 
      theArray => theArray.reduce(
        (subsets, value) => subsets.concat(
         subsets.map(set => [value,...set])
        ),
        [[]]
      );
console.log("find all combination of array option 1");
console.log("getAllSubsets([1,2,3])");
console.log(getAllSubsets([1,2,3]));
getAllSubsets([1,2,3]).forEach(a=>console.log(a));



/*find all subsets option 2*/
function powerSet(arr) {
  
    // the final power set
    var powers = [];
    
    // the total number of sets that the power set will contain
    var total = Math.pow(2, arr.length);
    
    // loop through each value from 0 to 2^n
    for (var i = 0; i < total; i++) {
      
      // our set that we add to the power set
      var tempSet = [];
      
      // convert the integer to binary
      var num = i.toString(2);
      
      // pad the binary number so 1 becomes 001 for example
      while (num.length < arr.length) { num = '0' + num; }
      
      // build the set that matches the 1's in the binary number
      for (var b = 0; b < num.length; b++) {
        if (num[b] === '1') { tempSet.push(arr[b]); }    
      }
      
      // add this set to the final power set
      powers.push(tempSet);
      
    }
    
    return powers;
    
  }

console.log("find all combination of array option 2");
console.log("powerSet([1,2,3])");
console.log(powerSet([1,2,3]));
powerSet([1,2,3]).forEach(a=>console.log(a));


/*Finding all possible combinations from an array with sum equals a target value*/
const combineElements = (arr, sum) => {
   const output = [];
   const findCombination = (remain, path, start) => {
      if (remain < 0) {
         return;
      }
      if (remain === 0) {
         output.push([...path]);
         return;
      }
      for (let i = start; i < arr.length; i++) {
         findCombination(remain - arr[i], [...path, arr[i]], i);
      }
   }
   findCombination(sum, [], 0);
   return output;
};
const arra = [2, 3, 6, 7], sum = 7;
console.log("Finding all possible combinations from an array with sum equals a target value");
console.log(combineElements(arra, sum));
combineElements(arra, sum).forEach(e=>console.log(e));

/*find index of subarray*/
a = [5,1,1, 2, 3,4];
c=[5,6];
function find_index_of_sub_array_option1(a, c){
    var found;
    for (let d of c){
        b=a.find(a=>a==d);
        found = b==null?"not found":b;
    }
    return found;
}
console.log("find_index_of_sub_array_option1");
console.log(find_index_of_sub_array_option1(a,c));

//find index of sub array
arr = [4,3,2,1,2,1,1,2,3,4];
subarr=[1,2,1,1];
let i=0;
let j=0;
while(i< arr.length-1){
let found=true;
for (j = 0; j < subarr.length; j++) {
    if (arr[i+j] != subarr[j]) break;
}

if (j==subarr.length) console.log (i);
i++;
}

/*find index of sub array*/
arr = [4,2,1,2,1,1,2,4,3,4];
sub_arr=[4,3]
function find_index_of_sub_array(arr, sub_arr){
    let i=0;
    let is_same;
    while (i<arr.length-sub_arr.length){
        let search=arr.slice(i,i+sub_arr.length);
        is_same = (sub_arr.length == search.length) && sub_arr.every(function(element, index) {
            return element === search[index]; 
        });
        if (is_same) return i;
        i++;
    }
    return 0;
}
console.log("find_index_of_sub_array");
console.log(find_index_of_sub_array(arr,sub_arr));



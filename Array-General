const a=[0,1,2,3,4,5,6,7,8,9,10]
console.log(a.filter(e=>e%2==0));
console.log(a.sort((a,b)=>b-a));

//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)
a=[1,2,1,3,4,4,5]
b=a
for (let j=0; j<a.length; j++){
  if (b.length>0){
   c=b.shift();
   console.log(c);
   b=b.filter(e=>e!=c);
  }
}

option2:
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
console.log([...new Set(nums)])



//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

Sample array:
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output:
[4, 5, 8, 10, 12, 13]

function Arrays_sum(array1, array2) 
{
  a2=array2
  a1=array1
  if (array2.length<array1.length){
    a2=array1
    a1=array2
  }
  return a2.map((num, index) => {
    if (index<a1.length)
    {return num+array1[index];}
    else return num;
});
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));


**Get nth element of array**
**Get last n elements of an array**

**Array Method .reduce()**
The .reduce() method iterates through an array and returns a single value.

It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.


**Array Method .forEach()**
The .forEach() method executes a callback function on each of the elements in an array in order.

`
const copyItems = [];
[1,2,3].forEach(element=>copyItems.push(element/2));
console.log(copyItems);
`


**Array Method .filter()**
The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.
`
console.log([1,2,3].filter(element => element > 2));
console.log([1,2,3].filter(function(element){return element > 2 }));
`

**Array Method .map()**
The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

The original array does not get altered, and the returned array may contain different elements than the original array.

`
const copyItems = [];
[1,2,3].map(element => copyItems.push(element))
console.log(copyItems);

`

**Array to string**
var me=''; 
['1','2','3'].forEach(element=>me=me+element); 
console.log(me);





**Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.**
const number = 1025468;
const arrayOfNumber = number.toString().split('');
var stringOfa='';
arrayOfNumber.forEach(num=>num%2===0 ? stringOfa=stringOfa+'-'+num : stringOfa )

// Log to console
console.log(stringOfa.slice(1))




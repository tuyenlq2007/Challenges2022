/*Array*/
const arr=[0,1,2,3,4,5,6,7,8,9,10];

/*Array to string*/
console.log("Array to String");
var string_from_array = arr.join('');
console.log(string_from_array);//012345678910

/*String to array*/
console.log("String to Array");
var array_from_string=string_from_array.split('');
console.log(array_from_string);//['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

/*String to Array of Number*/
console.log("String to Array Number");
var array_number_from_string=array_from_string.map(i=>Number(i));
console.log(array_number_from_string);//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]

/*Array Method .forEach()
The .forEach() method executes a callback function on each of the elements in an array in order.
*/

var copyItems = [];
var returnItems = [1,2,3].forEach(element=>copyItems.push(element/2));
console.log('foreach()');
console.log(copyItems);//[0.5, 1, 1.5]
console.log(returnItems);//undefined

/* for */
var array = [ 1, 2, 3, 4, 5, 6 ];
console.log('for()');
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}

/**for of */
const iterable = [10, 20, 30];
console.log('for of');
for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30


/**Array to Map */
const array3 = [
  {key: 'name', value: 'Tom'},
  {key: 'country', value: 'Chile'},
];

const map2 = new Map(
  array3.map(object => {
    return [object.key, object.value];
  }),
);

console.log("Array to Map");
console.log(map2);


/**Map to Array */
const map4 = new Map();
map4.set('name', 'John');
map4.set('age', 30);

console.log("Map to Array of values");
const values = Array.from(map4.values());
console.log(values); // 👉️ ['John', 30]
console.log(values.length); // 👉️ 2

console.log("Map to Array of keys");
const keys = Array.from(map4.keys()); // 👉️ ['name', 'age']
console.log(keys);
console.log(keys.length); 


/**Array to Set */
console.log("Array to Set");
var array5 = [55, 44, 65];
var set5 = new Set(array5);
console.log(set5.size === array5.length);
console.log(set5.has(65));

/**Set to Array */
console.log("Set to Array");
var mySet5=new Set();
mySet5.add(1);
mySet5.add(2);
var myArr5 = [...mySet5];
console.log(myArr5);


/*Array Method .filter()
The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.
*/
var new_array=[1,2,3].filter(element => element > 2);
console.log("filter"); 
console.log(new_array);//[3]
new_array=[1,2,3].filter(function(element){return element > 2 });
console.log("filter"); 
console.log(new_array);//[3]

/*filer*/
var an_array=arr.filter(e=>e%2==0);
console.log("filter"); 
console.log(an_array);//(6) [0, 2, 4, 6, 8, 10]
/*sort*/
an_array = arr.sort((a,b)=>b-a);
console.log("sort"); 
console.log(an_array); //(11) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


/*Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)*/
a=[1,2,1,3,4,4,5]
function remove_dupx(input_array){
  let new_arr=[];
  b=a
  for (let j=0; j<a.length; j++){
    if (b.length>0){
    c=b.shift();
    new_arr.push(c);
    b=b.filter(e=>e!=c);
    }
  }
  return new_arr;
}
console.log("remove duplicate items option1"); 
console.log(remove_dupx(a)) //1 2 3 4 5

//option2:
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
var set = [...new Set(nums)]
console.log("remove duplicate items option2"); 
console.log(set); //[1, 2, 3, 4, 5, 6]


/*every() method checks if all elements in an array pass a test (provided as a function). */
index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
 
const under_five = x => x < 5;
 
if (array.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}

console.log('every()');
//At least one element is not less than 5.


/*Get nth element of array**
**Get last n elements of an array*/

/*Array Method .reduce()**
The .reduce() method iterates through an array and returns a single value.
It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.
*/
array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log('reduce()');
console.log(sumWithInitial); // expected output: 10


/*Array Method .map()
The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
The original array does not get altered, and the returned array may contain different elements than the original array.
*/

copyItems = [];
var return_array = [1,2,3].map(element => copyItems.push(element))
console.log("map()");
console.log(copyItems);//[1, 2, 3]
console.log(return_array);//[1, 2, 3]

/*Array to string*/
var me=''; 
['1','2','3'].forEach(element=>me=me+element); 
console.log("array to string");
console.log(me);//123

//**Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.**
const number = 1025468;

function insert_dashes(number){
  var arrayOfNumber = number.toString().split('');
  var stringOfa='';
  arrayOfNumber.forEach(num=>num%2===0 ? stringOfa=stringOfa+'-'+num : stringOfa );
  return stringOfa;
}
// Log to console
console.log("insert_dashes");
console.log(insert_dashes(number));
console.log(insert_dashes(number).slice(1));//0-2-4-6-8


/*There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.*/
//Sample array:
var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
//Expected Output:
console.log("sum 2 individual values in 2 array"); 
//[4, 5, 8, 10, 12, 13]

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

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13])); //[4, 5, 8, 10, 12, 13]
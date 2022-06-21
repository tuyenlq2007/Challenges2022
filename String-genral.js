
/*1. Iterating over a String*/
console.log("1. Iterating over a String")
const iterable = 'boo';
for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"


/*2. String to array*/
console.log("2. String to array")
console.log("String to Array");
var string = "012345678910"
var array_from_string = string.split('');
console.log(array_from_string);//['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

/*3. String to Array of Number*/
console.log("3. String to Array of Number");
string = "012345678910"
array_from_string = string.split('');
var array_number_from_string = array_from_string.map(i => Number(i));
console.log(array_number_from_string);//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]

/*5. Character access*/
var c = 'cat'.charAt(1);
console.log("5. access character at index")
console.log(c);
//c

/*6. String to Set*/
var myString = "abc def"
// converting between Set and Array
const mySet2 = new Set(myString)
mySet2.size                    // 7
console.log("6. String to Set");
console.log(mySet2) //Set(7) {size: 7, a, b, c,  , d, …}
console.log("6. Set to Array");
var myArray=[...mySet2];
console.log(myArray)       // (7) ['a', 'b', 'c', ' ', 'd', 'e', 'f']


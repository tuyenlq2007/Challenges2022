
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

/*4. Accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'*/
/*option1*/
console.log("4.1 accept a string as input and swap the case of each character. For example if you input (The Quick Brown Fox) the output should be (tHE qUICK bROWN fOX)");
console.log('The Quick Brown Fox'.split("").map(e => e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join(""))

/*option2*/
console.log("4.2 accept a string as input and swap the case of each character. For example if you input (The Quick Brown Fox) the output should be (tHE qUICK bROWN fOX)");
var s = "abc Def";
var a = s.split('');
var results = a.map(c =>
  c == c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
)
console.log(results.join(''))


/*5. Character access*/
var c = 'cat'.charAt(1);
console.log("5. access character at index")
console.log(c);
//c

/*6. compare string*/
function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual

console.log("6. compare string");
console.log(isEqual(" ", " "));
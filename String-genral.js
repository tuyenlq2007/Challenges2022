
/*Iterating over a String*/
const iterable = 'boo';
for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"


/*String to array*/
console.log("String to Array");
var string="012345678910"
var array_from_string=string.split('');
console.log(array_from_string);//['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

/*String to Array of Number*/
console.log("String to Array of Number");
string="012345678910"
array_from_string=string.split('');
var array_number_from_string=array_from_string.map(i=>Number(i));
console.log(array_number_from_string);//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]

/*Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'*/
/*option1*/
console.log('The Quick Brown Fox'.split("").map(e=> e==e.toLowerCase()?e.toUpperCase():e.toLowerCase()).join(""))

/*option2*/
s="abc Def";
a=s.split('');
results=a.map(c=>
c==c.toUpperCase()?c.toLowerCase():c.toUpperCase()
)
console.log(results.join(''))

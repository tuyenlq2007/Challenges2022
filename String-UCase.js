
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

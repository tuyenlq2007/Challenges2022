//option1
a = "abcd".split("")
function generateSub(a) {
     let sub = a[0];
     console.log(sub)
     for (let i = 1; i < a.length; i++) {
          sub = sub.concat(a[i]);
          console.log(sub);
     }
     if (a.length > 1) generateSub(a.slice(1, a.length));
}
//generateSub(a)

/*Print all sub-strings of a string*/
substrings = [];
a = "abcd".split("")
function generateSubString(a) {
     for (let i = 0; i < a.length; i++) {
          for (let j = i + 1; j < a.length + 1; j++) {
               substrings.push(a.slice(i, j));
          }
     }
}
generateSubString(a);
substrings.forEach(e => console.log(e));
/*
(1) ['a']
(2) ['a', 'b']
(3) ['a', 'b', 'c']
(4) ['a', 'b', 'c', 'd']
(1) ['b']
(2) ['b', 'c']
(3) ['b', 'c', 'd']
(1) ['c']
(2) ['c', 'd']
(1) ['d']
*/

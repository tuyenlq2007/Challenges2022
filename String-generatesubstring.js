/*1.1 Print all sub-strings of a string*/
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

/*1.2 Print all sub-strings of a string*/
console.log("1.2 Print all sub-strings of a string");
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


/*2. Get all possible subset with a fixed length combinations in an array*/
var combine = function(a, min) {
     var fn = function(n, src, got, all) {
         if (n == 0) {
             if (got.length > 0) {
                 all[all.length] = got;
             }
             return;
         }
         for (var j = 0; j < src.length; j++) {
             fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
         }
         return;
     }
     var all = [];
     for (var i = min; i < a.length; i++) {
         fn(i, a, [], all);
     }
     all.push(a);
     return all;
 }

console.log("2. Get all possible subset with a fixed length combinations in an array")
combine([1, 2, 3], 2).forEach(e=>console.log(e));
/*
(2) [1, 2]
(2) [1, 3]
(2) [2, 3]
(3) [1, 2, 3]
*/
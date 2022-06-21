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
function generateSubString(input_string) {
    var arr = input_string.split("");
    var substrings = [];
     for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length + 1; j++) {
               substrings.push(arr.slice(i, j));
          }
     }
     return substrings;
}
var substrings = generateSubString("abc");
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



/*3. Get all combinations of a string*/
console.log("3. Get all combinations of a string")
function getcombinationsofastring(the_input_str){
    function getpermute(str, n){
        var permu = [];
        function permute(str, l, r) {
            if (l == r) {
                permu.push(str);
                return;
            }

            for (let i = l; i < r; i++) {
                let newstr = swap(str, l, i);
                permute(newstr, l + 1, r);
            }
        }
        permute(str, 0, n);
        return permu;
    }

    function swap(a, i, j) {
        let temp;
        let charArray = a.split("");
        temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return (charArray).join("");
    }

    function generateSubString(input_string) {
        var arr = input_string.split("");
        var substrings = [];
         for (let i = 0; i < arr.length; i++) {
              for (let j = i + 1; j < arr.length + 1; j++) {
                   substrings.push(arr.slice(i, j).join(''));
              }
         }
         return substrings;
    }

    var subsets=new Set();
    var per = [];
    let n = the_input_str.length;
    per=getpermute(the_input_str, n);
    per.forEach(e => {
        var substrings = generateSubString(e);
        substrings.forEach(f => subsets.add(f));
    });
    return subsets;
}

combin = getcombinationsofastring("abc");
combin.forEach(e=>console.log(e));

/*
a
ab
abc
b
bc
c
ac
acb
cb
ba
bac
bca
ca
cba
cab
*/
/** */
const iterable = [10, 20, 30];
for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30


var array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}


index = 0;
array = [ 1, 2, 3, 4, 5, 6 ];
array.forEach(myFunction);
function myFunction(item, index)
{
    console.log(item);
}



/*Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
Finally, join the array items together in a single string called myString, with a separator of "-".*/

a=["1","2","3","4","5"]
a.pop()
a.shift()

b=a.map((e,i)=>e.concat("("+i+")"))
console.log(b.join("-"))


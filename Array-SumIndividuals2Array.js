/*20. There are two arrays with individual values, to compute the sum of each individual index value from the given arrays.*/
//Sample array:
var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
//Expected Output:
console.log("20. sum 2 individual values in 2 array"); 
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
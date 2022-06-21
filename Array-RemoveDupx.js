
/*14. Remove duplicate items from an array (ignore case sensitivity)*/
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
console.log("14.1 remove duplicate items option1"); 
console.log(remove_dupx(a)) //1 2 3 4 5

//option2:
const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
var set = [...new Set(nums)]
console.log("14.2 remove duplicate items option2"); 
console.log(set); //[1, 2, 3, 4, 5, 6]


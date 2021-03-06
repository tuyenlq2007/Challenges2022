/*1. Closure */
sayHello = () => {
  var say = () => { console.log(hello); }
  // Local variable that ends up within the closure 
  var hello = 'Hello, world!';
  return say;
}

sayHello()(); // ‘Hello, world!’



/*2. Closure - Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product */
// Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product.
//
// Examples:
//
//     specialMultiply(3,4); // 12
//     specialMultiply(3)(4); // 12
//     specialMultiply(3); // function(){}...

console.log("2. Closure - Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product");

function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a * b;
    };
  }
  return a * b;
}

console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // function(){}...